import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    setSent(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem 1rem',
    background: 'var(--bg-2)',
    border: '1px solid var(--line)',
    color: 'var(--text)',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.8rem',
    outline: 'none',
    transition: 'border-color 0.2s',
    borderRadius: '1px',
    appearance: 'none',
  };

  return (
    <section id="contact" style={{ borderBottom: '1px solid var(--line)' }}>
      {/* Label bar */}
      <div style={{ borderBottom: '1px solid var(--line)' }}>
        <div className="wrap" style={{ padding: '0.6rem var(--pad)', display: 'flex', justifyContent: 'space-between' }}>
          <span className="mono-label">05 — Contact</span>
          <span className="mono-label">Let's talk</span>
        </div>
      </div>

      <div className="wrap" style={{ padding: 'clamp(3rem, 8vw, 6rem) var(--pad)' }}>

        {/* Large heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 'clamp(3rem, 6vw, 5rem)' }}
        >
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
            fontWeight: 900,
            letterSpacing: '-0.03em',
            lineHeight: 0.95,
          }}>
            Got a project<br />
            <span style={{ fontStyle: 'italic', fontWeight: 300 }}>in mind?</span>
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.6fr',
          gap: '0',
          borderTop: '1px solid var(--line)',
        }} className="contact-grid">

          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              paddingTop: '2.5rem',
              paddingRight: '3rem',
              borderRight: '1px solid var(--line)',
            }}
          >
            <div className="mono-label" style={{ marginBottom: '1.5rem' }}>Contact Info</div>

            {[
              { icon: <Mail size={14} />, label: 'Email', value: 'brendanmebson@gmail.com', href: 'mailto:brendanmebson@gmail.com' },
              { icon: <MapPin size={14} />, label: 'Location', value: 'Remote' },
              { icon: <Send size={14} />, label: 'Status', value: 'Open to freelance & full-time' },
            ].map((item, i) => (
              <div key={i} style={{
                paddingBottom: '1.25rem',
                marginBottom: '1.25rem',
                borderBottom: '1px solid var(--line)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
                  <span style={{ color: 'var(--accent)' }}>{item.icon}</span>
                  <span className="mono-label" style={{ color: 'var(--text-3)' }}>{item.label}</span>
                </div>
                {item.href ? (
                  <a href={item.href} style={{
                    fontSize: '0.88rem',
                    color: 'var(--text)',
                    fontWeight: 600,
                    textDecoration: 'none',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'var(--text)'; }}
                  >
                    {item.value}
                  </a>
                ) : (
                  <span style={{ fontSize: '0.88rem', color: 'var(--text)', fontWeight: 600 }}>{item.value}</span>
                )}
              </div>
            ))}

            <div className="mono-label" style={{ marginBottom: '1rem', marginTop: '0.5rem' }}>Socials</div>
            {[
              { icon: <Github size={13} />, label: '@Brendanmebson', href: 'https://github.com/Brendanmebson' },
              { icon: <Linkedin size={13} />, label: 'Kamsiyochukwu Mebuge', href: 'https://www.linkedin.com/in/kamsiyochukwu-mebuge-30a484258' },
              { icon: <Mail size={13} />, label: 'brendanmebson@gmail.com', href: 'mailto:brendanmebson@gmail.com' },
            ].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.65rem 0',
                borderBottom: '1px solid var(--line)',
                color: 'var(--text-2)',
                fontSize: '0.78rem',
                fontFamily: 'var(--font-mono)',
                letterSpacing: '0.02em',
                transition: 'color 0.2s',
                textDecoration: 'none',
              }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-2)'; }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  {s.icon}
                  <span>{s.label}</span>
                </div>
                <ArrowUpRight size={11} />
              </a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              paddingTop: '2.5rem',
              paddingLeft: '3rem',
            }}
          >
            <div className="mono-label" style={{ marginBottom: '1.5rem' }}>Send a message</div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row">
                <div>
                  <div className="mono-label" style={{ marginBottom: '0.4rem' }}>Name</div>
                  <input type="text" name="name" placeholder="Your name" value={form.name}
                    onChange={handleChange} required style={inputStyle}
                    onFocus={e => { e.currentTarget.style.borderColor = 'var(--accent)'; }}
                    onBlur={e => { e.currentTarget.style.borderColor = 'var(--line)'; }} />
                </div>
                <div>
                  <div className="mono-label" style={{ marginBottom: '0.4rem' }}>Email</div>
                  <input type="email" name="email" placeholder="your@email.com" value={form.email}
                    onChange={handleChange} required style={inputStyle}
                    onFocus={e => { e.currentTarget.style.borderColor = 'var(--accent)'; }}
                    onBlur={e => { e.currentTarget.style.borderColor = 'var(--line)'; }} />
                </div>
              </div>

              <div>
                <div className="mono-label" style={{ marginBottom: '0.4rem' }}>Subject</div>
                <input type="text" name="subject" placeholder="What's it about?" value={form.subject}
                  onChange={handleChange} required style={inputStyle}
                  onFocus={e => { e.currentTarget.style.borderColor = 'var(--accent)'; }}
                  onBlur={e => { e.currentTarget.style.borderColor = 'var(--line)'; }} />
              </div>

              <div>
                <div className="mono-label" style={{ marginBottom: '0.4rem' }}>Message</div>
                <textarea name="message" placeholder="Tell me about your project..." rows={6}
                  value={form.message} onChange={handleChange} required
                  style={{ ...inputStyle, resize: 'vertical', minHeight: '140px' }}
                  onFocus={e => { e.currentTarget.style.borderColor = 'var(--accent)'; }}
                  onBlur={e => { e.currentTarget.style.borderColor = 'var(--line)'; }} />
              </div>

              <button type="submit" disabled={sending} className="btn btn-solid"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  padding: '0.9rem',
                  fontSize: '0.72rem',
                  opacity: sending ? 0.7 : 1,
                  marginTop: '0.5rem',
                }}>
                {sending ? (
                  <>
                    <div style={{
                      width: '14px', height: '14px',
                      border: '2px solid rgba(0,0,0,0.3)',
                      borderTopColor: '#0a0a0a',
                      borderRadius: '50%',
                      animation: 'spin 0.8s linear infinite',
                    }} />
                    Sending...
                  </>
                ) : sent ? (
                  '✓ Message sent!'
                ) : (
                  <>Send Message <Send size={12} /></>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .contact-grid > *:first-child { border-right: none !important; padding-right: 0 !important; border-bottom: 1px solid var(--line); padding-bottom: 2rem; }
          .contact-grid > *:last-child { padding-left: 0 !important; }
        }
        @media (max-width: 500px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
