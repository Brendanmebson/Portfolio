import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Users } from 'lucide-react';

const services = [
  { num: '01', title: 'Frontend', desc: 'React, TypeScript, and modern CSS. Pixel-perfect at every breakpoint.' },
  { num: '02', title: 'Backend', desc: 'Scalable REST APIs with Node.js, Express, and cloud databases.' },
  { num: '03', title: 'Mobile', desc: 'Cross-platform apps with React Native and native Kotlin.' },
  { num: '04', title: 'Full-Stack', desc: 'End-to-end ownership: schema design to deployment.' },
];

const timeline = [
  { icon: <GraduationCap size={14} />, period: '2021 – 2025', title: 'BSc Software Engineering', org: 'Babcock University', desc: 'GDSC, Coding Club, React Developers Club.' },
  { icon: <Briefcase size={14} />, period: '2023', title: 'Frontend Developer Intern', org: 'IT Horizons (Zojatech)', desc: 'Built production web apps with React and Tailwind CSS.' },
  { icon: <Briefcase size={14} />, period: '2024', title: 'Fullstack Developer (Contract)', org: 'Rockview (HOTR)', desc: 'Developed a Church Attendance Report Aggregation web app.' },
  { icon: <Briefcase size={14} />, period: '2024 – Present', title: 'Full-stack Developer (Intern)', org: 'Future Interns', desc: 'Given the opportunity to showcase my skills with multiple projects.' },
  { icon: <Users size={14} />, period: '2025 – Present', title: 'Fullstack Developer', org: 'Upwork/Fiverr', desc: 'Custom web and mobile solutions for diverse clients worldwide.' },
];

const hobbies = ['Gaming', 'Guitar', 'Music', 'Photography', 'AR/VR', 'Books', 'Football', 'Machine Learning', 'Plants', 'Startups', 'UI/UX', 'Board Games'];
const languages = [
  { name: 'English', level: 'Fluent' },
  { name: 'Igbo', level: 'Fluent' },
  { name: 'Yoruba', level: 'Basic' },
  { name: 'French', level: 'Beginner' },
];

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
});

const About = () => {
  return (
    <section id="about" style={{ borderBottom: '1px solid var(--line)' }}>
      {/* Section label bar */}
      <div style={{ borderBottom: '1px solid var(--line)' }}>
        <div className="wrap" style={{ padding: '0.6rem var(--pad)', display: 'flex', justifyContent: 'space-between' }}>
          <span className="mono-label">02 — About</span>
          <span className="mono-label">Software Engineer</span>
        </div>
      </div>

      <div className="wrap" style={{ padding: 'clamp(3rem, 8vw, 6rem) var(--pad)' }}>

        {/* Headline */}
        <motion.div {...fadeIn()} style={{ marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
            fontWeight: 900,
            letterSpacing: '-0.03em',
            lineHeight: 0.95,
            maxWidth: '700px',
          }}>
            Building things<br />
            <span style={{ fontStyle: 'italic', fontWeight: 300 }}>that last.</span>
          </h2>
        </motion.div>

        {/* Intro paragraph + services */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '0',
          borderTop: '1px solid var(--line)',
          marginBottom: 'clamp(3rem, 6vw, 5rem)',
        }} className="about-top-grid">
          <div style={{ paddingTop: '2rem', paddingRight: '3rem', borderRight: '1px solid var(--line)' }}>
            <motion.p {...fadeIn(0.1)} style={{ fontSize: '1.05rem', color: 'var(--text-2)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              I’m a Software Engineer working remotely at the intersection of engineering and design. I build full-stack systems — from scalable backend architecture to refined user interfaces. Backed by a degree in Software Engineering, I’ve delivered solutions that solve real-world problems.            </motion.p>
            <motion.p {...fadeIn(0.15)} style={{ fontSize: '1.05rem', color: 'var(--text-2)', lineHeight: 1.8 }}>
              I prioritize performance, scalability, and clarity — building systems that are not only functional but built to last. With a strong focus on detail and user experience, I bridge the gap between engineering and design to create products that feel as good as they perform. I turn complex ideas into clean, efficient, and production-ready solutions.            </motion.p>

          </div>

          {/* Services */}
          <div style={{ paddingTop: '2rem', paddingLeft: '3rem' }}>
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                {...fadeIn(i * 0.07)}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'auto 1fr',
                  gap: '1rem',
                  alignItems: 'start',
                  paddingBottom: '1.25rem',
                  marginBottom: '1.25rem',
                  borderBottom: i < services.length - 1 ? '1px solid var(--line)' : 'none',
                }}
              >
                <span className="mono-label" style={{ paddingTop: '0.15rem' }}>{s.num}</span>
                <div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.2rem' }}>
                    {s.title}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-2)', lineHeight: 1.6 }}>{s.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline + Interests */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          borderTop: '1px solid var(--line)',
          paddingTop: '3rem',
        }} className="about-lower-grid">

          {/* Timeline */}
          <motion.div {...fadeIn(0.1)}>
            <div className="mono-label" style={{ marginBottom: '2rem' }}>Experience & Education</div>
            {timeline.map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '2px' }}>
                  <div style={{
                    width: '28px', height: '28px', flexShrink: 0,
                    border: '1px solid var(--line-bright)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--accent)',
                  }}>
                    {item.icon}
                  </div>
                  {i < timeline.length - 1 && (
                    <div style={{ width: '1px', flex: 1, background: 'var(--line)', minHeight: '28px', marginTop: '4px' }} />
                  )}
                </div>
                <div style={{ paddingBottom: '0.5rem' }}>
                  <div className="mono-label" style={{ color: 'var(--accent)', marginBottom: '0.3rem' }}>{item.period}</div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.15rem' }}>{item.title}</div>
                  <div className="mono-label" style={{ color: 'var(--text-2)', marginBottom: '0.4rem', letterSpacing: '0.04em', textTransform: 'none' }}>{item.org}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-3)', lineHeight: 1.6 }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Interests + Languages */}
          <motion.div {...fadeIn(0.2)} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
              <div className="mono-label" style={{ marginBottom: '1rem' }}>Interests</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {hobbies.map(h => (
                  <span key={h} className="tag">{h}</span>
                ))}
              </div>
            </div>

            <div style={{ borderTop: '1px solid var(--line)', paddingTop: '2rem' }}>
              <div className="mono-label" style={{ marginBottom: '1rem' }}>Languages</div>
              {languages.map((lang, i) => (
                <div key={lang.name} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '0.6rem 0',
                  borderBottom: i < languages.length - 1 ? '1px solid var(--line)' : 'none',
                }}>
                  <span style={{ fontSize: '0.88rem', fontWeight: 600 }}>{lang.name}</span>
                  <span className="mono-label" style={{
                    color: lang.level === 'Fluent' ? 'var(--accent)' : 'var(--text-3)',
                    letterSpacing: '0.06em',
                  }}>
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-top-grid { grid-template-columns: 1fr !important; }
          .about-top-grid > *:first-child { border-right: none !important; padding-right: 0 !important; border-bottom: 1px solid var(--line); padding-bottom: 2rem; }
          .about-top-grid > *:last-child { padding-left: 0 !important; padding-top: 2rem; }
          .about-lower-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
};

export default About;
