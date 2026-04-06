export const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,500;0,600;1,400&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,700;0,9..144,900;1,9..144,300;1,9..144,700&family=Syne:wght@400;600;700;800&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #0a0a0a;
    --bg-2: #111111;
    --bg-3: #181818;
    --surface: #1e1e1e;
    --line: rgba(255,255,255,0.09);
    --line-bright: rgba(255,255,255,0.18);
    --text: #f0ede8;
    --text-2: rgba(240,237,232,0.55);
    --text-3: rgba(240,237,232,0.28);
    --accent: #e8ff47;
    --accent-dim: rgba(232,255,71,0.12);
    --accent-border: rgba(232,255,71,0.3);
    --red: #ff4d4d;
    --font-display: 'Fraunces', Georgia, serif;
    --font-sans: 'Syne', sans-serif;
    --font-mono: 'IBM Plex Mono', monospace;
    --max-w: 1200px;
    --pad: clamp(1.25rem, 4vw, 3rem);
  }

  html { scroll-behavior: smooth; }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: var(--font-sans);
    font-size: 16px;
    line-height: 1.6;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    cursor: crosshair;
  }

  ::selection { background: var(--accent); color: #0a0a0a; }
  ::-webkit-scrollbar { width: 3px; }
  ::-webkit-scrollbar-track { background: var(--bg); }
  ::-webkit-scrollbar-thumb { background: var(--accent); }

  a { color: inherit; text-decoration: none; }

  .wrap {
    max-width: var(--max-w);
    margin: 0 auto;
    padding: 0 var(--pad);
  }

  section { position: relative; }

  /* Rule lines */
  .h-rule {
    border: none;
    border-top: 1px solid var(--line);
    margin: 0;
  }

  /* Mono label */
  .mono-label {
    font-family: var(--font-mono);
    font-size: 0.65rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--text-3);
  }

  /* Accent chip */
  .chip {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    font-family: var(--font-mono);
    font-size: 0.65rem;
    letter-spacing: 0.08em;
    padding: 0.25rem 0.6rem;
    border: 1px solid var(--line-bright);
    border-radius: 2px;
    color: var(--text-2);
    background: transparent;
    transition: border-color 0.2s, color 0.2s;
  }

  .chip:hover {
    border-color: var(--accent-border);
    color: var(--accent);
  }

  .chip.active {
    border-color: var(--accent);
    color: var(--accent);
    background: var(--accent-dim);
  }

  /* Tech tag */
  .tag {
    font-family: var(--font-mono);
    font-size: 0.6rem;
    letter-spacing: 0.06em;
    padding: 0.2rem 0.5rem;
    border: 1px solid var(--line);
    color: var(--text-3);
    border-radius: 1px;
  }

  /* Buttons */
  .btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.7rem 1.6rem;
    font-family: var(--font-mono);
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    border: none;
    border-radius: 1px;
    cursor: pointer;
    transition: all 0.2s ease;
    text-decoration: none;
  }

  .btn-solid {
    background: var(--accent);
    color: #0a0a0a;
    font-weight: 600;
  }
  .btn-solid:hover { background: #fff; }

  .btn-ghost {
    background: transparent;
    color: var(--text-2);
    border: 1px solid var(--line-bright);
  }
  .btn-ghost:hover { border-color: var(--text-2); color: var(--text); }

  /* Icon link */
  .icon-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border: 1px solid var(--line);
    color: var(--text-2);
    border-radius: 1px;
    transition: all 0.2s;
    cursor: pointer;
  }
  .icon-link:hover { border-color: var(--accent); color: var(--accent); }

  /* Noise overlay */
  body::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 9999;
    opacity: 0.4;
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes spin { to { transform: rotate(360deg); } }

  @media (max-width: 768px) {
    .wrap { padding: 0 1.25rem; }
  }
`;
