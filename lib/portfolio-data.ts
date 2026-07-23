/**
 * ============================================================
 *  PORTFOLIO DATA — Single Source of Truth
 *  Edit this file to update any content across the portfolio.
 * ============================================================
 */

import {
  Code2,
  Palette,
  Rocket,
  Sparkles,
  Globe,
  Smartphone,
  ShoppingCart,
  Search,
  LayoutDashboard,
  Paintbrush,
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

// ─────────────────────────────────────────────
// PERSONAL INFO
// ─────────────────────────────────────────────
export const personal = {
  /** Full name displayed in the hero and about section */
  firstName: "Kanwer Abdull",
  lastName: "Rahman",
  /** Short title shown in the hero */
  role: "Full Stack Developer",
  /** Used as the mailto link in the header */
  email: "kanwarabdullrahman@gmail.com",
  /** Displayed in the contact section */
  phone: "+92 305 4418833",
  /** Displayed in the contact section */
  location: "Pakistan",
  /** Path to the resume PDF in /public */
  resumeUrl: "/Kanwer_Abdull_Rahman_resume.pdf",
};

// ─────────────────────────────────────────────
// HERO SECTION
// ─────────────────────────────────────────────
export const hero = {
  badge: "Hello, I am",
  title1: personal.firstName,
  title2: personal.lastName,
  title3: personal.role,
  description:
    "Transform ideas into reality. My academic experience has provided me with a solid foundation in software principles, while also allowing me to dive into the latest advancements in Software Engineering and Web Development.",
};

// ─────────────────────────────────────────────
// NAVIGATION LINKS
// ─────────────────────────────────────────────
export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

// ─────────────────────────────────────────────
// ABOUT SECTION
// ─────────────────────────────────────────────
export const about = {
  paragraphs: [
    `I'm Kanwer Abdull Rahman, with hands-on experience in full-stack web development. I specialize in React.js, Next.js, and modern frontend technologies, with a proven track record of building scalable web applications and integrating payment systems.`,
    `From developing consultancy platforms and sports booking systems to architecting secure RESTful APIs, I'm passionate about creating user-centric solutions that drive technical innovation. I bring strong skills in state management, responsive design, and agile collaboration to every project.`,
  ],
  stats: [
    { label: "Years Experience", value: "1+" },
    { label: "Projects Completed", value: "5+" },
    { label: "Certifications", value: "4" },
    { label: "Technologies", value: "15+" },
  ],
  /** Capability cards shown on the right column of the about section */
  capabilities: [
    {
      icon: Code2,
      title: "Full Stack Development",
      description:
        "Building scalable web applications with React.js, Next.js, Node.js, Express.js, and MongoDB.",
    },
    {
      icon: Palette,
      title: "Modern UI Engineering",
      description:
        "Crafting pixel-perfect interfaces with Tailwind CSS, Shadcn UI, Radix UI, and Framer Motion.",
    },
    {
      icon: Rocket,
      title: "Payment & API Integration",
      description:
        "Integrating Stripe, PayPal gateways, Firebase services, and architecting secure RESTful APIs.",
    },
    {
      icon: Sparkles,
      title: "State & Auth Management",
      description:
        "Implementing complex state management with Redux Toolkit and secure authentication with JWT.",
    },
  ],
  /** Tech stack badges shown inside the about section */
  techStack: [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express.js",
    "Tailwind CSS",
    "Redux Toolkit",
    "MongoDB",
    "Firebase",
    "Git",
    "Vercel",
    "REST APIs",
    "Shadcn UI",
    "Framer Motion",
  ],
};

// ─────────────────────────────────────────────
// SKILLS SECTION — Scrolling icon rows
// ─────────────────────────────────────────────
export const skills = {
  row1: [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      alt: "React",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      alt: "Next.js",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      alt: "TypeScript",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      alt: "JavaScript",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      alt: "Redux",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      alt: "Tailwind CSS",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      alt: "HTML5",
    },
  ],
  row2: [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      alt: "Node.js",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      alt: "Express",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      alt: "Python",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      alt: "MongoDB",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg",
      alt: "Firebase",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      alt: "Git",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      alt: "GitHub",
    },
  ],
};

