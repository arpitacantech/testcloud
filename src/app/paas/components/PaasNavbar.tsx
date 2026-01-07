'use client';
import { useState, useEffect } from "react";
import { 
  Menu, 
  X, 
  ChevronDown,
  Code2,
  Container,
  Globe,
  Coffee,
  Video,
  Box,
  Layers,
  ShoppingCart,
  MessageSquare,
  GraduationCap,
  Server,
  Package,
  Database,
  HardDrive,
  DollarSign,
  FileText,
  Cloud,
  RefreshCw,
  Archive,
  FolderOpen,
} from "lucide-react";

const applicationItems = [
  { name: "PHP Hosting", description: "High-performance PHP runtime", href: "/paas/application/php-hosting", icon: Code2 },
  // { name: "Docker Swarm", description: "Container orchestration at scale", href: "/paas/docker-swarm-hosting", icon: Container },
  // { name: "Drupal Hosting", description: "Optimized CMS environment", href: "/paas/drupal-hosting", icon: Globe },
  // { name: "Java Hosting", description: "Spring Boot & Jakarta EE ready", href: "/paas/java-hosting", icon: Coffee },
  // { name: "Jitsi Hosting", description: "Video conferencing platform", href: "/paas/jitsi-hosting", icon: Video },
  // { name: "Kubernetes", description: "Managed K8s clusters", href: "/paas/kubernetes-hosting", icon: Box },
  { name: "Laravel Hosting", description: "Optimized for Laravel apps", href: "/paas/application/laravel-hosting", icon: Layers },
  // { name: "Magento Cluster", description: "High-availability e-commerce", href: "/paas/magento-cluster", icon: ShoppingCart },
  // { name: "Magento Hosting", description: "E-commerce made simple", href: "/paas/magento-hosting", icon: ShoppingCart },
  // { name: "Mattermost", description: "Team collaboration platform", href: "/paas/mattermost-hosting", icon: MessageSquare },
  // { name: "Moodle Hosting", description: "Learning management system", href: "/paas/moodle-hosting", icon: GraduationCap },
  // { name: "Node.js Hosting", description: "Modern JavaScript runtime", href: "/paas/node-js-hosting", icon: Server },
  // { name: "Odoo Hosting", description: "Business apps suite", href: "/paas/odoo-hosting", icon: Package },
  // { name: "Auto Scaling", description: "Scale resources automatically", href: "/paas/auto-scaling", icon: RefreshCw },
];

// const databaseItems = [
//   { name: "MariaDB Cluster", description: "High-availability MariaDB", href: "/paas/mariadb-cluster", icon: Database },
//   { name: "MongoDB Hosting", description: "Managed NoSQL database", href: "/paas/mongodb-hosting", icon: Layers },
//   { name: "MySQL Cluster", description: "Scalable MySQL clusters", href: "/paas/mysql-cluster", icon: Database },
//   { name: "PostgreSQL", description: "Enterprise PostgreSQL hosting", href: "/paas/postgresql-hosting", icon: HardDrive },
// ];

// const storageItems = [
//   { name: "Backup Storage", description: "Secure data backup solutions", href: "/paas/backup-storage", icon: Archive },
//   { name: "File Storage", description: "Managed file storage", href: "/paas/file-storage", icon: FolderOpen },
//   { name: "Object Storage", description: "S3-compatible object storage", href: "/paas/object-storage", icon: Cloud },
// ];

