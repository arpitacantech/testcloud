"use client";
import { motion } from "framer-motion";
import ServerInfrastructure from "./ServerInfrastructure";
import GlitchText from "./GlitchText";

const NotFound = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background scanlines noise-overlay">
      {/* Animated server infrastructure background */}
      <ServerInfrastructure />

      {/* Vignette effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, hsl(var(--background)) 100%)",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4">
        {/* 404 Text with glitch effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <GlitchText
            text="404"
            className="text-[120px] sm:text-[180px] md:text-[220px] font-bold tracking-tighter leading-none"
          />
        </motion.div>

        {/* Error message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="text-xl sm:text-2xl font-mono text-muted-foreground mb-2 tracking-wide">
            PAGE NOT FOUND
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground/60 font-mono tracking-wider">
            The page you're looking for does not exist.
          </p>
        </motion.div>

        {/* Terminal-style status */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-12 font-mono text-xs text-muted-foreground/40 space-y-1"
        >
          <motion.p
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            [ERROR] Connection terminated unexpectedly
          </motion.p>
          <motion.p
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
          >
            [STATUS] Attempting to reconnect...
          </motion.p>
        </motion.div>

        {/* Back to homepage button */}
        <motion.a
            href="/"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="group relative inline-flex px-8 py-3 border border-muted-foreground/30 text-foreground font-mono text-sm tracking-wider uppercase transition-all duration-300 hover:border-foreground/60 hover:bg-foreground/5 btn-glow"
            >
            <span className="relative z-10 flex items-center gap-3">
                <motion.span
                animate={{ x: [0, -3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                >
                ←
                </motion.span>
                Back to Homepage
            </span>
        </motion.a>

        {/* Decorative elements */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-muted-foreground/20 font-mono text-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.span
            className="w-2 h-2 rounded-full bg-muted-foreground/30"
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <span>SYSTEM STATUS: CRITICAL</span>
        </motion.div>
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  );
};

export default NotFound;