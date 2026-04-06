export const theme = {
  colors: {
    bg: '#111827',
    bgCard: 'rgba(255,255,255,0.07)',
    bgGlass: 'rgba(255,255,255,0.09)',
    border: 'rgba(255,255,255,0.13)',
    borderHover: 'rgba(120,130,255,0.4)',
    primary: '#7B8CFF',
    primaryLight: '#A5AFFF',
    accent: '#C084FC',
    accentGlow: 'rgba(192,132,252,0.15)',
    text: '#F0F2FF',
    textMuted: 'rgba(240,242,255,0.62)',
    textDim: 'rgba(240,242,255,0.35)',
    gradient: 'linear-gradient(135deg, #7B8CFF 0%, #C084FC 100%)',
    gradientText: 'linear-gradient(135deg, #A5AFFF 0%, #C084FC 60%, #F472B6 100%)',
    gradientSubtle: 'linear-gradient(135deg, rgba(123,140,255,0.12) 0%, rgba(192,132,252,0.08) 100%)',
  },
  fonts: {
    display: "'Clash Display', 'Bebas Neue', sans-serif",
    body: "'Cabinet Grotesk', 'DM Sans', system-ui, sans-serif",
    mono: "'JetBrains Mono', monospace",
  },
  radius: {
    sm: '8px',
    md: '14px',
    lg: '20px',
    xl: '28px',
    pill: '9999px',
  },
  shadow: {
    glow: '0 0 40px rgba(123,140,255,0.15)',
    glowAccent: '0 0 60px rgba(192,132,252,0.2)',
    card: '0 8px 32px rgba(0,0,0,0.4)',
    cardHover: '0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(123,140,255,0.12)',
  },
};