// ─────────────────────────────────────────────
// PROJECTS SECTION
// ─────────────────────────────────────────────
export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  /** If true, shown as a large featured card */
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "AcadPath (AI-Driven Platform for FYP Coordination)",
    description:
      "Developing a web application to automate the Final Year Project workflow for students and coordinators, with secure RESTful APIs, JWT authentication, and active session management across devices.",
    image: "/projects/fyp.png",
    tags: [
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "Express.js",
      "MongoDB",
      "JWT",
    ],
    liveUrl: "https://acadpath.app/",
    featured: true,
  },
  {
    title: "Console Vault (E-Commerce Platform for Gaming Tech)",
    description:
      "Built a full-stack e-commerce platform (Next.js, Prisma/PostgreSQL) with an admin dashboard for inventory and orders. Integrated PayFast with IPN webhook and signature validation for secure, automated order fulfillment. Automated inventory release, PDF invoicing, and email confirmations via cron jobs.",
    image: "/projects/console.png",
    tags: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      " Prisma ORM",
      "Tailwind CSS",
      "Next.js API Routes",
    ],
    liveUrl: "http://consolevault.co.za/",
    featured: true,
  },
  {
    title: "PrimeZoneC (Consultancy Web App)",
    description:
      "Built a consultancy platform for a Pakistan-based client using Next.js (TypeScript) and Firebase, with advanced university search, filtering, and pagination across 100+ institutions.",
    image: "/projects/prime.png",
    tags: [
      "Next.js",
      "TypeScript",
      "Firebase",
      "Redux Toolkit",
      "Tailwind CSS",
    ],
    liveUrl: "https://www.primezonec.com/",
    featured: true,
  },
  {
    title: "FitLynq (Sports Booking Platform)",
    description:
      "Engineered a full-stack booking platform with React 19 and Node.js where users discover courts, create lobbies, and book multiplayer sessions with role-based access for player and business accounts.",
    image: "/projects/fitlynq.png",
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "Stripe",
      "PayPal",
      "Role-Based Access",
    ],
    featured: true,
    liveUrl: "https://www.fitlynq.com/",
  },

  {
    title: "DevBeeZ Agency Site",
    description:
      "Built a modern marketing website using Next.js 13 App Router and TypeScript, featuring mobile-first responsive layouts, contact form integration, and an MDX blog powered by Contentlayer for SEO-friendly content.",
    image: "/projects/devbeez.png",
    tags: [
      "Next.js 13",
      "TypeScript",
      "Tailwind CSS",
      "MDX",
      "Contentlayer",
      "SEO",
    ],
    liveUrl: "https://dev-beez.vercel.app/",
  },
];

/** GitHub profile URL — used in the "View More on GitHub" CTA */
export const githubProfileUrl =
  "https://github.com/kanwar-mana?tab=repositories";

// ─────────────────────────────────────────────
// SERVICES SECTION
// ─────────────────────────────────────────────
export const services = [
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

// ─────────────────────────────────────────────
// TESTIMONIALS SECTION
// ─────────────────────────────────────────────
export type Testimonial = {
  name: string;
  role: string;
  company: string;
  /** URL to the avatar image, or empty string for initials fallback */
  avatar: string;
  content: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Inc.",
    avatar: "",
    content:
      "Working with this AI software expert was exactly what my project needed. I had an issue with my OpenAI API integration and frontend data submission, and it was resolved flawlessly. Even though it was a quick debugging task, the level of full-stack web development knowledge was obvious. Excellent communication, secure code handling, and immediate delivery. Highly recommended for any complex frontend or backend AI website development needs.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Product Manager",
    company: "InnovateLab",
    avatar: "",
    content:
      "Great developer with strong technical skills. Kanwer stayed committed throughout a complex custom e-commerce project, addressed multiple rounds of revisions professionally, and ensured the platform met my business requirements. Communication was good, he was responsive to feedback, and he worked hard to deliver a quality result. I appreciate his dedication and would recommend him for custom web development projects. ",
    rating: 5,
  },
  {
    name: "Mario",
    role: "Founder",
    company: "DesignFlow Studio",
    avatar: "",
    content:
      "OTTIMO PROFESSIONISTA FA' BENE IL SUO LAVORO NON CI SONO STATI PROBLEMI PER IL LAVORO CHE DOVEVA FARMI CONSEGNA RAPIDA QUINDI LO CONSIGLIO CONTATTATELO",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "CTO",
    company: "DataSync Solutions",
    avatar: "",
    content:
      "Great experience. I had a bug with my AI chatbot and this seller fixed it in record time. He was very honest about the project scope from the start, which I appreciated. He didn't just fix the connection error; he actually improved the security of my whole setup. If you need a dev who actually understands full-stack AI, this is your guy. 5 stars!",
    rating: 5,
  },
  {
    name: "Olivia Martinez",
    role: "Marketing Director",
    company: "GrowthPulse",
    avatar: "",
    content:
      "Great experience working with this genius developer. He is so expert and deliver more than my expectations in the system redesign and also faster than I thought. Highly recommended for anyone that needs solutions to his system. Looking forward for you to complete the second project I gave you",
    rating: 5,
  },
];

// ─────────────────────────────────────────────
// CONTACT SECTION — Info cards & social links
// ─────────────────────────────────────────────
export const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: personal.phone,
    href: `tel:${personal.phone.replace(/\s+/g, "")}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: personal.location,
    href: "#",
  },
];

export const socials = [
  { icon: Github, href: "https://github.com/kanwar-mana", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/kanwer-abdull-rahman/",
    label: "LinkedIn",
  },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];
