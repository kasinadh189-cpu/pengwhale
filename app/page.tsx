import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { StorySection } from "@/components/story-section";
import { TokenomicsSection } from "@/components/tokenomics-section";
import { RoadmapSection } from "@/components/roadmap-section";
import { MemesSection } from "@/components/memes-section";
import { FooterSection } from "@/components/footer-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a1628]">
      <Navigation />
      <HeroSection />
      <div id="story">
        <StorySection />
      </div>
      <TokenomicsSection />
      <RoadmapSection />
      <div id="gallery">
        <MemesSection />
      </div>
      <FooterSection />
    </main>
  );
}
