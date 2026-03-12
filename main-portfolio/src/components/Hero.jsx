import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown, Download, ArrowUpRight } from 'lucide-react';
import me from '../assets/me.png';

const stagger = {
  container: { animate: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } } },
  item: {
    initial: { opacity: 0, y: 32 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  }
};

const Counter = ({ to, suffix }) => {
  const ref = useRef(null);
  useEffect(() => {
    let start = 0;
    const step = Math.ceil(to / (1800 / 16));
    const timer = setInterval(() => {
      start = Math.min(start + step, to);
      if (ref.current) ref.current.textContent = start + (suffix || '');
      if (start >= to) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [to, suffix]);
  return <span ref={ref}>0{suffix || ''}</span>;
};

const Hero = () => {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      paddingTop: '80px',
      position: 'relative',
      zIndex: 1,
      overflow: 'hidden',
    }}>

      {/* CTAR-style vertical sidebar label */}
      <div className="hero-sidebar" style={{
        position: 'fixed',
        right: '-2px',
        top: '50%',
        transform: 'translateY(-50%) rotate(90deg)',
        zIndex: 50,
        pointerEvents: 'none',
      }}>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.6rem',
          letterSpacing: '0.22em',
          color: 'var(--text-dim)',
          whiteSpace: 'nowrap',
        }}>
          FULL-STACK ENGINEER · MOBILE DEVELOPER · UI CRAFTSMAN
        </span>
      </div>

      {/* Ambient blobs */}
      <div style={{ position: 'absolute', top: '-20%', right: '10%', width: '700px', height: '700px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(123,140,255,0.06) 0%, transparent 65%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '0%', left: '-10%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(192,132,252,0.05) 0%, transparent 65%)', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>

        {/* Top meta row — CTAR style */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hero-top-row" style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '3rem',
            paddingBottom: '1rem',
            borderBottom: '1px solid var(--border)',
          }}
        >
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.18em', color: 'var(--text-dim)' }}>
            WELCOME TO BRENDAN_ PORTFOLIO
          </span>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {[
              { href: 'https://github.com/Brendanmebson', icon: <Github size={14} /> },
              { href: 'https://www.linkedin.com/in/kamsiyochukwu-mebuge-30a484258', icon: <Linkedin size={14} /> },
              { href: 'mailto:brendanmebson@gmail.com', icon: <Mail size={14} /> },
            ].map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="icon-bubble" style={{ width: '30px', height: '30px' }}>
                {s.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* MAIN LAYOUT */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 400px',
          gap: '3rem',
          alignItems: 'start',
        }} className="hero-main-grid">

          {/* LEFT: Massive editorial headline */}
          <motion.div variants={stagger.container} initial="initial" animate="animate">

            {/* CTAR category label */}
            <motion.div variants={stagger.item} style={{ marginBottom: '1.75rem' }}>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                letterSpacing: '0.18em',
                color: 'var(--primary)',
                padding: '0.3rem 0.8rem',
                border: '1px solid rgba(123,140,255,0.3)',
                borderRadius: '3px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 6px #22c55e', animation: 'pulse-glow 2s infinite' }} />
                CUSTOM SOFTWARE SOLUTIONS_
              </span>
            </motion.div>

            {/* MEGA HEADLINE */}
            <motion.div variants={stagger.item}>
              <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, lineHeight: 0.92, letterSpacing: '-0.04em', margin: 0 }}>

                {/* LINE 1: "Coding_" */}
                <div style={{ fontSize: 'clamp(3.5rem, 9.5vw, 8rem)', color: 'var(--text)', display: 'flex', alignItems: 'center' }}>
                  Coding<span style={{ color: 'var(--primary)' }}>_</span>
                </div>

                {/* LINE 2: "A Better_" + inline avatar chip — Arch style */}
                <div style={{ fontSize: 'clamp(3.5rem, 9.5vw, 8rem)', color: 'var(--text)', display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
                  Better
                  <div style={{
                    display: 'inline-flex',
                    width: 'clamp(70px, 10vw, 120px)',
                    height: 'clamp(46px, 6.5vw, 78px)',
                    borderRadius: '9999px',
                    overflow: 'hidden',
                    border: '2px solid rgba(123,140,255,0.3)',
                    flexShrink: 0,
                    verticalAlign: 'middle',
                    position: 'relative',
                    top: '2px',
                  }}>
                    <img src={me} alt="Brendan" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
                  </div>
                  <span style={{ color: 'var(--primary)' }}>_</span>
                </div>

                {/* LINE 3: gradient "Software_" */}
                <div style={{
                  fontSize: 'clamp(3.5rem, 9.5vw, 8rem)',
                  background: 'var(--gradient-text)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  lineHeight: 1,
                }}>
                  Software_
                </div>
              </h1>
            </motion.div>

            {/* Sub-copy + CTAs */}
            <motion.div variants={stagger.item} style={{ marginTop: '2.75rem' }}>
              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.8, maxWidth: '500px', marginBottom: '2rem' }}>
                I architect intelligent systems across web and mobile —
                from database design to pixel-perfect interfaces.
                Based in Nigeria, available worldwide.
              </p>
              <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <a href="#contact" className="btn btn-primary" style={{ gap: '0.5rem' }}>
                  Get In Touch <ArrowUpRight size={14} />
                </a>
                <a href="#projects" className="btn btn-outline">View My Work</a>
                <a href="/resume.pdf" download className="btn btn-outline" style={{ gap: '0.4rem' }}>
                  <Download size={13} /> Resume
                </a>
              </div>
            </motion.div>

          </motion.div>

          {/* RIGHT: Arch bento grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="hero-bento-wrap"
          >
            {/* Main photo */}
            <div style={{
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              height: '300px',
              border: '1px solid var(--border)',
              position: 'relative',
              marginBottom: '1rem',
            }}>
              <img src={me} alt="Brendan" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
              <div style={{
                position: 'absolute', bottom: '1rem', left: '1rem',
                background: 'rgba(7,11,20,0.8)',
                backdropFilter: 'blur(10px)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-sm)',
                padding: '0.4rem 0.85rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                color: 'var(--text-muted)',
                letterSpacing: '0.04em',
              }}>
                Mebuge · Kamsiyochukwu · Brendan
              </div>
            </div>

            {/* CTAR-style stat counters */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
              {[
                { n: 20, suffix: '+', label: 'Projects' },
                { n: 4, suffix: '+', label: 'Years' },
                { n: 100, suffix: '%', label: 'Passion' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
                  style={{
                    background: 'var(--bg-glass)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1.1rem 0.75rem',
                    textAlign: 'center',
                  }}
                >
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.8rem',
                    fontWeight: 700,
                    lineHeight: 1,
                    background: 'var(--gradient-text)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    marginBottom: '0.3rem',
                  }}>
                    <Counter to={stat.n} suffix={stat.suffix} />
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--text-dim)', letterSpacing: '0.1em' }}>
                    {stat.label.toUpperCase()}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* CTAR scroll down */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginTop: '3.5rem' }}
        >
          <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
            <ArrowDown size={13} color="var(--text-dim)" />
          </motion.div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.22em', color: 'var(--text-dim)' }}>
            SCROLL DOWN
          </span>
        </motion.div>

      </div>

      <style>{`
        @media (max-width: 960px) {
          .hero-main-grid { grid-template-columns: 1fr !important; }
          .hero-bento-wrap { display: none !important; }
        }
        @media (max-width: 768px) {
          .hero-top-row { flex-direction: column !important; gap: 0.75rem !important; align-items: flex-start !important; }
          .hero-sidebar { display: none !important; }
        }
        @media (max-width: 600px) {
          .hero-main-grid h1 > div { font-size: clamp(2.8rem, 14vw, 5rem) !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
