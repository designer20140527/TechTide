"use client"

import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"
import { Ripple } from "@/components/magicui/ripple"
import { RippleButton } from "@/components/magicui/ripple-button"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="flex justify-center">
      <div className="max-w-[1400px] w-full mx-auto bg-white rounded-tl-[40px] rounded-tr-[40px] h-[70vh] flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-8 text-center relative overflow-hidden" style={{ boxShadow: 'none' }}>
        {/* Ripple effect */}
        <Ripple className="opacity-80 [&>div]:!bg-[rgba(0,96,160,0.15)] [&>div]:!border-[rgba(0,96,160,0.2)]" mainCircleSize={500} numCircles={8} mainCircleOpacity={0.35} />

        {/* Background image */}
        <div className="absolute inset-0 z-[1] flex items-end justify-center opacity-90">
          <div className="relative w-full h-full">
            <Image
              src="/title.png"
              alt="Background"
              fill
              style={{
                objectFit: "contain",
                objectPosition: "bottom center",
              }}
            />
          </div>
        </div>

        {/* Content */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] relative z-[2] mt-20 flex flex-col">
          <span>Ride the Idle Wave.</span>
          <span>Power the Future.</span>
        </h1>

        <p className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] text-base sm:text-lg mb-10 relative z-[2]">
          TechTide is a decentralized compute network, allowing users to utilize idle CPU and GPU resources for AI
          computation, data processing, and Web3 services. Users contribute unused computing capacity during idle
          periods to complete real-world tasks and earn $TTD tokens in return.
        </p>

        <div className="flex gap-4 relative z-[2] mb-8 sm:mb-4 md:mb-0">
          <Link href="https://t.me/TechTide_Official" target="_blank" rel="noopener noreferrer">
            <RippleButton 
              className="rounded-full flex items-center px-4 py-2.5 bg-[#0077cc] hover:bg-[#005fa3] text-white transition-colors"
              rippleColor="#ffffff"
            >
              <Send size={18} />
              <span>Telegram</span>
            </RippleButton>
          </Link>
          <Link href="https://x.com/TechTide_COIN" target="_blank" rel="noopener noreferrer">
            <RippleButton
              className="rounded-full flex items-center px-4 py-2.5 bg-white border border-gray-200 hover:bg-gray-50 transition-colors"
              rippleColor="#0077cc"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span>Twitter X</span>
            </RippleButton>
          </Link>
        </div>
      </div>
    </section>
  )
}
