import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Smartphone, Server, Layout, Gamepad2, Languages, GraduationCap, Briefcase, Users } from 'lucide-react';

const services = [
  { icon: <Layout size={22} />, title: 'Frontend', desc: 'Pixel-perfect UIs with React, TypeScript, and modern CSS.' },
  { icon: <Server size={22} />, title: 'Backend', desc: 'Scalable APIs with Node.js, Express, and cloud databases.' },
  { icon: <Smartphone size={22} />, title: 'Mobile', desc: 'Cross-platform apps with React Native and Kotlin.' },
  { icon: <Code2 size={22} />, title: 'Full-Stack', desc: 'End-to-end ownership from schema design to deployment.' },
];

const timeline = [
  { icon: <GraduationCap size={16} />, period: '2021 – 2025', title: 'BSc Software Engineering', org: 'Babcock University', desc: 'Active in GDSC, Coding Club, and React Developers Club.' },
  { icon: <Briefcase size={16} />, period: '2023', title: 'Frontend Developer Intern', org: 'IT Horizons (Zojatech)', desc: 'Built web applications with React and Tailwind CSS.' },
  { icon: <Users size={16} />, period: 'Ongoing', title: 'Freelance React Developer', org: 'Independent', desc: 'Delivering custom web and mobile solutions for diverse clients.' },
];

const hobbies = ['Gaming', 'Guitar', 'Music', 'Photography', 'AR/VR', 'Books', 'Football', 'Machine Learning', 'Plants', 'Startups', 'UI/UX', 'Board Games'];
const languages = ['English — Fluent', 'Igbo — Fluent', 'Yoruba — Basic', 'French — Beginner'];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">

        {/* CTAR-style section label */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '5rem' }}
        >
          {/* Top border label — CTAR */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '2rem',
            paddingBottom: '1rem',
            borderBottom: '1px solid var(--border)',
          }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.18em', color: 'var(--text-dim)' }}>
              02 / ABOUT
            </span>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, var(--border), transparent)' }} />
          </div>

          {/* Big editorial headline — CTAR sizing */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'end' }} className="about-header-grid">
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.8rem, 6vw, 5rem)',
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: '-0.03em',
              margin: 0,
            }}>
              Building things<br />
              that <span style={{
                background: 'var(--gradient-text)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>matter_</span>
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.75, margin: 0 }}>
              A Software Engineer deeply passionate about creating elegant solutions
              at the intersection of great engineering and thoughtful design.
            </p>
          </div>
        </motion.div>

        {/* Services — 4-col grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: 'var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: '5rem' }} className="services-grid">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{
                background: 'var(--bg)',
                padding: '2rem 1.5rem',
                position: 'relative',
                overflow: 'hidden',
                transition: 'background 0.3s ease',
                cursor: 'default',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-glass)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--bg)'}
            >
              {/* CTAR-style number */}
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '3.5rem',
                fontWeight: 700,
                color: 'var(--border)',
                lineHeight: 1,
                marginBottom: '1.25rem',
                letterSpacing: '-0.04em',
              }}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <div style={{
                width: '36px', height: '36px',
                borderRadius: 'var(--radius-sm)',
                background: 'rgba(123,140,255,0.1)',
                border: '1px solid rgba(123,140,255,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--primary)',
                marginBottom: '1rem',
              }}>
                {s.icon}
              </div>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem', letterSpacing: '-0.01em' }}>
                {s.title}
              </h4>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Timeline + Extras */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }} className="about-lower-grid">

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.18em', color: 'var(--text-dim)', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ width: '20px', height: '1px', background: 'var(--primary)', display: 'inline-block' }} />
              TIMELINE
            </div>

            {timeline.map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '1.25rem', position: 'relative' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{
                    width: '32px', height: '32px', borderRadius: '50%',
                    background: 'rgba(123,140,255,0.1)',
                    border: '1px solid rgba(123,140,255,0.25)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--primary)', flexShrink: 0,
                  }}>
                    {item.icon}
                  </div>
                  {i < timeline.length - 1 && (
                    <div style={{ width: '1px', flex: 1, background: 'linear-gradient(to bottom, rgba(123,140,255,0.2), transparent)', minHeight: '36px' }} />
                  )}
                </div>
                <div style={{ paddingBottom: '2rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--primary)', letterSpacing: '0.06em', display: 'block', marginBottom: '0.2rem' }}>
                    {item.period}
                  </span>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 600, marginBottom: '0.2rem', letterSpacing: '-0.01em' }}>{item.title}</h4>
                  <span style={{ fontSize: '0.78rem', color: 'var(--accent)', fontFamily: 'var(--font-mono)', display: 'block', marginBottom: '0.4rem' }}>{item.org}</span>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Interests + Languages */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
          >
            <div className="glass-card" style={{ padding: '1.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
                <Gamepad2 size={18} color="var(--primary)" />
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 600 }}>Interests</span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {hobbies.map(h => <span key={h} className="tag">{h}</span>)}
              </div>
            </div>

            <div className="glass-card" style={{ padding: '1.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
                <Languages size={18} color="var(--primary)" />
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 600 }}>Languages</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {languages.map(lang => {
                  const [name, level] = lang.split(' — ');
                  return (
                    <div key={lang} style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      padding: '0.55rem 0.9rem',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(123,140,255,0.05)',
                      border: '1px solid rgba(123,140,255,0.1)',
                    }}>
                      <span style={{ fontSize: '0.86rem', fontWeight: 500 }}>{name}</span>
                      <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--accent)' }}>{level}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-header-grid { grid-template-columns: 1fr !important; }
          .services-grid { grid-template-columns: 1fr 1fr !important; }
          .about-lower-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default About;
