import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import Header from "@/components/header";
import AboutSection from "@/components/sections/about-section";
import SkillsSection from "@/components/sections/skills-section";
import ServicesSection from "@/components/sections/services-section";
import ProjectsSection from "@/components/sections/projects-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import ContactSection from "@/components/sections/contact-section";

export default function Home() {
  return (
    <div>
      <Header email="kanwarabdullrahman@gmail.com" />
      <HeroGeometric
        badge="Hello, I am"
        title1="Kanwer Abdull"
        title2="Rahman"
        title3="Full Stack Developer"
        description="Transform ideas into reality. My academic experience has provided me with a solid foundation in software principles, while also allowing me to dive into the latest advancements in Software Engineering and Web Development."
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
