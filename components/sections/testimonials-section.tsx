"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { Quote, Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials, type Testimonial } from "@/lib/portfolio-data";



function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const initials = testimonial.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div
      className={cn(
        "flex flex-col h-full p-6 md:p-8 rounded-2xl",
        "border border-border bg-card/30",
        "hover:border-primary/30 hover:bg-primary/2",
        "transition-all duration-300",
      )}
    >
      {/* Quote Icon + Rating */}
      <div className="flex items-center justify-between mb-6">
        <Quote size={28} className="text-primary/30" />
        <div className="flex gap-0.5">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} size={14} className="fill-primary text-primary" />
          ))}
        </div>
      </div>

      {/* Content */}
      <p className="text-muted-foreground leading-relaxed flex-1 mb-6">
        &ldquo;{testimonial.content}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-border">
        <Avatar className="h-10 w-10">
          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
          <AvatarFallback className="bg-primary/10 text-primary text-sm font-semibold">
            {initials}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-semibold text-foreground">
            {testimonial.name}
          </p>
          <p className="text-xs text-muted-foreground">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
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

  return (
    <section
      id="testimonials"
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
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 tracking-tight">
              What clients say
              <br />
              <span className="text-primary italic">about my work</span>
            </h2>
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <p className="text-muted-foreground max-w-md text-lg leading-relaxed">
              Real feedback from people I&apos;ve had the pleasure of working
              with.
            </p>
          </motion.div>
        </div>

        {/* Carousel */}
        <motion.div
          custom={2}
          variants={fadeUpVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.name}
                  className="pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <TestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-2 mt-10">
              <CarouselPrevious
                className={cn(
                  "static translate-y-0",
                  "border-border hover:border-primary hover:bg-primary hover:text-primary-foreground",
                  "transition-colors duration-200",
                )}
              />
              <CarouselNext
                className={cn(
                  "static translate-y-0",
                  "border-border hover:border-primary hover:bg-primary hover:text-primary-foreground",
                  "transition-colors duration-200",
                )}
              />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
