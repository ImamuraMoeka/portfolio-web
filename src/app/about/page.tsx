// app/about/page.tsx
import { Header, Footer } from "@/components/ui/layout";
import { AboutHero } from "@/components/ui/about/aboutHero";
import { AboutTabs } from "@/components/ui/about/aboutTabs";
// import { BackToHome } from "@/components/ui/about/backToHome"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <AboutHero />
      <AboutTabs />
      {/* <BackToHome /> */}
      <Footer />
    </div>
  );
}
