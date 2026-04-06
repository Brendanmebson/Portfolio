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
    technologies: ['React', 'React Native', 'Supabase', 'Tailwind CSS'],
    images: ['https://picsum.photos/800/500?random=101', 'https://picsum.photos/800/500?random=102'],
    github: 'https://github.com/Brendanmebson',
    demo: '#',
    featured: true,
  },
  {
    title: 'Weekly Report Aggregator',
    description: 'Role-based attendance tracking and automated PDF report generation.',
    detail: 'Full-stack MERN app with role-based access, smart attendance tracking, and automated weekly PDF generation.',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    images: ['https://picsum.photos/800/500?random=103', 'https://picsum.photos/800/500?random=104'],
    github: 'https://github.com/Brendanmebson',
    demo: '#',
    featured: true,
  },
  {
    title: 'Personal Finance Tracker',
    description: 'Budget maker and expense tracker with real-time analytics.',
    detail: 'Responsive React app with Chart.js visualizations, expense categorization, and budget goals.',
    technologies: ['React', 'Tailwind CSS', 'Chart.js', 'APIs'],
    images: ['https://picsum.photos/800/500?random=105', 'https://picsum.photos/800/500?random=106'],
    github: 'https://github.com/Brendanmebson',
    demo: '#',
  },
  {
    title: 'Real-Time Messaging App',
    description: 'WebSocket-powered chat with a sleek, modern UI.',
    detail: 'Real-time chat with TypeScript, WebSockets, and a polished UI supporting rooms, threads, and online presence.',
    technologies: ['React', 'TypeScript', 'WebSockets'],
    images: ['https://picsum.photos/800/500?random=107', 'https://picsum.photos/800/500?random=108'],
    github: 'https://github.com/Brendanmebson',
    demo: '#',
  },
  {
    title: 'Crypto Dashboard',
    description: 'Live crypto portfolio monitoring with charts and alerts.',
    detail: 'Pulls live prices from crypto APIs, renders interactive Chart.js graphs, and supports portfolio tracking.',
    technologies: ['TypeScript', 'React', 'Crypto APIs'],
    images: ['https://picsum.photos/800/500?random=109', 'https://picsum.photos/800/500?random=110'],
    github: 'https://github.com/Brendanmebson',
    demo: '#',
  },
  {
    title: 'QR Code Generator',
    description: 'Customizable QR code generation for URLs and text.',
    detail: 'Lightweight tool generating styled, customizable QR codes instantly from any URL or text input.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'QR Code API'],
    images: ['https://picsum.photos/800/500?random=112', 'https://picsum.photos/800/500?random=113'],
    github: 'https://github.com/Brendanmebson',
    demo: '#',
  },
];

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 350,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

