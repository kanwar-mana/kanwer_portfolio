//  PORTFOLIO DATA — Single Source of Truth

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

// PERSONAL INFO

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
  resumeUrl: "/rahman-resume.pdf",
};

// HERO SECTION

export const hero = {
  badge: "Hello, I am",
  title1: personal.firstName,
  title2: personal.lastName,
  title3: personal.role,
  description:
    "Transform ideas into reality. My academic experience has provided me with a solid foundation in software principles, while also allowing me to dive into the latest advancements in Software Engineering and Web Development.",
};

// NAVIGATION LINKS

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

// ABOUT SECTION

export const about = {
  paragraphs: [
    `I'm Kanwer Abdull Rahman, a Full Stack Developer with hands-on experience delivering production-grade web applications for clients across Pakistan and South Africa. I specialize in Next.js, React, TypeScript, and Node.js, building everything from AI-driven coordination platforms to secure e-commerce systems with automated payment flows.`,
    `I've integrated payment gateways including Stripe, PayPal, and PayFast (with IPN webhook & signature validation), built role-based booking platforms, and architected RESTful APIs secured with JWT. Whether it's a SaaS dashboard, a consultancy platform, or an admin system with PDF invoicing and cron job automation, I bring the full stack to the finish line.`,
  ],
  stats: [
    { label: "Years Experience", value: "1+" },
    { label: "Projects Completed", value: "6+" },
    { label: "Certifications", value: "4" },
    { label: "Technologies", value: "18+" },
  ],
  /** Capability cards shown on the right column of the about section */
  capabilities: [
    {
      icon: Code2,
      title: "Full Stack Development",
      description:
        "Building production-ready apps with Next.js, React, Node.js, Express.js, MongoDB, and PostgreSQL (Prisma ORM).",
    },
    {
      icon: Rocket,
      title: "Payment & API Integration",
      description:
        "Integrating Stripe, PayPal, and PayFast (IPN webhooks) with automated order fulfillment, PDF invoicing, and cron job automation.",
    },
    {
      icon: Palette,
      title: "Modern UI Engineering",
      description:
        "Crafting pixel-perfect interfaces with Tailwind CSS, Shadcn UI, Radix UI, and Framer Motion, mobile-first and fully responsive.",
    },
    {
      icon: Sparkles,
      title: "AI & Auth Systems",
      description:
        "Integrating AI-driven workflows and implementing secure session management with JWT, Redux Toolkit, and role-based access control.",
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
    "PostgreSQL",
    "Prisma ORM",
    "Firebase",
    "Stripe",
    "PayFast",
    "Git",
    "Vercel",
    "REST APIs",
    "JWT",
    "Shadcn UI",
    "Framer Motion",
  ],
};

// SKILLS SECTION — Scrolling icon rows

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

// PROJECTS SECTION

export type CaseStudy = {
  problem: string;
  solution: string;
  result: string;
};

export type Project = {
  title: string;
  slug: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  caseStudy?: CaseStudy;
};

export const projects: Project[] = [
  {
    slug: "acadpath",
    title: "AcadPath",
    description:
      "A web application that automates the Final Year Project workflow for students and coordinators, with secure RESTful APIs, JWT authentication, and active session management across devices.",
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
    caseStudy: {
      problem:
        "Universities managing Final Year Projects relied on fragmented spreadsheets, email chains, and manual supervisor allocations. Students had no visibility into approval status, and coordinators spent hours chasing updates across departments.",
      solution:
        "Built a full-stack platform with Next.js and Express.js that centralises the entire FYP lifecycle. Role-based access (student / supervisor / coordinator) enforces clear workflows. JWT-secured APIs handle proposal submissions, supervisor assignments, and milestone tracking. Redux Toolkit keeps UI state in sync across tabs and devices without stale data.",
      result:
        "Eliminated manual coordination overhead for 3 user roles. Real-time session management ensures coordinators always see live project status. The platform now serves as the single source of truth for all FYP activity, replacing ad-hoc email threads entirely.",
    },
  },
  {
    slug: "console-vault",
    title: "Console Vault",
    description:
      "A full-stack e-commerce platform for gaming tech with an admin dashboard, PayFast payment integration (IPN webhooks), automated inventory management, PDF invoicing, and cron job-based order fulfillment.",
    image: "/projects/console.png",
    tags: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma ORM",
      "Tailwind CSS",
      "Next.js API Routes",
    ],
    liveUrl: "http://consolevault.co.za/",
    featured: true,
    caseStudy: {
      problem:
        "The client needed a South African gaming e-commerce store with a local payment gateway (PayFast), but existing solutions lacked the custom admin tooling required to manage gaming console inventory, track orders, and automate invoicing without manual intervention.",
      solution:
        "Built the entire platform with Next.js App Router and PostgreSQL via Prisma ORM. Integrated PayFast with IPN webhook validation and cryptographic signature checking to ensure only legitimate payment events trigger order fulfillment. Cron jobs automatically release inventory on failed payments, generate PDF invoices, and send email confirmations — zero manual steps post-purchase.",
      result:
        "The client launched with a fully automated order pipeline. Payment failures are handled gracefully with inventory auto-release. Admins manage stock, orders, and customers from a single dashboard. PDF invoices are emailed within seconds of a confirmed payment.",
    },
  },
  {
    slug: "primezonec",
    title: "PrimeZoneC",
    description:
      "A consultancy platform for a Pakistan-based client using Next.js (TypeScript) and Firebase, with advanced university search, filtering, and pagination across 100+ institutions.",
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
    caseStudy: {
      problem:
        "A Pakistani education consultancy was manually guiding students through university selection using WhatsApp and static PDFs. With 100+ institutions across multiple countries, there was no searchable, filterable database — students had to wait hours for a consultant to respond with options.",
      solution:
        "Designed and built a consultancy portal with Next.js and Firebase where students can search, filter by country/program/fee range, and paginate through 100+ institutions in real time. Redux Toolkit manages filter state so users can refine searches without page reloads. Firebase handles authentication and data persistence with near-zero latency.",
      result:
        "Students can now self-serve their university shortlist in minutes instead of waiting for consultant replies. The platform reduced consultant workload significantly and improved lead quality since users arrive at consultations with pre-selected options.",
    },
  },
  {
    slug: "fitlynq",
    title: "FitLynq",
    description:
      "A full-stack sports booking platform where users discover courts, create lobbies, and book multiplayer sessions with role-based access for player and business accounts.",
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
    caseStudy: {
      problem:
        "Sports facility owners had no digital way to list their courts and manage bookings. Players wanting to organise group sessions had to coordinate through WhatsApp groups, often resulting in double-bookings, no-shows, and payment disputes.",
      solution:
        "Built a dual-role platform with React 19 and Node.js/Express. Business accounts list facilities and set availability; player accounts discover courts, create lobbies, and invite others. Stripe and PayPal handle payments with webhook-verified confirmations. Role-based middleware on the API ensures players cannot modify business-owned data and vice versa.",
      result:
        "Facility owners get a live booking dashboard with payment history. Players can find available courts, split costs, and book in under 2 minutes. The lobby system turned group bookings from a coordination nightmare into a one-click flow.",
    },
  },
  {
    slug: "devbeez",
    title: "DevBeeZ Agency Site",
    description:
      "A modern agency marketing website with Next.js 13 App Router, mobile-first layouts, contact form integration, and an MDX blog powered by Contentlayer for SEO-friendly content.",
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
    caseStudy: {
      problem:
        "The agency had no web presence to showcase services or attract inbound leads. They needed a site that ranked on Google, communicated their offering clearly, and let them publish blog content without a CMS subscription.",
      solution:
        "Built with Next.js 13 App Router for server-side rendering and optimal Core Web Vitals. MDX + Contentlayer lets the team write blog posts in Markdown with React components — no CMS needed. Contact form routes through a Next.js API handler with email delivery. Every page has hand-crafted meta tags, structured data, and semantic HTML.",
      result:
        "The site achieved a Lighthouse score of 98+ on performance and 100 on SEO. The blog enables the team to publish thought leadership content independently. Inbound leads via the contact form started arriving within weeks of launch.",
    },
  },
];

/** GitHub profile URL — used in the "View More on GitHub" CTA */
export const githubProfileUrl =
  "https://github.com/kanwar-mana?tab=repositories";

// SERVICES SECTION

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

// TESTIMONIALS SECTION

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

// CONTACT SECTION — Info cards & social links

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
