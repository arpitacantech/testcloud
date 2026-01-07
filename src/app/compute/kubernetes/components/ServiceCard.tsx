import { motion } from "framer-motion";
// import { Check } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  index: number;
}

export const ServiceCard = ({ title, description, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className=""
    >
      <div className="flex items-start gap-5">
        {/* Check Icon */}
        <div data-slot="card" className="bg-card text-[#c0c0c0] border border-base-200 flex-col gap-6 border py-6 flex size-12 shrink-0 items-center justify-center rounded-sm !p-0 md:size-16"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap size-6" aria-hidden="true"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg></div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="mb-4 text-white text-lg md:text-xl font-semibold">
            {title}
          </h3>
          <p className="text-sm md:text-base text-neutral-300 max-w-prose">
            {description}
          </p>
          <div className="w-full h-px mt-6 mb-6 opacity-100 bg-[#ffffff0d] bg-[linear-gradient(to_right,#0000,#fff9_60%,#0000)]"></div>
        </div>
      </div>

      {/* Subtle gradient line on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};
