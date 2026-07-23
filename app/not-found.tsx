"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Code2 } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Blurred glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-xl mx-auto">
        {/* Big 404 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          className="mb-6"
        >
          <span className="text-[10rem] sm:text-[14rem] font-black leading-none select-none"
            style={{
              background: "linear-gradient(135deg, var(--primary) 0%, transparent 80%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              opacity: 0.25,
            }}
          >
            404
          </span>
        </motion.div>

        {/* Icon + heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center gap-4 -mt-20 mb-6"
        >
          <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary border border-primary/20">
            <Code2 size={28} />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            Page not found
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Looks like this route doesn&apos;t exist yet — but the rest of the portfolio does.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex gap-3 justify-center flex-wrap"
        >
          <Link href="/">
            <Button className="gap-2 shine-effect relative overflow-hidden">
              <ArrowLeft size={16} />
              Back to Portfolio
            </Button>
          </Link>
          <Link href="/#contact">
            <Button variant="outline">Get in Touch</Button>
          </Link>
        </motion.div>

        {/* Mono footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 font-mono text-xs text-muted-foreground/50"
        >
          error 404 · kanwer.dev
        </motion.p>
      </div>
    </div>
  );
}
