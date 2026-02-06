"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import {
  Globe,
  Smartphone,
  ShoppingCart,
  Search,
  LayoutDashboard,
  Paintbrush,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Custom, high-performance websites built with modern frameworks like Next.js and React — optimized for speed, SEO, and scalability.",
    highlights: ["Next.js / React", "Server-Side Rendering", "API Integration"],
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Pixel-perfect, mobile-first designs that look stunning on every screen — from phones to ultrawide monitors.",
    highlights: ["Mobile-First", "Cross-Browser", "Adaptive Layouts"],
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard & SaaS",
    description:
      "Data-driven dashboards and SaaS products with real-time updates, role-based access, and clean analytics interfaces.",
    highlights: ["Real-Time Data", "Auth & Roles", "Analytics UI"],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description:
      "End-to-end online stores with secure payments, inventory management, and seamless checkout experiences.",
    highlights: ["Payment Gateway", "Product Management", "Cart & Checkout"],
  },
  {
    icon: Paintbrush,
    title: "UI/UX Design",
    description:
      "User-centered design with wireframes, prototypes, and polished interfaces that balance beauty with usability.",
    highlights: ["Wireframing", "Prototyping", "Design Systems"],
  },
  {
    icon: Search,
    title: "SEO & Performance",
    description:
      "Technical SEO audits, Core Web Vitals optimization, and performance tuning to help your site rank and load fast.",
    highlights: ["Core Web Vitals", "Technical SEO", "Lighthouse 100"],
  },
];

export default function ServicesSection() {
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
        delayChildren: 0.2,
      },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section
      id="services"
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
              What I Offer
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 tracking-tight">
              Services that drive
              <br />
              <span className="text-primary italic">real results</span>
            </h2>
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <p className="text-muted-foreground max-w-md text-lg leading-relaxed">
              From concept to deployment, I deliver end-to-end solutions
              tailored to your business goals.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariant}
              className={cn(
                "group relative flex flex-col p-6 md:p-8 rounded-2xl",
                "border border-border bg-card/30",
                "hover:border-primary/40 hover:bg-primary/3",
                "transition-all duration-300",
              )}
            >
              {/* Icon + Arrow */}
              <div className="flex items-start justify-between mb-6">
                <div
                  className={cn(
                    "inline-flex items-center justify-center w-12 h-12 rounded-xl",
                    "bg-primary/10 text-primary",
                    "group-hover:bg-primary group-hover:text-primary-foreground",
                    "transition-colors duration-300",
                  )}
                >
                  <service.icon size={22} />
                </div>
                <ArrowUpRight
                  size={20}
                  className={cn(
                    "text-muted-foreground/40",
                    "group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5",
                    "transition-all duration-300",
                  )}
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                {service.description}
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                {service.highlights.map((tag) => (
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
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          custom={3}
          variants={fadeUpVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-4">Have a project in mind?</p>
          <Link
            href="#contact"
            className={cn(
              "inline-flex items-center gap-2 px-6 py-3 rounded-full",
              "bg-primary text-primary-foreground font-medium",
              "hover:bg-primary/90",
              "transition-colors duration-200",
            )}
          >
            Let&apos;s Discuss
            <ArrowUpRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