const navItems = [
  { name: "Database", href: "/paas/database", icon: Database },
  { name: "Storage", href: "/paas/storage", icon: Server },
  { name: "Pricing", href: "/paas/pricing", icon: DollarSign },
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

  const renderMegaMenu = (items: typeof applicationItems, title: string) => (
    <div className="bg-card border border-border rounded-xl shadow-2xl min-w-[550px] overflow-hidden">
      {/* Header */}
      <div className="px-5 py-3 border-b border-border">
        <span className="text-xs font-semibold tracking-wider text-primary font-sora uppercase">
          {title}
        </span>
      </div>
      
      {/* Menu Items */}
      <div className="p-4">
        <div className={`grid ${items.length > 4 ? 'grid-cols-2' : 'grid-cols-1'} gap-x-4 gap-y-1`}>
          {items.map((item) => (
            <a
              href={item.href}
              className="flex items-start gap-3 px-3 py-3 rounded-lg hover:bg-black transition-colors group"
            >
              <item.icon className="w-4 h-4 text-white/80 mt-0.5 flex-shrink-0" />
              <div className="flex flex-col">
                <span className="font-sora text-sm font-medium text-foreground">
                  {item.name}
                </span>
                <span className="font-sora text-xs text-muted-foreground">
                  {item.description}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );

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
            {/* APPLICATIONS MEGA MENU */}
            <li 
              className="relative"
              onMouseEnter={() => setActiveMenu('applications')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="flex items-center gap-1 text-white/80 hover:text-white transition-colors font-sora font-medium py-2">
                Applications
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeMenu === 'applications' ? "rotate-180" : ""}`} />
              </button>

              <div
                className={`
                  absolute top-full left-0 pt-4 
                  transition-all duration-200 ease-out
                  ${activeMenu === 'applications' ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}
                `}
              >
                {renderMegaMenu(applicationItems, "Applications")}
              </div>
            </li>

            {/* DATABASES MEGA MENU */}
            {/* <li 
              className="relative"
              onMouseEnter={() => setActiveMenu('databases')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="flex items-center gap-1 text-white/80 hover:text-white transition-colors font-sora font-medium py-2">
                Databases
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeMenu === 'databases' ? "rotate-180" : ""}`} />
              </button>

              <div
                className={`
                  absolute top-full left-0 pt-4 
                  transition-all duration-200 ease-out
                  ${activeMenu === 'databases' ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}
                `}
              >
                {renderMegaMenu(databaseItems, "Databases")}
              </div>
            </li> */}

            {/* STORAGE MEGA MENU */}
            {/* <li 
              className="relative"
              onMouseEnter={() => setActiveMenu('storage')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="flex items-center gap-1 text-white/80 hover:text-white transition-colors font-sora font-medium py-2">
                Storage
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeMenu === 'storage' ? "rotate-180" : ""}`} />
              </button>

              <div
                className={`
                  absolute top-full left-0 pt-4 
                  transition-all duration-200 ease-out
                  ${activeMenu === 'storage' ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}
                `}
              >
                {renderMegaMenu(storageItems, "Storage")}
              </div>
            </li> */}

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
              href="/get-started"
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
          {/* APPLICATIONS */}
          <div>
            <p className="text-primary text-xs font-semibold tracking-wider mb-3 font-sora uppercase">Applications</p>
            <div className="space-y-1">
              {applicationItems.map((item) => (
                <a
                  href={item.href}
                  className="flex items-start gap-3 px-3 py-2 rounded-lg hover:bg-secondary/50 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  <item.icon className="w-4 h-4 text-white/80 mt-0.5 flex-shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-foreground font-sora text-sm font-medium">
                      {item.name}
                    </span>
                    <span className="text-muted-foreground font-sora text-xs">
                      {item.description}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* DATABASES */}
          {/* <div>
            <p className="text-primary text-xs font-semibold tracking-wider mb-3 font-sora uppercase">Databases</p>
            <div className="space-y-1">
              {databaseItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-start gap-3 px-3 py-2 rounded-lg hover:bg-secondary/50 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  <item.icon className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-foreground font-sora text-sm font-medium">
                      {item.name}
                    </span>
                    <span className="text-muted-foreground font-sora text-xs">
                      {item.description}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div> */}

          {/* STORAGE */}
          {/* <div>
            <p className="text-primary text-xs font-semibold tracking-wider mb-3 font-sora uppercase">Storage</p>
            <div className="space-y-1">
              {storageItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-start gap-3 px-3 py-2 rounded-lg hover:bg-secondary/50 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  <item.icon className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-foreground font-sora text-sm font-medium">
                      {item.name}
                    </span>
                    <span className="text-muted-foreground font-sora text-xs">
                      {item.description}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div> */}

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