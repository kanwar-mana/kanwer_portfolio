"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "kanwarabdullrahman@gmail.com",
    href: "mailto:kanwarabdullrahman@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92 305 4418833",
    href: "tel:+923054418833",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Pakistan",
    href: "#",
  },
];

const socials = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

export default function ContactSection() {
  const initialFormData = {
    name: "",
    email: "",
    companyName: "",
    website: "",
    subject: "",
    message: "",
  };

  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState<string | null>(null);
  const sectionRef = useRef(null);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (submitting) return;

    setSubmitting(true);
    setStatus(null);

    const payload = {
      name: formData.name,
      email: formData.email,
      companyName: formData.companyName,
      website: formData.website,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData(initialFormData);
        return;
      }

      const errorPayload = await response.json().catch(() => null);
      const errorMessage =
        errorPayload?.error || "Failed to send message. Please try again.";
      setStatus(errorMessage);
    } catch {
      setStatus("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

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
      id="contact"
      ref={sectionRef}
      className="relative w-full py-18 md:py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/2 to-transparent pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          custom={0}
          variants={fadeUpVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16 md:mb-20"
        >
          <span className="font-mono text-primary text-sm tracking-wider uppercase">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 tracking-tight">
            Let&apos;s build something
            <br />
            <span className="text-primary italic">amazing together</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg leading-relaxed mt-4">
            Have a project in mind or just want to say hello? I&apos;d love to
            hear from you.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Left — Info */}
          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-2 space-y-8"
          >
            {/* Contact details */}
            <div className="space-y-5">
              {contactInfo.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "group flex items-start gap-4 p-4 rounded-xl",
                    "border border-border",
                    "hover:border-primary/30 hover:bg-primary/3",
                    "transition-all duration-300",
                  )}
                >
                  <div
                    className={cn(
                      "flex items-center justify-center w-10 h-10 rounded-xl shrink-0",
                      "bg-primary/10 text-primary",
                      "group-hover:bg-primary group-hover:text-primary-foreground",
                      "transition-colors duration-300",
                    )}
                  >
                    <item.icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">
                      {item.label}
                    </p>
                    <p className="text-sm font-medium text-foreground mt-0.5">
                      {item.value}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Socials */}
            <div>
              <p className="text-sm text-muted-foreground mb-3">Find me on</p>
              <div className="flex gap-3">
                {socials.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    aria-label={social.label}
                    className={cn(
                      "flex items-center justify-center w-10 h-10 rounded-xl",
                      "border border-border",
                      "text-muted-foreground",
                      "hover:border-primary/40 hover:text-primary hover:bg-primary/5",
                      "transition-all duration-200",
                    )}
                  >
                    <social.icon size={18} />
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className={cn(
                "p-6 md:p-8 rounded-2xl",
                "border border-border bg-card/30",
                "space-y-5",
              )}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Input
                  label="Name"
                  id="name"
                  placeholder="Your name"
                  className="bg-background/50"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
                <Input
                  label="Email"
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="bg-background/50"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />

                <Input
                  label="Company Name (Opt.)"
                  id="company-name"
                  placeholder="Your company name"
                  className="bg-background/50"
                  value={formData.companyName}
                  onChange={(e) =>
                    setFormData({ ...formData, companyName: e.target.value })
                  }
                />
                <Input
                  label="Website (Opt.)"
                  id="website"
                  placeholder="https://yourwebsite.com"
                  className="bg-background/50"
                  value={formData.website}
                  onChange={(e) =>
                    setFormData({ ...formData, website: e.target.value })
                  }
                />
              </div>

              <Input
                label="Subject"
                id="subject"
                placeholder="What's this about?"
                className="bg-background/50"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
              />

              <Textarea
                id="message"
                label="Message"
                placeholder="Tell me about your project..."
                rows={5}
                className="bg-background/50 resize-none"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
              />

              <Button
                type="submit"
                className="w-full gap-2 relative overflow-hidden"
                size="lg"
                disabled={
                  !formData.name ||
                  !formData.email ||
                  !formData.message ||
                  submitting
                }
              >
                {submitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </Button>
              {status && <p className="text-sm">{status}</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
