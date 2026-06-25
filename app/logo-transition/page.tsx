"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

// ============================================================
// Design definitions
// ============================================================
const designs = [
  {
    id: "light-sweep",
    name: "能量光扫",
    en: "Energy Light Sweep",
    icon: "⚡",
    complexity: "⭐⭐",
    bestFor: "视频片头（3-4秒），最接近 SunEvo 风格",
    tags: ["高冲击力", "品牌感强", "SunEvo 同类"],
    desc: "一束高亮光束从左到右横扫画面，光束经过之处 Logo 从暗到亮逐渐显现。光束带有火焰色辉光和粒子拖尾，扫过后 Logo 定格并发出一次微弱的呼吸光晕。",
    reasons: [
      "与 SunEvo 视频的转场逻辑一致：光扫 → 显现 → 定格",
      "火焰色光束呼应 FLONCO 品牌主色 #E85D04",
      "光束象征「阳光/能量」— 直接关联光伏行业",
      "实现难度中等，After Effects 或 Web 均可实现",
    ],
    technical: "CSS/Canvas 实现：径向渐变模拟光束，clip-path 或 mask 控制 Logo 显现区域，光晕用 box-shadow 动画。视频制作时用 AE 的 Light Sweep + Glow 插件即可。",
  },
  {
    id: "particle-converge",
    name: "火焰粒子汇聚",
    en: "Flame Particle Convergence",
    icon: "🔥",
    complexity: "⭐⭐⭐",
    bestFor: "品牌宣传片、展会视频开头",
    tags: ["视觉震撼", "高端感", "粒子特效"],
    desc: "数千个火焰色微粒从画面四周随机飘散，随后被引力吸引向中心汇聚，逐渐拼出 FLONCO Logo 的形状。汇聚完成瞬间爆发一次光晕，粒子随后熄灭只留 Logo。",
    reasons: [
      "粒子 → Logo 的过程有「从无序到有序」的品牌隐喻",
      "火焰色粒子群 = 光伏能量的视觉化表达",
      "三维感强，适合高品质宣传视频",
      "比光扫多 1-2 秒，但视觉回报更高",
    ],
    technical: "Canvas + 粒子系统：每个粒子有独立位置/速度/目标，用 requestAnimationFrame 驱动。视频中用 AE Particular 或 Stardust 插件实现更简单。",
  },
  {
    id: "forge-reveal",
    name: "熔铸渐显",
    en: "Forge / Incandescent Reveal",
    icon: "🔨",
    complexity: "⭐⭐",
    bestFor: "工厂/产线相关视频、B2B 介绍片",
    tags: ["工业感", "力量感", "制造主题"],
    desc: "Logo 从一片炽热光晕中浮现——先是一团明亮的白色/橙色光，随后亮度逐渐降低，Logo 如同从熔炉中锻造出来一样冷却定型为火焰橙色。伴有微弱的烟雾/热浪扭曲效果。",
    reasons: [
      "「锻造」意象完美契合光伏组件制造背景",
      "从高温到定型的过程 = 从沙子到硅片的制造隐喻",
      "热浪扭曲效果用 displacement map 实现，质感独特",
      "与你的产线介绍视频内容天然呼应",
    ],
    technical: "Canvas: 先用白色高光填充 Logo 区域，逐步降低亮度 + 增加饱和度过渡到 #E85D04。热浪用 Perlin noise displacement。AE 中用 Turbulent Displace + Glow。",
  },
  {
    id: "stroke-grow",
    name: "描边生长",
    en: "Stroke Growth Animation",
    icon: "✨",
    complexity: "⭐⭐⭐",
    bestFor: "技术类展示、产品介绍视频",
    tags: ["科技感", "优雅", "精准"],
    desc: "Logo 的 SVG 路径如同被一支发光的笔逐笔画出来——从第一笔开始，沿路径生长，笔触带火焰色辉光。全部画完后，填充色一次性淡入，Logo 完整呈现。",
    reasons: [
      "「一笔一画」展现品牌精工细作的品质感",
      "路径动画天然适合 SVG Logo，Web 端可 1:1 还原",
      "发光笔触 = 光伏组件的精密制造工艺",
      "适合作为视频转场或加载动画",
    ],
    technical: "SVG stroke-dasharray + stroke-dashoffset 动画，结合 filter: drop-shadow 实现辉光。需要先计算 SVG 各 path 的总长度。Web 端可直接用于网站加载动画。",
  },
  {
    id: "glow-pulse",
    name: "光晕脉冲",
    en: "Solar Glow Pulse",
    icon: "☀️",
    complexity: "⭐",
    bestFor: "快速转场、简短片头（1-2秒）",
    tags: ["简洁高效", "太阳能主题", "快速"],
    desc: "画面中心发出一道环形光脉冲（像太阳的日冕），脉冲扩散经过之处 Logo 显现。光脉冲只扩散一次，干净利落，Logo 即刻定格。背景短暂变亮模拟闪光灯效果。",
    reasons: [
      "「日冕脉冲」直白表达太阳能主题",
      "1-2 秒即可完成，适合短平快的视频开头",
      "实现最简单，纯 CSS 动画即可",
      "可与其他方案组合使用（如光扫 + 脉冲收尾）",
    ],
    technical: "CSS radial-gradient + scale 动画，配合 opacity 过渡。中心点对齐 Logo 几何中心。AE 中用 Radial Wipe + Exposure。",
  },
];

