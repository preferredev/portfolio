import React, { useEffect, useRef } from "react";

export const Aesthetics: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    // Mouse tracking for CSS Custom Properties (Dock & mouse-glow CSS relies on this)
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Canvas particle engine
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Dynamic resize handler
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      opacity: number;
      fadeSpeed: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height + height; // Start below or randomly
        this.size = Math.random() * 2 + 0.5;
        this.speedY = -(Math.random() * 0.4 + 0.1); // float upwards
        this.speedX = (Math.random() - 0.5) * 0.2;
        this.opacity = Math.random() * 0.6 + 0.1;
        this.fadeSpeed = Math.random() * 0.005 + 0.001;
      }

      update() {
        this.y += this.speedY;
        this.x += this.speedX;

        // Mouse avoidance physics
        const dx = mouseRef.current.x - this.x;
        const dy = mouseRef.current.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 120) {
          const force = (120 - distance) / 120;
          this.x -= (dx / distance) * force * 1.5;
          this.y -= (dy / distance) * force * 1.5;
        }

        // Loop screen edges
        if (this.y < -10) {
          this.y = height + 10;
          this.x = Math.random() * width;
        }
        if (this.x < -10) this.x = width + 10;
        if (this.x > width + 10) this.x = -10;
      }

      draw(c: CanvasRenderingContext2D) {
        c.beginPath();
        c.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        c.fillStyle = `rgba(192, 193, 255, ${this.opacity})`; // matching primary light-indigo
        c.shadowBlur = 4;
        c.shadowColor = "rgba(192, 193, 255, 0.4)";
        c.fill();
        c.shadowBlur = 0; // reset
      }
    }

    // Spawn particles
    const particleCount = Math.min(60, Math.floor((width * height) / 30000));
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      const p = new Particle();
      p.y = Math.random() * height; // initial distribution
      particles.push(p);
    }

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Render & Update particles
      particles.forEach((p) => {
        p.update();
        p.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* HTML Mouse Glow tracking backing */}
      <div className="mouse-glow hidden md:block" />
      {/* Stationary Large Ambient Blue Glow backing */}
      <div className="ambient-glow" />
      {/* High Performance Particles canvas */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-screen h-screen pointer-events-none z-[-2] overflow-hidden"
      />
    </>
  );
};
