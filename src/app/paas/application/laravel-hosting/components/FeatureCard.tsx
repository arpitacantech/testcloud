"use client";
import React, { ReactNode, CSSProperties } from "react";

interface FeatureCardProps {
  title: ReactNode;
  children?: ReactNode;
  icon?: ReactNode;
  delay?: string | number;
}

export default function FeatureCard({
  title,
  children,
  icon,
  delay,
}: FeatureCardProps): React.ReactElement {
  const animationDelay =
    typeof delay === "number" ? `${delay}ms` : delay ?? undefined;

  const style: CSSProperties = { animationDelay };

  return (
    <div
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-xl hover:shadow-crypto-purple/5 group animate-on-scroll"
      style={style}>
      <div
        className="bg-crypto-purple/20 rounded-lg w-12 h-12 flex items-center justify-center mb-5 text-crypto-purple group-hover:bg-crypto-purple/30 transition-colors duration-300">
        {icon}
      </div>

      <h3 className="font-heading font-bold text-[20px] leading-[20px] tracking-[0.3px] text-white mb-3">
        {title}
      </h3>

      <p className="font-[100] text-[#d1d1d1] max-w-md xl:max-w-none text-[16px] tracking-[0.5px]">
        {children}
      </p>
    </div>
  );
}
