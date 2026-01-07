"use client";
import React, { useEffect, useState } from "react";

const INTRO_STYLE_ID = "faq1-animations";

const faqs = [
  {
    question: "What is Cantech Cloud?",
    answer:
      "Cantech Cloud is a leading Indian provider of high-performance infrastructure and reliable web hosting. We have been serving businesses since 2009 for local and global companies grow. You get modern tools and hardware for your platforms.",
    // meta: "Discovery",
  },
  {
    question: "What cloud services does Cantech Cloud offer?",
    answer:
      "We offer a wide range of services including Cloud Compute for heavy workloads and high-speed NVMe storage. Our PaaS Solutions help you manage databases and Kubernetes clusters without technical stress. You can also get NVIDIA GPU servers for AI projects and secure block storage for your data. We provide all the networking tools like VPNs and firewalls for complete environment control.",
    // meta: "Collaboration",
  },
  {
    question: "How is Cantech Cloud different from other cloud providers in India?",
    answer:
      "We offer 24/7 support where you talk to real experts instead of automated bots. Our pricing is very transparent and helps you save up compared to global competitors. We guarantee a 99.97% uptime because we use Tier-3 and Tier-4 certified data centers across India. You get dedicated resources like CPU and RAM that are never shared with other users.",
    // meta: "Systems",
  },
  {
    question: "Who should use Cantech Cloud services?",
    answer:
      "Developers use our platform to deploy modern apps and manage microservices with Kubernetes. Business owners choose us to host high-traffic websites that need constant uptime and fast loading speeds. Data scientists pick our GPU servers to run complex AI models and heavy parallel computing tasks. We are the right fit for anyone who needs professional cloud power with excellent support.",
    // meta: "Quality",
  },
  {
    question: "Is Cantech Cloud suitable for startups and enterprises?",
    answer:
      "Our platform is designed to scale from small startup projects to large enterprise operations easily. Startups benefit from our low entry costs and free migration support to launch their ideas quickly. Enterprises value our advanced security features and the ability to handle massive traffic without performance drops. You can upgrade your resources instantly as your business requirements grow over time.",
    // meta: "Quality",
  },
  {
    question: "How secure is Cantech Cloud infrastructure?",
    answer:
      "We protect your data with multiple layers of security, including BitNinja and advanced DDoS protection. Our data centers use biometric access and 24/7 CCTV monitoring to ensure the physical safety of the hardware. We provide free SSL certificates and virtual firewalls to keep your online transactions and connections private. Regular weekly backups are included to ensure you can recover your information in any emergency.",
    // meta: "Quality",
  },
  {
    question: "Where are the Cantech Cloud data centers located?",
    answer:
      "We have a massive network of tier III & IV data centers in major Indian cities like Mumbai, Noida, Bangalore, and Jaipur. We also have a global network. This local presence ensures ultra-low latency and faster access for your users within the country. Each facility follows global compliance standards like ISO 27001 and PCI DSS for maximum data integrity. You can choose a location close to your target audience to improve your local SEO rankings.",
    // meta: "Quality",
  },
  {
    question: "Can I move my existing website to Cantech Cloud easily?",
    answer:
      "Our technical team offers free migration support to move your data without any trouble. We handle your files and databases to ensure zero downtime for your users. You do not need any great technical skills for this move to our platform. We take care of the full setup from start to finish.",
    // meta: "Quality",
  },
  {
    question: "Do you offer support for high-performance AI and machine learning?",
    answer:
      "We provide powerful NVIDIA GPU instances for your complex parallel computing and AI projects. These servers process huge data sets much faster than regular CPU-based machines. You can scale these resources as your training or inference needs grow. Our team helps you optimize these GPU servers for your specific AI workloads.",
    // meta: "Quality",
  }
  
];

const palette = {
  surface: "bg-neutral-950 text-neutral-100",
  panel: "bg-neutral-900/50",
  border: "border-white/10",
  heading: "text-white",
  muted: "text-neutral-400",
  iconRing: "border-white/20",
  iconSurface: "bg-white/5",
  icon: "text-white",
  glow: "rgba(255, 255, 255, 0.08)",
  aurora: "radial-gradient(ellipse 50% 100% at 10% 0%, rgba(226, 232, 240, 0.15), transparent 65%), #000000",
  shadow: "shadow-[0_36px_140px_-60px_rgba(10,10,10,0.95)]",
  overlay: "linear-gradient(130deg, rgba(255,255,255,0.04) 0%, transparent 65%)",
};

