"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Circle, Github, Twitter, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "./button";

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute hidden md:block", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-linear-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-primary/20",
            "shadow-[0_8px_32px_0_hsl(var(--primary)/0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.15),transparent_70%)]",
          )}
        />
      </motion.div>
    </motion.div>
  );
}

function HeroGeometric({
  badge = "Design Collective",
  title1 = "Elevate Your Digital Vision",
  title2 = "Crafting Exceptional Websites",
  title3 = "Full Stack Developer",
  description = "We are a team of passionate designers and developers dedicated to creating stunning, user-friendly websites that drive results. Our expertise spans across web design, development, and digital strategy, ensuring your online presence is both beautiful and effective.",
}: {
  badge?: string;
  title1?: string;
  title2?: string;
  title3?: string;
  description?: string;
}) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-transparent" />

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-primary/30"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />

        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-primary/30"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />

        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-primary/40"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />

        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-primary/40"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />

        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-primary/30"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />
      </div>

      <div className="relative flex justify-center items-center z-10 container mx-auto px-4 md:px-6">
        <div className="sm:text-center mx-auto">
          <Image
            src="/logo.png"
            alt="Kanwer Abdull Rahman - Full Stack Developer"
            width={100}
            height={50}
            className="mx-auto"
          />
          {/* <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="self-start mb-4 md:mb-2"
          >
            <span className="text-md text-white/60 tracking-wide">
              <DynamicText />
            </span>
          </motion.div> */}
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex self-start"
          >
            <span className="font-mono text-primary">Hello, I am</span>
          </motion.div>
          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl mb-2 md:mb-4 tracking-tighter">
              <span className="flex flex-wrap sm:justify-center items-center w-full  gap-3 font-bold">
                <span className="text-foreground">{title1}</span>
                <span className="bg-primary text-background px-2 rounded-md">
                  {title2}
                </span>
              </span>
              <span
                className={cn(
                  "text-primary italic text-3xl sm:text-4xl md:text-6xl font-semibold ",
                )}
              >
                {title3}
              </span>
            </h1>
          </motion.div>

          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed font-light sm:max-w-2xl mx-auto">
              {description}
            </p>
            <div className="flex gap-2 flex-start sm:justify-center sm:items-center">
              <Button size="lg" variant="outline">
                Resume
              </Button>
              <Button size="lg">Get in Touch</Button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-background/80 pointer-events-none" />

      {/* Social Links - Bottom Right */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="fixed hidden bottom-0 left-6 md:left-10 z-20 md:flex flex-col items-center gap-5"
      >
        <Link
          href="https://github.com/kanwar-mana"
          target="_blank"
          className="text-muted-foreground hover:text-primary transition-colors duration-200"
        >
          <Github size={26} />
        </Link>
        <Link
          href="https://wa.me/923184418693?text=Hi%20I%27m%20interested%20in%20your%20services."
          target="_blank"
          className="text-muted-foreground hover:text-primary transition-colors duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
            <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
          </svg>
        </Link>
        <Link
          href="https://twitter.com"
          target="_blank"
          className="text-muted-foreground hover:text-primary transition-colors duration-200"
        >
          <Twitter size={26} />
        </Link>
        <Link
          href="https://linkedin.com/in/kanwer-abdull-rahman"
          target="_blank"
          className="text-muted-foreground hover:text-primary transition-colors duration-200"
        >
          <Linkedin size={26} />
        </Link>
        <div className="w-0.5 h-18 bg-border mt-2" />
      </motion.div>
    </div>
  );
}

export { HeroGeometric };
