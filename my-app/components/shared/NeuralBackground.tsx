"use client";

import { useEffect, useRef, useState } from "react";

type Theme = "light" | "dark" | "contrast";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  phase: number;
};

type Orbit = {
  radius: number;
  angle: number;
  speed: number;
  tilt: number;
  alpha: number;
};

type Spark = {
  x: number;
  y: number;
  speed: number;
  alpha: number;
  width: number;
  band: number;
};

type HexEdge = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  alpha: number;
};

type Particle = {
  x: number;
  y: number;
  size: number;
  speed: number;
  drift: number;
  phase: number;
};

type Beam = {
  angle: number;
  offset: number;
  width: number;
  alpha: number;
  speed: number;
};

const lightPalette = [
  "rgba(164, 170, 182, 0.26)",
  "rgba(186, 192, 202, 0.22)",
  "rgba(138, 144, 156, 0.24)",
];

const darkPalette = [
  "rgba(130, 136, 150, 0.26)",
  "rgba(96, 104, 118, 0.22)",
  "rgba(176, 182, 194, 0.2)",
];

const contrastPalette = [
  "rgba(120, 189, 255, 0.42)",
  "rgba(250, 132, 255, 0.35)",
  "rgba(255, 222, 140, 0.38)",
];

const MOBILE_BREAKPOINT = 720;

