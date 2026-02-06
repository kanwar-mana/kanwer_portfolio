"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Palette,
  Rocket,
  Sparkles,
  Download,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Link from "next/link";

const stats = [
  { label: "Years Experience", value: "3+" },
  { label: "Projects Completed", value: "20+" },
  { label: "Happy Clients", value: "15+" },
  { label: "Technologies", value: "12+" },
];

const skills = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description:
      "Building robust web applications with React, Next.js, Node.js, and modern backend technologies.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Creating intuitive, beautiful interfaces that delight users and drive engagement.",
  },
  {
    icon: Rocket,
    title: "Performance Optimization",
    description:
      "Ensuring lightning-fast load times and smooth user experiences across all devices.",
  },
  {
    icon: Sparkles,
    title: "Modern Technologies",
    description:
      "Staying ahead with the latest frameworks, tools, and best practices in web development.",
  },
];

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "Git",
  "Figma",
  "REST APIs",
  "GraphQL",
];

export default function AboutSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.15,
        ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
      },
    }),
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full py-24 md:py-32 overflow-hidden"
    >
      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/2 to-transparent pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          custom={0}
          variants={fadeUpVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16 md:mb-20"
        >
          <span className="font-mono text-primary text-sm tracking-wider uppercase">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 tracking-tight">
            Passionate about crafting
            <br />
            <span className="text-primary italic">digital experiences</span>
          </h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column — Story */}
          <div className="space-y-8">
            <motion.div
              custom={1}
              variants={fadeUpVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-5"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                I&apos;m a Full Stack Developer with a deep passion for building
                modern, scalable web applications. My journey in software
                engineering has given me a solid foundation in both front-end
                aesthetics and back-end architecture.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I thrive on turning complex problems into elegant, user-friendly
                solutions. Whether it&apos;s a sleek landing page or a
                full-fledged SaaS platform, I bring the same level of dedication
                and attention to detail.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              custom={2}
              variants={fadeUpVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex flex-wrap gap-4 pt-2"
            >
              <Link href="#contact">
                <Button className="gap-2 shine-effect relative overflow-hidden">
                  Let&apos;s Work Together
                  <ArrowRight size={16} />
                </Button>
              </Link>
              <Button variant="outline" className="gap-2">
                <Download size={16} />
                Download CV
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-border"
            >
              {stats.map((stat) => (
                <motion.div key={stat.label} variants={staggerItem}>
                  <div className="text-3xl md:text-4xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column — Skills Cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.title}
                variants={staggerItem}
                className={cn(
                  "group relative p-6 rounded-2xl",
                  "bg-card/50 border border-border",
                  "hover:border-primary/40 hover:bg-primary/3",
                  "transition-all duration-300",
                )}
              >
                <div
                  className={cn(
                    "inline-flex items-center justify-center w-10 h-10 rounded-xl mb-4",
                    "bg-primary/10 text-primary",
                    "group-hover:bg-primary group-hover:text-primary-foreground",
                    "transition-colors duration-300",
                  )}
                >
                  <skill.icon size={20} />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  {skill.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
