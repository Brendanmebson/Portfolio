import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Mail, Instagram } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer>
      <div style={{ borderBottom: '1px solid var(--line)' }}>
        <div className="wrap" style={{ padding: '0.6rem var(--pad)', display: 'flex', justifyContent: 'space-between' }}>
          <span className="mono-label">© 2025 Mebuge Kamsiyochukwu Brendan</span>
          <span className="mono-label">Lagos, NG</span>
        </div>
      </div>

      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1fr',
            gap: '0',
            borderBottom: '1px solid var(--line)',
          }}
          className="footer-grid"
        >
          {/* Brand col */}
          <div style={{
            padding: '3rem 3rem 3rem 0',
            borderRight: '1px solid var(--line)',
          }}>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.4rem',
              fontWeight: 900,
              letterSpacing: '-0.02em',
              marginBottom: '1rem',
            }}>
              MKB<span style={{ color: 'var(--accent)' }}>_</span>
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-2)', lineHeight: 1.7, maxWidth: '220px', marginBottom: '1.5rem' }}>
              Building intelligent systems across web & mobile. Ideas into performant products.
            </p>
            <div style={{ display: 'flex', gap: '0.4rem' }}>
              {[
                { href: 'https://github.com/Brendanmebson', icon: <Github size={13} /> },
                { href: 'https://www.linkedin.com/in/kamsiyochukwu-mebuge-30a484258', icon: <Linkedin size={13} /> },
                { href: 'mailto:brendanmebson@gmail.com', icon: <Mail size={13} /> },
                { href: 'https://www.instagram.com/brendanmebson/', icon: <Instagram size={13} /> },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="icon-link">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link cols */}
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
                { label: 'Resume', href: '/resume.pdf' },
                { label: 'GitHub', href: 'https://github.com/Brendanmebson' },
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
          ].map((col, ci) => (
            <div key={col.title} style={{
              padding: '3rem 2rem',
              borderRight: ci < 2 ? '1px solid var(--line)' : 'none',
            }}>
              <div className="mono-label" style={{ marginBottom: '1.25rem' }}>{col.title}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {col.links.map((link) => (
                  <a key={link.label} href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    style={{
                      color: 'var(--text-2)',
                      fontSize: '0.82rem',
                      transition: 'color 0.2s',
                      display: 'inline-block',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-2)'; }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Bottom bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1.25rem 0',
        }} className="footer-bottom">
          <span className="mono-label">Built with React · Framer Motion · Deployed on Vercel</span>
          <button onClick={scrollToTop} className="btn btn-ghost"
            style={{ gap: '0.4rem', padding: '0.45rem 0.9rem', fontSize: '0.65rem' }}>
            <ArrowUp size={11} /> Top
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
          .footer-grid > *:first-child { grid-column: span 2; border-right: none !important; padding-right: 0; border-bottom: 1px solid var(--line); }
          .footer-grid > *:nth-child(2) { border-right: 1px solid var(--line) !important; }
          .footer-grid > *:nth-child(3) { border-right: none !important; }
        }
        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr !important; }
          .footer-grid > * { border-right: none !important; grid-column: span 1 !important; border-bottom: 1px solid var(--line); padding: 2rem 0 !important; }
          .footer-bottom { flex-direction: column; gap: 0.75rem; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