function FAQ1() {
  const [introReady, setIntroReady] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hasEntered, setHasEntered] = useState(false);

  // Inject animations CSS
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (document.getElementById(INTRO_STYLE_ID)) return;

    const style = document.createElement("style");
    style.id = INTRO_STYLE_ID;
    style.innerHTML = `
      @keyframes faq1-fade-up { 0% { transform: translate3d(0, 20px, 0); opacity: 0; filter: blur(6px); } 60% { filter: blur(0); } 100% { transform: translate3d(0, 0, 0); opacity: 1; filter: blur(0); } }
      @keyframes faq1-beam-spin { 0% { transform: rotate(0deg) scale(1); } 100% { transform: rotate(360deg) scale(1); } }
      @keyframes faq1-pulse { 0% { transform: scale(0.7); opacity: 0.55; } 60% { opacity: 0.1; } 100% { transform: scale(1.25); opacity: 0; } }
      @keyframes faq1-meter { 0%,20%{transform:scaleX(0);transform-origin:left;} 45%,60%{transform:scaleX(1);transform-origin:left;} 80%,100%{transform:scaleX(0);transform-origin:right;} }
      @keyframes faq1-tick { 0%,30%{transform:translateX(-6px);opacity:0.4;} 50%{transform:translateX(2px);opacity:1;} 100%{transform:translateX(20px);opacity:0;} }
      .faq1-intro { position: relative; display: flex; align-items: center; gap: 0.85rem; padding: 0.85rem 1.4rem; border-radius: 9999px; overflow: hidden; border: 1px solid rgba(255, 255, 255, 0.12); background: rgba(12,12,12,0.42); color: rgba(248,250,252,0.92); text-transform: uppercase; letter-spacing:0.35em; font-size:0.65rem; width:100%; max-width:24rem; margin:0 auto; mix-blend-mode: screen; opacity:0; transform: translate3d(0,12px,0); filter: blur(8px); transition: opacity 720ms ease, transform 720ms ease, filter 720ms ease; isolation: isolate; }
      .faq1-intro--active { opacity:1; transform:translate3d(0,0,0); filter:blur(0); }
      .faq1-intro__beam,.faq1-intro__pulse { position:absolute; inset:-110%; pointer-events:none; border-radius:50%; }
      .faq1-intro__beam { background: conic-gradient(from 160deg, rgba(226,232,240,0.25), transparent 32%, rgba(148,163,184,0.22) 58%, transparent 78%, rgba(148,163,184,0.18)); animation: faq1-beam-spin 18s linear infinite; opacity:0.55; }
      .faq1-intro__pulse { border:1px solid currentColor; opacity:0.25; animation: faq1-pulse 3.4s ease-out infinite; }
      .faq1-intro__label { position: relative; z-index:1; font-weight:600; letter-spacing:0.4em; }
      .faq1-intro__meter { position:relative; z-index:1; flex:1 1 auto; height:1px; background: linear-gradient(90deg, transparent, currentColor 35%, transparent 85%); transform: scaleX(0); transform-origin:left; animation:faq1-meter 5.8s ease-in-out infinite; opacity:0.7; }
      .faq1-intro__tick { position:relative; z-index:1; width:0.55rem; height:0.55rem; border-radius:9999px; background:currentColor; box-shadow:0 0 0 4px rgba(255,255,255,0.1); animation: faq1-tick 3.2s ease-in-out infinite; }
      .faq1-fade { opacity:0; transform: translate3d(0,24px,0); filter:blur(12px); transition: opacity 700ms ease, transform 700ms ease, filter 700ms ease; }
      .faq1-fade--ready { animation: faq1-fade-up 860ms cubic-bezier(0.22,0.68,0,1) forwards; }
    `;
    document.head.appendChild(style);
    return () => { if (style.parentNode) style.remove(); };
  }, []);

  // Intro ready animation
  useEffect(() => {
    if (typeof window === "undefined") {
      setIntroReady(true);
      return;
    }
    const frame = window.requestAnimationFrame(() => setIntroReady(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

// Page load animation
useEffect(() => {
  if (typeof window === "undefined") {
    setHasEntered(true);
    return;
  }

  let timeoutId: number; // explicitly number for browser

  const onLoad = () => {
    timeoutId = window.setTimeout(() => setHasEntered(true), 120) as unknown as number;
  };

  if (document.readyState === "complete") onLoad();
  else window.addEventListener("load", onLoad, { once: true });

  return () => {
    window.removeEventListener("load", onLoad);
    clearTimeout(timeoutId); // safe, always a number
  };
}, []);


  // Toggle FAQ
  const toggleQuestion = (index: number) =>
    setActiveIndex((prev) => (prev === index ? -1 : index));

  // Card glow effect
  const setCardGlow = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    target.style.setProperty("--faq-x", `${event.clientX - rect.left}px`);
    target.style.setProperty("--faq-y", `${event.clientY - rect.top}px`);
  };

  const clearCardGlow = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const target = event.currentTarget;
    target.style.removeProperty("--faq-x");
    target.style.removeProperty("--faq-y");
  };

  return (
    <div className={`relative overflow-hidden transition-colors duration-700 ${palette.surface}`}>
      <div className="absolute inset-0 z-0" style={{ background: palette.aurora }} />
      <div className="pointer-events-none absolute inset-0 z-0 opacity-80" style={{ background: palette.overlay, mixBlendMode: "screen" }} />

      <section className={`relative z-10 mx-auto flex max-w-4xl flex-col gap-12 px-6 py-24 lg:max-w-5xl lg:px-12 ${hasEntered ? "faq1-fade--ready" : "faq1-fade"}`}>
        <div className={`faq1-intro ${introReady ? "faq1-intro--active" : ""}`}>
          <span className="faq1-intro__beam" aria-hidden="true" />
          <span className="faq1-intro__pulse" aria-hidden="true" />
          <span className="faq1-intro__label text-sm">FAQ</span>
          <span className="faq1-intro__meter" aria-hidden="true" />
          <span className="faq1-intro__tick" aria-hidden="true" />
        </div>

        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-center">
          <div className="space-y-4">
            {/* <p className="text-xs uppercase tracking-[0.35em] text-neutral-400">Questions</p> */}
            <h2 className="cc-h2">Frequently Asked Questions</h2>
            {/* <p className="max-w-xl text-base text-neutral-400">Everything you need to know about partnering with our team, condensed into calm monochrome clarity.</p> */}
          </div>
        </div>

        <ul className="space-y-4">
          {faqs.map((item, index) => {
            const open = activeIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-trigger-${index}`;

            return (
              <li
                key={item.question}
                className={`group relative overflow-hidden rounded-3xl border backdrop-blur-xl transition-all duration-500 hover:-translate-y-0.5 focus-within:-translate-y-0.5 ${palette.border} ${palette.panel} ${palette.shadow}`}
                onMouseMove={setCardGlow}
                onMouseLeave={clearCardGlow}
              >
                <div
                  className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ${open ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
                  style={{ background: `radial-gradient(240px circle at var(--faq-x, 50%) var(--faq-y, 50%), ${palette.glow}, transparent 70%)` }}
                />

                <button
                  type="button"
                  id={buttonId}
                  aria-controls={panelId}
                  aria-expanded={open}
                  onClick={() => toggleQuestion(index)}
                  style={{ ["--faq-outline" as any]: "rgba(255,255,255,0.35)" }}
                  className={`relative flex w-full gap-6 px-8 py-7 text-left flex-row-reverse transition-all duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--faq-outline)]
                    ${open ? "items-start" : "items-start"}
                  `}
                >
                  <span className={`relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-500 group-hover:scale-105 ${palette.iconRing} ${palette.iconSurface}`}>
                    <span className={`pointer-events-none absolute inset-0 rounded-full border opacity-30 ${palette.iconRing} ${open ? "animate-ping" : ""}`} />
                    <svg className={`relative h-5 w-5 transition-transform duration-500 ${palette.icon} ${open ? "rotate-45" : ""}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 5v14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>

                  <div className="flex flex-1 flex-col ">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                      <h3 className="cc-h3">{item.question}</h3>
                    </div>
                    
                    <div
  id={panelId}
  role="region"
  aria-labelledby={buttonId}
  className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
    open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
  } text-neutral-400`}
>
  <div className="overflow-hidden">
    <p className="cc-p pt-4">{item.answer}</p>
  </div>
</div>

                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default FAQ1;
export { FAQ1 };
