"use client"

import { useState } from "react"
import Image from "next/image"
import Container from "./ui/container"

const FeatureIcons = {
  0: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-8 h-8 opacity-40">
      <path d="M8.235 1.559a0.5 0.5 0 0 0 -0.47 0l-7.5 4a0.5 0.5 0 0 0 0 0.882L3.188 8 0.264 9.559a0.5 0.5 0 0 0 0 0.882l7.5 4a0.5 0.5 0 0 0 0.47 0l7.5 -4a0.5 0.5 0 0 0 0 -0.882L12.813 8l2.922 -1.559a0.5 0.5 0 0 0 0 -0.882zM8 9.433 1.562 6 8 2.567 14.438 6z" strokeWidth="1" />
    </svg>
  ),
  1: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-8 h-8 opacity-40">
      <path d="M12.5 16a3.5 3.5 0 1 0 0 -7 3.5 3.5 0 0 0 0 7m0.5 -5v1h1a0.5 0.5 0 0 1 0 1h-1v1a0.5 0.5 0 0 1 -1 0v-1h-1a0.5 0.5 0 0 1 0 -1h1v-1a0.5 0.5 0 0 1 1 0m-2 -6a3 3 0 1 1 -6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0 -4 2 2 0 0 0 0 4" strokeWidth="1" />
      <path d="M8.256 14a4.5 4.5 0 0 1 -0.229 -1.004H3c0.001 -0.246 0.154 -0.986 0.832 -1.664C4.484 10.68 5.711 10 8 10q0.39 0 0.74 0.025c0.226 -0.341 0.496 -0.65 0.804 -0.918Q8.844 9.002 8 9c-5 0 -6 3 -6 4s1 1 1 1z" strokeWidth="1" />
    </svg>
  ),
  2: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-8 h-8 opacity-40">
      <path fillRule="evenodd" d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a0.5 0.5 0 0 1 0 -1h2.688C13.979 10 15 8.988 15 7.773c0 -1.216 -1.02 -2.228 -2.313 -2.228h-0.5v-0.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0 -2.941 1.1c-0.757 0.652 -1.153 1.438 -1.153 2.055v0.448l-0.445 0.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a0.5 0.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0 -1.763 1.266 -3.223 2.942 -3.593 0.143 -0.863 0.698 -1.723 1.464 -2.383" strokeWidth="1" />
      <path fillRule="evenodd" d="M7.646 4.146a0.5 0.5 0 0 1 0.708 0l3 3a0.5 0.5 0 0 1 -0.708 0.708L8.5 5.707V14.5a0.5 0.5 0 0 1 -1 0V5.707L5.354 7.854a0.5 0.5 0 1 1 -0.708 -0.708z" strokeWidth="1" />
    </svg>
  ),
  3: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-8 h-8 opacity-40">
      <path fillRule="evenodd" d="M8 14.933a1 1 0 0 0 0.1 -0.025q0.114 -0.034 0.294 -0.118c0.24 -0.113 0.547 -0.29 0.893 -0.533a10.7 10.7 0 0 0 2.287 -2.233c1.527 -1.997 2.807 -5.031 2.253 -9.188a0.48 0.48 0 0 0 -0.328 -0.39c-0.651 -0.213 -1.75 -0.56 -2.837 -0.855C9.552 1.29 8.531 1.067 8 1.067zM5.072 0.56C6.157 0.265 7.31 0 8 0s1.843 0.265 2.928 0.56c1.11 0.3 2.229 0.655 2.887 0.87a1.54 1.54 0 0 1 1.044 1.262c0.596 4.477 -0.787 7.795 -2.465 9.99a11.8 11.8 0 0 1 -2.517 2.453 7 7 0 0 1 -1.048 0.625c-0.28 0.132 -0.581 0.24 -0.829 0.24s-0.548 -0.108 -0.829 -0.24a7 7 0 0 1 -1.048 -0.625 11.8 11.8 0 0 1 -2.517 -2.453C1.928 10.487 0.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072 0.56" strokeWidth="1" />
    </svg>
  ),
  4: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-8 h-8 opacity-40">
      <path d="M1 3a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1zm7 8a2 2 0 1 0 0 -4 2 2 0 0 0 0 4" strokeWidth="1" />
      <path d="M0 5a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1H1a1 1 0 0 1 -1 -1zm3 0a2 2 0 0 1 -2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2 -2V7a2 2 0 0 1 -2 -2z" strokeWidth="1" />
    </svg>
  )
}

interface FeatureItemProps {
  title: string
  description: string
  isOpen: boolean
  onClick: () => void
  index: number
  isMobile?: boolean
  imageSrc?: string
}

