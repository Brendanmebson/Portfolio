import React, { useEffect, useRef } from 'react';
import {
  FaReact, FaJs, FaNodeJs, FaPython, FaJava, FaGitAlt, FaDocker,
  FaCss3Alt, FaHtml5, FaCloud, FaVuejs, FaWordpress, FaSlack, FaGithub,
} from 'react-icons/fa';
import {
  SiTypescript, SiMongodb, SiFirebase, SiPhp, SiFigma,
  SiKotlin, SiCplusplus, SiTailwindcss, SiExpress, SiSupabase,
  SiNextdotjs, SiAngular, SiMui, SiPostgresql, SiVercel,
  SiNotion, SiCanva,
} from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';

const ICONS = [
  { icon: <FaReact />, size: 64 },
  { icon: <FaJs />, size: 60 },
  { icon: <SiTypescript />, size: 62 },
  { icon: <FaNodeJs />, size: 66 },
  { icon: <FaPython />, size: 60 },
  { icon: <FaJava />, size: 64 },
  { icon: <SiMongodb />, size: 62 },
  { icon: <FaGitAlt />, size: 60 },
  { icon: <FaCss3Alt />, size: 62 },
  { icon: <FaHtml5 />, size: 64 },
  { icon: <SiFirebase />, size: 65 },
  { icon: <FaCloud />, size: 66 },
  { icon: <FaDocker />, size: 64 },
  { icon: <SiKotlin />, size: 62 },
  { icon: <SiCplusplus />, size: 60 },
  { icon: <SiPhp />, size: 58 },
  { icon: <SiFigma />, size: 60 },
  { icon: <SiTailwindcss />, size: 64 },
  { icon: <SiExpress />, size: 66 },
  { icon: <SiSupabase />, size: 62 },
  { icon: <SiNextdotjs />, size: 64 },
  { icon: <SiAngular />, size: 62 },
  { icon: <SiMui />, size: 62 },
  { icon: <SiPostgresql />, size: 64 },
  { icon: <FaVuejs />, size: 62 },
  { icon: <TbBrandVscode />, size: 62 },
  { icon: <SiNotion />, size: 60 },
  { icon: <FaSlack />, size: 60 },
  { icon: <FaGithub />, size: 62 },
  { icon: <SiVercel />, size: 60 },
  { icon: <SiCanva />, size: 60 },
  { icon: <FaWordpress />, size: 62 },
];

const FloatingIcons = () => {
  const iconRefs = useRef([]);
  const velocities = useRef([]);
  const animRef = useRef();

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    iconRefs.current.forEach((ref, i) => {
      if (!ref) return;
      ref.style.left = `${Math.random() * (width - ICONS[i].size)}px`;
      ref.style.top = `${Math.random() * (height - ICONS[i].size)}px`;
      velocities.current[i] = {
        dx: (Math.random() - 0.5) * 0.35,
        dy: (Math.random() - 0.5) * 0.35,
      };
    });

    const animate = () => {
      iconRefs.current.forEach((refA, i) => {
        if (!refA) return;
        let x = parseFloat(refA.style.left);
        let y = parseFloat(refA.style.top);
        let { dx, dy } = velocities.current[i];

        x += dx;
        y += dy;

        if (x <= 0 || x >= width - ICONS[i].size) velocities.current[i].dx *= -1;
        if (y <= 0 || y >= height - ICONS[i].size) velocities.current[i].dy *= -1;

        iconRefs.current.forEach((refB, j) => {
          if (i !== j && refB) {
            const bx = parseFloat(refB.style.left);
            const by = parseFloat(refB.style.top);
            const ddx = x - bx;
            const ddy = y - by;
            const dist = Math.sqrt(ddx * ddx + ddy * ddy);
            const minDist = (ICONS[i].size + ICONS[j].size) / 1.5;
            if (dist < minDist && dist > 0) {
              const angle = Math.atan2(ddy, ddx);
              x += Math.cos(angle) * 0.5;
              y += Math.sin(angle) * 0.5;
            }
          }
        });

        refA.style.left = `${x}px`;
        refA.style.top = `${y}px`;
      });

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current); };
  }, []);

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      overflow: 'hidden',
      pointerEvents: 'none',
      zIndex: 0,
    }}>
      {ICONS.map((item, index) => (
        <div
          key={index}
          ref={(el) => { iconRefs.current[index] = el; }}
          style={{
            position: 'absolute',
            fontSize: `${item.size}px`,
            /*
              Outlined effect:
              - color: transparent → hides the filled body of the icon
              - WebkitTextStroke: draws a thin yellow outline around the icon paths
              - filter drop-shadow: adds a barely-there glow matching the accent
            */
            color: 'transparent',
            WebkitTextStroke: '1.2px rgba(232, 255, 71, 0.13)',
            filter: 'drop-shadow(0 0 4px rgba(232, 255, 71, 0.05))',
            pointerEvents: 'none',
            userSelect: 'none',
            lineHeight: 1,
          }}
        >
          {item.icon}
        </div>
      ))}
    </div>
  );
};

export default FloatingIcons;
