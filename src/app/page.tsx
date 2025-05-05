import {
  Header,
  Footer,
} from "@/components/ui/layout"

import {
  HeroSection,
  StatsSection,
  PortfolioSection,
  AboutSection,
  BlogSection,
  ContactSection
} from "@/components/ui/home"

export default function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <StatsSection />
      <PortfolioSection />
      <AboutSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </>
  )
}
