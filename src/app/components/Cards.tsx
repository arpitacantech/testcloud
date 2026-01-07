"use client";
import { useRef, useState } from "react";

interface FeatureCardProps {
  imageSrc: string;
  title: string;
  description: string;
  buttonHref: string;
}

export default function Cards({
  imageSrc,
  title,
  description,
  buttonHref,
}: FeatureCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleEnter = () => setOpacity(1);
  const handleLeave = () => setOpacity(0);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="relative p-[1px] rounded-xl overflow-hidden bg-[linear-gradient(135deg,#0d0d0d,#050505)] border border-white/10 transition duration-300 cursor-pointer">
      {/* BORDER GLOW */}
      <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-200"
        style={{
          opacity,
          background: `
            radial-gradient(
              180px circle at ${pos.x}px ${pos.y}px,
              rgba(255,255,255, 1),
              transparent 70%
            )
          `,
        }}
      />

      {/* INNER CONTAINER */}
      <div className="relative z-10 rounded-xl p-6 bg-[#09090b]/95 backdrop-blur-sm overflow-hidden">
        {/* INNER SPOTLIGHT - NOW ABOVE BACKGROUND */}
        <div className="pointer-events-none absolute inset-0 transition-opacity duration-200"
          style={{
            opacity,
            background: `
              radial-gradient(
                400px circle at ${pos.x}px ${pos.y}px,
                rgba(255,255,255, 0.10),
                transparent 70%
              )
            `,
            zIndex: 0,
          }}
        />

        {/* CONTENT (above spotlight) */}
        <div className="relative z-10">
          <img src={imageSrc} alt={title} className="w-100 mb-4 rounded-xl object-contain mx-auto"/>
          <div className="w-full text-left space-y-4">
            <h3 className="cc-h3 text-2xl">{title}</h3>
            <p className="cc-p">{description}</p>
            <a href={buttonHref} className="cc-btn service-btn-color relative z-50 inline-flex items-center">
              <span className="button__icon-wrapper">
                <svg viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="button__icon-svg" width="10">
                  <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor"/>
                </svg>
                <svg viewBox="0 0 14 15" fill="none" width="10" xmlns="http://www.w3.org/2000/svg" className="button__icon-svg button__icon-svg--copy">
                  <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor"/>
                </svg>
              </span>
              Access Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
