import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Positioning } from "@/components/sections/positioning";
import { OurStory } from "@/components/sections/our-story";
import { TrainingCampaign } from "@/components/sections/training-campaign";
import { Services } from "@/components/sections/services";
import { HowItWorks } from "@/components/sections/how-it-works";
import { WhySecnura } from "@/components/sections/why-secnura";
import { SecurityMaturity } from "@/components/sections/security-maturity";
import { Resources } from "@/components/sections/resources";
import { FinalCta } from "@/components/sections/final-cta";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Positioning />
        <OurStory />
        <TrainingCampaign />
        <Services />
        <HowItWorks />
        <WhySecnura />
        <SecurityMaturity />
        <Resources />
        <FinalCta />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
