import { useState } from "react";
import { cn } from "../lib/utils";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaDocker, FaPhp } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiExpress, SiLaravel, SiNestjs, SiSpringboot, SiPostman, SiArduino, SiMongodb, SiMysql, SiPostgresql } from "react-icons/si";
import { MdOutlineDescription, MdRecordVoiceOver, MdSearch, MdBrush } from "react-icons/md";

const skills = [
  // Frontend
   { name: "HTML", category: "frontend", icon: FaHtml5 },
  { name: "CSS", category: "frontend", icon: FaCss3Alt },
  { name: "React", category: "frontend", icon: FaReact },
  { name: "TypeScript", category: "frontend", icon: SiTypescript },
  { name: "Tailwind CSS", category: "frontend", icon: SiTailwindcss },
  { name: "Next.js", category: "frontend", icon: SiNextdotjs },

  // Backend
  { name: "Node.js", category: "backend", icon: FaNodeJs },
  { name: "Express", category: "backend", icon: SiExpress },
  { name: "PHP", category: "backend", icon: FaPhp },
  { name: "Laravel", category: "backend", icon: SiLaravel },
  { name: "NestJS", category: "backend", icon: SiNestjs },
  { name: "Spring Boot", category: "backend", icon: SiSpringboot },

  // Tools & Platforms I use
  { name: "Git", category: "tools", icon: FaGitAlt },
  { name: "GitHub", category: "tools", icon: FaGithub },
  { name: "Docker", category: "tools", icon: FaDocker },
  { name: "Postman", category: "tools", icon: SiPostman },

  // Hardware & Embedded
  { name: "Arduino", category: "hardware", icon: SiArduino },
  { name: "C for Microcontrollers", category: "hardware", icon: MdOutlineDescription },

  // Databases
  { name: "MongoDB", category: "database", icon: SiMongodb },
  { name: "MySQL", category: "database", icon: SiMysql },
  { name: "PostgreSQL", category: "database", icon: SiPostgresql },

  // Other
  { name: "Technical Writing", category: "other", icon: MdOutlineDescription },
  { name: "Public Speaking", category: "other", icon: MdRecordVoiceOver },
  { name: "Research & Documentation", category: "other", icon: MdSearch },
  { name: "Digital Arts", category: "other", icon: MdBrush },
];

const categories = [
  "all",
  "frontend",
  "backend",
  "tools",
  "hardware",
  "database",
  "other",
];

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div key={skill.name} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                <div className="text-left mb-4 flex items-center gap-3">
                  {Icon ? (
                    <span aria-hidden="true" className="text-2xl text-primary">
                      <Icon />
                    </span>
                  ) : null}
                  <h3 className="font-semibold text-lg">
                    <span className="sr-only">{skill.name} logo</span>
                    {skill.name}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
