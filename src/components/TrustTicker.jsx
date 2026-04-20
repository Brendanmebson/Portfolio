import React from 'react';
import { motion } from 'framer-motion';

const brands = [
  { name: 'Apprelab', logo: '/images/projects/appr1/apprelab_logo_light.png', height: '3rem' },
  { name: 'DXIH', logo: '/images/projects/dxhub/Logo.png' },
  { name: 'TTP', logo: '/images/projects/TTP/TTP logo.png', height: '4rem' },
  { name: 'Creative Showcase', logo: '/images/projects/CS/logo-white.png', height: '10rem' },
  { name: 'Fifi London', logo: '/images/projects/fifilondon/Fifilondonlogo.webp', height: '7rem' },
];

const TickerItem = ({ brand }) => {
  return (
    <div
      style={{
        fontFamily: 'var(--font-sans)',
        fontSize: '1.8rem',
        fontWeight: 800,
        letterSpacing: '-0.04em',
        color: 'var(--text)',
        whiteSpace: 'nowrap',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'default',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.08)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      {brand.logo ? (
        <img
          src={brand.logo}
          alt={brand.name}
          style={{
            height: brand.height || '8rem',
            width: 'auto',
            transition: 'all 0.4s ease'
          }}
        />
      ) : (
        brand.name
      )}
      <div style={{ width: '8px', height: '8px', background: 'var(--accent)', borderRadius: '2px' }} />
    </div>
  );
};

const TrustTicker = () => {
  return (
    <section
      style={{
        borderBottom: '1px solid var(--line)',
        background: 'var(--bg)',
        overflow: 'hidden',
        padding: '1.5rem 0'
      }}
    >
      <div style={{ marginBottom: '1.25rem', textAlign: 'center' }}>
        <span className="mono-label" style={{ opacity: 0.5, fontSize: '0.6rem' }}>
          Collaborated with & Trusted by
        </span>
      </div>

      <div style={{ position: 'relative', width: '100%' }}>
        {/* Gradient Fades */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: '150px',
          background: 'linear-gradient(to right, var(--bg), transparent)',
          zIndex: 2, pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: '150px',
          background: 'linear-gradient(to left, var(--bg), transparent)',
          zIndex: 2, pointerEvents: 'none'
        }} />

        <motion.div
          style={{
            display: 'flex',
            gap: '5rem',
            width: 'max-content',
            padding: '0 2.5rem'
          }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {brands.map((brand, i) => (
            <TickerItem key={i} brand={brand} />
          ))}
          {/* Duplicate set for seamless loop */}
          {brands.map((brand, i) => (
            <TickerItem key={`loop-${i}`} brand={brand} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustTicker;
