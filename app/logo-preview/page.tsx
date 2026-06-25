"use client";

import { useState } from "react";

// The 5 logo color variants
const logoVariants = [
  {
    id: "flame",
    name: "Flame Orange",
    file: "/logo-colors/logo-flame.svg",
    hex: "#E85D04",
    desc: "与主色调完全一致 — 适合浅色背景，统一品牌感",
    bestFor: "白色/浅色背景区域",
  },
  {
    id: "white",
    name: "White",
    file: "/logo-colors/logo-white.svg",
    hex: "#FFFFFF",
    desc: "反白版本 — 在深色/橙色背景上清晰突出",
    bestFor: "Navbar、Footer、Hero 等深色区域",
  },
  {
    id: "gold",
    name: "Solar Gold",
    file: "/logo-colors/logo-gold.svg",
    hex: "#FFBA08",
    desc: "强调色版本 — 醒目但不刺眼，兼具温暖与品质感",
    bestFor: "营销横幅、社交媒体、特殊场景",
  },
  {
    id: "charcoal",
    name: "Charcoal",
    file: "/logo-colors/logo-charcoal.svg",
    hex: "#1E293B",
    desc: "深灰替代纯黑 — 更柔和现代，比纯黑更有质感",
    bestFor: "需要暗色 Logo 但不想纯黑的场景",
  },
  {
    id: "duotone",
    name: "Duotone (Flame + Gold)",
    file: "/logo-colors/logo-duotone.svg",
    hex: "#E85D04 + #FFBA08",
    desc: "双色版本 — FLONCO 主体橙 + 装饰元素金，层次丰富",
    bestFor: "首页 Hero、大型展示、品牌页",
  },
];

// Website background surfaces to test against
const surfaces = [
  {
    id: "white",
    label: "页面主背景",
    bg: "#ffffff",
    textColor: "#1E293B",
    hint: "body / card 背景",
  },
  {
    id: "warm",
    label: "暖浅色背景",
    bg: "#FFF8F0",
    textColor: "#1E293B",
    hint: "bg-light / 分区交替背景",
  },
  {
    id: "primary",
    label: "主色调背景",
    bg: "#E85D04",
    textColor: "#ffffff",
    hint: "Navbar / Footer / Hero",
  },
  {
    id: "dark",
    label: "深色背景",
    bg: "#1E293B",
    textColor: "#ffffff",
    hint: "Footer 底部 / 深色区域",
  },
];

