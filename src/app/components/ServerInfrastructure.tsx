"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Spark {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
}

interface Smoke {
  id: number;
  x: number;
  delay: number;
  duration: number;
}

const ServerInfrastructure = () => {
  const [sparks, setSparks] = useState<Spark[]>([]);
  const [smokeParticles, setSmokeParticles] = useState<Smoke[]>([]);

  useEffect(() => {
    // Generate sparks
    const newSparks: Spark[] = [];
    for (let i = 0; i < 15; i++) {
      newSparks.push({
        id: i,
        x: Math.random() * 100,
        y: 20 + Math.random() * 60,
        size: 2 + Math.random() * 3,
        delay: Math.random() * 3,
      });
    }
    setSparks(newSparks);

    // Generate smoke particles
    const newSmoke: Smoke[] = [];
    for (let i = 0; i < 8; i++) {
      newSmoke.push({
        id: i,
        x: 30 + Math.random() * 40,
        delay: Math.random() * 2,
        duration: 2 + Math.random() * 2,
      });
    }
    setSmokeParticles(newSmoke);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Server rack silhouette */}
      <svg
        viewBox="0 0 400 300"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-auto opacity-20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main server rack */}
        <motion.rect
          x="100"
          y="50"
          width="200"
          height="200"
          stroke="currentColor"
          strokeWidth="1"
          className="text-muted-foreground"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Server units */}
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.g key={i}>
            <motion.rect
              x="110"
              y={60 + i * 38}
              width="180"
              height="32"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-muted"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* LED indicators */}
            {[0, 1, 2].map((j) => (
              <motion.circle
                key={j}
                cx={125 + j * 15}
                cy={76 + i * 38}
                r="3"
                className="text-foreground"
                fill="currentColor"
                initial={{ opacity: 0.2 }}
                animate={{
                  opacity: i === 2 ? [0.8, 0.1, 0.8] : [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: i === 2 ? 0.3 : 1.5,
                  delay: j * 0.1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.g>
        ))}

        {/* Cables */}
        <motion.path
          d="M120 250 Q120 270 100 280"
          stroke="currentColor"
          strokeWidth="2"
          className="text-muted-foreground"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 1 }}
        />
        <motion.path
          d="M200 250 Q200 265 200 280"
          stroke="currentColor"
          strokeWidth="2"
          className="text-muted-foreground"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        />
        <motion.path
          d="M280 250 Q280 270 300 280"
          stroke="currentColor"
          strokeWidth="2"
          className="text-muted-foreground"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
        />

        {/* Electrical short circuit effect */}
        <motion.path
          d="M200 130 L195 145 L210 140 L190 160 L205 155 L185 175"
          stroke="currentColor"
          strokeWidth="2"
          className="text-foreground"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{
            opacity: [0, 1, 1, 0],
            pathLength: [0, 1, 1, 1],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "easeOut",
          }}
        />
      </svg>

      {/* Floating smoke particles */}
      {smokeParticles.map((smoke) => (
        <motion.div
          key={smoke.id}
          className="absolute rounded-full bg-smoke"
          style={{
            left: `${smoke.x}%`,
            bottom: "30%",
            width: "40px",
            height: "40px",
            filter: "blur(20px)",
          }}
          initial={{ y: 0, opacity: 0, scale: 0.5 }}
          animate={{
            y: [-20, -120],
            opacity: [0, 0.3, 0],
            scale: [0.5, 1.5],
          }}
          transition={{
            duration: smoke.duration,
            delay: smoke.delay,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Sparks */}
      {sparks.map((spark) => (
        <motion.div
          key={spark.id}
          className="absolute rounded-full bg-foreground"
          style={{
            left: `${spark.x}%`,
            top: `${spark.y}%`,
            width: `${spark.size}px`,
            height: `${spark.size}px`,
            boxShadow: "0 0 10px hsl(var(--glow))",
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            x: [(Math.random() - 0.5) * 30, (Math.random() - 0.5) * 60],
            y: [0, (Math.random() - 0.5) * 40],
          }}
          transition={{
            duration: 0.6,
            delay: spark.delay,
            repeat: Infinity,
            repeatDelay: 1 + Math.random() * 2,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Ambient glow */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--foreground)) 0%, transparent 70%)",
        }}
      />
    </div>
  );
};

export default ServerInfrastructure;