import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Mail, Instagram } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '3.5rem 0 2rem',
      position: 'relative',
      zIndex: 1,
    }}>
      {/* Subtle gradient accent at top */}
      <div style={{
        position: 'absolute',
        top: 0, left: '50%',
        transform: 'translateX(-50%)',
        width: '300px',
        height: '1px',
        background: 'var(--gradient)',
        opacity: 0.4,
      }} />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
            gap: '3rem',
            marginBottom: '3rem',
          }} className="footer-grid">

            {/* Brand */}
            <div>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.4rem',
                fontWeight: 700,
                background: 'var(--gradient-text)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '0.75rem',
                letterSpacing: '-0.01em',
              }}>
                .CodeWithBrendan
              </div>
              <p style={{
                fontSize: '0.85rem',
                color: 'var(--text-muted)',
                lineHeight: 1.7,
                maxWidth: '240px',
              }}>
                Building intelligent systems across web & mobile. 
                Transforming ideas into elegant, performant products.
              </p>
              <div style={{ display: 'flex', gap: '0.6rem', marginTop: '1.25rem' }}>
                {[
                  { href: 'https://github.com/Brendanmebson', icon: <Github size={16} /> },
                  { href: 'https://www.linkedin.com/in/kamsiyochukwu-mebuge-30a484258', icon: <Linkedin size={16} /> },
                  { href: 'mailto:brendanmebson@gmail.com', icon: <Mail size={16} /> },
                  { href: 'https://www.instagram.com/brendanmebson/', icon: <Instagram size={16} /> },
                ].map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="icon-bubble" style={{ width: '34px', height: '34px' }}>
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick links */}
            {[
              {
                title: 'Navigate',
                links: [
                  { label: 'About', href: '#about' },
                  { label: 'Projects', href: '#projects' },
                  { label: 'Skills', href: '#skills' },
                  { label: 'Contact', href: '#contact' },
                ],
              },
              {
                title: 'Resources',
                links: [
                  { label: 'Download Resume', href: '/resume.pdf', download: true },
                  { label: 'GitHub Projects', href: 'https://github.com/Brendanmebson' },
                  { label: 'Get In Touch', href: '#contact' },
                ],
              },
              {
                title: 'Connect',
                links: [
                  { label: 'GitHub', href: 'https://github.com/Brendanmebson' },
                  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kamsiyochukwu-mebuge-30a484258' },
                  { label: 'Email', href: 'mailto:brendanmebson@gmail.com' },
                  { label: 'Instagram', href: 'https://www.instagram.com/brendanmebson/' },
                ],
              },
            ].map((col) => (
              <div key={col.title}>
                <div style={{
                  fontSize: '0.72rem',
                  color: 'var(--text-dim)',
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.1em',
                  marginBottom: '1.25rem',
                }}>
                  {col.title.toUpperCase()}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {col.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      style={{
                        color: 'var(--text-muted)',
                        textDecoration: 'none',
                        fontSize: '0.88rem',
                        transition: 'color 0.2s ease',
                        display: 'inline-block',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--primary-light)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '2rem',
            borderTop: '1px solid var(--border)',
          }} className="footer-bottom">
            <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
              © 2025 Mebuge Kamsiyochukwu Brendan — All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="btn btn-outline"
              style={{ gap: '0.4rem', padding: '0.5rem 1rem', fontSize: '0.8rem' }}
            >
              <ArrowUp size={14} />
              Back to top
            </button>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 2rem !important; }
        }
        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr !important; }
          .footer-bottom { flex-direction: column; gap: 1rem; text-align: center; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
