"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

const PhaseIcons = {
  "Phase 1": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-24 h-24" fill="#0077cc">
      <desc>Rocket Takeoff Streamline Icon</desc>
      <path d="M9.752 6.193c0.599 0.6 1.73 0.437 2.528 -0.362s0.96 -1.932 0.362 -2.531c-0.599 -0.6 -1.73 -0.438 -2.528 0.361 -0.798 0.8 -0.96 1.933 -0.362 2.532" strokeWidth="1"></path>
      <path d="M15.811 3.312c-0.363 1.534 -1.334 3.626 -3.64 6.218l-0.24 2.408a2.56 2.56 0 0 1 -0.732 1.526L8.817 15.85a0.51 0.51 0 0 1 -0.867 -0.434l0.27 -1.899c0.04 -0.28 -0.013 -0.593 -0.131 -0.956a9 9 0 0 0 -0.249 -0.657l-0.082 -0.202c-0.815 -0.197 -1.578 -0.662 -2.191 -1.277 -0.614 -0.615 -1.079 -1.379 -1.275 -2.195l-0.203 -0.083a10 10 0 0 0 -0.655 -0.248c-0.363 -0.119 -0.675 -0.172 -0.955 -0.132l-1.896 0.27A0.51 0.51 0 0 1 0.15 7.17l2.382 -2.386c0.41 -0.41 0.947 -0.67 1.524 -0.734h0.006l2.4 -0.238C9.005 1.55 11.087 0.582 12.623 0.208c0.89 -0.217 1.59 -0.232 2.08 -0.188 0.244 0.023 0.435 0.06 0.57 0.093q0.1 0.026 0.16 0.045c0.184 0.06 0.279 0.13 0.351 0.295l0.029 0.073a3.5 3.5 0 0 1 0.157 0.721c0.055 0.485 0.051 1.178 -0.159 2.065m-4.828 7.475 0.04 -0.04 -0.107 1.081a1.54 1.54 0 0 1 -0.44 0.913l-1.298 1.3 0.054 -0.38c0.072 -0.506 -0.034 -0.993 -0.172 -1.418a9 9 0 0 0 -0.164 -0.45c0.738 -0.065 1.462 -0.38 2.087 -1.006M5.205 5c-0.625 0.626 -0.94 1.351 -1.004 2.09a9 9 0 0 0 -0.45 -0.164c-0.424 -0.138 -0.91 -0.244 -1.416 -0.172l-0.38 0.054 1.3 -1.3c0.245 -0.246 0.566 -0.401 0.91 -0.44l1.08 -0.107zm9.406 -3.961c-0.38 -0.034 -0.967 -0.027 -1.746 0.163 -1.558 0.38 -3.917 1.496 -6.937 4.521 -0.62 0.62 -0.799 1.34 -0.687 2.051 0.107 0.676 0.483 1.362 1.048 1.928 0.564 0.565 1.25 0.941 1.924 1.049 0.71 0.112 1.429 -0.067 2.048 -0.688 3.079 -3.083 4.192 -5.444 4.556 -6.987 0.183 -0.771 0.18 -1.345 0.138 -1.713a3 3 0 0 0 -0.045 -0.283 3 3 0 0 0 -0.3 -0.041Z" strokeWidth="1"></path>
      <path d="M7.009 12.139a7.6 7.6 0 0 1 -1.804 -1.352A7.6 7.6 0 0 1 3.794 8.86c-1.102 0.992 -1.965 5.054 -1.839 5.18 0.125 0.126 3.936 -0.896 5.054 -1.902Z" strokeWidth="1"></path>
    </svg>
  ),
  "Phase 2": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-24 h-24" fill="#0077cc">
      <desc>Arrows Fullscreen Streamline Icon</desc>
      <path fillRule="evenodd" d="M5.828 10.172a0.5 0.5 0 0 0 -0.707 0l-4.096 4.096V11.5a0.5 0.5 0 0 0 -1 0v3.975a0.5 0.5 0 0 0 0.5 0.5H4.5a0.5 0.5 0 0 0 0 -1H1.732l4.096 -4.096a0.5 0.5 0 0 0 0 -0.707m4.344 0a0.5 0.5 0 0 1 0.707 0l4.096 4.096V11.5a0.5 0.5 0 1 1 1 0v3.975a0.5 0.5 0 0 1 -0.5 0.5H11.5a0.5 0.5 0 0 1 0 -1h2.768l-4.096 -4.096a0.5 0.5 0 0 1 0 -0.707m0 -4.344a0.5 0.5 0 0 0 0.707 0l4.096 -4.096V4.5a0.5 0.5 0 1 0 1 0V0.525a0.5 0.5 0 0 0 -0.5 -0.5H11.5a0.5 0.5 0 0 0 0 1h2.768l-4.096 4.096a0.5 0.5 0 0 0 0 0.707m-4.344 0a0.5 0.5 0 0 1 -0.707 0L1.025 1.732V4.5a0.5 0.5 0 0 1 -1 0V0.525a0.5 0.5 0 0 1 0.5 -0.5H4.5a0.5 0.5 0 0 1 0 1H1.732l4.096 4.096a0.5 0.5 0 0 1 0 0.707" strokeWidth="1"></path>
    </svg>
  ),
  "Phase 3": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-24 h-24" fill="#0077cc">
      <desc>People Streamline Icon</desc>
      <path d="M15 14s1 0 1 -1 -1 -4 -5 -4 -5 3 -5 4 1 1 1 1zm-7.978 -1L7 12.996c0.001 -0.264 0.167 -1.03 0.76 -1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687 0.63 3.24 1.276 0.593 0.69 0.758 1.457 0.76 1.72l-0.008 0.002 -0.014 0.002zM11 7a2 2 0 1 0 0 -4 2 2 0 0 0 0 4m3 -2a3 3 0 1 1 -6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0 -1.23 -0.247A7 7 0 0 0 5 9c-4 0 -5 3 -5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0 -1.01 0.377 -2.042 1.09 -2.904 0.243 -0.294 0.526 -0.569 0.846 -0.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0 -0.26 0.164 -1.03 0.76 -1.724 0.545 -0.636 1.492 -1.256 3.16 -1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1 -6 0m3 -2a2 2 0 1 0 0 4 2 2 0 0 0 0 -4" strokeWidth="1"></path>
    </svg>
  ),
  "Phase 4": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-24 h-24" fill="#0077cc">
      <desc>Bounding Box Streamline Icon</desc>
      <path d="M5 2V0H0v5h2v6H0v5h5v-2h6v2h5v-5h-2V5h2V0h-5v2zm6 1v2h2v6h-2v2H5v-2H3V5h2V3zm1 -2h3v3h-3zm3 11v3h-3v-3zM4 15H1v-3h3zM1 4V1h3v3z" strokeWidth="1"></path>
    </svg>
  )
}

