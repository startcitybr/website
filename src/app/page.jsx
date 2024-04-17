import { AosInit } from "@/components/AosInit";
import { Footer } from "@/components/Footer";
import SectionHero from "@/components/SectionHero";
import SectionIcon from "@/components/SectionIcon";
import { StartPartner } from "@/components/StartPartner";


export default function Home() {
  return (
    <>
      <AosInit>
        <SectionHero />
        <SectionIcon />
        <StartPartner />

        <Footer />
      </AosInit>
    </>
  );
}
