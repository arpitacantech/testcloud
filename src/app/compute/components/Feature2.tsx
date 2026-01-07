import { Check } from "lucide-react";


const featureContent = {
  
  items: [
    {
      title: "Cost Savings",
      desc: "Cantech Cloud Solutions, lets you select the number of cores and memory to match your workload needs with fully customizable instances and saves costs up to 80%.",
    },
    {
      title: "Highly secure",
      desc: "Shielded instances, confidential computing, hardware root of trust, and off-box virtualization help reduce attacks by low-level malware, denial of service, and other malicious software, helping applications run securely.",
    },
    {
      title: "Resiliency",
      desc: "Get fully automated, unified cross-region recovery for compute, storage, and databases using OCI Full Stack Disaster Recovery. With a single click, you can quickly generate disaster recovery plans, failovers and everything required for recovery.",
    },
    {
      title: "High Performance and Uptime",
      desc: "Experience provides flexible, high performance, and secure compute for any workload, which includes AI and machine learning (ML), compute intensive, enterprise, and cloud based applications with 99.97% uptime.",
    }
    
  ],
};

/* ----------------------------------
   COMPONENT (unchanged layout)
-----------------------------------*/

function Feature2() {
  return (
    <div className="w-full py-20 lg:py-28">
      <div className="container mx-auto">

        <div className="flex flex-col items-center gap-12">

          <div className="max-w-6xl mx-auto text-center">
            {/* <p className="title-badges">Benefits</p> */}
            <h2 className="cc-h2">
              What You Get With Cantech Cloud Compute
            </h2>
          </div>

          <div className="w-full max-w-6xl mx-auto">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
    {featureContent.items.map((item, idx) => (
      <div
        key={idx}
        className="flex gap-4 items-start"
      >
        <Check className="w-4 h-4 mt-2 text-primary shrink-0" />
        <div>
          <h3 className="cc-h3">
                    {item.title}
                  </h3>
                  <p className="cc-p">
                    {item.desc}
                  </p>
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