// ============================================================
// Canvas Animation Helpers
// ============================================================

// Design 1: Light Sweep
function useLightSweep(canvasRef: React.RefObject<HTMLCanvasElement | null>) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    const img = new Image();
    img.src = "/logo-colors/logo-flame-text.svg";

    let animId: number;
    let startTime: number | null = null;
    const DURATION = 3500; // 3.5s cycle

    img.onload = () => {
      const draw = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = (timestamp - startTime) % DURATION;
        const progress = elapsed / DURATION;

        const w = canvas.width;
        const h = canvas.height;
        ctx.clearRect(0, 0, w, h);

        // Dark background
        ctx.fillStyle = "#0a0a0a";
        ctx.fillRect(0, 0, w, h);

        // Draw logo dim first
        const logoW = w * 0.55;
        const logoH = (logoW / 1599) * 672;
        const lx = (w - logoW) / 2;
        const ly = (h - logoH) / 2;

        ctx.globalAlpha = 0.15;
        ctx.drawImage(img, lx, ly, logoW, logoH);

        // Light beam position (moves left to right, with easing)
        const beamX = easeInOutCubic(progress) * w;

        // Create gradient mask effect: draw logo bright where beam has passed
        ctx.globalAlpha = 1;
        ctx.save();
        ctx.beginPath();
        ctx.rect(0, 0, beamX, h);
        ctx.clip();
        ctx.drawImage(img, lx, ly, logoW, logoH);
        ctx.restore();

        // Glow line at beam edge
        const gradient = ctx.createLinearGradient(beamX - 60, 0, beamX + 40, 0);
        gradient.addColorStop(0, "rgba(232,93,4,0)");
        gradient.addColorStop(0.4, "rgba(255,186,8,0.6)");
        gradient.addColorStop(0.6, "rgba(255,255,255,0.9)");
        gradient.addColorStop(1, "rgba(232,93,4,0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(beamX - 60, 0, 100, h);

        // Particles near beam
        const particleCount = 15;
        for (let i = 0; i < particleCount; i++) {
          const px = beamX + (Math.sin(elapsed * 0.01 + i * 2.1) * 40);
          const py = Math.random() * h;
          const size = Math.random() * 3 + 1;
          ctx.fillStyle = Math.random() > 0.5 ? "#FFBA08" : "#E85D04";
          ctx.beginPath();
          ctx.arc(px, py, size, 0, Math.PI * 2);
          ctx.fill();
        }

        // After beam passes, subtle pulse
        if (progress > 0.85) {
          const pulseAlpha = Math.sin((progress - 0.85) / 0.15 * Math.PI) * 0.3;
          ctx.fillStyle = `rgba(232,93,4,${pulseAlpha})`;
          ctx.fillRect(0, 0, w, h);
        }

        animId = requestAnimationFrame(draw);
      };
      animId = requestAnimationFrame(draw);
    };

    return () => cancelAnimationFrame(animId);
  }, [canvasRef]);
}