export default function LogoPreviewPage() {
  const [selectedSurface, setSelectedSurface] = useState<string>("white");

  const surface = surfaces.find((s) => s.id === selectedSurface) || surfaces[0];

  return (
    <div className="min-h-screen" style={{ background: surface.bg }}>
      {/* Header — always on primary */}
      <section className="py-12 text-white" style={{ background: "#E85D04" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-orange-200 text-xs font-semibold uppercase tracking-wider mb-1">
            Solar Flame 配色体系
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">
            FLONCO Logo 配色方案
          </h1>
          <p className="text-orange-100 max-w-2xl">
            基于你的 SVG Logo 文件，设计了{" "}
            <strong className="text-white">5 种颜色变体</strong>
            ，每种适配不同页面背景。切换下方背景查看对比效果。
          </p>
        </div>
      </section>

      {/* Surface Selector */}
      <section
        className="py-6 border-b sticky top-0 z-40 backdrop-blur-sm"
        style={{
          background: surface.bg === "#ffffff" ? "rgba(255,255,255,0.92)" : "rgba(255,248,240,0.92)",
          borderColor: "rgba(0,0,0,0.06)",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 mr-1">
              预览背景:
            </span>
            {surfaces.map((s) => (
              <button
                key={s.id}
                onClick={() => setSelectedSurface(s.id)}
                className="relative px-4 py-2 rounded-lg text-xs font-medium border transition-all flex items-center gap-2"
                style={{
                  background: s.bg,
                  color: s.textColor,
                  borderColor:
                    selectedSurface === s.id ? s.textColor : "rgba(0,0,0,0.12)",
                  boxShadow:
                    selectedSurface === s.id
                      ? `0 0 0 2px ${s.textColor}20`
                      : "none",
                  opacity: selectedSurface === s.id ? 1 : 0.65,
                }}
              >
                <span
                  className="w-3 h-3 rounded-full border border-black/10 flex-shrink-0"
                  style={{ background: s.bg }}
                />
                {s.label}
              </button>
            ))}
          </div>
          <p className="text-[11px] text-gray-400 mt-1.5">
            当前模拟背景: {surface.label}（{surface.hint}）—{" "}
            <span style={{ color: surface.bg === "#ffffff" || surface.bg === "#FFF8F0" ? "#E85D04" : "#FFBA08" }}>
              适合使用深色 / 反白 Logo
            </span>
          </p>
        </div>
      </section>

      {/* Logo Grid */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="grid gap-6"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            }}
          >
            {logoVariants.map((variant) => {
              const isDarkSurface = surface.bg === "#E85D04" || surface.bg === "#1E293B";
              const contrastRating = (() => {
                // Simple heuristic: white logo on dark = great, dark logo on light = great
                if (variant.id === "white" && isDarkSurface) return { stars: 3, label: "最佳搭配" };
                if ((variant.id === "flame" || variant.id === "charcoal" || variant.id === "duotone") && !isDarkSurface)
                  return { stars: 3, label: "最佳搭配" };
                if (variant.id === "white" && !isDarkSurface)
                  return { stars: 1, label: "对比度不足" };
                if ((variant.id === "flame" || variant.id === "charcoal") && isDarkSurface)
                  return { stars: 1, label: "对比度不足" };
                if (variant.id === "gold" && surface.bg === "#FFF8F0")
                  return { stars: 2, label: "可接受" };
                return { stars: 2, label: "可接受" };
              })();

              return (
                <div
                  key={variant.id}
                  className="rounded-xl border overflow-hidden transition-all hover:shadow-md"
                  style={{
                    background: surface.bg,
                    borderColor: "rgba(0,0,0,0.08)",
                  }}
                >
                  {/* Logo preview area */}
                  <div
                    className="flex items-center justify-center py-12 px-6"
                    style={{ minHeight: 140 }}
                  >
                    <img
                      src={variant.file}
                      alt={`FLONCO Logo — ${variant.name}`}
                      className="w-full max-w-[260px] h-auto"
                    />
                  </div>

                  {/* Info footer */}
                  <div
                    className="px-5 py-4 border-t"
                    style={{
                      background:
                        surface.bg === "#1E293B" || surface.bg === "#E85D04"
                          ? "rgba(0,0,0,0.15)"
                          : "rgba(0,0,0,0.02)",
                      borderColor: "rgba(0,0,0,0.06)",
                    }}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <h3
                        className="font-semibold text-sm"
                        style={{ color: surface.textColor }}
                      >
                        {variant.name}
                      </h3>
                      {/* Contrast rating */}
                      <span
                        className="text-[10px] font-medium px-2 py-0.5 rounded-full"
                        style={{
                          background:
                            contrastRating.stars >= 3
                              ? "#10b98120"
                              : contrastRating.stars >= 2
                                ? "#FFBA0820"
                                : "#ef444420",
                          color:
                            contrastRating.stars >= 3
                              ? "#059669"
                              : contrastRating.stars >= 2
                                ? "#B45309"
                                : "#dc2626",
                        }}
                      >
                        {"★".repeat(contrastRating.stars)}
                        {"☆".repeat(3 - contrastRating.stars)}
                        {" "}{contrastRating.label}
                      </span>
                    </div>

                    <p
                      className="text-xs leading-relaxed mb-2"
                      style={{
                        color:
                          surface.bg === "#1E293B" || surface.bg === "#E85D04"
                            ? "rgba(255,255,255,0.6)"
                            : "#6b7280",
                      }}
                    >
                      {variant.desc}
                    </p>

                    <div className="flex items-center gap-2">
                      <span
                        className="w-4 h-4 rounded-full border border-black/10 flex-shrink-0"
                        style={{ background: variant.hex.includes("+") ? "#E85D04" : variant.hex }}
                      />
                      <code
                        className="text-[10px] px-1.5 py-0.5 rounded font-mono"
                        style={{
                          background:
                            surface.bg === "#1E293B" || surface.bg === "#E85D04"
                              ? "rgba(255,255,255,0.1)"
                              : "rgba(0,0,0,0.05)",
                          color: surface.textColor,
                        }}
                      >
                        {variant.hex}
                      </code>
                      <span
                        className="text-[10px]"
                        style={{
                          color:
                            surface.bg === "#1E293B" || surface.bg === "#E85D04"
                              ? "rgba(255,255,255,0.45)"
                              : "#9ca3af",
                        }}
                      >
                        — {variant.bestFor}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recommendation Summary */}
      <section
        className="py-12"
        style={{
          background:
            surface.bg === "#1E293B" || surface.bg === "#E85D04"
              ? "rgba(0,0,0,0.08)"
              : "rgba(0,0,0,0.02)",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-xl font-bold mb-6"
            style={{ color: surface.textColor }}
          >
            📋 推荐配置方案
          </h2>

          <div
            className="grid gap-4"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            }}
          >
            {[
              {
                location: "Navbar 导航栏",
                bg: "橙色 #E85D04",
                logo: "logo-white.svg",
                logoName: "White 反白版",
                reason: "深色背景上白色 Logo 最清晰",
                isDark: true,
              },
              {
                location: "Footer 页脚",
                bg: "橙色 #E85D04",
                logo: "logo-white.svg",
                logoName: "White 反白版",
                reason: "与 Navbar 保持统一",
                isDark: true,
              },
              {
                location: "Hero 首屏大图",
                bg: "橙色渐变",
                logo: "logo-white.svg 或 logo-duotone.svg",
                logoName: "White / Duotone",
                reason: "反白清爽，Duotone 增加品牌层次",
                isDark: true,
              },
              {
                location: "页面内容区 / 卡片",
                bg: "白色 #FFF / #FFF8F0",
                logo: "logo-flame.svg",
                logoName: "Flame Orange",
                reason: "浅色背景用品牌主色 Logo",
                isDark: false,
              },
              {
                location: "社交媒体头像",
                bg: "任意",
                logo: "logo-duotone.svg",
                logoName: "Duotone 双色版",
                reason: "色彩丰富，小尺寸也醒目",
                isDark: false,
              },
              {
                location: "印刷 / 文档",
                bg: "白色纸张",
                logo: "logo-flame.svg 或 logo-charcoal.svg",
                logoName: "Flame / Charcoal",
                reason: "打印时橙色/深灰都比纯黑更有品牌辨识度",
                isDark: false,
              },
            ].map((rec) => (
              <div
                key={rec.location}
                className="rounded-xl border p-5 transition-all hover:shadow-sm"
                style={{
                  background: surface.bg,
                  borderColor: "rgba(0,0,0,0.08)",
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className="w-3 h-3 rounded-full flex-shrink-0"
                    style={{
                      background: rec.isDark ? "#E85D04" : "#FFF8F0",
                      border: "1px solid rgba(0,0,0,0.1)",
                    }}
                  />
                  <h3
                    className="font-semibold text-sm"
                    style={{ color: surface.textColor }}
                  >
                    {rec.location}
                  </h3>
                </div>
                <p
                  className="text-xs leading-relaxed mb-1"
                  style={{
                    color:
                      surface.bg === "#1E293B" || surface.bg === "#E85D04"
                        ? "rgba(255,255,255,0.5)"
                        : "#6b7280",
                  }}
                >
                  背景: {rec.bg}
                </p>
                <p
                  className="text-sm font-medium"
                  style={{ color: "#E85D04" }}
                >
                  → {rec.logoName}
                </p>
                <p
                  className="text-xs mt-0.5"
                  style={{
                    color:
                      surface.bg === "#1E293B" || surface.bg === "#E85D04"
                        ? "rgba(255,255,255,0.6)"
                        : "#9ca3af",
                  }}
                >
                  {rec.reason}
                </p>
              </div>
            ))}
          </div>

          {/* Final Recommendation */}
          <div
            className="mt-8 rounded-xl p-6 border-2"
            style={{
              background: "linear-gradient(135deg, #FFF8F0, #FFF0E0)",
              borderColor: "#FFBA08",
            }}
          >
            <h3 className="font-bold text-base mb-3 flex items-center gap-2" style={{ color: "#C44A03" }}>
              🏆 最终建议
            </h3>
            <div className="space-y-3 text-sm" style={{ color: "#7C2D12" }}>
              <p>
                <strong>当前配置已是最佳实践:</strong> 网站 Navbar / Footer 使用{" "}
                <code className="px-1.5 py-0.5 rounded text-xs bg-white/60" style={{ color: "#E85D04" }}>
                  logo-white.svg
                </code>
                （白色反白版），因为导航栏和页脚都是橙色背景，白色 Logo 对比度最高。
              </p>
              <p>
                如需在白色页面区域放置 Logo（如 About 页），建议使用{" "}
                <code className="px-1.5 py-0.5 rounded text-xs bg-white/60" style={{ color: "#E85D04" }}>
                  logo-flame.svg
                </code>
                （品牌橙色版）。
              </p>
              <p>
                所有 SVG 文件位于{" "}
                <code className="px-1.5 py-0.5 rounded text-xs bg-white/60">
                  /public/logo-colors/
                </code>
                ，可随时按场景选用。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Back link */}
      <div className="text-center py-10">
        <a
          href="/"
          className="inline-flex items-center gap-1 text-sm font-medium transition-colors"
          style={{ color: surface.textColor, opacity: 0.5 }}
        >
          ← 返回首页
        </a>
      </div>
    </div>
  );
}
