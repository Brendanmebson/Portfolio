import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Download } from 'lucide-react';
import me from '../assets/me.png';

const Hero = () => {
  const counterRef = useRef(null);

  // Minimal typewriter for the status line
  useEffect(() => {
    const el = counterRef.current;
    if (!el) return;
    const text = 'Available for work';
    let i = 0;
    const t = setInterval(() => {
      el.textContent = text.slice(0, i);
      i++;
      if (i > text.length) clearInterval(t);
    }, 60);
    return () => clearInterval(t);
  }, []);

  const stats = [
    { value: '3+', label: 'Years' },
    { value: '20+', label: 'Projects' },
    { value: '3', label: 'Platforms' },
  ];

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      borderBottom: '1px solid var(--line)',
      position: 'relative',
    }}>
      {/* Top bar */}
      <div style={{
        borderBottom: '1px solid var(--line)',
        marginTop: '60px',
      }}>
        <div className="wrap" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0.6rem var(--pad)',
        }}>
          <span className="mono-label">01 — Introduction</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>

            <span ref={counterRef} className="mono-label" style={{ color: 'var(--accent)', letterSpacing: '0.08em' }} />
          </div>
        </div>
      </div>

      {/* Main hero content */}
      <div className="wrap" style={{
        flex: 1,
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        gap: '0',
        alignItems: 'stretch',
        paddingTop: 0,
        paddingBottom: 0,
      }}>
        {/* Left: headline */}
        <div style={{
          borderRight: '1px solid var(--line)',
          paddingRight: '3rem',
          paddingTop: 'clamp(3rem, 8vh, 6rem)',
          paddingBottom: 'clamp(3rem, 8vh, 6rem)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(3.5rem, 9vw, 8.5rem)',
                fontWeight: 900,
                lineHeight: 0.9,
                letterSpacing: '-0.03em',
                marginBottom: '2.5rem',
              }}
            >
              <span style={{ display: 'block' }}>Mebuge</span>
              <span style={{ display: 'block', fontWeight: 500, fontStyle: 'italic' }}>Kamsiyochukwu</span>
              <span style={{ display: 'block' }}></span>
              <span style={{ display: 'block', color: 'var(--accent)' }}>Brendan.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              style={{
                fontSize: '1rem',
                color: 'var(--text-2)',
                lineHeight: 1.75,
                maxWidth: '420px',
                marginBottom: '2.5rem',
              }}
            >
              Software Engineer building across web, mobile, and everything in between.
              From database schema to pixel-perfect UI — end-to-end.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}
            >
              <a href="#contact" className="btn btn-solid">
                Get in touch <ArrowUpRight size={12} />
              </a>
              <a href="#projects" className="btn btn-ghost">
                View work
              </a>
              <a href="/resume.pdf" download className="btn btn-ghost">
                <Download size={12} /> Resume
              </a>
            </motion.div>
          </div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            style={{
              display: 'flex',
              gap: '0',
              marginTop: '4rem',
              borderTop: '1px solid var(--line)',
              paddingTop: '1.5rem',
            }}
          >
            {stats.map((s, i) => (
              <div key={s.label} style={{
                flex: 1,
                borderRight: i < stats.length - 1 ? '1px solid var(--line)' : 'none',
                paddingRight: '1.5rem',
                paddingLeft: i > 0 ? '1.5rem' : 0,
              }}>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2.5rem',
                  fontWeight: 900,
                  letterSpacing: '-0.03em',
                  lineHeight: 1,
                  color: 'var(--text)',
                }}>
                  {s.value}
                </div>
                <div className="mono-label" style={{ marginTop: '0.3rem' }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: photo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hero-photo-col"
          style={{
            width: 'clamp(200px, 22vw, 320px)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <img
            src={me}
            alt="Brendan"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top',
              display: 'block',
              filter: 'grayscale(30%) contrast(1.05)',
            }}
          />
          {/* Yellow overlay strip */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '1rem',
            background: 'linear-gradient(to top, rgba(10,10,10,0.9), transparent)',
          }}>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.58rem',
              letterSpacing: '0.1em',
              color: 'var(--text-2)',
            }}>
              FULL-STACK · MOBILE · UI
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        borderTop: '1px solid var(--line)',
      }}>
        <div className="wrap" style={{
          padding: '1rem var(--pad)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
        }}>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <ArrowDown size={12} color="var(--text-3)" />
          </motion.div>
          <span className="mono-label">Scroll</span>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        @media (max-width: 768px) {
          .hero-photo-col { display: none !important; }
          .wrap > div:first-child { border-right: none !important; padding-right: 0 !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
