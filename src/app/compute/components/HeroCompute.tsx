"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import { Cloud } from 'lucide-react';
import { ContainerScroll } from "../../components/ui/container-scroll-animation";
import Image from "next/image";
import ClientLogos from "@/src/app/components/Clients";
import GetStartedModal from "@/src/app/components/GetStartedModal";

const BeamsBackground = dynamic(
  () => import("./BeamsBackground"),
  { ssr: false }
);

export default function HeroCompute() {
  const [open, setOpen] = useState(false);

  return (
    <>
    <section className="relative w-full bg-black overflow-hidden px-6 pt-32 md:pt-40 pb-24">
      <div className="container px-4 mx-auto">
      <div className="absolute inset-0 w-full h-11 z-0 pointer-events-none">
        <BeamsBackground />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto text-center px-6 mb-20">
        <div className="inline-flex items-center gap-2 z-10 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"><Cloud /><span>Cloud Compute</span>
        </div>

        <h1 className="cc-h1">
          <span>Enterprise Cloud Compute</span>
          <span className="block mt-[7px]">Solutions for Every Workload</span>
        </h1>
        <p className="max-w-3xl mx-auto text-center text-white/80 mb-10 z-10">Power your workloads with optimized cloud compute that balances performances and cost. Designed to support modern applications, data processing and enterprise grade solutions.</p>
        <div className="gap-4 relative z-10 mb-16">
          <button onClick={() => setOpen(true)} className="button"><span>Get Started</span></button>
        </div>
      </div>

      <div className="-mt-80 relative z-10">
        <ContainerScroll titleComponent={<></>}>
          <div className="relative w-full max-w-[1200px] mx-auto">
            <img
              src="/assets/images/compute/cloud-compute-solutions.webp"
              alt="Enterprise Cloud Compute Solutions for Every Workload | Cantech Cloud"
              width={1200}
              height={700}
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </ContainerScroll>
      </div>

      <div className="-mt-72 relative z-10">
        <ClientLogos transparent />
      </div>
      </div>
    </section>

    <GetStartedModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}




