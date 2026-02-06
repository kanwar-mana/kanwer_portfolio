"use client";

import { motion, useInView } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJs,
  faHtml5,
  faCss3Alt,
  faNodeJs,
  faPython,
  faDocker,
  faGit,
  faGithub,
  faFigma,
  faLinux,
  faAws,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBolt,
  faServer,
  faDatabase,
  faFire,
  faCloud,
  faPlug,
  faWandMagicSparkles,
  faCode,
  faTerminal,
  faRocket,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import {
  Monitor,
  Server,
  Database,
  Wrench,
  type LucideIcon,
} from "lucide-react";

type Skill = {
  name: string;
  icon: React.ReactNode;
};

type SkillCategory = {
  icon: LucideIcon;
  title: string;
  skills: Skill[];
};

const categories: SkillCategory[] = [
  {
    icon: Monitor,
    title: "Frontend",
    skills: [
      {
        name: "React",
        icon: <FontAwesomeIcon icon={faReact} className="text-[#61DAFB]" />,
      },
      {
        name: "Next.js",
        icon: <FontAwesomeIcon icon={faReact} className="text-foreground" />,
      },
      {
        name: "TypeScript",
        icon: <FontAwesomeIcon icon={faCode} className="text-[#3178C6]" />,
      },
      {
        name: "JavaScript",
        icon: <FontAwesomeIcon icon={faJs} className="text-[#F7DF1E]" />,
      },
      {
        name: "Tailwind CSS",
        icon: <FontAwesomeIcon icon={faWind} className="text-[#06B6D4]" />,
      },
      {
        name: "HTML5",
        icon: <FontAwesomeIcon icon={faHtml5} className="text-[#E34F26]" />,
      },
      {
        name: "CSS3",
        icon: <FontAwesomeIcon icon={faCss3Alt} className="text-[#1572B6]" />,
      },
      {
        name: "Framer Motion",
        icon: (
          <FontAwesomeIcon
            icon={faWandMagicSparkles}
            className="text-[#0055FF]"
          />
        ),
      },
    ],
  },
  {
    icon: Server,
    title: "Backend",
    skills: [
      {
        name: "Node.js",
        icon: <FontAwesomeIcon icon={faNodeJs} className="text-[#339933]" />,
      },
      {
        name: "Express",
        icon: (
          <FontAwesomeIcon icon={faServer} className="text-muted-foreground" />
        ),
      },
      {
        name: "Python",
        icon: <FontAwesomeIcon icon={faPython} className="text-[#3776AB]" />,
      },
      {
        name: "GraphQL",
        icon: <FontAwesomeIcon icon={faBolt} className="text-[#E10098]" />,
      },
      {
        name: "REST APIs",
        icon: <FontAwesomeIcon icon={faPlug} className="text-[#009688]" />,
      },
      {
        name: "Socket.io",
        icon: (
          <FontAwesomeIcon icon={faRocket} className="text-muted-foreground" />
        ),
      },
    ],
  },
  {
    icon: Database,
    title: "Database",
    skills: [
      {
        name: "PostgreSQL",
        icon: <FontAwesomeIcon icon={faDatabase} className="text-[#4169E1]" />,
      },
      {
        name: "MongoDB",
        icon: <FontAwesomeIcon icon={faDatabase} className="text-[#47A248]" />,
      },
      {
        name: "Redis",
        icon: <FontAwesomeIcon icon={faDatabase} className="text-[#DC382D]" />,
      },
      {
        name: "Firebase",
        icon: <FontAwesomeIcon icon={faFire} className="text-[#FFCA28]" />,
      },
      {
        name: "Supabase",
        icon: <FontAwesomeIcon icon={faBolt} className="text-[#3FCF8E]" />,
      },
      {
        name: "Prisma",
        icon: <FontAwesomeIcon icon={faDatabase} className="text-[#2D3748]" />,
      },
    ],
  },
  {
    icon: Wrench,
    title: "DevOps & Tools",
    skills: [
      {
        name: "Git",
        icon: <FontAwesomeIcon icon={faGit} className="text-[#F05032]" />,
      },
      {
        name: "GitHub",
        icon: <FontAwesomeIcon icon={faGithub} className="text-foreground" />,
      },
      {
        name: "Docker",
        icon: <FontAwesomeIcon icon={faDocker} className="text-[#2496ED]" />,
      },
      {
        name: "Vercel",
        icon: <FontAwesomeIcon icon={faCloud} className="text-foreground" />,
      },
      {
        name: "AWS",
        icon: <FontAwesomeIcon icon={faAws} className="text-[#FF9900]" />,
      },
      {
        name: "Figma",
        icon: <FontAwesomeIcon icon={faFigma} className="text-[#F24E1E]" />,
      },
      {
        name: "Linux",
        icon: <FontAwesomeIcon icon={faLinux} className="text-[#FCC624]" />,
      },
      {
        name: "VS Code",
        icon: <FontAwesomeIcon icon={faTerminal} className="text-[#007ACC]" />,
      },
    ],
  },
];

function SkillIcon({ name, icon, index }: Skill & { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay: index * 0.05,
        ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
      }}
      className="group/skill relative flex flex-col items-center"
    >
      <div
        className={cn(
          "relative flex items-center justify-center w-14 h-14 rounded-lg ",

          "hover:border-primary/40 hover:bg-primary/5 hover:scale-110",
          "transition-all duration-300 cursor-default",
        )}
      >
        <span className="text-2xl md:text-3xl">{icon}</span>

        {/* Tooltip */}
        <div
          className={cn(
            "absolute -bottom-9 left-1/2 -translate-x-1/2 z-10",
            "px-2.5 py-1 rounded-md text-xs font-medium whitespace-nowrap",
            "bg-foreground text-background",
            "opacity-0 scale-90 group-hover/skill:opacity-100 group-hover/skill:scale-100",
            "transition-all duration-200 pointer-events-none",
          )}
        >
          {name}
        </div>
      </div>
    </motion.div>
  );
}

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
      id="skills"
      ref={sectionRef}
      className="relative w-full overflow-hidden"
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

        {/* Category Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={cardVariant}
              className={cn(
                "group relative p-4 rounded-2xl border border-border hover:border-primary/40 hover:bg-primary/5",
                "transition-all duration-300",
              )}
            >
              {/* Card Header */}
              <div className="flex items-center gap-3 mb-8">
                <div
                  className={cn(
                    "inline-flex items-center justify-center w-10 h-10 rounded-xl",
                    "bg-primary/10 text-primary",
                    "group-hover:bg-primary group-hover:text-primary-foreground",
                    "transition-colors duration-300",
                  )}
                >
                  <cat.icon size={20} />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {cat.title}
                </h3>
              </div>

              {/* Skill Icons Grid */}
              <div className="flex flex-wrap gap-4 pb-4">
                {cat.skills.map((skill, i) => (
                  <SkillIcon key={skill.name} {...skill} index={i} />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