// Design 2: Particle Convergence
function useParticleConverge(canvasRef: React.RefObject<HTMLCanvasElement | null>) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let animId: number;
    let startTime: number | null = null;
    const DURATION = 4000;

    class Particle {
      x: number;
      y: number;
      targetX: number;
      targetY: number;
      size: number;
      color: string;
      speed: number;
      phase: number;
      constructor(w: number, h: number) {
        this.x = (Math.random() - 0.5) * w * 2;
        this.y = (Math.random() - 0.5) * h * 2;
        this.targetX = w / 2 + (Math.random() - 0.5) * w * 0.5;
        this.targetY = h / 2 + (Math.random() - 0.5) * h * 0.25;
        this.size = Math.random() * 2.5 + 0.5;
        this.color = Math.random() > 0.6 ? "#FFBA08" : Math.random() > 0.5 ? "#E85D04" : "#FFF";
        this.speed = 0.3 + Math.random() * 0.7;
        this.phase = Math.random() * Math.PI * 2;
      }
      update(progress: number, w: number, h: number) {
        const t = Math.min(progress / 0.7, 1); // converge in first 70%
        const eased = easeOutBack(t);
        this.x += (this.targetX - this.x) * eased * this.speed * 0.05;
        this.y += (this.targetY - this.y) * eased * this.speed * 0.05;
        // Add wobble
        this.x += Math.sin(progress * 20 + this.phase) * (1 - eased) * 2;
        this.y += Math.cos(progress * 20 + this.phase) * (1 - eased) * 2;
      }
      draw(ctx: CanvasRenderingContext2D, alpha: number) {
        ctx.globalAlpha = alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particles: Particle[] = [];
    const PARTICLE_COUNT = 500;

    const init = (w: number, h: number) => {
      particles.length = 0;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(new Particle(w, h));
      }
    };

    let initialized = false;
    const draw = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = (timestamp - startTime) % DURATION;
      const progress = elapsed / DURATION;
      const w = canvas.width;
      const h = canvas.height;

      if (!initialized) {
        init(w, h);
        initialized = true;
      }

      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "#0a0a0a";
      ctx.fillRect(0, 0, w, h);

      // Update & draw particles
      particles.forEach((p) => p.update(progress, w, h));

      const alpha = progress > 0.7
        ? Math.max(0, 1 - (progress - 0.7) / 0.3)
        : 0.8 + Math.sin(progress * 30) * 0.2;

      particles.forEach((p) => p.draw(ctx, alpha));

      // Draw logo fading in after 70%
      if (progress > 0.65) {
        const logoAlpha = Math.min(1, (progress - 0.65) / 0.2);
        const img = new Image();
        img.src = "/logo-colors/logo-flame-text.svg";
        const logoW = w * 0.5;
        const logoH = (logoW / 1599) * 672;
        const lx = (w - logoW) / 2;
        const ly = (h - logoH) / 2;
        ctx.globalAlpha = logoAlpha;
        ctx.drawImage(img, lx, ly, logoW, logoH);

        // Flash burst at 85%
        if (progress > 0.82 && progress < 0.88) {
          ctx.globalAlpha = 1 - (progress - 0.82) / 0.06;
          ctx.fillStyle = "#FFF";
          ctx.fillRect(0, 0, w, h);
        }
      }

      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animId);
  }, [canvasRef]);
}

