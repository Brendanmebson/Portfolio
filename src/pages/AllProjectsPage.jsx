import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowLeft } from 'lucide-react';
import Slider from 'react-slick';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { globalStyles } from '../components/theme';
import FloatingIcons from '../components/FloatingIcons';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { projects } from '../data/projectsData';

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 350,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

const ProjectCard = ({ project, index, onImageClick }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.04 }}
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
                  height: '200px',
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
            fontSize: '1.05rem',
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

const AllProjectsPage = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [lightboxIdx, setLightboxIdx] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openLightbox = (imgs, idx) => {
    setLightboxImages(imgs.map((src) => ({ src })));
    setLightboxIdx(idx);
    setLightboxOpen(true);
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: 'var(--bg)', overflowX: 'hidden' }}>
      <FloatingIcons />
      <Header />

      <main>
        <section style={{ borderBottom: '1px solid var(--line)', paddingTop: '60px' }}>
          {/* Section label */}
          <div style={{ borderBottom: '1px solid var(--line)' }}>
            <div className="wrap" style={{ padding: '0.6rem var(--pad)', display: 'flex', justifyContent: 'space-between' }}>
              <span className="mono-label">All Projects</span>
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
              <div>
                <Link
                  to="/"
                  className="btn btn-ghost"
                  style={{
                    marginBottom: '1.5rem',
                    display: 'inline-flex',
                    fontSize: '0.7rem',
                    padding: '0.4rem 0.8rem',
                  }}
                >
                  <ArrowLeft size={12} /> Back to Home
                </Link>
                <h2 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.5rem, 5.5vw, 5rem)',
                  fontWeight: 900,
                  letterSpacing: '-0.03em',
                  lineHeight: 0.95,
                  margin: 0,
                }}>
                  All<br />
                  <span style={{ fontStyle: 'italic', fontWeight: 300 }}>Projects.</span>
                </h2>
              </div>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-2)', lineHeight: 1.75, margin: 0 }}>
                The complete collection — mobile apps, full-stack platforms,
                data-driven interfaces, and everything in between.
              </p>
            </motion.div>

            {/* All projects — 3-col grid */}
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
              {projects.map((project, i) => (
                <div key={project.title} style={{ background: 'var(--bg)', minWidth: 0 }}>
                  <ProjectCard
                    project={project}
                    index={i}
                    onImageClick={openLightbox}
                  />
                </div>
              ))}
            </div>

            {/* Back link */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'flex-start' }}
            >
              <Link to="/" className="btn btn-ghost">
                <ArrowLeft size={12} /> Back to Home
              </Link>
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
            }
            @media (max-width: 650px) {
              .projects-grid { grid-template-columns: 1fr !important; }
              .wrap { padding: 2rem 1.25rem !important; }
            }
          `}</style>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AllProjectsPage;
