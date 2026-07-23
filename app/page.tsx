import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import Header from "@/components/header";
import AboutSection from "@/components/sections/about-section";
import SkillsSection from "@/components/sections/skills-section";
import ServicesSection from "@/components/sections/services-section";
import ProjectsSection from "@/components/sections/projects-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import ContactSection from "@/components/sections/contact-section";
import { hero } from "@/lib/portfolio-data";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroGeometric
        badge={hero.badge}
        title1={hero.title1}
        title2={hero.title2}
        title3={hero.title3}
        description={hero.description}
      />
      <div className="container max-w-7xl mx-auto px-4 md:px-6 overflow-visible">
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
      </div>
    </div>
  );
}
