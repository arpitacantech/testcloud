import { FeatureSteps } from "./Feature3-ui"

const features = [
  { 
    step: 'UseCase 1', 
    title: 'Web & API Platforms',
    content: 'Provide smooth user experiences even with large user loads or sporadic traffic.', 
    image: '/assets/images/compute/kubernetes/why-choose-cantech kubernetes-as-a-service.webp' 
  },
  { 
    step: 'UseCase 2',
    title: 'Enterprise Applications',
    content: 'Regulated industries compliance networks that are secure and isolated.',
    image: '/assets/images/compute/kubernetes/why-choose-cantech kubernetes-as-a-service.webp'
  },
  { 
    step: 'UseCase 3',
    title: 'E-Commerce & Retail',
    content: 'Peak-season traffic with secure payment flows and high speed content delivery.',
    image: '/assets/images/compute/kubernetes/why-choose-cantech kubernetes-as-a-service.webp'
  },
   {
    step: "UseCase 4",
    title: "DevOps & Hybrid Deployments",
    content: "Bridge the gap between on-premise and cloud environments keeping the security and network policy consistent.",
    image: "/assets/images/compute/kubernetes/why-choose-cantech kubernetes-as-a-service.webp",
  },
]

export default function Feature3() {
  return (
      <FeatureSteps 
        features={features}
        title="Cloud Networking Use Cases"
        autoPlayInterval={4000}
        imageHeight="h-[500px]"
      />
  )
}
