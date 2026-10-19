
"use client";

import { useEffect, useRef } from "react";

type ParticleLogoProps = {
  src: string;
  width?: number;
  height?: number;
  padding?: number;
  particleGap?: number;
  particleSize?: number;
  mouseRadius?: number;
  color?: string;
  className?: string;
  detectionMode?: "brown" | "alpha";

  // New animation options
  entranceAnimation?: boolean;
  entranceDuration?: number;
  entranceOrigin?: "sides" | "random";
  useOriginalColors?: boolean;
};

type Particle = {
  x: number;
  y: number;

  originX: number;
  originY: number;

  startX: number;
  startY: number;

  vx: number;
  vy: number;
  size: number;
  alpha: number;
  phase: number;
  speed: number;
  amplitude: number;
   color: string;
};

export default function ParticleLogo({
  src,
  width = 300,
  height = 150,
  padding = 20,
  particleGap = 3,
  particleSize = 1,
  mouseRadius = 50,
  color = "#ffffff",
  className = "",
  detectionMode = "brown",

  entranceAnimation = false,
  entranceDuration = 2400,
  entranceOrigin = "sides",
  useOriginalColors = false,

}: ParticleLogoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationId = 0;
    let destroyed = false;

    let entranceStartTime: number | null = null;

const easeOutCubic = (t: number) =>
  1 - Math.pow(1 - t, 3);

    const mouse = {
      x: -10000,
      y: -10000,
      active: false,
    };

const canvasWidth = width + padding * 2;
const canvasHeight = height + padding * 2;

const ratio = Math.min(window.devicePixelRatio || 1, 2);

canvas.width = Math.round(canvasWidth * ratio);
canvas.height = Math.round(canvasHeight * ratio);

ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

    const image = new window.Image();



const draw = (time = 0) => {
 ctx.clearRect(0, 0, canvasWidth, canvasHeight);
for (const p of particles) {
  ctx.fillStyle = p.color;
    // Hızlı, küçük parlaklık değişimleri
    const flicker =
      Math.sin(time * p.speed + p.phase) * p.amplitude;

    ctx.globalAlpha = Math.max(
      0.45,
      Math.min(1, p.alpha + flicker),
    );

    // Çok küçük görsel titreşim, fiziksel pozisyon değişmiyor
    const vibrationX =
      Math.sin(time * p.speed * 1.7 + p.phase) * 0.18;

    const vibrationY =
      Math.cos(time * p.speed * 1.9 + p.phase) * 0.18;

    ctx.fillRect(
      p.x + vibrationX,
      p.y + vibrationY,
      p.size,
      p.size,
    );
  }

  ctx.globalAlpha = 1;
};



  


const animate = (timestamp: number) => {
  if (destroyed) return;

  const time = timestamp * 0.001;

  // Entrance animation progress
  if (entranceStartTime === null) {
    entranceStartTime = timestamp;
  }

  const duration = Math.max(entranceDuration, 1);

  const progress = entranceAnimation
    ? Math.min(
        (timestamp - entranceStartTime) / duration,
        1,
      )
    : 1;

const easedProgress = easeOutCubic(progress);

  const isEntering =
    entranceAnimation && progress < 1;

  for (const p of particles) {

    // Phase 1: Particles assemble the logo
    if (isEntering) {
      p.x =
        p.startX +
        (p.originX - p.startX) * easedProgress;

      p.y =
        p.startY +
        (p.originY - p.startY) * easedProgress;

      continue;
    }

    // Ensure exact final positions after entrance
    if (
      entranceAnimation &&
      p.x !== p.originX &&
      p.vx === 0 &&
      p.vy === 0
    ) {
      p.x = p.originX;
      p.y = p.originY;
    }

    // Phase 2: Existing mouse interaction
    if (mouse.active) {
      const dx = p.x - mouse.x;
      const dy = p.y - mouse.y;

      const distance = Math.hypot(dx, dy);

      if (distance < mouseRadius) {
        const safeDistance = Math.max(distance, 0.1);

        const influence =
          1 - distance / mouseRadius;

        const force = influence * 4.5;

        p.vx += (dx / safeDistance) * force;
        p.vy += (dy / safeDistance) * force;
      }
    }

    // Friction
    p.vx *= 0.82;
    p.vy *= 0.82;

    p.x += p.vx;
    p.y += p.vy;

    // Return to original position
    if (
      Math.abs(p.vx) < 0.25 &&
      Math.abs(p.vy) < 0.25
    ) {
      p.x += (p.originX - p.x) * 0.045;
      p.y += (p.originY - p.y) * 0.045;
    }
  }

  draw(time);

  animationId = window.requestAnimationFrame(animate);
};





    const createParticles = () => {
      if (destroyed || !image.naturalWidth) return;

      const offscreen = document.createElement("canvas");
      offscreen.width = width;
      offscreen.height = height;

      const offCtx = offscreen.getContext("2d", {
        willReadFrequently: true,
      });

      if (!offCtx) return;

      const scale = Math.min(
        width / image.naturalWidth,
        height / image.naturalHeight,
      );

      const drawWidth = image.naturalWidth * scale;
      const drawHeight = image.naturalHeight * scale;

      const offsetX = (width - drawWidth) / 2;
      const offsetY = (height - drawHeight) / 2;

      offCtx.drawImage(
        image,
        offsetX,
        offsetY,
        drawWidth,
        drawHeight,
      );

      const imageData = offCtx.getImageData(
        0,
        0,
        width,
        height,
      );

      particles = [];

      for (let y = 0; y < height; y += particleGap) {
        for (let x = 0; x < width; x += particleGap) {
          const index = (y * width + x) * 4;

          const red = imageData.data[index];
          const green = imageData.data[index + 1];
          const blue = imageData.data[index + 2];
          const alpha = imageData.data[index + 3];

          // Detect brown areas of the logo

const isBrown =
  red >= 90 &&
  red <= 180 &&
  green >= 75 &&
  green <= 165 &&
  blue >= 60 &&
  blue <= 150;

const shouldCreateParticle =
  detectionMode === "alpha"
    ? alpha > 110
    : alpha > 110 && isBrown;

if (!shouldCreateParticle) continue;


          // Slight random offset to avoid a perfect grid
          const jitterX = (Math.random() - 0.5) * 1.2;
          const jitterY = (Math.random() - 0.5) * 1.2;


const originX = x + jitterX + padding;
const originY = y + jitterY + padding;

// Particles enter from the left and right sides
const fromLeft = originX < canvasWidth / 2;

const startX = entranceAnimation
  ? entranceOrigin === "random"
    ? Math.random() * canvasWidth
    : fromLeft
      ? -50 - Math.random() * canvasWidth * 0.5
      : canvasWidth + 50 + Math.random() * canvasWidth * 0.5
  : originX;

const startY = entranceAnimation
  ? entranceOrigin === "random"
    ? Math.random() * canvasHeight
    : originY + (Math.random() - 0.5) * 100
  : originY;

particles.push({
  x: startX,
  y: startY,

  originX,
  originY,

  startX,
  startY,

  vx: 0,
  vy: 0,

  size: particleSize * (0.8 + Math.random() * 0.4),
  alpha: 0.85 + Math.random() * 0.15,

  phase: Math.random() * Math.PI * 2,
  speed: 12 + Math.random() * 18,
  amplitude: 0.12 + Math.random() * 0.18,

  color: useOriginalColors
    ? `rgb(${red}, ${green}, ${blue})`
    : color,
});

        }
      }

const reducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

entranceStartTime = null;

if (reducedMotion) {
  // Immediately display the completed logo
  for (const p of particles) {
    p.x = p.originX;
    p.y = p.originY;
  }

  draw(0);
} else {
  // Start from the entrance positions
  draw(0);
  animationId = window.requestAnimationFrame(animate);
}
    };

    image.onload = createParticles;

    image.onerror = () => {
      console.error("Particle logo could not load:", src);
    };

    image.src = src;

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;

      const rect = canvas.getBoundingClientRect();

      mouse.x =
  ((event.clientX - rect.left) / rect.width) * canvasWidth;

mouse.y =
  ((event.clientY - rect.top) / rect.height) * canvasHeight;
      mouse.active = true;
    };

    const handlePointerLeave = () => {
      mouse.active = false;
    };

    canvas.addEventListener("pointermove", handlePointerMove);
    canvas.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      destroyed = true;

      window.cancelAnimationFrame(animationId);

      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("pointerleave", handlePointerLeave);

      image.onload = null;
      image.onerror = null;
    };
}, [
  src,
  width,
  height,
  padding,
  particleGap,
  particleSize,
  mouseRadius,
  color,
  detectionMode,
  useOriginalColors,
  entranceAnimation,
  entranceDuration,
  entranceOrigin,
]);

return (
  <canvas
    ref={canvasRef}
    role="img"
    aria-label="SY Hotels particle logo"
    className={`block shrink-0 ${className}`}
    style={{
      width: `${width + padding * 2}px`,
      height: `${height + padding * 2}px`,
      maxWidth: "none",
      maxHeight: "none",
    }}
  />
);
}
