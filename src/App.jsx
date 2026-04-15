import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { globalStyles } from './components/theme';
import FloatingIcons from './components/FloatingIcons';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AllProjectsPage from './pages/AllProjectsPage';

const HomePage = () => (
  <div style={{ position: 'relative', minHeight: '100vh', background: 'var(--bg)', overflowX: 'hidden' }}>
    <FloatingIcons />
    <Header />
    <main>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
    <Footer />
  </div>
);

const App = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = globalStyles;
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<AllProjectsPage />} />
    </Routes>
  );
};

export default App;
