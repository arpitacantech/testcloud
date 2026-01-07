"use client";
import { useState } from "react";
import ClientLogos from "./Clients";
import { Check, Rocket } from "lucide-react";
import GetStartedModal from "./GetStartedModal";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen w-full overflow-hidden flex flex-col pt-32 md:pt-40">
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover grayscale"
        >
          <source src="/assets/hero-vid.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Hero content */}
        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 text-center sm:px-6 md:px-10 lg:px-20">
          <h1 className="cc-h1">
            <span className="block bg-gradient-to-b from-white via-gray-300 to-gray-400 bg-clip-text text-transparent">
              India's Best Cloud Compute
            </span>
            <span className="block bg-gradient-to-b from-white via-gray-300 to-gray-400 bg-clip-text text-transparent md:mt-3">
              and PaaS Solutions
            </span>
          </h1>

          <ul className="mb-12 flex flex-col gap-4 md:flex-row md:flex-wrap md:justify-center md:gap-9">
            {[
              "Fast Deployment",
              "Scalable Infrastructure",
              "99.97% Uptime",
              "Secure & Reliable",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2.5">
                <span className="bg-secondary rounded-full p-1">
                  <Check size={16} />
                </span>
                <span className="text-tagline-2">{item}</span>
              </li>
            ))}
          </ul>

          <button onClick={() => setOpen(true)} className="button">
             <Rocket /><span>Start Free Trial</span>
          </button>
        </div>

        <div className="relative z-10 pb-10">
          <ClientLogos transparent />
        </div>
      </section>

      <GetStartedModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}