function getTheme(): Theme {
  const attr = document.documentElement.dataset.theme;
  if (attr === "light" || attr === "dark" || attr === "contrast") return attr;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return undefined;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    let isMobile = width <= MOBILE_BREAKPOINT;

    const getCounts = (reduced: boolean) => ({
      nodes: reduced ? (isMobile ? 10 : 20) : (isMobile ? 18 : 38),
      particles: reduced ? (isMobile ? 10 : 18) : (isMobile ? 18 : 40),
      sparks: reduced ? (isMobile ? 18 : 28) : (isMobile ? 32 : 56),
      beams: reduced ? 1 : isMobile ? 2 : 3,
    });

    const motionMedia = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reduceMotion = motionMedia.matches;
    let counts = getCounts(reduceMotion);

    let nodes: Node[] = [];
    let orbits: Orbit[] = [];
    let sparks: Spark[] = [];
    let hexEdges: HexEdge[] = [];
    let particles: Particle[] = [];
    let beams: Beam[] = [];

    let palette = lightPalette;
    let isDark = false;
    let isContrast = false;
    let dnaPhase = 0;
    let ecgPhase = 0;
    let tick = 0;
    let animationFrame = 0;
    let pointerAttached = false;

    const pointer = { x: 0, y: 0 };
    const pointerTarget = { x: 0, y: 0 };

    const initNodes = () => {
      nodes = Array.from({ length: counts.nodes }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * (isMobile ? 0.12 : 0.18),
        vy: (Math.random() - 0.5) * (isMobile ? 0.12 : 0.18),
        radius: (isMobile ? 12 : 18) + Math.random() * (isMobile ? 12 : 20),
        phase: Math.random() * Math.PI * 2,
      }));
    };

    const initOrbits = () => {
      const base = Math.min(width, height) * (isMobile ? 0.16 : 0.18);
      orbits = Array.from({ length: counts.beams }, (_, index) => ({
        radius: base + index * base * 0.48,
        angle: Math.random() * Math.PI * 2,
        speed: 0.00022 + index * 0.00016,
        tilt: 0.55 + index * 0.08,
        alpha: 0.1 - index * 0.02,
      }));
    };

    const initSparks = () => {
      sparks = Array.from({ length: counts.sparks }, (_, index) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        speed: 0.04 + Math.random() * 0.08,
        alpha: 0.025 + Math.random() * 0.03,
        width: 0.5 + Math.random() * 0.6,
        band: index % 6,
      }));
    };

    const initParticles = () => {
      particles = Array.from({ length: counts.particles }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: (isMobile ? 0.7 : 1) + Math.random() * (isMobile ? 1.1 : 1.8),
        speed: 0.012 + Math.random() * 0.028,
        drift: (Math.random() - 0.5) * (isMobile ? 0.26 : 0.4),
        phase: Math.random() * Math.PI * 2,
      }));
    };

    const initHexGrid = () => {
      hexEdges = [];
      if (isMobile) return;
      const radius = Math.max(24, Math.min(width, height) * 0.03);
      const horizontal = radius * 1.45;
      const vertical = Math.sqrt(3) * radius;
      let row = 0;

      for (let y = -radius; y < height + radius; y += vertical) {
        const offsetX = (row % 2) * horizontal * 0.5;
        for (let x = -horizontal; x < width + horizontal; x += horizontal) {
          const cx = x + offsetX;
          const cy = y;
          const points = Array.from({ length: 6 }, (_, i) => {
            const angle = (Math.PI / 3) * i;
            return {
              x: cx + radius * Math.cos(angle),
              y: cy + radius * Math.sin(angle),
            };
          });

          for (let i = 0; i < 6; i += 1) {
            const p1 = points[i];
            const p2 = points[(i + 1) % 6];
            if (p1.x < -60 || p1.x > width + 60 || p1.y < -60 || p1.y > height + 60) continue;
            hexEdges.push({
              x1: p1.x,
              y1: p1.y,
              x2: p2.x,
              y2: p2.y,
              alpha: 0.018 + Math.random() * 0.015,
            });
          }
        }
        row += 1;
      }
    };

    const initBeams = () => {
      const baseOffset = height * (isMobile ? 0.24 : 0.18);
      beams = Array.from({ length: counts.beams }, (_, index) => ({
        angle: isMobile ? -0.55 + index * 0.16 : -0.45 - index * 0.16,
        offset: baseOffset + index * height * 0.24,
        width: Math.max(180, width * (isMobile ? 0.17 : 0.2) - index * 18),
        alpha: (isMobile ? 0.06 : 0.08) - index * 0.018,
        speed: 0.0005 + index * 0.00018,
      }));
    };

    const initScene = (theme: Theme) => {
      isDark = theme !== "light";
      isContrast = theme === "contrast";
      palette = theme === "contrast" ? contrastPalette : theme === "dark" ? darkPalette : lightPalette;
      initNodes();
      initOrbits();
      initSparks();
      initParticles();
      initHexGrid();
      initBeams();
      dnaPhase = Math.random();
      ecgPhase = Math.random() * Math.PI * 2;
      tick = 0;
    };

    const drawOrbitalFlow = () => {
      const centerX = width * 0.32 + pointer.x * 0.35;
      const centerY = height * 0.42 + pointer.y * 0.25;
      orbits.forEach((orbit, index) => {
        orbit.angle += orbit.speed;
        const stroke = isContrast
          ? `rgba(180, 210, 255, ${orbit.alpha + 0.1})`
          : isDark
          ? `rgba(150, 158, 172, ${orbit.alpha})`
          : `rgba(124, 132, 144, ${orbit.alpha})`;
        const glow = isContrast
          ? `rgba(255, 178, 255, ${orbit.alpha + 0.1})`
          : isDark
          ? `rgba(188, 194, 206, ${orbit.alpha + 0.02})`
          : `rgba(152, 158, 168, ${orbit.alpha + 0.03})`;

        ctx.save();
        ctx.translate(centerX, centerY + index * (isMobile ? 12 : 16));
        ctx.rotate(orbit.angle * 0.12);
        ctx.strokeStyle = stroke;
        ctx.lineWidth = 0.38;
        ctx.globalAlpha = orbit.alpha;
        ctx.beginPath();
        ctx.ellipse(0, 0, orbit.radius, orbit.radius * orbit.tilt, 0, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();

        const orbitalX = centerX + Math.cos(orbit.angle) * orbit.radius * 0.95;
        const orbitalY = centerY + Math.sin(orbit.angle) * orbit.radius * orbit.tilt + index * (isMobile ? 12 : 16);
        ctx.save();
        ctx.fillStyle = glow;
        ctx.globalAlpha = orbit.alpha + 0.015;
        ctx.beginPath();
        ctx.arc(orbitalX, orbitalY, isMobile ? 1.1 : 1.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });
    };

    const drawBeams = () => {
      ctx.save();
      beams.forEach((beam, index) => {
        const progress = Math.sin(tick * beam.speed * 680 + index) * (isMobile ? 14 : 28);
        ctx.save();
        ctx.translate(width * 0.64, beam.offset + progress);
        ctx.rotate(beam.angle);
        const gradient = ctx.createLinearGradient(0, -beam.width, 0, beam.width);
        const base = isDark ? "rgba(170, 178, 192" : "rgba(144, 150, 162";
        gradient.addColorStop(0, `${base}, 0)`);
        gradient.addColorStop(0.4, `${base}, ${beam.alpha * 0.35})`);
        gradient.addColorStop(0.5, `${base}, ${beam.alpha})`);
        gradient.addColorStop(0.6, `${base}, ${beam.alpha * 0.35})`);
        gradient.addColorStop(1, `${base}, 0)`);
        ctx.globalAlpha = beam.alpha;
        ctx.fillStyle = gradient;
        ctx.fillRect(-beam.width, -Math.max(width, height), beam.width * 1.6, Math.max(width, height) * 2);
        ctx.restore();
      });
      ctx.restore();
    };

    const drawOrganContours = () => {
      if (isMobile) return;
      ctx.save();
      ctx.globalAlpha = isDark ? 0.05 : 0.04;
      ctx.fillStyle = isDark ? "rgba(170, 178, 192, 0.24)" : "rgba(138, 144, 156, 0.2)";

      ctx.beginPath();
      ctx.ellipse(width * 0.78, height * 0.2, width * 0.12, height * 0.09, 0.12, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.ellipse(width * 0.82, height * 0.26, width * 0.08, height * 0.06, -0.18, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(width * 0.18, height * 0.64);
      ctx.bezierCurveTo(width * 0.09, height * 0.56, width * 0.08, height * 0.74, width * 0.18, height * 0.8);
      ctx.bezierCurveTo(width * 0.27, height * 0.88, width * 0.34, height * 0.79, width * 0.32, height * 0.67);
      ctx.bezierCurveTo(width * 0.3, height * 0.56, width * 0.24, height * 0.53, width * 0.18, height * 0.64);
      ctx.fill();
      ctx.restore();
    };

    const drawHexGrid = () => {
      if (!hexEdges.length) return;
      ctx.save();
      const stroke = isDark ? "rgba(152, 158, 172" : "rgba(126, 132, 144";
      hexEdges.forEach((edge) => {
        ctx.globalAlpha = edge.alpha;
        ctx.strokeStyle = `${stroke}, ${edge.alpha})`;
        ctx.lineWidth = 0.3;
        ctx.beginPath();
        ctx.moveTo(edge.x1 + pointer.x * 0.04, edge.y1 + pointer.y * 0.04);
        ctx.lineTo(edge.x2 + pointer.x * 0.04, edge.y2 + pointer.y * 0.04);
        ctx.stroke();
      });
      ctx.restore();
    };

    const drawECG = () => {
      const baseline = height * (isMobile ? 0.36 : 0.32);
      const amplitude = height * (isMobile ? 0.026 : 0.033);
      const length = width;
      const segments = Math.ceil(length / 12);

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(0, baseline);
      for (let i = 0; i <= segments; i += 1) {
        const x = (i / segments) * length;
        const wave = Math.sin((i / segments) * Math.PI * 4 + ecgPhase) * amplitude * 0.55;
        let spike = 0;
        const phase = (i / segments + tick * 0.15) % 1;
        if (phase > 0.18 && phase < 0.22) {
          spike = amplitude * 1.7 - Math.abs(phase - 0.2) * amplitude * 24;
        } else if (phase > 0.22 && phase < 0.28) {
          spike = -amplitude * 1.1 + Math.abs(phase - 0.25) * amplitude * 11;
        }
        const y = baseline + wave + spike;
        ctx.lineTo(x, y);
        if (!isMobile && i % 28 === 0) {
          ctx.save();
          ctx.globalAlpha = isDark ? 0.22 : 0.18;
          ctx.fillStyle = isDark ? "rgba(182, 188, 200, 0.45)" : "rgba(144, 150, 160, 0.42)";
          ctx.beginPath();
          ctx.arc(x, y, 2, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }
      ctx.strokeStyle = isDark ? "rgba(170, 178, 190, 0.18)" : "rgba(134, 140, 150, 0.2)";
      ctx.lineWidth = 0.75;
      ctx.stroke();
      ctx.restore();
      ecgPhase += 0.002;
    };

    const drawDNA = () => {
      const dnaCount = Math.max(18, Math.round(height / 60));
      const centerX = width * (isMobile ? 0.7 : 0.75);
      const amplitude = Math.min(isMobile ? 24 : 32, width * 0.028 + 9);
      for (let i = 0; i < dnaCount; i += 1) {
        const offset = (i / dnaCount + dnaPhase) % 1;
        const y = height - offset * (height + 200) + 60;
        if (y < -160 || y > height + 160) continue;
        const phase = dnaPhase * Math.PI * 2 + i * 0.45;
        const leftX = centerX + Math.sin(phase) * amplitude;
        const rightX = centerX + Math.sin(phase + Math.PI) * amplitude * 0.8;
        const alpha = 0.06 + (1 - Math.abs(0.5 - offset)) * 0.06;
        const stroke = isDark
          ? `rgba(168, 174, 188, ${alpha})`
          : `rgba(134, 140, 152, ${alpha})`;
        const glow = isDark
          ? `rgba(186, 192, 204, ${alpha + 0.03})`
          : `rgba(150, 156, 166, ${alpha + 0.03})`;

        ctx.strokeStyle = stroke;
        ctx.lineWidth = 0.55;
        ctx.beginPath();
        ctx.moveTo(leftX, y);
        ctx.lineTo(rightX, y);
        ctx.stroke();

        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(leftX, y, 1, 0, Math.PI * 2);
        ctx.arc(rightX, y, 1, 0, Math.PI * 2);
        ctx.fill();
      }
      dnaPhase = (dnaPhase + 0.001) % 1;
    };

    const drawSparks = () => {
      sparks.forEach((spark) => {
        spark.y -= spark.speed;
        if (spark.y < -40) {
          spark.y = height + Math.random() * 120;
          spark.x = Math.random() * width;
        }

        ctx.save();
        ctx.globalAlpha = spark.alpha;
        ctx.fillStyle = isDark ? "rgba(182, 188, 198, 0.46)" : "rgba(144, 150, 160, 0.42)";
        ctx.fillRect(spark.x, spark.y, spark.width, 7);
        ctx.restore();

        if (!isMobile && spark.band === 0) {
          ctx.save();
          ctx.globalAlpha = spark.alpha * 0.28;
          ctx.strokeStyle = isDark ? "rgba(150, 156, 170, 0.18)" : "rgba(128, 134, 146, 0.16)";
          ctx.lineWidth = 0.28;
          ctx.beginPath();
          ctx.moveTo(0, spark.y + 3);
          ctx.lineTo(width, spark.y + 3);
          ctx.stroke();
          ctx.restore();
        }

        if (!isMobile && spark.band === 1) {
          ctx.save();
          ctx.globalAlpha = spark.alpha * 0.18;
          ctx.strokeStyle = isDark ? "rgba(150, 156, 170, 0.15)" : "rgba(128, 134, 146, 0.13)";
          ctx.lineWidth = 0.28;
          const gridX = spark.x - (spark.x % 48);
          ctx.beginPath();
          ctx.moveTo(gridX, spark.y + 5);
          ctx.lineTo(Math.min(gridX + 34, width), spark.y - 24);
          ctx.stroke();
          ctx.restore();
        }
      });
    };

    const drawParticles = () => {
      particles.forEach((particle) => {
        particle.y -= particle.speed;
        particle.phase += 0.0022;
        const driftX = Math.sin(particle.phase + tick) * particle.drift;
        if (particle.y < -20) {
          particle.y = height + Math.random() * 80;
          particle.x = Math.random() * width;
          particle.phase = Math.random() * Math.PI * 2;
        }

        ctx.save();
        ctx.globalAlpha = isDark ? 0.24 : 0.18;
        ctx.fillStyle = isDark ? "rgba(190, 194, 206, 0.48)" : "rgba(148, 154, 164, 0.42)";
        ctx.beginPath();
        ctx.arc(particle.x + driftX, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        if (!isMobile && particle.phase % (Math.PI * 0.32) < 0.014) {
          ctx.save();
          ctx.globalAlpha = isDark ? 0.12 : 0.09;
          ctx.strokeStyle = isDark ? "rgba(176, 182, 194, 0.16)" : "rgba(136, 142, 152, 0.14)";
          ctx.beginPath();
          ctx.arc(particle.x + driftX, particle.y, particle.size * 5.2, 0, Math.PI * 2);
          ctx.stroke();
          ctx.restore();
        }
      });
    };

    const drawConnectionsAndNodes = () => {
      nodes.forEach((node, i) => {
        const px = node.x + pointer.x * ((i % 3) * 0.12);
        const py = node.y + pointer.y * ((i % 2) * 0.12);

        for (let j = i + 1; j < nodes.length; j += 1) {
          const other = nodes[j];
          const ox = other.x + pointer.x * ((j % 3) * 0.1);
          const oy = other.y + pointer.y * ((j % 2) * 0.1);
          const dist = Math.hypot(px - ox, py - oy);
          const threshold = isMobile ? 120 : 150;
          if (dist < threshold) {
            const alpha = (1 - dist / threshold) * 0.14;
            const hue = isDark ? `rgba(166, 174, 188, ${alpha})` : `rgba(124, 132, 144, ${alpha})`;
            ctx.strokeStyle = hue;
            ctx.lineWidth = 0.4;
            ctx.beginPath();
            ctx.moveTo(px, py);
            ctx.lineTo(ox, oy);
            ctx.stroke();
          }
        }
      });

      nodes.forEach((node, index) => {
        node.phase += 0.0055;
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < -node.radius) node.x = width + node.radius;
        if (node.x > width + node.radius) node.x = -node.radius;
        if (node.y < -node.radius) node.y = height + node.radius;
        if (node.y > height + node.radius) node.y = -node.radius;

        const px = node.x + pointer.x * ((index % 3) * 0.22);
        const py = node.y + pointer.y * ((index % 2) * 0.22);
        const radius = node.radius + Math.sin(node.phase) * 1.4;
        const gradient = ctx.createRadialGradient(px, py, 0, px, py, radius);
        gradient.addColorStop(0, palette[index % palette.length]);
        gradient.addColorStop(1, "rgba(0,0,0,0)");

        ctx.save();
        ctx.globalAlpha = isDark ? 0.55 : 0.46;
        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(px, py, radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });
    };

    const renderFrame = () => {
      pointer.x += (pointerTarget.x - pointer.x) * 0.04;
      pointer.y += (pointerTarget.y - pointer.y) * 0.04;
      tick += 0.0014;

      ctx.clearRect(0, 0, width, height);

      drawBeams();
      drawOrbitalFlow();
      drawOrganContours();
      drawHexGrid();
      drawECG();
      drawDNA();
      drawSparks();
      drawParticles();
      drawConnectionsAndNodes();

      if (!reduceMotion) {
        animationFrame = window.requestAnimationFrame(renderFrame);
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointerTarget.x = (event.clientX / width - 0.5) * (isMobile ? 10 : 16);
      pointerTarget.y = (event.clientY / height - 0.5) * (isMobile ? 10 : 16);
    };

    const attachPointer = () => {
      if (pointerAttached || reduceMotion) return;
      window.addEventListener("pointermove", handlePointerMove);
      pointerAttached = true;
    };

    const detachPointer = () => {
      if (!pointerAttached) return;
      window.removeEventListener("pointermove", handlePointerMove);
      pointerAttached = false;
    };

    const stopAnimation = () => {
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
        animationFrame = 0;
      }
    };

    const startAnimation = () => {
      stopAnimation();
      if (reduceMotion) {
        detachPointer();
        renderFrame();
      } else {
        attachPointer();
        animationFrame = window.requestAnimationFrame(renderFrame);
      }
    };

    const handleThemeChange = (event: Event) => {
      const detail = (event as CustomEvent<Theme>).detail;
      counts = getCounts(reduceMotion);
      stopAnimation();
      initScene(detail);
      startAnimation();
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      isMobile = width <= MOBILE_BREAKPOINT;
      counts = getCounts(reduceMotion);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      stopAnimation();
      initScene(getTheme());
      startAnimation();
    };

    const handleMotionChange = (event: MediaQueryListEvent) => {
      reduceMotion = event.matches;
      counts = getCounts(reduceMotion);
      stopAnimation();
      if (reduceMotion) {
        detachPointer();
      }
      initScene(getTheme());
      startAnimation();
    };

    initScene(getTheme());
    startAnimation();

    window.addEventListener("theme-change", handleThemeChange);
    window.addEventListener("resize", handleResize);
    motionMedia.addEventListener("change", handleMotionChange);

    return () => {
      stopAnimation();
      detachPointer();
      window.removeEventListener("theme-change", handleThemeChange);
      window.removeEventListener("resize", handleResize);
      motionMedia.removeEventListener("change", handleMotionChange);
    };
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none opacity-45" />;
}
