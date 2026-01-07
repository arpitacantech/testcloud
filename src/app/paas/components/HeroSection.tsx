"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ClientLogos from "@/src/app/components/Clients";
import { ContainerScroll } from "@/src/app/components/ui/container-scroll-animation";
import { ShaderAnimation } from "@/src/app/components/ui/shader-animation";


export default function HeroSection() {
  return (
    <section className="relative w-full  bg-black overflow-hidden pt-52 pb-0">
      {/* 1. SHADER BACKGROUND */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <ShaderAnimation />
      </div>

      {/* 2. GRAYSCALE OVERLAY */}
      <div className="absolute inset-0 w-full h-full z-[1] pointer-events-none bg-black/60 backdrop-blur-[1px] mix-blend-normal grayscale"></div>

      {/* 3. CONTENT ABOVE EVERYTHING */}
      <div className="relative z-20 max-w-5xl mx-auto text-center px-6 mb-20">
        {/* Heading */}
        <h1 className="cc-h1">
          <span>Build and Scale Faster with</span>
          <span className="block mt-2">Cantech PaaS Cloud Platform</span>
        </h1>

        {/* Email input + button */}
        <form
          action="https://app.cantech.cloud/"
          method="GET"
          className="relative flex items-center max-w-md mx-auto"
        >
          {/* Email Input */}
          <input
            type="email"
            name="signup"
            required
            placeholder="Enter your email"
            className="
    w-full px-5 sm:px-7 
    pr-28 sm:pr-36 
    py-3 
    rounded-full 
    bg-black/70 
    border border-gray-700 
    text-white 
    placeholder-gray-400 
    text-xs sm:text-sm 
    font-normal 
    focus:outline-none
  "
          />

          {/* Button inside input */}
          <button
            type="submit"
            className="
    absolute right-1 
    sm:right-1.5
    px-4 sm:px-6
    py-2 sm:py-2.5
    bg-white 
    text-black 
    font-medium 
    rounded-full 
    text-xs sm:text-sm
    hover:bg-gray-200 
    transition-all 
    shadow-[0_0_12px_rgba(255,255,255,0.6)]
  "
          >
            Start Free Trial
          </button>
        </form>
      </div>

      {/* Dashboard */}
      <div className="-mt-80 relative z-10">
        <ContainerScroll titleComponent={<></>}>
          <div className="relative w-full max-w-[1200px] mx-auto">
            <img
              src="/assets/images/paas/paas-cloud-platform.webp"
              alt="PaaS Cloud Platform | Cantech Cloud"
              width={1200}
              height={700}
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </ContainerScroll>
      </div>

      {/* Clients */}
      <div className="-mt-72 relative z-10">
        <ClientLogos transparent />
      </div>
    </section>
  );
}
