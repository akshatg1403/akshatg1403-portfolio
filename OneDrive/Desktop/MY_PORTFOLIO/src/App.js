import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Aviation from './components/Aviation';
import Terminal from './components/Terminal';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

// Intersection Observer for scroll animations
function useScrollAnimations() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    // Observe all animation targets
    const targets = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');
    targets.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

export default function App() {
  useScrollAnimations();

  // Force scroll to top on initial load — disable browser scroll restoration
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Achievements />
        <Aviation />
        <Terminal />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
