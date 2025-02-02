import { Hero } from "@/components/Hero";
import { WorkExperience } from "@/components/WorkExperience";
import { TechStack } from "@/components/TechStack";

export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <WorkExperience />
        <TechStack />
      </div>
    </>
  );
}
