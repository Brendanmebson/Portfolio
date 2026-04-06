import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, X, Menu } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 200,
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.09)' : '1px solid transparent',
          background: scrolled ? 'rgba(10,10,10,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          transition: 'all 0.35s ease',
        }}
      >
        <div style={{
          maxWidth: 'var(--max-w)',
          margin: '0 auto',
          padding: '0 var(--pad)',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{ background: 'none', border: 'none', cursor: 'crosshair', padding: 0 }}
          >
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              letterSpacing: '0.05em',
              color: 'var(--text)',
            }}>
              MKB<span style={{ color: 'var(--accent)' }}>_</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '0' }} className="desktop-nav">
            {navLinks.map((link, i) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                style={{
                  background: 'none',
                  border: 'none',
                  borderLeft: i === 0 ? '1px solid var(--line)' : 'none',
                  borderRight: '1px solid var(--line)',
                  color: 'var(--text-2)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  padding: '0.5rem 1.25rem',
                  cursor: 'crosshair',
                  transition: 'color 0.2s',
                  height: '36px',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-2)'; }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Social Icons */}
          <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }} className="desktop-social">
            {[
              { href: 'https://github.com/Brendanmebson', icon: <Github size={14} /> },
              { href: 'https://www.linkedin.com/in/kamsiyochukwu-mebuge-30a484258', icon: <Linkedin size={14} /> },
              { href: 'mailto:brendanmebson@gmail.com', icon: <Mail size={14} /> },
            ].map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="icon-link">
                {s.icon}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="mobile-menu-btn"
            style={{
              display: 'none',
              background: 'none',
              border: '1px solid var(--line)',
              padding: '0.45rem',
              color: 'var(--text)',
              cursor: 'crosshair',
              borderRadius: '1px',
            }}
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 199,
              background: '#0a0a0a',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '2rem',
            }}
          >
            <div style={{ borderTop: '1px solid var(--line)', marginBottom: '2.5rem' }} />
            {navLinks.map((link, i) => (
              <motion.button
                key={link.label}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => scrollTo(link.href)}
                style={{
                  background: 'none',
                  border: 'none',
                  borderBottom: '1px solid var(--line)',
                  color: 'var(--text)',
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.5rem, 12vw, 4.5rem)',
                  fontWeight: 700,
                  fontStyle: 'italic',
                  textAlign: 'left',
                  padding: '1rem 0',
                  cursor: 'crosshair',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--text)'; }}
              >
                {link.label}
              </motion.button>
            ))}
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '2rem' }}>
              {[
                { href: 'https://github.com/Brendanmebson', icon: <Github size={14} /> },
                { href: 'https://www.linkedin.com/in/kamsiyochukwu-mebuge-30a484258', icon: <Linkedin size={14} /> },
                { href: 'mailto:brendanmebson@gmail.com', icon: <Mail size={14} /> },
              ].map((s, i) => (
                <a key={i} href={s.href} className="icon-link">{s.icon}</a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav, .desktop-social { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
};

export default Header;
