"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface GridGlowProps {
  className?: string;
  gridSize?: number;
  baseLineColor?: string;
  glowLineColor?: string;
  glowRadius?: number;
  followSpeed?: number;
}

export default function GlowingGridBackground({
  className,
  gridSize = 60,
  baseLineColor = "rgba(255,255,255,0.06)",
  glowLineColor = "rgba(0,255,255,0.9)",
  glowRadius = 180,
  followSpeed = 0.08,
}: GridGlowProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const smooth = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const animate = () => {
      smooth.current.x += (mouse.current.x - smooth.current.x) * followSpeed;
      smooth.current.y += (mouse.current.y - smooth.current.y) * followSpeed;

      if (ref.current) {
        ref.current.style.setProperty("--mx", `${smooth.current.x}px`);
        ref.current.style.setProperty("--my", `${smooth.current.y}px`);
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move);
    animate();

    return () => window.removeEventListener("mousemove", move);
  }, [followSpeed]);

  return (
    <div ref={ref} className={cn("absolute inset-0 pointer-events-none", className)}>
      
      {/* Base Grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(${baseLineColor} 1px, transparent 1px),
            linear-gradient(90deg, ${baseLineColor} 1px, transparent 1px)
          `,
          backgroundSize: `${gridSize}px ${gridSize}px`,
        }}
      />

      {/* Glowing Grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(${glowLineColor} 1px, transparent 1px),
            linear-gradient(90deg, ${glowLineColor} 1px, transparent 1px)
          `,
          backgroundSize: `${gridSize}px ${gridSize}px`,
          maskImage: `
            radial-gradient(
              ${glowRadius}px circle at var(--mx) var(--my),
              white 0%,
              transparent 70%
            )
          `,
          WebkitMaskImage: `
            radial-gradient(
              ${glowRadius}px circle at var(--mx) var(--my),
              white 0%,
              transparent 70%
            )
          `,
        }}
      />

      {/* DARK GRADIENT OVERLAY */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(
              to bottom,
              rgba(0,0,0,0.85) 0%,
              rgba(0,0,0,0.55) 30%,
              rgba(0,0,0,0.15) 55%,
              rgba(0,0,0,0.75) 100%
            )
          `,
        }}
      />
    </div>
  );
}