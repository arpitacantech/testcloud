"use client";

import { useEffect, useMemo, useState } from "react";

const StarField = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stars = useMemo(() => {
    if (!mounted) return [];

    const staticStars = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 5,
      type: "static" as const,
    }));

    const floatingStars = Array.from({ length: 15 }, (_, i) => ({
      id: i + 100,
      x: Math.random() * 100,
      y: Math.random() * 100 + 100,
      size: Math.random() * 1.5 + 1,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 10,
      type: "floating" as const,
    }));

    return [...staticStars, ...floatingStars];
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className={star.type === "static" ? "animate-twinkle" : "animate-float-up"}
          style={{
            position: "absolute",
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: "hsl(var(--foreground))",
            borderRadius: "50%",
            boxShadow: `0 0 ${star.size * 2}px hsl(var(--foreground) / 0.5)`,
            ["--duration" as string]: `${star.duration}s`,
            ["--delay" as string]: `${star.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default StarField;