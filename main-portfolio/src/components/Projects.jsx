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
    detail: 'Lightweight tool generating styled, downloadable QR codes instantly. Supports custom colors, logo embedding, and vCard encoding.',
    technologies: ['JavaScript', 'CSS', 'QR Code API'],
    images: ['https://picsum.photos/800/500?random=112', 'https://picsum.photos/800/500?random=113'],
    github: 'https://github.com/Brendanmebson',
    demo: '#',
  },
  {
    title: 'E-Commerce Storefront',
    description: 'Full-featured online store with cart, checkout, and order management.',
    detail: 'Built with React and a Node/Express backend. Includes product filtering, cart management, Paystack payment integration, and an admin order dashboard.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Paystack'],
    images: ['https://picsum.photos/800/500?random=120', 'https://picsum.photos/800/500?random=121'],
    github: 'https://github.com/Brendanmebson',
    demo: '#',
  },
  {
    title: 'AI Study Assistant',
    description: 'GPT-powered tool that summarizes notes and generates quiz questions.',
    detail: 'Students paste lecture notes and get AI-generated summaries, flashcards, and multiple-choice quizzes. Built with the OpenAI API and a React frontend.',
    technologies: ['React', 'OpenAI API', 'Node.js', 'TypeScript'],
    images: ['https://picsum.photos/800/500?random=130', 'https://picsum.photos/800/500?random=131'],
    github: 'https://github.com/Brendanmebson',
    demo: '#',
  },
  {
    title: 'Hotel Booking Platform',
    description: 'Room search, availability calendar, and full booking management.',
    detail: 'Full-stack booking platform with real-time availability checking, date range selection, guest management, and confirmation email dispatch via Nodemailer.',
    technologies: ['React', 'Express.js', 'PostgreSQL', 'Supabase'],
    images: ['https://picsum.photos/800/500?random=140', 'https://picsum.photos/800/500?random=141'],
    github: 'https://github.com/Brendanmebson',
    demo: '#',
  },
  {
    title: 'Workout Tracker',
    description: 'Log workouts, track progress, and visualize fitness trends over time.',
    detail: 'Mobile-first React Native app for logging sets, reps, and weights. Generates weekly progress charts, personal bests, and streaks synced via Firebase.',
    technologies: ['React Native', 'Firebase', 'Kotlin', 'Chart.js'],
    images: ['https://picsum.photos/800/500?random=150', 'https://picsum.photos/800/500?random=151'],
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
        borderColor: hovered ? 'var(--line-bright)' : 'transparent',
        background: hovered ? 'var(--bg-2)' : 'var(--bg)',
        transition: 'border-color 0.25s, background 0.25s',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        height: '100%',
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

        <div style={{
          position: 'absolute', top: '0.75rem', left: '0.75rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.6rem',
          letterSpacing: '0.08em',
          color: 'rgba(255,255,255,0.5)',
          background: 'rgba(0,0,0,0.5)',
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
            fontSize: large ? '1.4rem' : '1.05rem',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            marginBottom: '0.5rem',
            lineHeight: 1.15,
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

  // Split: first project gets its own wide row, rest go in a 3-col grid
  const [featured, ...rest] = projects;

  return (
    <section id="projects" style={{ borderBottom: '1px solid var(--line)' }}>
      {/* Section label */}
      <div style={{ borderBottom: '1px solid var(--line)' }}>
        <div className="wrap" style={{ padding: '0.6rem var(--pad)', display: 'flex', justifyContent: 'space-between' }}>
          <span className="mono-label">03 — Work</span>
          <span className="mono-label">{projects.length} projects</span>
        </div>
      </div>

      <div className="wrap" style={{ padding: 'clamp(3rem, 8vw, 6rem) var(--pad)', overflowX: 'hidden' }}>

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
          <p style={{ fontSize: '0.95rem', color: 'var(--text-2)', lineHeight: 1.75, margin: 0 }}>
            A curated selection spanning mobile apps, full-stack platforms,
            and data-driven interfaces.
          </p>
        </motion.div>

        {/* Featured project — full width row */}
        <div style={{
          outline: '1px solid var(--line)',
          marginBottom: '1px',
          overflow: 'hidden',
          width: '100%',
          boxSizing: 'border-box',
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
          }} className="featured-inner">
            {/* Image half */}
            <div style={{ position: 'relative', overflow: 'hidden' }}>
              <Slider {...sliderSettings}>
                {featured.images.map((img, idx) => (
                  <div key={idx} onClick={() => openLightbox(featured.images, idx)} style={{ cursor: 'zoom-in' }}>
                    <img
                      src={img}
                      alt={featured.title}
                      style={{
                        width: '100%',
                        height: '340px',
                        objectFit: 'cover',
                        display: 'block',
                        filter: 'grayscale(15%) contrast(1.05)',
                      }}
                    />
                  </div>
                ))}
              </Slider>
              <div style={{
                position: 'absolute', top: '0.75rem', left: '0.75rem',
                fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.08em',
                color: 'rgba(255,255,255,0.5)', background: 'rgba(0,0,0,0.5)',
                backdropFilter: 'blur(4px)', padding: '0.2rem 0.5rem',
              }}>01</div>
              <div style={{
                position: 'absolute', top: '0.75rem', right: '0.75rem',
                fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.12em',
                color: '#0a0a0a', background: 'var(--accent)', padding: '0.2rem 0.5rem',
              }}>FEATURED</div>
            </div>

            {/* Content half */}
            <div style={{
              padding: '2.5rem',
              borderLeft: '1px solid var(--line)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              background: 'var(--bg)',
            }}>
              <div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.8rem',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  marginBottom: '0.75rem',
                }}>
                  {featured.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-2)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                  {featured.detail}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {featured.technologies.map(tech => (
                    <span key={tech} className="tag">{tech}</span>
                  ))}
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', paddingTop: '2rem', borderTop: '1px solid var(--line)', marginTop: '2rem' }}>
                <a href={featured.demo} target="_blank" rel="noopener noreferrer" className="btn btn-solid"
                  style={{ flex: 1, justifyContent: 'center', fontSize: '0.7rem' }}>
                  Live Demo <ExternalLink size={11} />
                </a>
                <a href={featured.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost"
                  style={{ padding: '0.55rem 0.9rem' }}>
                  <Github size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Remaining projects — 3-col grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1px',
          background: 'var(--line)',
          outline: '1px solid var(--line)',
          width: '100%',
          boxSizing: 'border-box',
          overflow: 'hidden',
        }} className="projects-grid">
          {rest.map((project, i) => (
            <div key={project.title} style={{ background: 'var(--bg)', minWidth: 0 }}>
              <ProjectCard
                project={project}
                index={i + 1}
                onImageClick={openLightbox}
                large={false}
              />
            </div>
          ))}
        </div>

        {/* Footer link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'flex-end' }}
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
          .featured-inner { grid-template-columns: 1fr !important; }
          .featured-inner > *:last-child { border-left: none !important; border-top: 1px solid var(--line); }
          .projects-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .projects-grid { grid-template-columns: 1fr !important; }
          .featured-inner img { height: 220px !important; }
        }
      `}</style>
    </section>
  );
};

export default Projects;