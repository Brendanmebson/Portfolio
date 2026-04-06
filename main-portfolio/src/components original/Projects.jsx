import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import Slider from 'react-slick';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const projects = [
  {
    title: 'Campus Safety App',
    description: 'Emergency reporting with live location sharing and security response.',
    detail: 'Students report emergencies, share live location, and reach campus security instantly via a React Native mobile app paired with a React admin dashboard.',
    technologies: ['React', 'React Native', 'Tailwind CSS', 'Supabase'],
    images: ['https://picsum.photos/800/500?random=101', 'https://picsum.photos/800/500?random=102'],
    github: 'https://github.com/Brendanmebson',
    demo: '#',
    featured: true,
  },
  {
    title: 'Weekly Report Aggregator',
    description: 'Role-based attendance tracking and automated report generation.',
    detail: 'A full-stack MERN application with role-based access, smart attendance tracking, and automated weekly PDF report generation.',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    images: ['https://picsum.photos/800/500?random=103', 'https://picsum.photos/800/500?random=104'],
    github: 'https://github.com/Brendanmebson',
    demo: '#',
    featured: true,
  },
  {
    title: 'Personal Finance Tracker',
    description: 'Budget maker and expense tracker with real-time analytics.',
    detail: 'A responsive React app with Chart.js visualizations, expense categorisation, and budget goals.',
    technologies: ['React', 'Tailwind CSS', 'Chart.js', 'APIs'],
    images: ['https://picsum.photos/800/500?random=105', 'https://picsum.photos/800/500?random=106'],
    github: 'https://github.com/Brendanmebson',
    demo: '#',
  },
  {
    title: 'Real-Time Messaging App',
    description: 'WebSocket-powered chat with a sleek, modern UI.',
    detail: 'Real-time chat with TypeScript, WebSockets, and a polished UI supporting rooms, threads, and online presence.',
    technologies: ['React', 'TypeScript', 'WebSockets', 'Tailwind CSS'],
    images: ['https://picsum.photos/800/500?random=107', 'https://picsum.photos/800/500?random=108'],
    github: 'https://github.com/Brendanmebson',
    demo: '#',
  },
  {
    title: 'Crypto Dashboard',
    description: 'Live crypto portfolio monitoring with charts and alerts.',
    detail: 'Pulls live prices from crypto APIs, renders interactive Chart.js graphs, and supports portfolio tracking.',
    technologies: ['TypeScript', 'React', 'Tailwind CSS', 'Crypto APIs'],
    images: ['https://picsum.photos/800/500?random=109', 'https://picsum.photos/800/500?random=110'],
    github: 'https://github.com/Brendanmebson',
    demo: '#',
  },
  {
    title: 'QR CODEx Generator',
    description: 'Customizable QR code generation for URLs and text.',
    detail: 'Lightweight tool generating styled, customizable QR codes instantly from any URL or text input.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'QR Code API'],
    images: ['https://picsum.photos/800/500?random=112', 'https://picsum.photos/800/500?random=113'],
    github: 'https://github.com/Brendanmebson',
    demo: '#',
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 400,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

const Projects = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [lightboxIdx, setLightboxIdx] = useState(0);

  const openLightbox = (imgs, idx) => {
    setLightboxImages(imgs.map((src) => ({ src })));
    setLightboxIdx(idx);
    setLightboxOpen(true);
  };

  return (
    <section id="projects" className="section">
      <div className="container">

        {/* Section header — CTAR style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '4rem' }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '2rem',
            paddingBottom: '1rem',
            borderBottom: '1px solid var(--border)',
          }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.18em', color: 'var(--text-dim)' }}>
              03 / WORK
            </span>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, var(--border), transparent)' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'end' }} className="projects-header-grid">
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.8rem, 6vw, 5rem)',
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: '-0.03em',
              margin: 0,
            }}>
              Featured<br />
              <span style={{
                background: 'var(--gradient-text)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>Projects_</span>
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.75, margin: 0 }}>
              A curated selection showcasing my range — from mobile apps
              to full-stack platforms and everything in between.
            </p>
          </div>
        </motion.div>

        {/* Arch-style bento project grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridAutoRows: 'auto',
          gap: '1.25rem',
        }} className="projects-grid">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="glass-card project-card"
              style={{
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                ...(project.featured && i === 0 ? { gridColumn: 'span 2' } : {}),
              }}
            >
              {/* Image carousel */}
              <div style={{ position: 'relative', overflow: 'hidden', flexShrink: 0 }}>
                <Slider {...sliderSettings}>
                  {project.images.map((img, idx) => (
                    <div key={idx} onClick={() => openLightbox(project.images, idx)} style={{ cursor: 'zoom-in' }}>
                      <img
                        src={img}
                        alt={project.title}
                        style={{
                          width: '100%',
                          height: project.featured && i === 0 ? '280px' : '200px',
                          objectFit: 'cover',
                          display: 'block',
                        }}
                      />
                    </div>
                  ))}
                </Slider>

                {/* CTAR-style number overlay */}
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  color: 'rgba(255,255,255,0.15)',
                  letterSpacing: '-0.04em',
                  lineHeight: 1,
                  zIndex: 5,
                  pointerEvents: 'none',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </div>

                {project.featured && (
                  <div style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 10 }}>
                    <span className="tag" style={{ background: 'rgba(123,140,255,0.25)', borderColor: 'rgba(123,140,255,0.5)', fontSize: '0.65rem' }}>
                      ★ FEATURED
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  marginBottom: '0.5rem',
                  letterSpacing: '-0.01em',
                  color: 'var(--text)',
                }}>
                  {project.title}
                </h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: '1rem', flex: 1 }}>
                  {project.detail}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                  {project.technologies.map(tech => (
                    <span key={tech} className="tag" style={{ fontSize: '0.68rem' }}>{tech}</span>
                  ))}
                </div>

                {/* CTAR-style action row */}
                <div style={{ display: 'flex', gap: '0.6rem', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary"
                    style={{ flex: 1, justifyContent: 'center', padding: '0.55rem 1rem', fontSize: '0.8rem', gap: '0.4rem' }}>
                    <ExternalLink size={13} /> Live Demo
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline"
                    style={{ padding: '0.55rem 0.9rem', fontSize: '0.8rem' }}>
                    <Github size={13} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all — CTAR arrow style */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginTop: '3rem' }}
        >
          <a href="https://github.com/Brendanmebson" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            View All on GitHub <ArrowUpRight size={15} />
          </a>
        </motion.div>
      </div>

      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={lightboxIdx}
          slides={lightboxImages}
        />
      )}

      <style>{`
        .project-card { transition: transform 0.3s ease; }
        .project-card:hover { transform: translateY(-4px); }
        @media (max-width: 900px) {
          .projects-header-grid { grid-template-columns: 1fr !important; }
          .projects-grid { grid-template-columns: 1fr 1fr !important; }
          .projects-grid > *:first-child { grid-column: span 2; }
        }
        @media (max-width: 600px) {
          .projects-grid { grid-template-columns: 1fr !important; }
          .projects-grid > *:first-child { grid-column: span 1; }
        }
      `}</style>
    </section>
  );
};

export default Projects;
