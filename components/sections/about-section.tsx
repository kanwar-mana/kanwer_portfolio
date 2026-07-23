"use client";

import { motion, useInView, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Download, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Link from "next/link";
import { about, personal } from "@/lib/portfolio-data";

// ── Animated counter ───────────────────────────────────────────────────────
function AnimatedStat({ value, label, trigger }: { value: string; label: string; trigger: boolean }) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : value;
  const [count, setCount] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!trigger || hasRun.current || target === 0) return;
    hasRun.current = true;
    const ctrl = animate(0, target, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (v) => setCount(Math.round(v)),
    });
    return () => ctrl.stop();
  }, [trigger, target]);

  return (
    <div>
      <div className="text-3xl md:text-4xl font-bold text-primary tabular-nums">
        {target > 0 ? `${count}${suffix}` : value}
      </div>
      <div className="text-sm text-muted-foreground mt-1">{label}</div>
    </div>
  );
}

export default function AboutSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1, y: 0,
      transition: { duration: 0.8, delay: i * 0.15, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] },
    }),
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] } },
  };

  return (
    <section id="about" ref={sectionRef} className="relative w-full py-18 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/2 to-transparent pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate={isInView ? "visible" : "hidden"} className="mb-16 md:mb-20">
          <span className="font-mono text-primary text-sm tracking-wider uppercase">About Me</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 tracking-tight">
            Passionate about crafting<br />
            <span className="text-primary italic">digital experiences</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left */}
          <div className="space-y-8">
            <motion.div custom={1} variants={fadeUp} initial="hidden" animate={isInView ? "visible" : "hidden"} className="space-y-5">
              {about.paragraphs.map((para, i) => (
                <p key={i} className="text-lg text-muted-foreground leading-relaxed">{para}</p>
              ))}
            </motion.div>

            <motion.div custom={2} variants={fadeUp} initial="hidden" animate={isInView ? "visible" : "hidden"} className="flex flex-wrap gap-4 pt-2">
              <Link href="#contact">
                <Button className="gap-2 shine-effect relative overflow-hidden">
                  Let&apos;s Work Together <ArrowRight size={16} />
                </Button>
              </Link>
              <a href={personal.resumeUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="gap-2">
                  <Download size={16} /> Download CV
                </Button>
              </a>
            </motion.div>

            {/* Animated stats */}
            <motion.div variants={stagger} initial="hidden" animate={isInView ? "visible" : "hidden"} className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-border">
              {about.stats.map((stat) => (
                <motion.div key={stat.label} variants={item}>
                  <AnimatedStat value={stat.value} label={stat.label} trigger={isInView} />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right — capability cards */}
          <motion.div variants={stagger} initial="hidden" animate={isInView ? "visible" : "hidden"} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {about.capabilities.map((skill) => (
              <motion.div key={skill.title} variants={item} className={cn("group relative p-6 rounded-2xl", "bg-card/50 border border-border", "hover:border-primary/40 hover:bg-primary/3", "transition-all duration-300")}>
                <div className={cn("inline-flex items-center justify-center w-10 h-10 rounded-xl mb-4", "bg-primary/10 text-primary", "group-hover:bg-primary group-hover:text-primary-foreground", "transition-colors duration-300")}>
                  <skill.icon size={20} />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{skill.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
