import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WorkExperience } from "@/components/WorkExperience";
import { TechStack } from "@/components/TechStack";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div>
        <Header />
        <Hero />
        <WorkExperience />
        <TechStack />
        <Footer />
      </div>
    </>
  );
}
