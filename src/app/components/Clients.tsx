"use client";

interface ClientLogosProps {
  transparent?: boolean;
}

export default function ClientLogos({ transparent }: ClientLogosProps) {
  const logos = [
    "/assets/images/clients/tatapower.png",
    "/assets/images/clients/creyon.png",
    "/assets/images/clients/daawat.png",
    "/assets/images/clients/hfcl.png",
    "/assets/images/clients/jadeblue.png",
    "/assets/images/clients/purple.png",
  ];

  return (
    <div
      className={`pt-14 pb-16 w-full flex flex-col items-center ${
        transparent ? "" : "bg-gray-900"
      }`}
    >
      <h2
        className={`text-xl md:text-2xl font-medium mb-6 ${
          transparent ? "text-white/80" : "text-white"
        }`}
      >
        Trusted By
      </h2>

      {/* LOGO MARQUEE */}
      <div className="relative w-full max-w-5xl overflow-hidden"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div className="flex w-max animate-logo-scroll gap-12">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="w-28 h-12 md:w-32 md:h-14 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity"
            >
              <img
                src={logo}
                alt={`Client ${index + 1}`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