// Design 3: Forge Reveal
function useForgeReveal(canvasRef: React.RefObject<HTMLCanvasElement | null>) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    const img = new Image();
    img.src = "/logo-colors/logo-flame-text.svg";
    let animId: number;
    let startTime: number | null = null;
    const DURATION = 3500;

    img.onload = () => {
      const draw = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = (timestamp - startTime) % DURATION;
        const progress = elapsed / DURATION;

        const w = canvas.width;
        const h = canvas.height;
        ctx.clearRect(0, 0, w, h);

        ctx.fillStyle = "#0a0a0a";
        ctx.fillRect(0, 0, w, h);

        const logoW = w * 0.5;
        const logoH = (logoW / 1599) * 672;
        const lx = (w - logoW) / 2;
        const ly = (h - logoH) / 2;

        // Phase 1 (0-30%): white hot glow
        if (progress < 0.3) {
          const t = progress / 0.3;
          const hotAlpha = t;
          // Draw logo in white-hot
          ctx.globalAlpha = hotAlpha * 0.5;
          ctx.fillStyle = "#FFFFFF";
          ctx.shadowColor = "#FFFFFF";
          ctx.shadowBlur = 40 + t * 60;
          ctx.fillRect(lx - 20, ly - 10, logoW + 40, logoH + 20);
          ctx.shadowBlur = 0;
        }

        // Phase 2 (30-60%): cooling down, logo becomes visible
        if (progress >= 0.3 && progress < 0.7) {
          const t = (progress - 0.3) / 0.4;
          // Interpolate from white to flame
          const r = Math.round(255 - t * (255 - 232));
          const g = Math.round(255 - t * (255 - 93));
          const b = Math.round(255 - t * (255 - 4));
          const color = `rgb(${r},${g},${b})`;
          ctx.fillStyle = color;
          ctx.shadowColor = color;
          ctx.shadowBlur = 30 * (1 - t * 0.6);
          ctx.fillRect(lx - 20, ly - 10, logoW + 40, logoH + 20);
          ctx.shadowBlur = 0;

          // Actual logo starts fading in
          ctx.globalAlpha = t;
          ctx.drawImage(img, lx, ly, logoW, logoH);
        }

        // Phase 3 (70-100%): stable flame color
        if (progress >= 0.7) {
          const t = (progress - 0.7) / 0.3;
          ctx.globalAlpha = 1;
          ctx.drawImage(img, lx, ly, logoW, logoH);

          // Subtle heat shimmer
          ctx.shadowColor = "#E85D04";
          ctx.shadowBlur = Math.sin(elapsed * 0.02) * 8 + 4;
          ctx.drawImage(img, lx, ly, logoW, logoH);
          ctx.shadowBlur = 0;
        }

        // Heat haze effect using random offsets
        if (progress > 0.15 && progress < 0.6) {
          ctx.globalAlpha = 0.1;
          ctx.save();
          const offsetX = (Math.sin(elapsed * 0.05 + 1) * 3);
          const offsetY = (Math.cos(elapsed * 0.05) * 3);
          ctx.translate(offsetX, offsetY);
          ctx.drawImage(img, lx, ly, logoW, logoH);
          ctx.restore();
        }

        ctx.globalAlpha = 1;
        animId = requestAnimationFrame(draw);
      };
      animId = requestAnimationFrame(draw);
    };

    return () => cancelAnimationFrame(animId);
  }, [canvasRef]);
}

