import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database } from 'lucide-react';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaGithub, FaPython, FaJava, FaDocker, FaCloud, FaCode, FaGitAlt, FaMobileAlt } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMongodb, SiExpress, SiSupabase, SiPhp, SiFigma, SiKotlin, SiCplusplus } from 'react-icons/si';

const categories = [
  {
    id: 'frontend',
    label: 'Frontend',
    skills: [
      { name: 'React', icon: <FaReact />, color: '#61DBFB' },
      { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
      { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#38B2AC' },
      { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
      { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
      { name: 'Express.js', icon: <SiExpress />, color: '#ccc' },
      { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
      { name: 'Supabase', icon: <SiSupabase />, color: '#3FCF8E' },
      { name: 'PHP', icon: <SiPhp />, color: '#777BB4' },
      { name: 'SQL', icon: <Database size={28} />, color: '#f97316' },
    ],
  },
  {
    id: 'mobile',
    label: 'Mobile',
    skills: [
      { name: 'React Native', icon: <FaReact />, color: '#61DBFB' },
      { name: 'Kotlin', icon: <SiKotlin />, color: '#7F52FF' },
      { name: 'Mobile Design', icon: <FaMobileAlt />, color: '#A78BFA' },
    ],
  },
  {
    id: 'languages',
    label: 'Languages',
    skills: [
      { name: 'Python', icon: <FaPython />, color: '#3776AB' },
      { name: 'Java', icon: <FaJava />, color: '#007396' },
      { name: 'C/C++', icon: <SiCplusplus />, color: '#00599C' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    skills: [
      { name: 'GitHub', icon: <FaGithub />, color: '#ccc' },
      { name: 'Figma', icon: <SiFigma />, color: '#F24E1E' },
      { name: 'Git', icon: <FaGitAlt />, color: '#F1502F' },
      { name: 'VS Code', icon: <FaCode />, color: '#007ACC' },
      { name: 'Docker', icon: <FaDocker />, color: '#2496ED' },
      { name: 'AWS', icon: <FaCloud />, color: '#FF9900' },
    ],
  },
];

const Skills = () => {
  const [active, setActive] = useState('frontend');
  const current = categories.find((c) => c.id === active);

  return (
    <section id="skills" style={{ borderBottom: '1px solid var(--line)' }}>
      {/* Label bar */}
      <div style={{ borderBottom: '1px solid var(--line)' }}>
        <div className="wrap" style={{ padding: '0.6rem var(--pad)', display: 'flex', justifyContent: 'space-between' }}>
          <span className="mono-label">04 — Skills</span>
          <span className="mono-label">Tech Stack</span>
        </div>
      </div>

      <div className="wrap" style={{ padding: 'clamp(3rem, 8vw, 6rem) var(--pad)' }}>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3rem' }}
        >
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 5.5vw, 5rem)',
            fontWeight: 900,
            letterSpacing: '-0.03em',
            lineHeight: 0.95,
          }}>
            Tools &<br />
            <span style={{ fontStyle: 'italic', fontWeight: 300 }}>Technologies.</span>
          </h2>
        </motion.div>

        {/* Tab bar */}
        <div style={{
          display: 'flex',
          gap: '0',
          borderTop: '1px solid var(--line)',
          borderBottom: '1px solid var(--line)',
          marginBottom: '3rem',
          overflowX: 'auto',
        }}>
          {categories.map((cat, i) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              style={{
                background: active === cat.id ? 'var(--accent)' : 'transparent',
                border: 'none',
                borderRight: i < categories.length - 1 ? '1px solid var(--line)' : 'none',
                color: active === cat.id ? '#0a0a0a' : 'var(--text-2)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                padding: '0.75rem 1.5rem',
                cursor: 'crosshair',
                transition: 'all 0.2s',
                whiteSpace: 'nowrap',
                fontWeight: active === cat.id ? 700 : 400,
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
              gap: '1px',
              background: 'var(--line)',
              border: '1px solid var(--line)',
            }}
          >
            {current.skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.05 }}
                style={{
                  background: 'var(--bg)',
                  padding: '2rem 1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.75rem',
                  cursor: 'default',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg-2)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg)'; }}
              >
                <div style={{
                  fontSize: '2rem',
                  color: skill.color,
                  lineHeight: 1,
                  opacity: 0.9,
                }}>
                  {skill.icon}
                </div>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.08em',
                  color: 'var(--text-2)',
                  textAlign: 'center',
                }}>
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            marginTop: '4rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            borderTop: '1px solid var(--line)',
            borderLeft: '1px solid var(--line)',
          }}
          className="stats-grid"
        >
          {[
            { n: '20+', l: 'Technologies' },
            { n: '4+', l: 'Years Experience' },
            { n: '3', l: 'Platforms' },
            { n: '100%', l: 'Passion' },
          ].map((stat) => (
            <div key={stat.l} style={{
              padding: '2rem',
              borderRight: '1px solid var(--line)',
              borderBottom: '1px solid var(--line)',
              textAlign: 'center',
            }}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2.5rem',
                fontWeight: 900,
                letterSpacing: '-0.03em',
                lineHeight: 1,
                color: 'var(--accent)',
                marginBottom: '0.4rem',
              }}>
                {stat.n}
              </div>
              <div className="mono-label">{stat.l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Skills;
