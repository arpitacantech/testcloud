"use client";
import { ServiceCard } from "./ServiceCard";
import { StickyImage } from "./StickyImage";
// import { SectionHeader } from "./SectionHeader";

const services = [
  {
    title: "Quick Installation",
    description:
      "Pre-configured components of Kubernetes and automated installation in several clicks do not require manual intervention.",
  },
  {
    title: "Hyper Scalability",
    description:
      "The cluster is designed for automatic vertical and horizontal scaling with auto-discovery of new worker nodes.",
  },
  {
    title: "Simplified Management",
    description:
      "Out-of-box Kubernetes dashboard is complemented with user-friendly UI, built-in Web SSH and CLI for more convenient orchestration.",
  },
  {
    title: "Automated DevOps Integration",
    description:
      "Integrated DevOps automation within the package can be customized and extended using open API and Cloud Scripting.",
  },
  // {
  //   title: "Diverse Block Storage Tiers for Every Use Case",
  //   description:
  //     "Cantech Cloud offers block storage options for every workload. From NVMe for general use, high IOPS or cost efficiency, to SAS and Magnetic tiers for large-scale and archival needs.",
  // },
];

export const ServicesSection = () => {
  return (
    <section className="relative py-10 md:py-12 lg:py-14 ambient-glow">

      <div className="md:px-8 text-center">

            <h2 className="cc-h2">Why Choose Cantech Kubernetes-as-a-Service</h2>
            <p className="subtitle">Experience Cantech managed kubernetes hosting that combines enterprise-grade infrastructure, automated management and flexi scaling for high performance and security.</p>
        </div>

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
         

        {/* Content Grid */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Service Cards */}
          <div className="w-full lg:w-8/12">
            <div className="space-y-6">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.title}
                  title={service.title}
                  description={service.description}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* Sticky Image */}
          <div className="hidden lg:block lg:w-4/12">
            <div className="sticky top-24 border border-solid border-[1px] border-[#ffffff29] rounded-xl">
              <StickyImage />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
