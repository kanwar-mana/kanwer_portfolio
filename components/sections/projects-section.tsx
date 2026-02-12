"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight, ExternalLink, Github, Folder } from "lucide-react";
import Link from "next/link";

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "PrimeZoneC (Consultancy Web App)",
    description:
      "Built a consultancy platform for a Pakistan-based client using Next.js (TypeScript) and Firebase, with advanced university search, filtering, and pagination across 100+ institutions.",
    image: "/projects/prime.png",
    tags: [
      "Next.js",
      "TypeScript",
      "Firebase",
      "Redux Toolkit",
      "Tailwind CSS",
    ],
    liveUrl: "https://www.primezonec.com/",
    featured: true,
  },
  {
    title: "FitLynq (Sports Booking Platform)",
    description:
      "Engineered a full-stack booking platform with React 19 and Node.js where users discover courts, create lobbies, and book multiplayer sessions with role-based access for player and business accounts.",
    image: "/projects/fitlynq.png",
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "Stripe",
      "PayPal",
      "Role-Based Access",
    ],
    featured: true,
  },
  {
    title: "AI-Driven Platform for FYP Coordination",
    description:
      "Developing a web application to automate the Final Year Project workflow for students and coordinators, with secure RESTful APIs, JWT authentication, and active session management across devices.",
    image: "/projects/fyp.png",
    tags: [
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "Express.js",
      "MongoDB",
      "JWT",
    ],
    featured: true,
  },
  {
    title: "DevBeeZ Agency Site",
    description:
      "Built a modern marketing website using Next.js 13 App Router and TypeScript, featuring mobile-first responsive layouts, contact form integration, and an MDX blog powered by Contentlayer for SEO-friendly content.",
    image: "/projects/devbeez.png",
    tags: [
      "Next.js 13",
      "TypeScript",
      "Tailwind CSS",
      "MDX",
      "Contentlayer",
      "SEO",
    ],
    liveUrl: "https://dev-beez.vercel.app/",
  },
];

function FeaturedProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={cn(
        "group relative grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center",
        "p-4 md:p-6 rounded-2xl",
        "border border-border hover:border-primary/30",
        "bg-card/30 hover:bg-primary/2",
        "transition-all duration-300",
      )}
    >
      {/* Image */}
      <div
        className={cn(
          "relative w-full aspect-video rounded-xl overflow-hidden",
          "bg-secondary",
          isEven ? "lg:order-1" : "lg:order-2",
        )}
      >
        {project.image ? (
          <>
            <div className="absolute inset-0  group-hover:bg-transparent transition-colors duration-300 z-10" />
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-secondary">
            <Folder size={40} className="text-muted-foreground/40" />
            <span className="text-xs text-muted-foreground/50 font-mono">
              Preview coming soon
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div
        className={cn(
          "flex flex-col gap-4",
          isEven ? "lg:order-2" : "lg:order-1",
        )}
      >
        <div className="flex items-center gap-2">
          <Folder size={16} className="text-primary" />
          <span className="font-mono text-primary text-xs tracking-wider uppercase">
            Featured Project
          </span>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
          {project.title}
        </h3>

        <p className="text-muted-foreground leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={cn(
                "px-3 py-1 rounded-full text-xs font-medium",
                "bg-secondary text-secondary-foreground",
                "group-hover:bg-primary/10 group-hover:text-primary",
                "transition-colors duration-300",
              )}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 pt-2">
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="View source code"
            >
              <Github size={20} />
            </Link>
          )}
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="View live site"
            >
              <ExternalLink size={20} />
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={cn(
        "group relative flex flex-col rounded-2xl overflow-hidden",
        "border border-border",
        "hover:border-primary/30",
        "bg-card/30 hover:bg-primary/2",
        "transition-all duration-300",
      )}
    >
      {/* Image */}
      <div className="relative w-full aspect-video bg-secondary overflow-hidden">
        {project.image ? (
          <>
            <div className="absolute inset-0  group-hover:bg-transparent transition-colors duration-300 z-10" />
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-secondary">
            <Folder size={32} className="text-muted-foreground/40" />
            <span className="text-xs text-muted-foreground/50 font-mono">
              Preview coming soon
            </span>
          </div>
        )}

        {/* Hover overlay with links */}
        <div
          className={cn(
            "absolute inset-0 z-20 flex items-center justify-center gap-4",
            "bg-background/60 backdrop-blur-sm",
            "opacity-0 group-hover:opacity-100",
            "transition-opacity duration-300",
          )}
        >
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              className={cn(
                "flex items-center justify-center w-10 h-10 rounded-full",
                "bg-foreground text-background",
                "hover:bg-primary hover:text-primary-foreground",
                "transition-colors duration-200",
              )}
              aria-label="View source code"
            >
              <Github size={18} />
            </Link>
          )}
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              className={cn(
                "flex items-center justify-center w-10 h-10 rounded-full",
                "bg-foreground text-background",
                "hover:bg-primary hover:text-primary-foreground",
                "transition-colors duration-200",
              )}
              aria-label="View live site"
            >
              <ExternalLink size={18} />
            </Link>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 md:p-6">
        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={cn(
                "px-2.5 py-0.5 rounded-full text-xs font-medium",
                "bg-secondary text-secondary-foreground",
              )}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
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

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative w-full py-18 md:py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/2 to-transparent pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <span className="font-mono text-primary text-sm tracking-wider uppercase">
              My Work
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 tracking-tight">
              Projects that speak
              <br />
              <span className="text-primary italic">for themselves</span>
            </h2>
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <p className="text-muted-foreground max-w-md text-lg leading-relaxed">
              A selection of projects I&apos;ve built — from full-stack apps to
              polished frontends.
            </p>
          </motion.div>
        </div>

        {/* Featured Projects */}
        <div className="space-y-8 mb-16">
          {featuredProjects.map((project, i) => (
            <FeaturedProjectCard
              key={project.title}
              project={project}
              index={i}
            />
          ))}
        </div>

        {/* Other Projects Header */}
        {otherProjects.length > 0 && (
          <>
            <motion.div
              custom={2}
              variants={fadeUpVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-center mb-10"
            >
              <h3 className="text-xl font-semibold text-foreground">
                Other Noteworthy Projects
              </h3>
              <p className="text-muted-foreground text-sm mt-1">
                More things I&apos;ve built
              </p>
            </motion.div>

            {/* Other Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {otherProjects.map((project, i) => (
                <ProjectCard key={project.title} project={project} index={i} />
              ))}
            </div>
          </>
        )}

        {/* View More CTA */}
        <motion.div
          custom={4}
          variants={fadeUpVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 text-center"
        >
          <Link
            href="https://github.com/kanwar-mana?tab=repositories"
            target="_blank"
            className={cn(
              "inline-flex items-center gap-2 px-6 py-3 rounded-full",
              "border border-border text-foreground font-medium",
              "hover:border-primary hover:text-primary",
              "transition-colors duration-200",
            )}
          >
            View More on GitHub
            <ArrowUpRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
