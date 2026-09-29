import React, { useEffect, useRef } from 'react';

interface GoldParticlesProps {
  density?: number;
  showPetals?: boolean;
}

export const GoldParticles: React.FC<GoldParticlesProps> = ({ density = 40, showPetals = true }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    interface Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      maxOpacity: number;
      pulseSpeed: number;
      type: 'gold' | 'petal' | 'star' | 'bokeh';
      rotation: number;
      rotSpeed: number;
      color: string;
    }

    const particles: Particle[] = [];
    const count = Math.min(density, Math.floor(width / 22));

    // Add a few large soft glowing golden bokeh orbs
    for (let b = 0; b < 6; b++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 45 + 30,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: (Math.random() - 0.5) * 0.2,
        opacity: Math.random() * 0.15 + 0.05,
        maxOpacity: 0.25,
        pulseSpeed: 0.003,
        type: 'bokeh',
        rotation: 0,
        rotSpeed: 0,
        color: '#D4AF37'
      });
    }

    for (let i = 0; i < count; i++) {
      const isPetal = showPetals && Math.random() > 0.65;
      const isStar = !isPetal && Math.random() > 0.7;

      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: isPetal ? Math.random() * 6 + 4 : Math.random() * 2.5 + 0.8,
        speedX: (Math.random() - 0.4) * (isPetal ? 0.7 : 0.35),
        speedY: isPetal ? Math.random() * 0.8 + 0.4 : (Math.random() - 0.2) * 0.35,
        opacity: Math.random() * 0.6 + 0.2,
        maxOpacity: Math.random() * 0.6 + 0.3,
        pulseSpeed: Math.random() * 0.015 + 0.006,
        type: isPetal ? 'petal' : isStar ? 'star' : 'gold',
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.025,
        color: isPetal 
          ? (Math.random() > 0.4 ? '#FFF8EB' : '#FDE68A') 
          : (Math.random() > 0.5 ? '#D4AF37' : '#F6E05E')
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.rotation += p.rotSpeed;
        p.opacity += p.pulseSpeed;

        if (p.opacity > p.maxOpacity || p.opacity < 0.05) {
          p.pulseSpeed = -p.pulseSpeed;
        }

        if (p.y > height + 50) {
          p.y = -50;
          p.x = Math.random() * width;
        }
        if (p.x > width + 50) p.x = -50;
        if (p.x < -50) p.x = width + 50;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.globalAlpha = Math.max(0, Math.min(1, p.opacity));

        if (p.type === 'bokeh') {
          // Large soft radial light sphere
          const g = ctx.createRadialGradient(0, 0, 0, 0, 0, p.size);
          g.addColorStop(0, 'rgba(255, 220, 120, 0.4)');
          g.addColorStop(0.5, 'rgba(212, 175, 55, 0.15)');
          g.addColorStop(1, 'transparent');
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.type === 'petal') {
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size, p.size * 1.8, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.strokeStyle = 'rgba(212, 175, 55, 0.2)';
          ctx.lineWidth = 0.5;
          ctx.stroke();
        } else if (p.type === 'star') {
          ctx.fillStyle = '#FFF2A8';
          ctx.beginPath();
          const s = p.size * 1.4;
          ctx.moveTo(0, -s);
          ctx.quadraticCurveTo(0, 0, s, 0);
          ctx.quadraticCurveTo(0, 0, 0, s);
          ctx.quadraticCurveTo(0, 0, -s, 0);
          ctx.quadraticCurveTo(0, 0, 0, -s);
          ctx.fill();
        } else {
          const radGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, p.size * 2);
          radGrad.addColorStop(0, '#FFF6BD');
          radGrad.addColorStop(0.5, p.color);
          radGrad.addColorStop(1, 'transparent');
          ctx.fillStyle = radGrad;
          ctx.beginPath();
          ctx.arc(0, 0, p.size * 1.6, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [density, showPetals]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-20 h-full w-full opacity-80"
      aria-hidden="true"
    />
  );
};
