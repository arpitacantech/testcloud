import { Check } from "lucide-react";

const featureContent = {
  items: [
    {
      title: "Reliable Uptime & SLA Assurance",
      desc: "We understand uptime is critical. Cantech network services are engineered for high availability and supported by strong SLAs to keep your services online 24/7.",
    },
    {
      title: "Security That Scales With You",
      desc: "From startups to enterprises, we provide networking tools that fit small sites and mission-critical workloads alike, without complex setup or hidden costs.",
    },
    {
      title: "Optimized for Indian & Global Workloads",
      desc: "With data centers across India and options for hybrid connectivity, you get ultra-low latency and regional performance advantages.",
    },
    {
      title: "Easy Management & Seamless Integration",
      desc: "Manage and scale networking easily through a unified platform with seamless integration across compute, storage, and Kubernetes services.",
    },
  ],
};

/* ----------------------------------
   COMPONENT (unchanged layout)
-----------------------------------*/

export default function Feature2() {
  return (
    <div className="w-full py-20 lg:py-28">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-12">
          <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-0">
            {/* <p className="title-badges">Benefits</p> */}
            <h2 className="cc-h2">Why Businesses Choose Cantech Networking</h2>
            <p className="subtitle">Businesses trust Cantech as a reliable cloud network service provider delivering secure, scalable, and performance-driven cloud networking services.</p>
          </div>

          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {featureContent.items.map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <Check className="w-4 h-4 mt-2 text-primary shrink-0" />
                  <div>
                    <h3 className="cc-h3">{item.title}</h3>
                    <p className="cc-p">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature2 };
