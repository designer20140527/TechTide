import type React from "react"
import type { Metadata } from "next"
import { Inter, Syne } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-inter",
})

const syne = Syne({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-syne",
})

export const metadata: Metadata = {
  title: "TechTide",
  description: "A decentralized compute network",
  generator: 'v0.dev',
  icons: {
    icon: '/logo-transparent.png',
    apple: '/logo-transparent.png',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body suppressHydrationWarning className={`${inter.variable} ${syne.variable} bg-[#f7f7f7]`}>{children}</body>
    </html>
  )
}
