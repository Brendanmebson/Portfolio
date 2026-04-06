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
      { name: 'SQL', icon: <Database size={32} />, color: '#f97316' },
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
    <section id="skills" className="section">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '4rem' }}
        >
          <div className="section-label">Tech Stack</div>
          <h2 className="section-title">
            Skills &<br />
            <span className="gradient-text">Toolbox</span>
          </h2>
          <p className="section-subtitle">
            Languages, frameworks, and tools I wield to craft exceptional products.
          </p>
        </motion.div>

        {/* Tab Switcher */}
        <div className="skills-tabs" style={{
          display: 'flex',
          gap: '0.5rem',
          flexWrap: 'wrap',
          marginBottom: '3rem',
        }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              style={{
                padding: '0.5rem 1.25rem',
                borderRadius: 'var(--radius-pill)',
                border: active === cat.id ? '1px solid var(--primary)' : '1px solid var(--border)',
                background: active === cat.id ? 'rgba(123,140,255,0.12)' : 'transparent',
                color: active === cat.id ? 'var(--primary-light)' : 'var(--text-muted)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.85rem',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.25s ease',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
              gap: '1rem',
            }}
          >
            {current.skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="glass-card"
                style={{
                  padding: '1.5rem 1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.75rem',
                  cursor: 'default',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 30px ${skill.color}20`;
                  e.currentTarget.style.borderColor = `${skill.color}30`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'var(--border)';
                }}
              >
                <div style={{
                  fontSize: '2.5rem',
                  color: skill.color,
                  lineHeight: 1,
                  filter: `drop-shadow(0 0 8px ${skill.color}40)`,
                }}>
                  {skill.icon}
                </div>
                <span style={{
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: 'var(--text-muted)',
                  textAlign: 'center',
                  fontFamily: 'var(--font-mono)',
                }}>
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{
            marginTop: '4rem',
            padding: '2rem',
            borderRadius: 'var(--radius-lg)',
            background: 'var(--gradient-subtle)',
            border: '1px solid rgba(123,140,255,0.12)',
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          {[
            { n: '20+', l: 'Technologies' },
            { n: '4+', l: 'Years of Experience' },
            { n: '3', l: 'Platforms' },
            { n: '100%', l: 'Passion' },
          ].map((stat) => (
            <div key={stat.l} style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2rem',
                fontWeight: 700,
                background: 'var(--gradient-text)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                {stat.n}
              </div>
              <div style={{
                fontSize: '0.8rem',
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-mono)',
              }}>
                {stat.l}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-tabs { gap: 0.35rem !important; }
          .skills-tabs button { padding: 0.38rem 0.85rem !important; font-size: 0.78rem !important; }
        }
        @media (max-width: 480px) {
          .skills-tabs button { padding: 0.32rem 0.7rem !important; font-size: 0.72rem !important; }
        }
      `}</style>
    </section>
  );
};

export default Skills;

