"use client";

const cards = [
  {
    title: "High-Performance Cloud Compute",
    description:
      "We offer NVMe storage and the latest Intel and AMD processors on our virtual machines to handle challenging workloads.",
  },
  {
    title: "Managed PaaS and Kubernetes",
    description:
      "Our platform automates container orchestration for your team. Control complicated applications with a simple, clean dashboard.",
  },
  {
    title: "Reliable Managed Databases",
    description:
      "Your SQL and NoSQL data are automatically synchronized. Our system manages the setup such that you can focus on code.",
  },
  {
    title: "Secure Scalable Storage",
    description:
      "We provide Object Storage and Block Storage solutions. Your information is secure in Tier 3 and Tier 4 datacenters.",
  },
  {
    title: "Automated DevOps Integration",
    description:
      "Our system works with GitHub, Jenkins, and other such tools. We deploy containerized applications without configuring servers manually.",
  },
  {
    title: "Global Networking Tools",
    description:
      "We offer VPC and Load Balancers to offer better security. Users get high-speed connections wherever they are in the world.",
  }
];

export default function Feature() {
  return (
    <section className="py-14 md:py-16 lg:py-20">
      <div className="md:px-8 text-center">

       <div className="max-w-6xl mx-auto text-center mb-16">
        {/* <p className="title-badges">
          Benefits
        </p> */}
        <h2 className="cc-h2">
          Modern Infrastructure and Cloud Services for Growth
        </h2>
        <p className="subtitle">
          We integrate enterprise hardware and reasonable billing to your advantage. You have complete control of resources without any long-term contracts or hidden costs.
        </p>
      </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden border border-neutral-800/60 shadow-sm transform hover:translate-y-[-8px] duration-300 hover:border-[#ffffff40] hover:shadow-[0_0_8px_#ffffff40]"
            >
              <img
                src="https://framerusercontent.com/images/Vy5fY5tvzYvO3kc3PMsfNrzzvDY.svg"
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover object-right-top opacity-60"
                loading="lazy"
                decoding="async"
              />

              <div className="relative p-6 md:p-8 lg:p-10 flex flex-col gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-white/5 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="none"
                  >
                    <path
                      fill="#fff"
                      d="M6.142 10.74 9.46 6.253c2.145-2.9 3.217-4.351 4.217-4.045 1 .307 1 2.086 1 5.644v.336c0 1.283 0 1.925.41 2.327l.022.021c.42.394 1.087.394 2.423.394 2.404 0 3.606 0 4.012.73l.02.036c.383.74-.313 1.681-1.705 3.565l-3.317 4.488c-2.145 2.901-3.217 4.352-4.217 4.045-1-.306-1-2.086-1-5.644v-.335c0-1.284 0-1.926-.41-2.328l-.022-.02c-.419-.395-1.087-.395-2.423-.395-2.403 0-3.605 0-4.011-.729a1.223 1.223 0 0 1-.02-.037c-.384-.74.312-1.681 1.704-3.564z"
                    />
                  </svg>
                </div>

                <h3 className="cc-h3">
                  {card.title}
                </h3>
                <p className="subtitle">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}