"use client";
import React, { useEffect, useState } from "react";

const INTRO_STYLE_ID = "faq1-animations";

const faqs = [
  {
    question: "What is Cloud PHP Hosting exactly?",
    answer:
      "This service runs your PHP code on a network of virtual servers. It provides more stability than a single physical machine. You get the ability to scale resources like RAM and CPU instantly when your website traffic increases.",
    // meta: "Discovery",
  },
  {
 
  question: "What makes your Managed PHP Hosting different?",
  answer:
    "We handle all server updates and security patches. You get a dedicated environment without any shared resources. Our team monitors your server health around the clock.",
},
  {
    question: "Can I scale my Cloud PHP Hosting instantly?",
    answer:
      "Yes, our system adds RAM and CPU automatically. You do not need to buy a new plan. The website stays online while the server grows larger.",
    // meta: "Systems",
  },
  {
    question: "Does Cantech Cloud support all PHP frameworks?",
    answer:
      "We support Laravel, Symfony, and custom PHP code. Our environment adapts to any modern web application requirements. You can also host WordPress or Magento stores easily.",
    // meta: "Quality",
  },
   {
    question: "Is SSL included with your PHP Hosting plans?",
    answer:
      "We provide free SSL certificates for every single domain. The certificates renew automatically every few months for you. Your website always shows the secure padlock icon.",
    // meta: "Quality",
  },
   {
    question: "Which PHP versions do you support?",
    answer:
      "We support all versions from PHP 8.1 to the latest 8.4 release. You can select your preferred version from the control panel. Switching takes less than one minute to complete.",
    // meta: "Quality",
  },
   {
    question: "Is my data safe on Cantech Cloud?",
    answer:
      "We take daily backups of your files and databases. Each app runs in an isolated container for maximum safety. We also provide a free firewall to block malicious traffic.",
    // meta: "Quality",
  },
   {
    question: "Do you help with website migration?",
    answer:
      "Our experts move your existing PHP site to our cloud for free. We ensure that your site experiences no downtime during the transfer. You just provide the login details, and we do the rest.",
    // meta: "Quality",
  },
   {
    question: "Can I use any PHP framework?",
    answer:
      "You can host Laravel, Symfony, or WordPress on our platform. We support all custom PHP applications and CMS engines. The server environment adapts to your specific code requirements.",
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
            <h2 className="text-[32px] font-extrabold mx-auto mb-3 leading-tight text-white">FAQs about Laravel PaaS Hosting</h2>
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
  className={`overflow-hidden text-lg leading-relaxed transition-[max-height] duration-500 ease-out ${
    open ? "max-h-[1000px]" : "max-h-0"
  } text-neutral-400`}
>

                      <div className="cc-p pt-4">
  {Array.isArray(item.answer) ? (
    <ul className="list-disc pl-5 space-y-2">
      {item.answer.map((point, i) => (
        <li key={i}>{point}</li>
      ))}
    </ul>
  ) : (
    <p>{item.answer}</p>
  )}
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


