import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    alert("Message sent! I'll get back to you soon.");
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  const inputStyle = {
    width: '100%',
    padding: '0.85rem 1rem',
    background: 'var(--bg-glass)',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius-md)',
    color: 'var(--text)',
    fontFamily: 'var(--font-body)',
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'border-color 0.25s ease',
  };

  const inputFocus = (e) => {
    e.currentTarget.style.borderColor = 'rgba(123,140,255,0.5)';
    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(123,140,255,0.08)';
  };
  const inputBlur = (e) => {
    e.currentTarget.style.borderColor = 'var(--border)';
    e.currentTarget.style.boxShadow = 'none';
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '4rem' }}
        >
          <div className="section-label">Contact</div>
          <h2 className="section-title">
            Let's build<br />
            <span className="gradient-text">something great</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind or want to explore opportunities? 
            I'd love to hear from you.
          </p>
        </motion.div>

        <div className="contact-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.5fr',
          gap: '3rem',
          alignItems: 'start',
        }}>

          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            {/* Contact details */}
            {[
              {
                icon: <Mail size={18} />,
                label: 'Email',
                value: 'brendanmebson@gmail.com',
                href: 'mailto:brendanmebson@gmail.com',
              },
              {
                icon: <MapPin size={18} />,
                label: 'Location',
                value: 'Worldwide - Remote-friendly 🌍',
              },
              {
                icon: <Send size={18} />,
                label: 'Availability',
                value: 'Open to freelance, full-time & collabs',
              },
            ].map((item, i) => (
              <div key={i} className="glass-card" style={{
                padding: '1.25rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(123,140,255,0.1)',
                  border: '1px solid rgba(123,140,255,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary)',
                  flexShrink: 0,
                }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{
                    fontSize: '0.72rem',
                    color: 'var(--text-dim)',
                    fontFamily: 'var(--font-mono)',
                    letterSpacing: '0.06em',
                    marginBottom: '0.2rem',
                  }}>
                    {item.label}
                  </div>
                  {item.href ? (
                    <a href={item.href} style={{
                      color: 'var(--text)',
                      fontSize: '0.88rem',
                      textDecoration: 'none',
                      fontWeight: 500,
                    }}>
                      {item.value}
                    </a>
                  ) : (
                    <span style={{ color: 'var(--text)', fontSize: '0.88rem', fontWeight: 500 }}>
                      {item.value}
                    </span>
                  )}
                </div>
              </div>
            ))}

            {/* Social links */}
            <div className="glass-card" style={{ padding: '1.5rem' }}>
              <div style={{
                fontSize: '0.72rem',
                color: 'var(--text-dim)',
                fontFamily: 'var(--font-mono)',
                letterSpacing: '0.06em',
                marginBottom: '1rem',
              }}>
                FOLLOW ME
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  { icon: <Github size={17} />, label: 'GitHub', href: 'https://github.com/Brendanmebson', user: '@Brendanmebson' },
                  { icon: <Linkedin size={17} />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/kamsiyochukwu-mebuge-30a484258', user: 'Kamsiyochukwu Mebuge' },
                  { icon: <Mail size={17} />, label: 'Email', href: 'mailto:brendanmebson@gmail.com', user: 'brendanmebson@gmail.com' },
                ].map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.6rem 0.9rem',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid var(--border)',
                    color: 'var(--text-muted)',
                    textDecoration: 'none',
                    fontSize: '0.82rem',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(123,140,255,0.3)';
                    e.currentTarget.style.color = 'var(--text)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.color = 'var(--text-muted)';
                  }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      {s.icon}
                      <span>{s.user}</span>
                    </div>
                    <ArrowUpRight size={14} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-card"
            style={{ padding: '2.5rem' }}
          >
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.4rem',
              fontWeight: 700,
              marginBottom: '2rem',
              letterSpacing: '-0.01em',
            }}>
              Send a message
            </h3>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row">
                <div>
                  <label style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', letterSpacing: '0.06em', display: 'block', marginBottom: '0.5rem' }}>
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Brendan"
                    value={form.name}
                    onChange={handleChange}
                    onFocus={inputFocus}
                    onBlur={inputBlur}
                    required
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', letterSpacing: '0.06em', display: 'block', marginBottom: '0.5rem' }}>
                    EMAIL
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    onFocus={inputFocus}
                    onBlur={inputBlur}
                    required
                    style={inputStyle}
                  />
                </div>
              </div>

              <div>
                <label style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', letterSpacing: '0.06em', display: 'block', marginBottom: '0.5rem' }}>
                  SUBJECT
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Let's work together"
                  value={form.subject}
                  onChange={handleChange}
                  onFocus={inputFocus}
                  onBlur={inputBlur}
                  required
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', letterSpacing: '0.06em', display: 'block', marginBottom: '0.5rem' }}>
                  MESSAGE
                </label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  onFocus={inputFocus}
                  onBlur={inputBlur}
                  required
                  style={{ ...inputStyle, resize: 'vertical', minHeight: '130px' }}
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="btn btn-primary"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  fontSize: '0.95rem',
                  padding: '0.9rem',
                  marginTop: '0.5rem',
                  opacity: sending ? 0.7 : 1,
                }}
              >
                {sending ? (
                  <>
                    <div style={{
                      width: '16px', height: '16px',
                      border: '2px solid rgba(255,255,255,0.3)',
                      borderTopColor: 'white',
                      borderRadius: '50%',
                      animation: 'spin 0.8s linear infinite',
                    }} />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 500px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
