"use client";
import React from "react";

// Inline Button Component
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "ghost" | "gradient";
  size?: "default" | "sm" | "lg";
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "default", size = "default", className = "", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

    const variants = {
      default: "bg-white text-black hover:bg-gray-100",
      secondary: "bg-gray-800 text-white hover:bg-gray-700",
      ghost: "hover:bg-gray-800/50 text-white",
      gradient:
        "bg-gradient-to-b from-white via-white/95 to-white/60 text-black hover:scale-105 active:scale-95",
    };

    const sizes = {
      default: "h-10 px-4 py-2 text-sm",
      sm: "h-10 px-5 text-sm",
      lg: "h-12 px-8 text-base",
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

// Icon
const ArrowRight = ({ className = "", size = 16 }: { className?: string; size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

// Hero Component
const Hero = React.memo(() => {
  return (
    <section
      className="relative flex flex-col items-center px-6 pt-32 md:pt-40 pb-24"

      style={{ animation: "fadeIn 0.6s ease-out" }}
    >
{/* Top Background Video (bleeds into dashboard) */}
<div className="absolute top-0 left-0 w-full h-[85vh] md:h-[95vh] z-0 overflow-hidden">
  <video
    className="h-full w-full object-cover grayscale scale-[1.35]"
    autoPlay
    loop
    muted
    playsInline
    preload="auto"
  >
    <source src="/assets/hero-video.mp4" type="video/mp4" />
  </video>

  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/80" />
</div>
      <div className="inline-flex items-center gap-2 z-10 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-gauge-icon lucide-gauge"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg><span>PHP Hosting
    </span></div>

    <h1 className="cc-h1 text-center z-10"><span>Cloud PHP Hosting – High Performance</span><span className="block mt-2">and Scalability</span></h1>
    <p className="max-w-3xl mx-auto text-center text-gray-500 mb-10 z-10">Cantech Cloud offers the best PHP Hosting for your web applications. Our platform provides a smooth experience for developers and business owners.</p>

    <div className="flex items-center gap-4 relative z-10 mb-16">
        <a href="#" className="button"><span>Get Started</span></a>
      </div>

      <div className="w-full max-w-5xl relative ">
        <div className="relative z-10">
          <img
            src="/assets/images/paas/cloud-php-hosting.webp"
            alt="Cloud PHP Hosting - High Performance and Scalability | Cantech Cloud"
            className="w-full h-auto rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
});

Hero.displayName = "Hero";

// Main Component
export default function Component() {
  return (
    <Hero />
  );
}