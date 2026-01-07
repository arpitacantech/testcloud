"use client";
import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  pulseOffset: number;
  layer: number;
}

interface Connection {
  from: number;
  to: number;
  opacity: number;
  life: number;
  maxLife: number;
}

const HeroBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const nodesRef = useRef<Node[]>([]);
  const connectionsRef = useRef<Connection[]>([]);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize nodes
    const nodeCount = Math.floor((window.innerWidth * window.innerHeight) / 25000);
    nodesRef.current = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.2,
      pulseOffset: Math.random() * Math.PI * 2,
      layer: Math.floor(Math.random() * 3),
    }));

    const animate = () => {
      timeRef.current += 0.005;
      const time = timeRef.current;

      ctx.fillStyle = '#09090a';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw nodes
      nodesRef.current.forEach((node, i) => {
        // Layer-based speed (parallax)
        const speedMultiplier = 0.5 + node.layer * 0.3;
        
        node.x += node.vx * speedMultiplier;
        node.y += node.vy * speedMultiplier;

        // Wrap around edges
        if (node.x < 0) node.x = canvas.width;
        if (node.x > canvas.width) node.x = 0;
        if (node.y < 0) node.y = canvas.height;
        if (node.y > canvas.height) node.y = 0;

        // Pulsing opacity
        const pulse = Math.sin(time * 2 + node.pulseOffset) * 0.3 + 0.7;
        const currentOpacity = node.opacity * pulse;

        // Draw node glow
        const gradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, node.size * 8
        );
        
        const hue = 210 + node.layer * 15; // Slight color variation
        gradient.addColorStop(0, `hsla(${hue}, 60%, 70%, ${currentOpacity * 0.5})`);
        gradient.addColorStop(0.3, `hsla(${hue}, 50%, 60%, ${currentOpacity * 0.2})`);
        gradient.addColorStop(1, 'transparent');

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size * 8, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Draw node core
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(0, 0%, 100%, ${currentOpacity})`;
        ctx.fill();
      });

      // Manage connections
      if (Math.random() < 0.02 && connectionsRef.current.length < 8) {
        const from = Math.floor(Math.random() * nodesRef.current.length);
        let to = Math.floor(Math.random() * nodesRef.current.length);
        while (to === from) to = Math.floor(Math.random() * nodesRef.current.length);
        
        const dx = nodesRef.current[from].x - nodesRef.current[to].x;
        const dy = nodesRef.current[from].y - nodesRef.current[to].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 400) {
          connectionsRef.current.push({
            from,
            to,
            opacity: 0,
            life: 0,
            maxLife: 300 + Math.random() * 200,
          });
        }
      }

      // Draw and update connections
      connectionsRef.current = connectionsRef.current.filter(conn => {
        conn.life++;
        
        // Fade in and out
        const progress = conn.life / conn.maxLife;
        if (progress < 0.2) {
          conn.opacity = progress * 5 * 0.3;
        } else if (progress > 0.8) {
          conn.opacity = (1 - progress) * 5 * 0.3;
        } else {
          conn.opacity = 0.3;
        }

        const fromNode = nodesRef.current[conn.from];
        const toNode = nodesRef.current[conn.to];

        // Draw connection line with gradient
        const gradient = ctx.createLinearGradient(
          fromNode.x, fromNode.y,
          toNode.x, toNode.y
        );
        gradient.addColorStop(0, `hsla(210, 60%, 60%, ${conn.opacity})`);
        gradient.addColorStop(0.5, `hsla(230, 50%, 65%, ${conn.opacity * 0.8})`);
        gradient.addColorStop(1, `hsla(250, 60%, 60%, ${conn.opacity})`);

        ctx.beginPath();
        ctx.moveTo(fromNode.x, fromNode.y);
        ctx.lineTo(toNode.x, toNode.y);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Draw data packet traveling along line
        const packetProgress = (conn.life % 60) / 60;
        const packetX = fromNode.x + (toNode.x - fromNode.x) * packetProgress;
        const packetY = fromNode.y + (toNode.y - fromNode.y) * packetProgress;

        const packetGradient = ctx.createRadialGradient(
          packetX, packetY, 0,
          packetX, packetY, 6
        );
        packetGradient.addColorStop(0, `hsla(210, 80%, 70%, ${conn.opacity * 1.5})`);
        packetGradient.addColorStop(1, 'transparent');

        ctx.beginPath();
        ctx.arc(packetX, packetY, 6, 0, Math.PI * 2);
        ctx.fillStyle = packetGradient;
        ctx.fill();

        return conn.life < conn.maxLife;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ filter: 'blur(0.5px)' }}
      />
      
      {/* Floating cubes layer */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingCube 
          className="absolute top-[15%] left-[10%] w-16 h-16" 
          delay={0}
          opacity={0.15}
        />
        <FloatingCube 
          className="absolute top-[60%] right-[15%] w-12 h-12" 
          delay={3}
          opacity={0.1}
        />
        <FloatingCube 
          className="absolute bottom-[20%] left-[25%] w-20 h-20" 
          delay={6}
          opacity={0.08}
        />
        <FloatingCube 
          className="absolute top-[40%] right-[30%] w-14 h-14" 
          delay={9}
          opacity={0.12}
        />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-background/30 pointer-events-none" />
    </div>
  );
};

interface FloatingCubeProps {
  className?: string;
  delay?: number;
  opacity?: number;
}

const FloatingCube = ({ className, delay = 0, opacity = 0.1 }: FloatingCubeProps) => {
  return (
    <div 
      className={`${className} animate-cube-float`}
      style={{ 
        animationDelay: `${delay}s`,
        perspective: '200px',
      }}
    >
      <div 
        className="w-full h-full animate-rotate-slow"
        style={{
          transformStyle: 'preserve-3d',
          animationDelay: `${delay}s`,
        }}
      >
        {/* Cube faces */}
        {[
          { transform: 'translateZ(50%)', border: 'border-t border-l' },
          { transform: 'rotateY(180deg) translateZ(50%)', border: 'border-t border-r' },
          { transform: 'rotateY(90deg) translateZ(50%)', border: 'border-t border-l' },
          { transform: 'rotateY(-90deg) translateZ(50%)', border: 'border-t border-r' },
          { transform: 'rotateX(90deg) translateZ(50%)', border: 'border-l border-r' },
          { transform: 'rotateX(-90deg) translateZ(50%)', border: 'border-l border-r' },
        ].map((face, i) => (
          <div
            key={i}
            className={`absolute inset-0 ${face.border} border-glow-primary/30`}
            style={{
              transform: face.transform,
              opacity,
              background: `linear-gradient(135deg, hsla(210, 60%, 60%, ${opacity * 0.3}) 0%, transparent 50%)`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBackground;