import { HomeHero } from "./HomeHero";
import { HomeServicesPreview } from "./HomeServicesPreview";
import { HomeHowItWorks } from "./HomeHowItWorks";
import { HomeTrustSection } from "./HomeTrustSection";
import { HomeLocationBlock } from "./HomeLocationBlock";
import { HomeFAQ } from "./HomeFAQ";
import { HomeFinalCta } from "./HomeFinalCta";

export default function HomePage() {
  return (
    <div className="min-h-screen scroll-smooth">
      <HomeHero />
      <div className="flex flex-col">
        <HomeServicesPreview />
        <HomeHowItWorks />
        <HomeTrustSection />
        <HomeLocationBlock />
        <HomeFAQ />
        <HomeFinalCta />
      </div>
    </div>
  );
}