// Design 4: Stroke Growth
function useStrokeGrow(canvasRef: React.RefObject<HTMLCanvasElement | null>) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    const img = new Image();
    img.src = "/logo-colors/logo-flame-text.svg";
    let animId: number;
    let startTime: number | null = null;
    const DURATION = 4000;

    img.onload = () => {
      const draw = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = (timestamp - startTime) % DURATION;
        const progress = elapsed / DURATION;

        const w = canvas.width;
        const h = canvas.height;
        ctx.clearRect(0, 0, w, h);

        ctx.fillStyle = "#0a0a0a";
        ctx.fillRect(0, 0, w, h);

        const logoW = w * 0.5;
        const logoH = (logoW / 1599) * 672;
        const lx = (w - logoW) / 2;
        const ly = (h - logoH) / 2;

        if (progress < 0.7) {
          // Stroke reveal phase: logo revealed from top-left to bottom-right
          const revealProgress = progress / 0.7;
          ctx.save();
          ctx.beginPath();
          // Diagonal reveal
          const revealX = lx + revealProgress * (logoW * 1.2);
          ctx.rect(lx, ly, revealX - lx, logoH);
          ctx.clip();

          // Draw logo with glow
          ctx.shadowColor = "#E85D04";
          ctx.shadowBlur = 15;
          ctx.drawImage(img, lx, ly, logoW, logoH);
          ctx.shadowBlur = 0;
          ctx.restore();

          // Glowing edge line
          const edgeX = lx + revealProgress * logoW * 1.2;
          const gradient = ctx.createLinearGradient(edgeX - 10, 0, edgeX + 5, 0);
          gradient.addColorStop(0, "rgba(255,186,8,0)");
          gradient.addColorStop(0.5, "rgba(255,255,255,0.8)");
          gradient.addColorStop(1, "rgba(232,93,4,0)");
          ctx.fillStyle = gradient;
          ctx.fillRect(edgeX - 10, ly, 15, logoH);
        } else {
          // Fill fade in
          const fillAlpha = (progress - 0.7) / 0.3;
          ctx.globalAlpha = fillAlpha;
          ctx.drawImage(img, lx, ly, logoW, logoH);
          ctx.globalAlpha = 1;
        }

        animId = requestAnimationFrame(draw);
      };
      animId = requestAnimationFrame(draw);
    };

    return () => cancelAnimationFrame(animId);
  }, [canvasRef]);
}

// Design 5: Glow Pulse
function useGlowPulse(canvasRef: React.RefObject<HTMLCanvasElement | null>) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    const img = new Image();
    img.src = "/logo-colors/logo-flame-text.svg";
    let animId: number;
    let startTime: number | null = null;
    const DURATION = 2500;

    img.onload = () => {
      const draw = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = (timestamp - startTime) % DURATION;
        const progress = elapsed / DURATION;

        const w = canvas.width;
        const h = canvas.height;
        ctx.clearRect(0, 0, w, h);

        ctx.fillStyle = "#0a0a0a";
        ctx.fillRect(0, 0, w, h);

        const logoW = w * 0.5;
        const logoH = (logoW / 1599) * 672;
        const lx = (w - logoW) / 2;
        const ly = (h - logoH) / 2;
        const cx = w / 2;
        const cy = h / 2;

        // Dim logo base
        ctx.globalAlpha = 0.1;
        ctx.drawImage(img, lx, ly, logoW, logoH);
        ctx.globalAlpha = 1;

        // Expanding ring
        const ringRadius = easeOutCubicFn(progress) * Math.max(w, h) * 0.8;

        // Draw logo bright inside the ring
        ctx.save();
        ctx.beginPath();
        ctx.arc(cx, cy, ringRadius, 0, Math.PI * 2);
        ctx.clip();
        ctx.drawImage(img, lx, ly, logoW, logoH);
        ctx.restore();

        // Ring glow
        const ringGradient = ctx.createRadialGradient(cx, cy, ringRadius - 15, cx, cy, ringRadius + 5);
        ringGradient.addColorStop(0, "rgba(255,186,8,0)");
        ringGradient.addColorStop(0.5, "rgba(255,255,255,0.7)");
        ringGradient.addColorStop(1, "rgba(232,93,4,0)");
        ctx.strokeStyle = ringGradient;
        ctx.lineWidth = 8;
        ctx.beginPath();
        ctx.arc(cx, cy, ringRadius, 0, Math.PI * 2);
        ctx.stroke();

        // Center flash at start
        if (progress < 0.15) {
          const flashAlpha = (1 - progress / 0.15) * 0.4;
          ctx.fillStyle = `rgba(255,255,255,${flashAlpha})`;
          ctx.fillRect(0, 0, w, h);
        }

        // Post-reveal subtle breath
        if (progress > 0.85) {
          const breathAlpha = Math.sin((progress - 0.85) / 0.15 * Math.PI * 2) * 0.15;
          ctx.globalAlpha = 1 + breathAlpha;
          ctx.drawImage(img, lx, ly, logoW, logoH);
          ctx.globalAlpha = 1;
        }

        animId = requestAnimationFrame(draw);
      };
      animId = requestAnimationFrame(draw);
    };

    return () => cancelAnimationFrame(animId);
  }, [canvasRef]);
}

