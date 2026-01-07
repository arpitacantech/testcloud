import { motion } from "framer-motion";
// import serverImage from "/Pff4jiCRoIQdwf1slphQVhSArY.png";

export const StickyImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.3,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="sticky-glass-image rounded-3xl overflow-hidden p-2"
    >
      <div className="relative rounded-2xl overflow-hidden">
        <img
          src='/assets/images/compute/kubernetes/why-choose-cantech kubernetes-as-a-service.webp'
          alt="Why Choose Cantech Kubernetes-as-a-Service | Cantech Cloud"
          className="w-full h-[450px] object-cover"
          loading="lazy"
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

        {/* Glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 via-transparent to-accent/20 blur-2xl opacity-40 -z-10" />
      </div>
    </motion.div>
  );
};