const ProjectCard = ({ project, index, onImageClick, large }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.06 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: '1px solid var(--line)',
        borderColor: hovered ? 'var(--line-bright)' : 'var(--line)',
        background: hovered ? 'var(--bg-2)' : 'var(--bg)',
        transition: 'border-color 0.25s, background 0.25s',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      {/* Image */}
      <div style={{ position: 'relative', overflow: 'hidden', flexShrink: 0 }}>
        <Slider {...sliderSettings}>
          {project.images.map((img, idx) => (
            <div key={idx} onClick={() => onImageClick(project.images, idx)} style={{ cursor: 'zoom-in' }}>
              <img
                src={img}
                alt={project.title}
                style={{
                  width: '100%',
                  height: large ? '280px' : '200px',
                  objectFit: 'cover',
                  display: 'block',
                  filter: 'grayscale(20%) contrast(1.05)',
                  transition: 'filter 0.3s',
                }}
              />
            </div>
          ))}
        </Slider>

        {/* Overlay number */}
        <div style={{
          position: 'absolute', top: '0.75rem', left: '0.75rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.6rem',
          letterSpacing: '0.08em',
          color: 'rgba(255,255,255,0.4)',
          background: 'rgba(0,0,0,0.4)',
          backdropFilter: 'blur(4px)',
          padding: '0.2rem 0.5rem',
        }}>
          {String(index + 1).padStart(2, '0')}
        </div>

        {project.featured && (
          <div style={{
            position: 'absolute', top: '0.75rem', right: '0.75rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.55rem',
            letterSpacing: '0.12em',
            color: '#0a0a0a',
            background: 'var(--accent)',
            padding: '0.2rem 0.5rem',
          }}>
            FEATURED
          </div>
        )}
      </div>

      {/* Content */}
      <div style={{
        padding: '1.5rem',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        borderTop: '1px solid var(--line)',
      }}>
        <div style={{ flex: 1 }}>
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: large ? '1.5rem' : '1.1rem',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            marginBottom: '0.5rem',
            lineHeight: 1.1,
          }}>
            {project.title}
          </h3>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-2)', lineHeight: 1.65, marginBottom: '1rem' }}>
            {project.detail}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.25rem' }}>
            {project.technologies.map(tech => (
              <span key={tech} className="tag">{tech}</span>
            ))}
          </div>
        </div>

        <div style={{
          display: 'flex',
          gap: '0.5rem',
          paddingTop: '1rem',
          borderTop: '1px solid var(--line)',
        }}>
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-solid"
            style={{ flex: 1, justifyContent: 'center', padding: '0.55rem 1rem', fontSize: '0.68rem' }}>
            Live Demo <ExternalLink size={11} />
          </a>
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost"
            style={{ padding: '0.55rem 0.9rem' }}>
            <Github size={12} />
          </a>
        </div>
      </div>
    </motion.article>
  );
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
    <section id="projects" style={{ borderBottom: '1px solid var(--line)' }}>
      {/* Section label */}
      <div style={{ borderBottom: '1px solid var(--line)' }}>
        <div className="wrap" style={{ padding: '0.6rem var(--pad)', display: 'flex', justifyContent: 'space-between' }}>
          <span className="mono-label">03 — Work</span>
          <span className="mono-label">{projects.length} projects</span>
        </div>
      </div>

      <div className="wrap" style={{ padding: 'clamp(3rem, 8vw, 6rem) var(--pad)' }}>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3rem',
            alignItems: 'end',
            marginBottom: '3rem',
            paddingBottom: '2rem',
            borderBottom: '1px solid var(--line)',
          }}
          className="projects-heading-grid"
        >
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 5.5vw, 5rem)',
            fontWeight: 900,
            letterSpacing: '-0.03em',
            lineHeight: 0.95,
            margin: 0,
          }}>
            Selected<br />
            <span style={{ fontStyle: 'italic', fontWeight: 300 }}>Projects.</span>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-2)', lineHeight: 1.75, margin: 0, maxWidth: '380px' }}>
            A curated selection spanning mobile apps, full-stack platforms,
            and data-driven interfaces.
          </p>
        </motion.div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1px',
          background: 'var(--line)',
          border: '1px solid var(--line)',
        }} className="projects-grid">
          {projects.map((project, i) => (
            <div
              key={project.title}
              style={{
                background: 'var(--bg)',
                ...(project.featured && i === 0 ? { gridColumn: 'span 2' } : {}),
              }}
              className={project.featured && i === 0 ? 'featured-project' : ''}
            >
              <ProjectCard
                project={project}
                index={i}
                onImageClick={openLightbox}
                large={project.featured && i === 0}
              />
            </div>
          ))}
        </div>

        {/* Footer link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            marginTop: '2.5rem',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <a href="https://github.com/Brendanmebson" target="_blank" rel="noopener noreferrer"
            className="btn btn-ghost">
            View all on GitHub <ArrowUpRight size={12} />
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
        @media (max-width: 900px) {
          .projects-heading-grid { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
          .projects-grid { grid-template-columns: 1fr 1fr !important; }
          .featured-project { grid-column: span 2 !important; }
        }
        @media (max-width: 600px) {
          .projects-grid { grid-template-columns: 1fr !important; }
          .featured-project { grid-column: span 1 !important; }
        }
      `}</style>
    </section>
  );
};

export default Projects;
