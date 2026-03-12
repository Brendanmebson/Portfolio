import React, { useEffect, useRef } from 'react';
import {
  FaReact, FaJs, FaNodeJs, FaPython, FaJava, FaGitAlt, FaDocker,
  FaCss3Alt, FaHtml5, FaCloud
} from 'react-icons/fa';
import {
  SiTypescript, SiMongodb, SiFirebase, SiPhp, SiFigma,
  SiKotlin, SiCplusplus, SiTailwindcss, SiExpress, SiSupabase
} from 'react-icons/si';

const ICONS = [
  { icon: <FaReact />, size: 72 },
  { icon: <FaJs />, size: 68 },
  { icon: <SiTypescript />, size: 70 },
  { icon: <FaNodeJs />, size: 74 },
  { icon: <FaPython />, size: 68 },
  { icon: <FaJava />, size: 72 },
  { icon: <SiMongodb />, size: 70 },
  { icon: <FaGitAlt />, size: 68 },
  { icon: <FaCss3Alt />, size: 70 },
  { icon: <FaHtml5 />, size: 72 },
  { icon: <SiFirebase />, size: 73 },
  { icon: <FaCloud />, size: 75 },
  { icon: <FaDocker />, size: 72 },
  { icon: <SiKotlin />, size: 70 },
  { icon: <SiCplusplus />, size: 68 },
  { icon: <SiPhp />, size: 66 },
  { icon: <SiFigma />, size: 68 },
  { icon: <SiTailwindcss />, size: 72 },
  { icon: <SiExpress />, size: 74 },
  { icon: <SiSupabase />, size: 70 },
];

const FloatingIcons = () => {
  const iconRefs = useRef([]);
  const velocities = useRef([]);
  const animRef = useRef();

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    iconRefs.current.forEach((ref, i) => {
      if (ref) {
        ref.style.left = `${Math.random() * (width - ICONS[i].size)}px`;
        ref.style.top = `${Math.random() * (height - ICONS[i].size)}px`;
        velocities.current[i] = {
          dx: (Math.random() - 0.5) * 0.4,
          dy: (Math.random() - 0.5) * 0.4,
        };
      }
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
            const minDist = (ICONS[i].size + ICONS[j].size) / 1.4;
            if (dist < minDist && dist > 0) {
              const angle = Math.atan2(ddy, ddx);
              x += Math.cos(angle) * 0.6;
              y += Math.sin(angle) * 0.6;
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
            color: 'rgba(123, 140, 255, 0.025)',
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        >
          {item.icon}
        </div>
      ))}
    </div>
  );
};

export default FloatingIcons;
