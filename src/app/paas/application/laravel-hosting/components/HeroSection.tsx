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
      <div className="inline-flex items-center gap-2 z-10 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check-icon lucide-shield-check"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg><span>Laravel Hosting
    </span></div>

    <h1 className="cc-h1 text-center z-10"><span>The Best Laravel Hosting</span><span className="block mt-2">on Cloud PaaS</span></h1>
    <p className="max-w-3xl mx-auto text-center text-gray-500 mb-10 z-10">Cantech Cloud offers the best Laravel Hosting with auto-scaling and high speed. You can deploy Laravel 11 apps on a high-performance PaaS with built-in security for production.</p>

    <div className="flex items-center gap-4 relative z-10 mb-16">
       {/* CTA BUTTON */}
        <a href="#" className="button"><span>Get Started</span></a>
      </div>

      <div className="w-full max-w-5xl relative ">
        {/* <div
          className="absolute left-1/2 w-[90%] pointer-events-none z-0"
          style={{ top: "-10%", transform: "translateX(-50%)" }}
        >
          <img
            src="/glow.png"
            alt=""
            className="w-full h-auto opacity-60 mix-blend-screen"
          />
        </div> */}

        <div className="relative z-10">
          <img
            src="/assets/images/paas/laravel-hosting-on-cloud-paas.webp"
            alt="The Best Laravel Hosting on Cloud PaaS"
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
    // <main className="min-h-screen bg-black text-white">
      <Hero />
    // </main>
  );
}