"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  X,
  Mail,
  ArrowRightCircleIcon,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "./ui/button";
import ThemeToggle from "./theme-toggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Header({
  email = "kanwarabdullrahman@gmail.com",
}: {
  email: string;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-linear-to-b from-muted-foreground/10 to-transparent backdrop-blur-xl  `}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex gap-8">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 w-30 md:w-45">
              <Image
                src="/logo-dark.svg"
                alt="Logo"
                width={mobileOpen ? 100 : 180}
                height={mobileOpen ? 40 : 50}
                priority
                className="hidden dark:block"
              />

              <Image
                src="/logo-light.svg"
                alt="Logo"
                width={mobileOpen ? 100 : 180}
                height={mobileOpen ? 40 : 50}
                priority
                className="dark:hidden"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="sticky hidden lg:flex items-center gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm flex justify-center font-semibold  items-center py-2 px-3 rounded-full text-muted-foreground hover:text-background hover:bg-primary  transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center items-center gap-4">
            <a target="_blank" href={`mailto:${email}`}>
              <Mail className="size-5" />
            </a>
            <ThemeToggle />
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="/Kanwer_Abdull_Rahman_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline">Resume</Button>
              </a>
              <Link href="#contact">
                <Button className={cn("shine-effect relative overflow-hidden")}>
                  Start Project
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden hover:text-primary transition-colors duration-300 p-0!"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="size-5" />
              ) : (
                <Menu className="size-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="lg:hidden py-4 p-4 rounded-xl bg-muted-foreground/20 backdrop-blur-xl">
            <div className="flex flex-col gap-4 rounded-lg">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex justify-between text-sm font-semibold  transition-colors duration-200"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="size-4" />
                </Link>
              ))}
              <div className="flex w-full gap-4">
                <a
                  href="/Kanwer_Abdull_Rahman_resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                >
                  <Button variant="outline" className="w-full bg-transparent">
                    Resume
                  </Button>
                </a>
                <Link
                  href="#contact"
                  className="w-full"
                  onClick={() => setMobileOpen(false)}
                >
                  <Button className="w-full">Get in Touch</Button>
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
