"use client";

import { Zap } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 sm:pt-40 sm:pb-24">
      {/* Background effects */}
      <div className="container relative mx-auto px-4">
        <div className="max-w-7xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-cmpt_primary/10 border border-cmpt_primary/20 animate-fade-in">
            <Zap className="w-4 h-4 text-cmpt_primary" />
            <span className="text-sm font-medium text-cmpt_primary">
              Lightning-fast deployment
            </span>
          </div>
          
          {/* Title */}
          <h1
            className="cc-h1 text-center animate-fade-in"
            style={{ animationDelay: "100ms" }}
          >
            <span>Get High Performance Cloud Compute</span><span className="block mt-2">at Affordable Prices</span>
          </h1>

          {/* Subtitle */}
          <p
            className="subtitle"
            style={{ animationDelay: "200ms" }}
          >
            Run heavy workloads on high-performance cloud computing solutions designed  for reliability, high speed and scalability with transparent and affordable pricing.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in"
            style={{ animationDelay: "300ms" }}
          >
            {/* Primary Button */}
            <div className="gap-4 relative z-10 mt-10">
                <a href="#" className="button"><span>Get Started</span></a>
            </div>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-3 gap-8 mt-16 pt-10 border-t border-cmpt_border/50 animate-fade-in"
            style={{ animationDelay: "400ms" }}
          >
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-cmpt_foreground mb-1">99.97%</div>
              <div className="cc-p">Uptime SLA</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-cmpt_foreground mb-1">10+</div>
              <div className="cc-p">Global Locations</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-cmpt_foreground mb-1">&lt; 30s</div>
              <div className="cc-p">Deploy Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}