function FeatureItem({ title, description, isOpen, onClick, index, isMobile = false, imageSrc }: FeatureItemProps) {
  // Desktop layout (horizontal accordion)
  if (!isMobile) {
    return (
      <div 
        className={`
          ${isOpen ? 'flex-[3_1_0%]' : 'flex-[0_0_auto]'}
          overflow-hidden border-r last:border-0 border-foreground/10 min-h-[660px]
          hidden lg:block
        `}
        style={{
          transition: 'flex 500ms cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        <div className="flex h-full">
          <button 
            className={`flex-shrink-0 h-full px-12 py-2 flex flex-col items-center justify-between focus:outline-none ${
              isOpen ? 'bg-[#F7F7F7] w-24' : 'hover:bg-[#F7F7F7] w-24'
            }`}
            onClick={onClick}
            aria-expanded={isOpen}
            aria-controls={`feature-content-${index}`}
          >
            <div className="mt-4">
              {FeatureIcons[index as keyof typeof FeatureIcons]}
            </div>
            <div 
              className="vertical-text font-syne text-3xl whitespace-nowrap mb-6"
            >
              {title}
            </div>
          </button>
          
          <div 
            id={`feature-content-${index}`}
            className="overflow-hidden flex-1"
            style={{
              width: isOpen ? 'auto' : '0',
              transition: 'width 500ms cubic-bezier(0.4, 0, 0.2, 1)',
              padding: isOpen ? '4rem' : '0',
              position: 'relative'
            }}
          >
            <div className="absolute p-16 inset-0 w-full h-full" style={{
              opacity: isOpen ? 1 : 0,
              transition: 'opacity 500ms ease',
              visibility: isOpen ? 'visible' : 'hidden',
            }}>
              <div>
                <div className="rounded-2xl w-full aspect-video mb-4 overflow-hidden border border-foreground/20">
                  {imageSrc ? (
                    <Image 
                      src={imageSrc} 
                      alt={title} 
                      width={800} 
                      height={450} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="bg-background/10 w-full h-full flex items-center justify-center">
                      <span className="text-foreground/40">Image Placeholder</span>
                    </div>
                  )}
                </div>
                <h3 className="text-4xl font-syne mb-2">{title}</h3>
                <p className="text-foreground/70">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  // Mobile layout (vertical tabs)
  return (
    <div className="w-full lg:hidden">
      <button
        className={`w-full py-4 px-5 flex justify-between items-center rounded-lg mb-2 focus:outline-none transition-colors ${
          isOpen ? 'bg-[#F7F7F7] text-[#0077cc]' : 'hover:bg-[#F7F7F7]'
        }`}
        onClick={onClick}
        aria-expanded={isOpen}
        aria-controls={`feature-mobile-content-${index}`}
      >
        <div className="flex items-center">
          <div className="mr-3 w-8 h-8">
            {FeatureIcons[index as keyof typeof FeatureIcons]}
          </div>
          <h3 className="font-syne text-lg sm:text-xl">
            {title}
          </h3>
        </div>
        <span className="ml-3">
          <svg 
            className={`w-5 h-5 transform transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
            viewBox="0 0 24 24"
          >
            <path 
              fill="none" 
              stroke="currentColor" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>
      
      <div 
        id={`feature-mobile-content-${index}`}
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[500px] opacity-100 mb-6' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 py-4">
          <div className="rounded-2xl w-full aspect-video mb-4 overflow-hidden border border-foreground/20">
            {imageSrc ? (
              <Image 
                src={imageSrc} 
                alt={title} 
                width={600} 
                height={340} 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="bg-background/10 w-full h-full flex items-center justify-center">
                <span className="text-foreground/40">Image Placeholder</span>
              </div>
            )}
          </div>
          <p className="text-foreground/70 text-sm sm:text-base">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default function ProtocolSection() {
  const [openIndex, setOpenIndex] = useState(0)
  
  const features = [
    {
      title: "Sustainable Compute Model",
      description: "TechTide aggregates distributed idle devices to form a low-energy alternative to traditional server farms.",
      imageSrc: "/image-1.png"
    },
    {
      title: "Quick Participation",
      description: "Users can start contributing with simple browser extensions or desktop applications, without the need for specialized hardware.",
      imageSrc: "/image-2.png"
    },
    {
      title: "Real Workloads",
      description: "Tasks include AI inference, data processing, Web3 transaction validation, ensuring meaningful real-world contribution.",
      imageSrc: "/image-3.png"
    },
    {
      title: "Privacy and Security",
      description: "All operations are executed in isolated WebAssembly (WASM) environments to ensure system and data security.",
      imageSrc: "/image-4.png"
    },
    {
      title: "Transparent Earning System",
      description: "Contribution records, point accumulation, and $TTD rewards are fully transparent and verifiable.",
      imageSrc: "/image-5.png"
    }
  ]

  const handleClick = (index: number) => {
    setOpenIndex(index)
  }

  return (
    <section className="flex justify-center">
      <div className="max-w-[1400px] w-full mx-auto">
        <div className="w-full section-padding pb-20 bg-[#f0f5fa]">
          <h2 className="text-4xl font-syne font-semibold mb-10">
            Drive the Wave of Decentralized Shared Network
          </h2>
          
          {/* Desktop View */}
          <div className="w-full mx-auto border border-foreground/10 bg-white overflow-hidden hidden lg:block rounded-xl">
            <div className="flex flex-row w-full h-full min-h-[600px]">
              <style jsx global>{`
                .vertical-text {
                  writing-mode: vertical-lr;
                  text-orientation: mixed;
                  transform: rotate(180deg);
                  font-family: var(--font-syne);
                }
              `}</style>
              {features.map((feature, index) => (
                <FeatureItem
                  key={`desktop-${index}`}
                  index={index}
                  title={feature.title}
                  description={feature.description}
                  isOpen={openIndex === index}
                  onClick={() => handleClick(index)}
                  imageSrc={feature.imageSrc}
                />
              ))}
            </div>
          </div>
          
          {/* Mobile/Tablet View - Vertical Tabs */}
          <div className="w-full mx-auto bg-white overflow-hidden lg:hidden border border-foreground/10 rounded-xl p-4">
            {features.map((feature, index) => (
              <FeatureItem
                key={`mobile-${index}`}
                index={index}
                title={feature.title}
                description={feature.description}
                isOpen={openIndex === index}
                onClick={() => handleClick(index)}
                isMobile={true}
                imageSrc={feature.imageSrc}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 