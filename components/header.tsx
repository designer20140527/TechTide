"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    handleResize() // Initial check
    window.addEventListener('resize', handleResize)
    
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  
  const containerVariants = {
    expanded: { 
      paddingTop: isMobile ? 4 : 8,
      paddingBottom: isMobile ? 4 : 8,
    },
    collapsed: { 
      paddingTop: 4, 
      paddingBottom: 4,
    }
  }
  
  return (
    <header className="fixed top-6 left-0 right-0 z-10 flex justify-center">
      <motion.div 
        className="flex items-center justify-between px-2 xs:px-3 sm:px-6 bg-white rounded-full border border-gray-200 shadow-sm w-[82%] md:w-auto md:max-w-fit mx-auto"
        variants={containerVariants}
        initial="expanded"
        animate={isScrolled ? "collapsed" : "expanded"}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
      >
        <div className="hidden md:flex items-center gap-3 mr-8">
          <Link href="#home">
            <Image src="/logo-transparent.png" alt="TechTide Logo" width={32} height={32} />
          </Link>
          <AnimatePresence mode="wait">
            {!isScrolled && (
              <motion.span 
                className="font-semibold text-lg"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ 
                  duration: 0.4,
                  ease: "easeInOut"
                }}
              >
                TechTide
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        <nav className="flex items-center gap-1.5 xs:gap-2 sm:gap-8 mr-1.5 xs:mr-0 sm:mr-8">
          <Link href="#features" className="text-xs xs:text-sm hover:text-gray-600 whitespace-nowrap">
            Features
          </Link>
          <Link href="#tokenomics" className="text-xs xs:text-sm hover:text-gray-600 whitespace-nowrap">
            Tokenomics
          </Link>
          <Link href="#roadmap" className="text-xs xs:text-sm hover:text-gray-600 whitespace-nowrap">
            Roadmap
          </Link>
        </nav>

        <Button className="rounded-full bg-black text-white hover:bg-gray-800 text-xs xs:text-sm sm:text-base px-2 xs:px-3 sm:px-6 py-1 xs:py-2 h-auto min-w-[60px]">Gitbook</Button>
      </motion.div>
    </header>
  )
}