// Easing functions
function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}
function easeOutCubicFn(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}
function easeOutBack(t: number): number {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
}

// ============================================================
// Animation Canvas Component
// ============================================================
function AnimationCanvas({
  designId,
}: {
  designId: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useLightSweep(canvasRef);
  // For demo, all use light sweep as base; switch by designId for production
  // In production, switch hook based on designId:
  // if (designId === "particle-converge") useParticleConverge(canvasRef);
  // etc.

  return (
    <canvas
      ref={canvasRef}
      width={600}
      height={300}
      className="w-full rounded-lg"
      style={{ background: "#0a0a0a" }}
    />
  );
}

// Specialized canvas per design
function LightSweepCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  useLightSweep(ref);
  return <canvas ref={ref} width={600} height={300} className="w-full rounded-lg" style={{ background: "#0a0a0a" }} />;
}
function ParticleCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  useParticleConverge(ref);
  return <canvas ref={ref} width={600} height={300} className="w-full rounded-lg" style={{ background: "#0a0a0a" }} />;
}
function ForgeCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  useForgeReveal(ref);
  return <canvas ref={ref} width={600} height={300} className="w-full rounded-lg" style={{ background: "#0a0a0a" }} />;
}
function StrokeCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  useStrokeGrow(ref);
  return <canvas ref={ref} width={600} height={300} className="w-full rounded-lg" style={{ background: "#0a0a0a" }} />;
}
function PulseCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  useGlowPulse(ref);
  return <canvas ref={ref} width={600} height={300} className="w-full rounded-lg" style={{ background: "#0a0a0a" }} />;
}

const canvasComponents: Record<string, React.FC> = {
  "light-sweep": LightSweepCanvas,
  "particle-converge": ParticleCanvas,
  "forge-reveal": ForgeCanvas,
  "stroke-grow": StrokeCanvas,
  "glow-pulse": PulseCanvas,
};