export const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
  @import url('https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&f[]=cabinet-grotesk@400,500,700&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: ${theme.colors.bg};
    --bg-card: ${theme.colors.bgCard};
    --bg-glass: ${theme.colors.bgGlass};
    --border: ${theme.colors.border};
    --border-hover: ${theme.colors.borderHover};
    --primary: ${theme.colors.primary};
    --primary-light: ${theme.colors.primaryLight};
    --accent: ${theme.colors.accent};
    --accent-glow: ${theme.colors.accentGlow};
    --text: ${theme.colors.text};
    --text-muted: ${theme.colors.textMuted};
    --text-dim: ${theme.colors.textDim};
    --gradient: ${theme.colors.gradient};
    --gradient-text: ${theme.colors.gradientText};
    --gradient-subtle: ${theme.colors.gradientSubtle};
    --font-display: ${theme.fonts.display};
    --font-body: ${theme.fonts.body};
    --font-mono: ${theme.fonts.mono};
    --radius-sm: ${theme.radius.sm};
    --radius-md: ${theme.radius.md};
    --radius-lg: ${theme.radius.lg};
    --radius-xl: ${theme.radius.xl};
    --radius-pill: ${theme.radius.pill};
    --shadow-glow: ${theme.shadow.glow};
    --shadow-accent: ${theme.shadow.glowAccent};
    --shadow-card: ${theme.shadow.card};
    --shadow-card-hover: ${theme.shadow.cardHover};
  }

  html { scroll-behavior: smooth; }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: var(--font-body);
    line-height: 1.6;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
  }

  ::selection { background: rgba(123,140,255,0.3); color: white; }
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: var(--bg); }
  ::-webkit-scrollbar-thumb { background: var(--primary); border-radius: 2px; }

  .container {
    max-width: 1160px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .section {
    padding: 120px 0;
    position: relative;
  }

  .gradient-text {
    background: var(--gradient-text);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .glass-card {
    background: var(--bg-glass);
    border: 1px solid var(--border);
    backdrop-filter: blur(20px);
    border-radius: var(--radius-lg);
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
  }

  .glass-card:hover {
    border-color: var(--border-hover);
    box-shadow: var(--shadow-card-hover);
  }

  .btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.75rem;
    border-radius: var(--radius-pill);
    font-family: var(--font-body);
    font-weight: 600;
    font-size: 0.9rem;
    letter-spacing: 0.02em;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    border: none;
    outline: none;
  }

  .btn-primary {
    background: var(--gradient);
    color: white;
    box-shadow: 0 4px 20px rgba(123,140,255,0.3);
  }

  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(123,140,255,0.45);
  }

  .btn-outline {
    background: transparent;
    color: var(--text);
    border: 1px solid var(--border);
  }

  .btn-outline:hover {
    border-color: var(--primary);
    color: var(--primary);
    transform: translateY(-2px);
  }

  .tag {
    display: inline-flex;
    align-items: center;
    padding: 0.3rem 0.8rem;
    border-radius: var(--radius-pill);
    font-size: 0.75rem;
    font-weight: 500;
    font-family: var(--font-mono);
    background: rgba(123,140,255,0.08);
    border: 1px solid rgba(123,140,255,0.2);
    color: var(--primary-light);
    letter-spacing: 0.02em;
  }

  .icon-bubble {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background: var(--bg-glass);
    border: 1px solid var(--border);
    color: var(--text);
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .icon-bubble:hover {
    border-color: var(--primary);
    color: var(--primary);
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(123,140,255,0.2);
  }

  .section-label {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--primary);
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .section-label::before {
    content: '';
    display: inline-block;
    width: 24px;
    height: 1px;
    background: var(--primary);
  }

  .section-title {
    font-family: var(--font-display);
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 1.1;
    margin-bottom: 1.25rem;
  }

  .section-subtitle {
    font-size: 1.1rem;
    color: var(--text-muted);
    max-width: 540px;
    line-height: 1.7;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-12px); }
  }

  @keyframes pulse-glow {
    0%, 100% { opacity: 0.4; }
    50% { opacity: 0.8; }
  }


  /* CTAR-style section numbering */
  .section-num {
    font-family: var(--font-display);
    font-size: 6rem;
    font-weight: 700;
    color: var(--border);
    letter-spacing: -0.05em;
    line-height: 1;
    pointer-events: none;
    user-select: none;
  }

  /* Arch-style inline image chip */
  .inline-chip {
    display: inline-flex;
    border-radius: 9999px;
    overflow: hidden;
    border: 2px solid var(--border);
    vertical-align: middle;
  }

  /* CTAR terminal cursor blink */
  @keyframes cursor-blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
  .cursor { animation: cursor-blink 1s step-end infinite; }

  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(200%); }
  }

  /* Alternating section depth — prevents everything blending into one dark mass */
  #about { background: rgba(255,255,255,0.015); }
  #skills { background: rgba(123,140,255,0.03); }
  #contact { background: rgba(255,255,255,0.015); }

  /* Richer body background */
  body {
    background: linear-gradient(160deg, #1c2340 0%, #111827 30%, #0f1420 100%) fixed;
  }

  /* ===================== RESPONSIVE ===================== */

  /* Container padding on small screens */
  @media (max-width: 768px) {
    .container { padding: 0 1.25rem; }
    .section { padding: 80px 0; }
  }
  @media (max-width: 480px) {
    .container { padding: 0 1rem; }
    .section { padding: 60px 0; }
  }

  /* Header */
  @media (max-width: 768px) {
    .desktop-nav, .desktop-social { display: none !important; }
    .mobile-menu-btn { display: flex !important; }
  }

  /* Hero */
  @media (max-width: 960px) {
    .hero-main-grid { grid-template-columns: 1fr !important; }
    .hero-bento-wrap { display: none !important; }
  }
  @media (max-width: 768px) {
    .hero-top-row { flex-direction: column !important; gap: 0.5rem !important; align-items: flex-start !important; }
    .hero-sidebar { display: none !important; }
  }

  /* About */
  @media (max-width: 900px) {
    .about-header-grid { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
    .services-grid { grid-template-columns: 1fr 1fr !important; border-radius: var(--radius-md) !important; }
    .about-lower-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
  }
  @media (max-width: 600px) {
    .services-grid { grid-template-columns: 1fr !important; }
  }

  /* Projects */
  @media (max-width: 900px) {
    .projects-header-grid { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
    .projects-grid { grid-template-columns: 1fr 1fr !important; }
    .projects-grid > *:first-child { grid-column: span 2 !important; }
  }
  @media (max-width: 600px) {
    .projects-grid { grid-template-columns: 1fr !important; }
    .projects-grid > *:first-child { grid-column: span 1 !important; }
  }

  /* Skills */
  @media (max-width: 768px) {
    .skills-tabs { gap: 0.4rem !important; }
    .skills-tabs button { padding: 0.4rem 0.9rem !important; font-size: 0.8rem !important; }
  }

  /* Contact */
  @media (max-width: 900px) {
    .contact-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
  }
  @media (max-width: 500px) {
    .form-row { grid-template-columns: 1fr !important; }
  }

  /* Footer */
  @media (max-width: 900px) {
    .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 2rem !important; }
  }
  @media (max-width: 600px) {
    .footer-grid { grid-template-columns: 1fr !important; }
    .footer-bottom { flex-direction: column !important; gap: 1rem !important; text-align: center !important; }
  }

  /* Button wrapping on small screens */
  @media (max-width: 480px) {
    .btn { padding: 0.65rem 1.25rem !important; font-size: 0.82rem !important; }
  }

  /* Tags wrapping */
  @media (max-width: 480px) {
    .tag { font-size: 0.68rem !important; padding: 0.25rem 0.6rem !important; }
  }

`;
