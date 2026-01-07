"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// import { Zap, Activity, Layers } from "lucide-react";
// import feature1 from "./public/48UxoeoeNSJXhqwyeI0451Y.png";
// import feature2 from "./public/48UxoeoeNSJXhqwyeI0451Y.png";
// import feature3 from "./public/48UxoeoeNSJXhqwyeI0451Y.png";

export interface Feature {
  id: number;
  icon?: React.ReactNode;    // optional, જો icons use કરશો તો
  title: string;
  description: string;
//   image: string;             // public path string
}

const features: Feature[] = [
  {
    id: 1,
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-zap w-6 h-6"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>,
    title: "Fast and Easy Setup",
    description:
      "Launch your virtual machines in seconds using our intuitive interface, API, or CLI tools. Start focusing on what matters without delays.",
     
  },
  {
    id: 2,
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-zap w-6 h-6"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>,
    title: "Reliable Performance",
    description:
      "With a 99.95% uptime SLA, your VMs deliver consistent performance to keep your business running smoothly.",
    // image: feature2,
  },
  {
    id: 3,
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-zap w-6 h-6"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>,
    title: "Scalable Configurations",
    description:
      "Choose the right resources for your needs and scale up or down effortlessly as your workload changes.",
    // image: feature3,
  },
];

const StickyScrollReveal = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState<number[]>([0, 0, 0]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const containerTop = rect.top;
      const containerHeight = rect.height;
      const viewportHeight = window.innerHeight;

      // Calculate scroll progress within the container
      const scrolled = -containerTop;
      const scrollableHeight = containerHeight - viewportHeight;
      const progress = Math.max(0, Math.min(1, scrolled / scrollableHeight));

      // Determine which section is active
      const sectionProgress = progress * features.length;
      const newActiveIndex = Math.min(
        Math.floor(sectionProgress),
        features.length - 1
      );
      setActiveIndex(newActiveIndex);

      // Calculate individual progress for each feature
      const newProgress = features.map((_, index) => {
        const sectionStart = index / features.length;
        const sectionEnd = (index + 1) / features.length;
        const sectionProg =
          (progress - sectionStart) / (sectionEnd - sectionStart);
        return Math.max(0, Math.min(1, sectionProg));
      });
      setScrollProgress(newProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div
          ref={containerRef}
          className="relative"
          style={{ height: `${100 + features.length * 100}vh` }}
        >
          <div className="sticky top-0 h-screen flex items-center">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Left - Sticky Image */}
                <div className="relative">
                  <div className="relative rounded-2xl overflow-hidden glow-box">
                    {/* Window frame decoration */}
                    <div className="absolute top-0 left-0 right-0 bg-secondary/50 px-4 py-3 flex items-center gap-2 z-10">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-muted-foreground/40" />
                        <div className="w-3 h-3 rounded-full bg-muted-foreground/40" />
                        <div className="w-3 h-3 rounded-full bg-muted-foreground/40" />
                      </div>
                    </div>

                    {/* Images with crossfade */}
                    <div className="relative aspect-[5/4] bg-card">
                      {features.map((feature, index) => (
                        <img
                          key={feature.id}
                          src='@/public/48UxoeoeNSJXhqwyeI0451Y.png'
                          alt={feature.title}
                          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                          style={{
                            opacity: activeIndex === index ? 1 : 0,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right - Features List */}
                <div className="space-y-12">
                  {features.map((feature, index) => {
                    const isActive = activeIndex === index;
                    const progress = scrollProgress[index];

                    return (
                      <div
                        key={feature.id}
                        className={`transition-all duration-500 ${
                          isActive
                            ? "opacity-100 translate-y-0"
                            : index < activeIndex
                            ? "opacity-30 -translate-y-4"
                            : "opacity-30 translate-y-4"
                        }`}
                      >
                        <div className="flex gap-4">
                          {/* Icon */}
                          <div
                            className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${
                              isActive
                                ? "bg-primary/20 text-primary"
                                : "bg-secondary text-muted-foreground"
                            }`}
                          >
                            {feature.icon}
                          </div>

                          {/* Content */}
                          <div className="flex-1">
                            <h3
                              className={`text-xl font-semibold mb-2 transition-colors duration-500 ${
                                isActive
                                  ? "text-foreground"
                                  : "text-muted-foreground"
                              }`}
                            >
                              {feature.title}
                            </h3>
                            <p
                              className={`leading-relaxed transition-colors duration-500 ${
                                isActive
                                  ? "text-muted-foreground"
                                  : "text-muted-foreground/50"
                              }`}
                            >
                              {feature.description}
                            </p>

                            {/* Progress indicator */}
                            {isActive && (
                              <div className="mt-4 h-0.5 bg-secondary rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-primary transition-all duration-100"
                                  style={{ width: `${progress * 100}%` }}
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StickyScrollReveal;
