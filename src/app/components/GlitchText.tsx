"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface GlitchTextProps {
  text: string;
  className?: string;
}

const GlitchText = ({ text, className = "" }: GlitchTextProps) => {
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative ${className}`}>
      {/* Main text */}
      <motion.span
        className="relative inline-block font-mono text-foreground"
        animate={
          glitchActive
            ? {
                x: [0, -5, 5, -2, 2, 0],
                opacity: [1, 0.8, 1, 0.9, 1],
              }
            : {}
        }
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        {text}
      </motion.span>

      {/* Glitch layer 1 - offset left */}
      <motion.span
        className="absolute top-0 left-0 font-mono text-foreground/60"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)",
        }}
        animate={{
          x: glitchActive ? [-3, 3, -2, 1, 0] : [-1, 1, -1],
          opacity: glitchActive ? [0.8, 0.4, 0.8] : [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: glitchActive ? 0.2 : 2,
          repeat: glitchActive ? 0 : Infinity,
          ease: "easeInOut",
        }}
      >
        {text}
      </motion.span>

      {/* Glitch layer 2 - offset right */}
      <motion.span
        className="absolute top-0 left-0 font-mono text-foreground/40"
        style={{
          clipPath: "polygon(0 55%, 100% 55%, 100% 100%, 0 100%)",
        }}
        animate={{
          x: glitchActive ? [3, -3, 2, -1, 0] : [1, -1, 1],
          opacity: glitchActive ? [0.6, 0.3, 0.6] : [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: glitchActive ? 0.2 : 2.5,
          repeat: glitchActive ? 0 : Infinity,
          ease: "easeInOut",
        }}
      >
        {text}
      </motion.span>

      {/* Horizontal scanline */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-foreground/30"
        initial={{ top: "0%" }}
        animate={{ top: ["0%", "100%"] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Random noise blocks */}
      {glitchActive && (
        <>
          <motion.div
            className="absolute bg-foreground/20"
            style={{
              width: "30%",
              height: "8px",
              top: "20%",
              left: "10%",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.15 }}
          />
          <motion.div
            className="absolute bg-foreground/15"
            style={{
              width: "20%",
              height: "6px",
              top: "60%",
              right: "15%",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.15, delay: 0.05 }}
          />
        </>
      )}
    </div>
  );
};

export default GlitchText;