import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import './CustomCursor.css';

const INTERACTIVE = 'a, button, [role="button"], [role="tab"], label, select, summary, [data-cursor]';
const TEXT_INPUT = 'input, textarea, [contenteditable="true"]';

function canUseCustomCursor() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

export default function CustomCursor() {
  const [enabled] = useState(canUseCustomCursor);
  const [visible, setVisible] = useState(false);
  const [variant, setVariant] = useState('default'); // default | hover | text | label
  const [label, setLabel] = useState('');
  const [pressed, setPressed] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 350, damping: 30, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 350, damping: 30, mass: 0.5 });

  useEffect(() => {
    if (!enabled) return undefined;
    document.documentElement.classList.add('has-custom-cursor');

    function onMove(e) {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);

      const target = e.target instanceof Element ? e.target : null;
      if (!target) return;

      if (target.closest(TEXT_INPUT)) {
        setVariant('text');
        return;
      }
      const labelled = target.closest('[data-cursor]');
      const interactive = target.closest(INTERACTIVE);
      // A nested link/button wins over a labelled container
      if (labelled && interactive === labelled) {
        setVariant('label');
        setLabel(labelled.getAttribute('data-cursor'));
      } else if (interactive) {
        setVariant('hover');
      } else {
        setVariant('default');
      }
    }

    const onLeave = () => setVisible(false);
    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    document.addEventListener('mouseleave', onLeave);

    return () => {
      document.documentElement.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      document.removeEventListener('mouseleave', onLeave);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  const hidden = !visible || variant === 'text';

  return (
    <>
      <motion.div
        className={`cursor-ring cursor-ring--${variant} ${pressed ? 'cursor-ring--pressed' : ''}`}
        style={{ x: ringX, y: ringY, opacity: hidden ? 0 : 1 }}
        aria-hidden="true"
      >
        {variant === 'label' && <span className="cursor-ring__label">{label}</span>}
      </motion.div>
      <motion.div
        className={`cursor-dot cursor-dot--${variant}`}
        style={{ x, y, opacity: hidden ? 0 : 1 }}
        aria-hidden="true"
      />
    </>
  );
}
