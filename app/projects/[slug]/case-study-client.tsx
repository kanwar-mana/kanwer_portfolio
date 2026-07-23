"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, AlertCircle, Lightbulb, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/portfolio-data";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] },
});

const sections = [
  {
    key: "problem" as const,
    label: "The Problem",
    icon: AlertCircle,
    accent: "text-destructive",
    bg: "bg-destructive/5 border-destructive/20",
    iconBg: "bg-destructive/10 text-destructive",
  },
  {
    key: "solution" as const,
    label: "The Solution",
    icon: Lightbulb,
    accent: "text-primary",
    bg: "bg-primary/5 border-primary/20",
    iconBg: "bg-primary/10 text-primary",
  },
  {
    key: "result" as const,
    label: "The Result",
    icon: TrendingUp,
    accent: "text-emerald-500",
    bg: "bg-emerald-500/5 border-emerald-500/20",
    iconBg: "bg-emerald-500/10 text-emerald-500",
  },
];

export default function CaseStudyClient({ project }: { project: Project }) {
  const cs = project.caseStudy!;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero banner */}
      <div className="relative w-full h-[45vh] min-h-[280px] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-top"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-background/70 backdrop-blur-[2px]" />
        {/* Bottom fade */}
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/30 to-transparent" />

        {/* Back button */}
        <motion.div {...fadeUp(0)} className="absolute top-6 left-6 z-10">
          <Link href="/#projects">
            <Button variant="outline" size="sm" className="gap-2 backdrop-blur-sm bg-background/60">
              <ArrowLeft size={14} />
              All Projects
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Main content */}
      <div className="max-w-3xl mx-auto px-4 md:px-6 pb-24 -mt-12 relative z-10">
        {/* Title block */}
        <motion.div {...fadeUp(0.1)} className="mb-10">
          <span className="font-mono text-primary text-sm tracking-wider uppercase">
            Case Study
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mt-2 tracking-tight">
            {project.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border border-border"
              >
                {tag.trim()}
              </span>
            ))}
          </div>

          {/* Live link */}
          {project.liveUrl && (
            <div className="mt-6">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <Button className="gap-2 shine-effect relative overflow-hidden">
                  <ExternalLink size={14} />
                  View Live Site
                </Button>
              </a>
            </div>
          )}
        </motion.div>

        {/* Divider */}
        <motion.div {...fadeUp(0.2)} className="border-t border-border mb-12" />

        {/* Problem / Solution / Result */}
        <div className="space-y-8">
          {sections.map(({ key, label, icon: Icon, bg, iconBg, accent }, i) => (
            <motion.div
              key={key}
              {...fadeUp(0.25 + i * 0.15)}
              className={cn(
                "rounded-2xl border p-6 sm:p-8",
                bg,
              )}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={cn("flex items-center justify-center w-9 h-9 rounded-xl", iconBg)}>
                  <Icon size={18} />
                </div>
                <h2 className={cn("text-lg font-bold", accent)}>{label}</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed text-base">
                {cs[key]}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div {...fadeUp(0.7)} className="mt-14 text-center space-y-4">
          <p className="text-muted-foreground">Interested in a similar project?</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/#contact">
              <Button className="shine-effect relative overflow-hidden">Get in Touch</Button>
            </Link>
            <Link href="/#projects">
              <Button variant="outline">More Projects</Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
