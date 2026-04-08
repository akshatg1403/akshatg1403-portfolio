import { useState, useEffect, useRef, useCallback } from 'react';
import { terminalConfig, siteConfig } from '../data/config';
import './Terminal.css';

const PROMPT = `${siteConfig.name.split(' ')[0].toLowerCase()}@portfolio:~$`;

function TerminalLine({ line }) {
  if (line.type === 'input') {
    return (
      <div className="term-line term-line--input">
        <span className="term-prompt">{PROMPT} </span>
        <span className="term-input-text">{line.content}</span>
      </div>
    );
  }
  if (line.type === 'error') {
    return <div className="term-line term-line--error">{line.content}</div>;
  }
  if (line.type === 'link') {
    return (
      <div className="term-line">
        <a href={line.href} target="_blank" rel="noreferrer" className="term-link">
          {line.content}
        </a>
      </div>
    );
  }
  return (
    <div className={`term-line ${line.content === '' ? 'term-line--empty' : ''}`}>
      {line.content}
    </div>
  );
}

function TypewriterLines({ lines, onDone }) {
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (shown < lines.length) {
      const t = setTimeout(() => setShown(s => s + 1), 40);
      return () => clearTimeout(t);
    } else {
      onDone && onDone();
    }
  }, [shown, lines.length, onDone]);

  return (
    <>
      {lines.slice(0, shown).map((line, i) => (
        <TerminalLine key={i} line={line} />
      ))}
    </>
  );
}

function processCommand(raw) {
  const cmd = raw.trim().toLowerCase();
  const { commands } = terminalConfig;

  if (cmd === '') return [];

  if (cmd === 'clear') return [{ type: 'clear' }];

  if (cmd === 'download resume' || cmd === 'resume') {
    // Trigger download
    const a = document.createElement('a');
    a.href = '/resume.pdf';
    a.download = `${siteConfig.name.replace(' ', '_')}_Resume.pdf`;
    a.click();
    return [
      { type: 'output', content: '📄 Downloading resume...' },
      { type: 'output', content: `Saved as: ${siteConfig.name.replace(' ', '_')}_Resume.pdf` },
      { type: 'output', content: '' },
    ];
  }

  const commandDef = commands[cmd];
  if (commandDef) {
    return commandDef.output.map(line => ({
      type: 'output',
      content: line,
    }));
  }

  // Fuzzy: partial match
  const keys = Object.keys(commands);
  const partial = keys.find(k => k.startsWith(cmd));
  if (partial) {
    return [
      { type: 'error', content: `Command not found: "${cmd}". Did you mean "${partial}"?` },
      { type: 'output', content: 'Type "help" for available commands.' },
      { type: 'output', content: '' },
    ];
  }

  return [
    { type: 'error', content: `Command not found: "${cmd}"` },
    { type: 'output', content: 'Type "help" for available commands.' },
    { type: 'output', content: '' },
  ];
}

// Build initial welcome lines
function buildWelcomeLines() {
  return terminalConfig.welcomeMessage.map(line => ({ type: 'output', content: line }));
}

export default function Terminal() {
  const [history, setHistory] = useState(buildWelcomeLines());
  const [inputValue, setInputValue] = useState('');
  const [cmdHistory, setCmdHistory] = useState([]);
  const [cmdHistoryIndex, setCmdHistoryIndex] = useState(-1);
  const [pendingLines, setPendingLines] = useState(null);
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);
  const containerRef = useRef(null);

  // Auto-scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history, pendingLines]);

  const focusInput = () => inputRef.current?.focus({ preventScroll: true });

  const handleTypingDone = useCallback(() => {
    if (pendingLines) {
      if (pendingLines[0]?.type === 'clear') {
        setHistory(buildWelcomeLines());
      } else {
        setHistory(h => [...h, ...pendingLines]);
      }
      setPendingLines(null);
      setIsTyping(false);
    }
  }, [pendingLines]);

  const submitCommand = useCallback((cmd) => {
    const inputLine = { type: 'input', content: cmd };
    const result = processCommand(cmd);

    if (result[0]?.type === 'clear') {
      setHistory(buildWelcomeLines());
      setIsTyping(false);
      setPendingLines(null);
    } else {
      setHistory(h => [...h, inputLine]);
      setPendingLines(result);
      setIsTyping(true);
    }

    if (cmd.trim()) {
      setCmdHistory(h => [cmd, ...h.slice(0, 49)]);
    }
    setCmdHistoryIndex(-1);
    setInputValue('');
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (!isTyping) submitCommand(inputValue);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const newIdx = Math.min(cmdHistoryIndex + 1, cmdHistory.length - 1);
      setCmdHistoryIndex(newIdx);
      setInputValue(cmdHistory[newIdx] || '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const newIdx = Math.max(cmdHistoryIndex - 1, -1);
      setCmdHistoryIndex(newIdx);
      setInputValue(newIdx === -1 ? '' : cmdHistory[newIdx]);
    } else if (e.key === 'Tab') {
      e.preventDefault();
      // Tab autocomplete
      const cmds = Object.keys(terminalConfig.commands);
      const match = cmds.find(c => c.startsWith(inputValue.toLowerCase()));
      if (match) setInputValue(match);
    }
  };

  const handleQuickCmd = (cmd) => {
    if (!isTyping) submitCommand(cmd);
  };

  return (
    <section id="terminal" className="section terminal-section">
      <div className="container">
        <div className="section-header fade-in">
          <span className="section-label">{"// interactive"}</span>
          <h2 className="section-title">
            Try the <span className="highlight">Terminal</span>
          </h2>
          <p className="section-subtitle">
            An interactive terminal — explore my portfolio by typing commands.
          </p>
          <div className="gradient-line" />
        </div>

        <div className="terminal-wrapper fade-in">
          {/* Window chrome */}
          <div className="terminal__chrome">
            <div className="terminal__dots">
              <span className="terminal__dot terminal__dot--red" />
              <span className="terminal__dot terminal__dot--yellow" />
              <span className="terminal__dot terminal__dot--green" />
            </div>
            <span className="terminal__title">akshat@portfolio — bash</span>
            <div style={{ width: 60 }} />
          </div>

          {/* Terminal body */}
          <div
            className="terminal__body"
            ref={containerRef}
            onClick={focusInput}
            role="region"
            aria-label="Interactive terminal"
          >
            {/* Rendered history */}
            {history.map((line, i) => (
              <TerminalLine key={i} line={line} />
            ))}

            {/* Typewriter for pending output */}
            {isTyping && pendingLines && (
              <TypewriterLines
                lines={pendingLines}
                onDone={handleTypingDone}
              />
            )}

            {/* Input line */}
            {!isTyping && (
              <div className="term-line term-line--input term-line--active">
                <span className="term-prompt">{PROMPT} </span>
                <span className="term-ghost-input">{inputValue}</span>
                <span className="term-caret" aria-hidden="true" />
                <input
                  ref={inputRef}
                  className="term-real-input"
                  value={inputValue}
                  onChange={e => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  autoFocus={false}
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck={false}
                  aria-label="Terminal input"
                />
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Quick command buttons */}
          <div className="terminal__quick-cmds">
            <span className="terminal__quick-label">Quick commands:</span>
            {['help', 'about', 'projects', 'skills', 'contact', 'download resume'].map(cmd => (
              <button
                key={cmd}
                className="terminal__quick-btn"
                onClick={() => handleQuickCmd(cmd)}
                disabled={isTyping}
              >
                {cmd}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
