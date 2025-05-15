import Header from "@/components/header"
import Hero from "@/components/hero"
import FeaturesSection from "@/components/features-section"
import ProtocolSection from "@/components/protocol-section"
import GetStartedSection from "@/components/get-started-section"
import TokenomicsSection from "@/components/tokenomics-section"
import RoadmapSection from "@/components/roadmap-section"
import FAQSection from "@/components/faq-section"
import SiteFooter from "@/components/site-footer"

export default function Home() {
  return (
    <main className="min-h-screen" id="home">
      <Hero />
      <FeaturesSection />
      <ProtocolSection />
      <GetStartedSection />
      <TokenomicsSection />
      <RoadmapSection />
      <FAQSection />
      <SiteFooter />
      <Header />
    </main>
  )
}
