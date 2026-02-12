"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const ICONS_ROW1 = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
];
const ICONS_ROW2 = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
];

// Utility to repeat icons enough times
const repeatedIcons = (icons: string[], repeat = 4) =>
  Array.from({ length: repeat }).flatMap(() => icons);

export default function SkillsSection() {
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
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative w-full overflow-hidden py-18 md:py-24"
    >
      {/* Subtle bg gradient */}
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
            Technical Skills
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 tracking-tight">
            Technologies I work
            <br />
            <span className="text-primary italic">with every day</span>
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className=""
        >
          {/* Carousel */}
          <div className="mt-12 overflow-hidden relative pb-2">
            {/* Row 1 */}
            <div className="flex gap-10 whitespace-nowrap animate-scroll-left">
              {repeatedIcons(ICONS_ROW1, 4).map((icon, index) => (
                <div
                  key={index}
                  className="h-16 w-16 shrink-0 rounded-full bg-white dark:bg-gray-300 shadow-md flex items-center justify-center"
                >
                  <Image
                    key={index}
                    src={icon}
                    alt="skill"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Row 2 */}
            <div className="flex gap-10 whitespace-nowrap mt-6 animate-scroll-right">
              {repeatedIcons(ICONS_ROW2, 4).map((src, i) => (
                <div
                  key={i}
                  className="h-16 w-16 shrink-0 rounded-full bg-white dark:bg-gray-300 shadow-md flex items-center justify-center"
                >
                  <Image
                    src={src}
                    alt="icon"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Fade overlays */}
            <div className="absolute left-0 top-0 h-full w-24 bg-linear-to-r from-white dark:from-black to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 h-full w-24 bg-linear-to-l from-white dark:from-black to-transparent pointer-events-none" />
          </div>

          <style jsx>{`
            @keyframes scroll-left {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            @keyframes scroll-right {
              0% {
                transform: translateX(-50%);
              }
              100% {
                transform: translateX(0);
              }
            }
            .animate-scroll-left {
              animation: scroll-left 30s linear infinite;
            }
            .animate-scroll-right {
              animation: scroll-right 30s linear infinite;
            }
          `}</style>
        </motion.div>
      </div>
    </section>
  );
}