interface RoadmapPhaseProps {
  phase: string
  title: string
  description: string[]
  imageSrc: string
  isLast?: boolean
}

function RoadmapPhase({ phase, title, description, imageSrc, isLast = false }: RoadmapPhaseProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setMousePosition({ x, y });
  };

  const calculateAngle = () => {
    const centerX = 150; // half of max-w-[300px]
    const centerY = 150;
    const angle = Math.atan2(mousePosition.y - centerY, mousePosition.x - centerX);
    return (angle * 180) / Math.PI;
  };

  return (
    <div className="flex flex-col md:flex-row gap-10 md:gap-16 relative">
      {/* Left side - Phase indicator and content */}
      <div className="flex md:w-1/2">
        <div className="flex flex-col items-center mr-6">
          <span className="font-medium text-gray-600 mb-2">
            {phase}
          </span>
          {!isLast && (
            <div className="w-px bg-gray-300 h-full"></div>
          )}
        </div>
        <div className="flex-1 pb-16">
          <h3 className="text-2xl font-syne mb-4">{title}</h3>
          <ul className="space-y-2">
            {description.map((item, index) => (
              <li key={index} className="flex items-start">
                <div className="w-1.5 h-1.5 bg-[#0077cc] rounded-full mt-2 mr-3"></div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Right side - Icon image */}
      <div className="md:w-1/2 flex justify-center md:justify-end">
        <div 
          className="w-full max-w-[300px] aspect-square rounded-xl flex items-center justify-center p-12 border border-gray-200 relative overflow-hidden group"
          style={{
            backgroundImage: 'url(/bg-color.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className="absolute transition-all duration-300 pointer-events-none"
            style={{
              opacity: isHovered ? 1 : 0,
              background: `linear-gradient(${calculateAngle()}deg, rgba(0, 119, 204, 0.2), rgba(0, 200, 255, 0.1), transparent)`,
              width: '200%',
              height: '200%',
              left: '-50%',
              top: '-50%',
              transform: `rotate(${calculateAngle()}deg) translate(${(mousePosition.x - 150) / 10}px, ${(mousePosition.y - 150) / 10}px)`,
              transformOrigin: 'center',
              filter: 'blur(20px)',
            }}
          />
          <div
            className="absolute transition-opacity duration-300 pointer-events-none"
            style={{
              opacity: isHovered ? 1 : 0,
              background: `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 119, 204, 0.15), rgba(0, 200, 255, 0.1), transparent 70%)`,
              width: '100%',
              height: '100%',
              left: 0,
              top: 0,
            }}
          />
          {PhaseIcons[phase as keyof typeof PhaseIcons]}
        </div>
      </div>
    </div>
  )
}

export default function RoadmapSection() {
  const phases = [
    {
      phase: "Phase 1",
      title: "Initial Launch",
      description: [
        "Browser Node Extension Release (Chrome, Firefox)",
        "Deployment of real-time Dashboard and Leaderboard",
        "Launch of community invitation and early mining campaigns"
      ],
      imageSrc: "/p1.svg"
    },
    {
      phase: "Phase 2",
      title: "Compute Expansion",
      description: [
        "Desktop Node App (Windows, macOS, Linux) Release",
        "Expansion to AI Inference, Data Cleaning, Web3 Validation",
        "Launch of seasonal node mining competitions and point acceleration programs"
      ],
      imageSrc: "/p2.svg"
    },
    {
      phase: "Phase 3",
      title: "Economic System Launch",
      description: [
        "Enable point-to-$TTD redemption on-chain",
        "Establish Developer Task Marketplace",
        "Initiate TechTide DAO and governance voting processes"
      ],
      imageSrc: "/p3.svg"
    },
    {
      phase: "Phase 4",
      title: "Full Ecosystem Growth",
      description: [
        "Deployment of Mobile Node Applications (Android/iOS)",
        "Rollout of Cross-Chain Task Distribution (Solana, Base, Linea)",
        "Launch of Green Node Incentive Mechanism",
        "Strategic partnerships with Web3 infrastructure providers and AI/data projects"
      ],
      imageSrc: "/p4.svg"
    }
  ]
  
  return (
    <section className="flex justify-center" id="roadmap">
      <div className="max-w-[1400px] w-full bg-white mx-auto">
        <div className="w-full section-padding py-20">
          <h2 className="text-4xl font-syne font-semibold mb-16">
            Roadmap
          </h2>
          
          <div className="space-y-6">
            {phases.map((phase, index) => (
              <RoadmapPhase
                key={index}
                phase={phase.phase}
                title={phase.title}
                description={phase.description}
                imageSrc={phase.imageSrc}
                isLast={index === phases.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 