// ============================================================
// Page Component
// ============================================================
export default function LogoTransitionPage() {
  const [activeDesign, setActiveDesign] = useState(designs[0].id);
  const current = designs.find((d) => d.id === activeDesign)!;
  const CanvasComponent = canvasComponents[activeDesign];

  return (
    <div className="min-h-screen" style={{ background: "#0D0D0D", color: "#E5E5E5" }}>
      {/* Header */}
      <section className="py-10" style={{ background: "linear-gradient(135deg, #E85D04 0%, #C44A03 100%)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-orange-200 text-xs font-semibold uppercase tracking-wider mb-1">
            Video Logo Animation
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-white">
            FLONCO Logo 视频转场 — 设计选型
          </h1>
          <p className="text-orange-100 max-w-2xl text-sm">
            基于 <strong className="text-white">logo-flame-text.svg</strong>（纯字体版）和 SunEvo 产线介绍视频的转场风格，
            设计 5 种 Logo 出场动画方案。每种方案均提供设计理由和技术实现路径。
          </p>
        </div>
      </section>

      {/* Design Selector Tabs */}
      <section className="sticky top-0 z-40 border-b" style={{ background: "#1A1A1A", borderColor: "#333" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-3">
            {designs.map((d) => (
              <button
                key={d.id}
                onClick={() => setActiveDesign(d.id)}
                className="px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all flex items-center gap-1.5"
                style={{
                  background: activeDesign === d.id ? "#E85D04" : "transparent",
                  color: activeDesign === d.id ? "#FFF" : "#999",
                  border: activeDesign === d.id ? "1px solid #E85D04" : "1px solid #333",
                }}
              >
                <span>{d.icon}</span>
                {d.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))" }}>
            {/* Animation Preview */}
            <div className="rounded-xl border overflow-hidden" style={{ borderColor: "#333", background: "#111" }}>
              <div className="px-5 py-3 border-b flex items-center justify-between" style={{ borderColor: "#333" }}>
                <h3 className="font-semibold text-sm text-white">
                  {current.icon} {current.name} · {current.en}
                </h3>
                <span className="text-[10px] px-2 py-0.5 rounded-full" style={{ background: "#E85D0420", color: "#E85D04" }}>
                  实时预览
                </span>
              </div>
              <div className="p-4">
                <CanvasComponent />
                <p className="text-xs text-gray-500 mt-2 text-center">
                  △ 以上为 Web Canvas 模拟效果，视频制作时效果会更精细
                </p>
              </div>
            </div>

            {/* Design Info */}
            <div className="space-y-5">
              {/* Description */}
              <div className="rounded-xl border p-5" style={{ borderColor: "#333", background: "#111" }}>
                <h4 className="font-semibold text-sm mb-2 text-white">效果描述</h4>
                <p className="text-sm leading-relaxed" style={{ color: "#AAA" }}>
                  {current.desc}
                </p>
              </div>

              {/* Design Reasons */}
              <div className="rounded-xl border p-5" style={{ borderColor: "#333", background: "#111" }}>
                <h4 className="font-semibold text-sm mb-3 text-white">设计理由</h4>
                <ul className="space-y-2">
                  {current.reasons.map((r, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "#CCC" }}>
                      <span className="mt-0.5 flex-shrink-0" style={{ color: "#E85D04" }}>✓</span>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Meta Info */}
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border p-4" style={{ borderColor: "#333", background: "#111" }}>
                  <p className="text-[10px] uppercase tracking-wider text-gray-500 mb-1">技术复杂度</p>
                  <p className="text-sm font-semibold text-white">{current.complexity}</p>
                </div>
                <div className="rounded-xl border p-4" style={{ borderColor: "#333", background: "#111" }}>
                  <p className="text-[10px] uppercase tracking-wider text-gray-500 mb-1">最适合场景</p>
                  <p className="text-sm font-semibold" style={{ color: "#FFBA08" }}>{current.bestFor}</p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {current.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2.5 py-1 rounded-full"
                    style={{ background: "#E85D0415", color: "#FFBA08", border: "1px solid #E85D0425" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Technical Note */}
              <div className="rounded-xl border p-5" style={{ borderColor: "#333", background: "#1A1A1A" }}>
                <h4 className="font-semibold text-sm mb-2 text-white">🔧 技术实现</h4>
                <p className="text-xs leading-relaxed" style={{ color: "#888" }}>
                  {current.technical}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-10" style={{ background: "#111" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold mb-6 text-white">📊 方案对比总览</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse" style={{ minWidth: 700 }}>
              <thead>
                <tr style={{ borderBottom: "1px solid #333" }}>
                  <th className="text-left py-3 px-4 text-gray-400 text-xs uppercase tracking-wider">方案</th>
                  <th className="text-left py-3 px-4 text-gray-400 text-xs uppercase tracking-wider">时长</th>
                  <th className="text-left py-3 px-4 text-gray-400 text-xs uppercase tracking-wider">复杂度</th>
                  <th className="text-left py-3 px-4 text-gray-400 text-xs uppercase tracking-wider">视频制作</th>
                  <th className="text-left py-3 px-4 text-gray-400 text-xs uppercase tracking-wider">Web 复用</th>
                  <th className="text-left py-3 px-4 text-gray-400 text-xs uppercase tracking-wider">推荐场景</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "⚡ 能量光扫", time: "3-4s", comp: "中", video: "AE Light Sweep + Glow", web: "✅ CSS/Canvas", scene: "视频片头（最接近 SunEvo）" },
                  { name: "🔥 火焰粒子汇聚", time: "4-5s", comp: "高", video: "AE Particular / Stardust", web: "⚠️ Canvas 粒子系统", scene: "品牌宣传片、展会视频" },
                  { name: "🔨 熔铸渐显", time: "3-4s", comp: "中", video: "AE Turbulent Displace + Glow", web: "✅ Canvas 色彩过渡", scene: "工厂/产线介绍视频" },
                  { name: "✨ 描边生长", time: "3-5s", comp: "高", video: "AE Trim Paths + Glow", web: "✅ SVG 动画", scene: "技术展示、产品介绍" },
                  { name: "☀️ 光晕脉冲", time: "1-2s", comp: "低", video: "AE Radial Wipe + Exposure", web: "✅ CSS 动画", scene: "快速转场、简短片头" },
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid #222" }}>
                    <td className="py-3 px-4 text-white font-medium">{row.name}</td>
                    <td className="py-3 px-4" style={{ color: "#CCC" }}>{row.time}</td>
                    <td className="py-3 px-4" style={{ color: "#CCC" }}>{row.comp}</td>
                    <td className="py-3 px-4" style={{ color: "#AAA", fontSize: 11 }}>{row.video}</td>
                    <td className="py-3 px-4" style={{ color: "#AAA", fontSize: 11 }}>{row.web}</td>
                    <td className="py-3 px-4" style={{ color: "#FFBA08", fontSize: 11 }}>{row.scene}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Recommendation */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl p-6 border-2" style={{ background: "linear-gradient(135deg, #1A1008, #1A0A02)", borderColor: "#E85D0450" }}>
            <h3 className="font-bold text-base mb-3 flex items-center gap-2" style={{ color: "#FFBA08" }}>
              🏆 最终推荐
            </h3>
            <div className="space-y-3 text-sm" style={{ color: "#CCB" }}>
              <p>
                <strong style={{ color: "#E85D04" }}>首选：能量光扫（Light Sweep）</strong>
                — 与 SunEvo 风格最接近，制作成本适中，3-4 秒即可完成高质量转场。
              </p>
              <p>
                <strong style={{ color: "#E85D04" }}>个性之选：熔铸渐显（Forge Reveal）</strong>
                — 如果你的视频以工厂/产线为主题，锻造冷却的隐喻与光伏制造天然契合，差异化更强。
              </p>
              <p>
                <strong style={{ color: "#E85D04" }}>组合使用：</strong>
                可将多个方案组合——比如「能量光扫」扫出 Logo 轮廓 +「光晕脉冲」收尾强化，形成专属 FLONCO 的复合转场。
              </p>
              <p className="text-xs" style={{ color: "#888" }}>
                💡 所有方案的 Canvas 预览代码已内嵌于此页面，可直接查看实时动画效果。视频制作时建议使用 After Effects 获得更高质量。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Back link */}
      <div className="text-center py-10">
        <Link
          href="/logo-preview"
          className="inline-flex items-center gap-1 text-sm transition-colors"
          style={{ color: "#666" }}
        >
          ← 返回 Logo 配色预览
        </Link>
      </div>
    </div>
  );
}
