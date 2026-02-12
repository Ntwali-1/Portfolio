import { useState } from "react";
import { cn } from "../lib/utils";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub, FaDocker, FaPhp, FaPython, FaMicrochip } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiExpress, SiLaravel, SiNestjs, SiSpringboot, SiPostman, SiArduino, SiMongodb, SiMysql, SiPostgresql, SiExpo, SiGithubactions, SiRaspberrypi } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { motion } from "framer-motion";

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

  // Tools & Platforms
  { name: "GitHub", category: "tools", icon: FaGithub },
  { name: "GitHub Actions", category: "tools", icon: SiGithubactions },
  { name: "Docker", category: "tools", icon: FaDocker },
  { name: "Postman", category: "tools", icon: SiPostman },

  // Hardware & Embedded
  { name: "Arduino", category: "hardware", icon: SiArduino },
  { name: "MicroPython", category: "hardware", icon: FaPython },
  { name: "Raspberry Pi", category: "hardware", icon: SiRaspberrypi },
  { name: "ESP32/ESP8266", category: "hardware", icon: FaMicrochip },

  // Databases
  { name: "MongoDB", category: "database", icon: SiMongodb },
  { name: "MySQL", category: "database", icon: SiMysql },
  { name: "PostgreSQL", category: "database", icon: SiPostgresql },

  // Mobile Development
  { name: "React Native", category: "mobile", icon: TbBrandReactNative },
  { name: "Expo", category: "mobile", icon: SiExpo },
];

const categories = [
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "mobile", label: "Mobile Dev" },
  { id: "tools", label: "Tools" },
  { id: "hardware", label: "Hardware" },
  { id: "database", label: "Database" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const filteredSkills = skills.filter(
    (skill) => skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-gradient-to-b from-background via-indigo-50/30 to-purple-50/20 dark:from-background dark:via-indigo-900/10 dark:to-purple-900/10">
      <motion.div 
        className="container mx-auto max-w-5xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
          variants={itemVariants}
        >
          Tech <span className="text-primary">Stack</span>
        </motion.h2>
        <motion.p 
          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Technologies and tools I work with to bring ideas to life
        </motion.p>

        {/* Category Navigation */}
        <motion.div 
          className="flex justify-center mb-12"
          variants={itemVariants}
        >
          <div className="inline-flex gap-2 p-2 bg-card rounded-lg shadow-md border border-border/30">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "px-4 md:px-6 py-2 rounded-md transition-all duration-300 text-sm md:text-base font-medium",
                  activeCategory === category.id
                    ? "bg-primary text-white shadow-lg"
                    : "text-foreground hover:bg-primary/10"
                )}
              >
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {filteredSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                className="flex flex-col items-center gap-3"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <motion.div 
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-card border border-border/30 flex items-center justify-center shadow-md hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  {Icon && (
                    <Icon className="text-4xl md:text-5xl text-primary" />
                  )}
                </motion.div>
                <p className="font-semibold text-sm md:text-base text-center max-w-[100px]">
                  {skill.name}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};
