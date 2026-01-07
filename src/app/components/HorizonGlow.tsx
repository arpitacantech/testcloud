const HorizonGlow = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-[50vh] overflow-hidden pointer-events-none">
      {/* Main horizon curve */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] h-[600px] animate-horizon-pulse"
        style={{
          background: `
            radial-gradient(
              ellipse 80% 50% at 50% 100%,
              hsl(220 60% 30% / 0.4) 0%,
              hsl(220 50% 20% / 0.2) 30%,
              transparent 70%
            )
          `,
        }}
      />
      
      {/* Inner glow */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] h-[400px] animate-pulse-glow"
        style={{
          background: `
            radial-gradient(
              ellipse 60% 40% at 50% 100%,
              hsl(220 70% 40% / 0.3) 0%,
              hsl(220 60% 30% / 0.1) 40%,
              transparent 60%
            )
          `,
        }}
      />
      
      {/* Horizon line */}
      <div 
        className="absolute bottom-[15%] left-1/2 -translate-x-1/2 w-[80%] h-[1px]"
        style={{
          background: `
            linear-gradient(
              90deg,
              transparent 0%,
              hsl(220 60% 50% / 0.3) 20%,
              hsl(220 60% 60% / 0.5) 50%,
              hsl(220 60% 50% / 0.3) 80%,
              transparent 100%
            )
          `,
          boxShadow: `0 0 20px hsl(220 60% 50% / 0.3), 0 0 40px hsl(220 60% 50% / 0.2)`,
        }}
      />
    </div>
  );
};

export default HorizonGlow;