import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import Header from "@/components/header";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import ServicesSection from "@/components/services-section";
import ProjectsSection from "@/components/projects-section";
import TestimonialsSection from "@/components/testimonials-section";
import ContactSection from "@/components/contact-section";

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
        <ServicesSection />
        <ProjectsSection />
        <TestimonialsSection />
        <ContactSection />
      </div>
    </div>
  );
}
