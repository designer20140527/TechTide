import React from "react"

interface FeatureItemProps {
  title: string
  description: string
}

const FeatureItem = ({ title, description }: FeatureItemProps) => {
  return (
    <div className="flex items-start gap-5 p-6 h-full">
      <div className="min-h-[100px] w-1.5 bg-gradient-to-b from-[#0077cc] to-[#005fa3] rounded-full"></div>
      <div>
        <h3 className="text-xl font-semibold mb-3 font-syne">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export default function FeaturesSection() {
  const features = [
    {
      title: "Browser Node Access",
      description: "Lightweight Chrome/Firefox extensions for fast deployment.",
    },
    {
      title: "Native Desktop Node",
      description: "Full-node support on Windows, macOS, and Linux for higher efficiency and throughput.",
    },
    {
      title: "Task Allocation Engine",
      description: "Dynamically assigns AI, data, and Web3 tasks according to real-time device capacity.",
    },
    {
      title: "Eco-First Computing",
      description: "Only operates when the device is idle, ensuring minimal energy overhead.",
    },
    {
      title: "Performance Dashboard",
      description: "Monitor node uptime, points earned, completed tasks, and rankings in real-time.",
    },
    {
      title: "Mobile Node (In Development)",
      description: "Android and iOS versions under development to extend participation.",
    },
  ]

  return (
    <section className="flex justify-center" id="features">
      <div className="max-w-[1400px] w-full mx-auto bg-[#f0f5fa] section-padding py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureItem key={index} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </section>
  )
} 