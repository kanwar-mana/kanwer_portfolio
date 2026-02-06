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
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with real-time inventory, secure Stripe payments, and an admin dashboard for managing products and orders.",
    image: "",
    tags: ["Next.js", "TypeScript", "Prisma", "Stripe", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Project Management App",
    description:
      "A collaborative project management tool with Kanban boards, real-time updates, role-based access, and team chat integration.",
    image: "",
    tags: ["React", "Node.js", "Socket.io", "MongoDB", "Redux"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "AI Content Generator",
    description:
      "An AI-powered content generation tool that creates blog posts, social media copy, and marketing content using OpenAI APIs.",
    image: "",
    tags: ["Next.js", "OpenAI", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Real Estate Listing",
    description:
      "A modern real estate platform with advanced search, map integration, and virtual tour capabilities.",
    image: "",
    tags: ["React", "Node.js", "Google Maps", "Firebase"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Fitness Tracker",
    description:
      "A fitness tracking app with workout logging, progress charts, and personalized goal setting.",
    image: "",
    tags: ["Next.js", "Chart.js", "Supabase", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Portfolio Template",
    description:
      "A sleek, animated developer portfolio template with dark mode, Framer Motion animations, and CMS integration.",
    image: "",
    tags: ["Next.js", "Framer Motion", "MDX", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
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
            <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-300 z-10" />
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
            <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-300 z-10" />
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
      className="relative w-full py-24 md:py-32 overflow-hidden"
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
            href="https://github.com"
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
