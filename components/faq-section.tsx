"use client"

import React, { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  toggleOpen: () => void
}

function FAQItem({ question, answer, isOpen, toggleOpen }: FAQItemProps) {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button 
        className="w-full flex items-center justify-between py-6 text-left font-medium"
        onClick={toggleOpen}
        aria-expanded={isOpen}
      >
        <span className="text-lg font-syne">{question}</span>
        <ChevronDown 
          className={`h-5 w-5 text-gray-500 transition-transform ${isOpen ? "transform rotate-180" : ""}`} 
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px] opacity-100 pb-6" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  )
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)
  
  const faqs = [
    {
      question: "What is TechTide?",
      answer: "TechTide is a decentralized network that aggregates idle computing power from user devices to process AI computation, data tasks, and Web3 operations. Contributors are rewarded with $TTD tokens based on their participation."
    },
    {
      question: "How does TechTide work?",
      answer: "Users install a browser extension or desktop application. The system automatically allocates tasks such as AI model inference, data processing, and Web3 transaction validation during idle device periods. Performance metrics are tracked to distribute points, which can be redeemed for $TTD."
    },
    {
      question: "How do I start contributing to TechTide?",
      answer: "You can start by installing the TechTide Chrome/Firefox extension or the native desktop client (Windows, macOS, Linux), then connect with an email or Web3 wallet. Once active, your device will automatically contribute when idle."
    },
    {
      question: "Will running a TechTide node affect my device performance?",
      answer: "No. TechTide nodes are designed to operate only when the device is idle. The resource allocation engine ensures that participation does not interfere with primary device usage such as browsing, work, or gaming."
    },
    {
      question: "How is security ensured when running tasks?",
      answer: "All compute tasks are executed within isolated WebAssembly (WASM) sandbox environments. This architecture prevents any task from accessing, modifying, or interfering with the device's operating system or personal files."
    },
    {
      question: "What types of tasks are distributed by TechTide?",
      answer: "Tasks include AI model inference, large-scale data processing, decentralized transaction validation for Web3 applications, and edge computing tasks requiring low-latency execution."
    },
    {
      question: "What rewards can I earn and how are they distributed?",
      answer: "Participants accumulate points based on uptime, task completion success, and participation in campaigns. These points are redeemable for $TTD tokens through an on-chain redemption process. Additional rewards are available through staking and community campaigns."
    },
    {
      question: "What is the role of the $TTD token in the ecosystem?",
      answer: "$TTD tokens can be used to redeem compute points, access premium services, participate in TechTide DAO governance, and be staked for additional yield and incentives."
    },
    {
      question: "Does TechTide support multiple blockchains?",
      answer: "TechTide initially supports Base for authentication and reward transactions. Future phases will introduce broader multi-chain task distribution, covering other EVM-compatible chains."
    },
    {
      question: "When will mobile support for TechTide nodes become available?",
      answer: "Development for Android and iOS lightweight node versions is underway. Mobile node functionality is scheduled for release during the ecosystem growth phase outlined in the project roadmap."
    }
  ]
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(index === openIndex ? -1 : index)
  }
  
  return (
    <section className="flex justify-center">
      <div className="max-w-[1400px] w-full bg-[#f0f5fa] mx-auto">
        <div className="w-full section-padding py-20">
          <h2 className="text-4xl font-syne font-semibold mb-10">
            FAQ
          </h2>
          
          <div className="bg-white rounded-xl p-6">
            {faqs.map((faq, index) => (
              <FAQItem 
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={index === openIndex}
                toggleOpen={() => toggleFAQ(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 