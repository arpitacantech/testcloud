'use client';
import { useState, useEffect } from "react";
import { 
  Menu, 
  X, 
  Layers,
  Network,
  Server,
  DollarSign,
  FileText,
} from "lucide-react";

const navItems = [
  { name: "Kubernetes", href: "/compute/kubernetes", icon: Layers },
  { name: "Storage", href: "#", icon: Server },
  { name: "Networking", href: "#", icon: Network },
  { name: "Pricing", href: "/compute/pricing", icon: DollarSign },
  { name: "Blogs", href: "/blog", icon: FileText },
];

export default function PaasNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-full z-50 px-4 sm:px-6 md:px-8">
        <div
          className={`
            mx-auto border border-white/20 bg-black/80 rounded-full backdrop-blur-xl px-6 md:px-8 h-[55px] flex items-center transition-all duration-300 ease-out
            ${
              scrolled
                ? "max-w-xl sm:max-w-2xl md:max-w-4xl lg:max-w-5xl"
                : "max-w-xl sm:max-w-3xl md:max-w-5xl lg:max-w-7xl"
            }
          `}
          style={{ backdropFilter: "blur(40px)" }}
        >
          {/* LOGO */}
          <div className="flex flex-1 items-center gap-2">
            <a href="/" className="flex items-center gap-2">
              <div className="h-10 w-auto sm:h-10">
                <img src="/assets/images/logo/cantech-cloud-logo.svg" alt="Cantech Cloud" title="Cantech Cloud" />
              </div>
            </a>
          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex flex-1 justify-center items-center space-x-8 pl-10 text-muted-foreground">
            {navItems.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href} 
                  className="hover:text-white text-white/80 transition-colors font-sora font-normal"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden lg:flex flex-1 justify-end">
            <a
              href="https://app.cantech.cloud/?signup=true"
              className="px-6 py-2.5 rounded-full text-foreground font-sora font-medium hover:glow-text transition-all duration-300"
            >
              Get Started →
            </a>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={26} />
          </button>
        </div>
      </nav>

      {/* MOBILE OVERLAY */}
      <div
        className={`fixed inset-0 z-40 bg-background/80 backdrop-blur-sm transition-opacity duration-300
          ${mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
        onClick={() => setMobileOpen(false)}
      />

      {/* MOBILE SIDEBAR */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-[85%] max-w-sm
          bg-card/30 backdrop-blur-md border-l border-border
          transform transition-transform duration-300 ease-out
          ${mobileOpen ? "translate-x-0 animate-slide-in" : "translate-x-full"}
        `}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <span className="text-foreground font-sora font-semibold">&nbsp;</span>
          <button onClick={() => setMobileOpen(false)}>
            <X className="text-foreground" />
          </button>
        </div>

        {/* MENU */}
        <div className="p-6 space-y-6 overflow-y-auto h-[calc(100%-80px)]">
          {/* OTHER LINKS */}
          <div className="space-y-1 pt-4 border-t border-border">
            {navItems.map((item) => (
              <a
                href={item.href}
                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-secondary/50 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                <item.icon className="w-4 h-4 text-white/80" />
                <span className="text-foreground font-sora">{item.name}</span>
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="/get-started"
            className="block text-center py-3 rounded-full bg-secondary border border-border
                       hover:glow-box transition-all duration-300 font-sora text-foreground"
            onClick={() => setMobileOpen(false)}
          >
            Get Started →
          </a>
        </div>
      </aside>
    </>
  );
}