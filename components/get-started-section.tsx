"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Download, LogIn, Play, Award, Gift } from "lucide-react"

interface StepItemProps {
  title: string
  description: string
  icon: React.ReactNode
}

function StepItem({ title, description, icon }: StepItemProps) {
  return (
    <div className="flex flex-col gap-4 p-6 border border-foreground/10 rounded-xl bg-white">
      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#f0f5fa]">
        {icon}
      </div>
      <h3 className="text-xl font-syne">{title}</h3>
      <p className="text-foreground/70">{description}</p>
    </div>
  )
}

export default function GetStartedSection() {
  const [currentStep, setCurrentStep] = useState(0)
  
  const steps = [
    {
      title: "Install Node",
      description: "Download and install the Chrome/Firefox extension or the TechTide Desktop App (Windows, macOS, Linux).",
      icon: <Download className="w-5 h-5 text-[#0077cc]" />
    },
    {
      title: "Connect",
      description: "Login using an email address or a Web3 wallet. Multi-chain support (Base as the main chain, other EVM chains planned).",
      icon: (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 16 16" 
          className="w-5 h-5"
          fill="#0077cc"
        >
          <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0 -3M11 2.5a2.5 2.5 0 1 1 0.603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1 -0.488 0.876l-6.718 -3.12a2.5 2.5 0 1 1 0 -3.256l6.718 -3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0 -3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0 -3" strokeWidth="1" />
        </svg>
      )
    },
    {
      title: "Start Running",
      description: "Nodes automatically receive AI, data, or Web3 computational tasks based on device performance.",
      icon: <Play className="w-5 h-5 text-[#0077cc]" />
    },
    {
      title: "Earn Points",
      description: "Points are awarded based on uptime, task completion, and special campaigns.",
      icon: <Award className="w-5 h-5 text-[#0077cc]" />
    },
    {
      title: "Redeem Rewards",
      description: "Points can be converted into $TTD tokens, which are usable within the network for services, governance, and staking.",
      icon: <Gift className="w-5 h-5 text-[#0077cc]" />
    }
  ]

  const handlePrev = () => {
    setCurrentStep((prev) => (prev > 0 ? prev - 1 : prev))
  }

  const handleNext = () => {
    setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev))
  }

  // For mobile view, show all steps
  // For desktop, show current step with navigation
  
  return (
    <section className="flex justify-center">
      <div className="max-w-[1400px] w-full bg-white mx-auto">
        <div className="w-full section-padding py-20">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left side - Title and Controls */}
            <div className="w-full lg:w-1/3">
              <h2 className="text-4xl font-syne font-semibold mb-6">
                How to Get Started
              </h2>
              
              <div className="hidden lg:flex items-center gap-4 mt-10">
                <button 
                  onClick={handlePrev}
                  disabled={currentStep === 0}
                  className="w-12 h-12 rounded-full border border-foreground/10 flex items-center justify-center hover:bg-[#f0f5fa] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={handleNext}
                  disabled={currentStep === steps.length - 1}
                  className="w-12 h-12 rounded-full border border-foreground/10 flex items-center justify-center hover:bg-[#f0f5fa] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
            
            {/* Right side - Current Step (Desktop) or All Steps (Mobile) */}
            <div className="w-full lg:w-2/3">
              {/* Desktop view - single current step */}
              <div className="hidden lg:block">
                <StepItem 
                  title={steps[currentStep].title}
                  description={steps[currentStep].description}
                  icon={steps[currentStep].icon}
                />
              </div>
              
              {/* Mobile view - all steps */}
              <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-4">
                {steps.map((step, index) => (
                  <StepItem 
                    key={index}
                    title={step.title}
                    description={step.description}
                    icon={step.icon}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 