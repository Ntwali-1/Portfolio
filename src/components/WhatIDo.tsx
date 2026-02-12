import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
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

interface Service {
  title: string;
  description: string;
  id: number;
}

const servicesData: Service[] = [
  {
    title: "Web Development",
    description:
      "I specialize in designing intuitive user interfaces that bring websites and applications to life. My focus is on creating visually stunning, responsive, and interactive experiences that captivate users across all devices.",
    id: 1,
  },
  {
    title: "Backend Development",
    description:
      "I build the brains behind websites and apps. My back-end development expertise ensures smooth functionality, data security, and seamless communication between users and servers.",
    id: 2,
  },
  {
    title: "Mobile Development",
    description:
      "I turn ideas into native mobile apps! With my expertise, I can craft user-friendly and engaging experiences for smartphones and tablets.",
    id: 3,
  },
  {
    title: "Embedded Systems",
    description:
      "I work with microcontrollers and sensors to design and program embedded systems for real-time applications, bridging the gap between software and hardware.",
    id: 4,
  },
];

export const WhatIDo = () => {
  const [activeService, setActiveService] = useState<number>(1);

  return (
    <section id="services" className="py-24 px-4 bg-gradient-to-b from-background via-indigo-50/30 to-purple-50/20 dark:from-background dark:via-indigo-900/10 dark:to-purple-900/10">
      <motion.div 
        className="container mx-auto max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Left side - Title and description */}
          <motion.div 
            className="flex-1 flex flex-col justify-center"
            variants={itemVariants}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What I <span className="text-primary">Do?</span>
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-8 md:pr-8">
              I turn ideas into awesome apps and websites! I design the
              user-friendly interfaces you see (the front-end), build the brain
              behind the scenes (the back-end), and can even create mobile apps
              for your phone or tablet. I also work with embedded systems to bring
              hardware and software together seamlessly.
            </p>
            <a
              href="#contact"
              className="cosmic-button inline-flex items-center gap-2 w-fit hover:scale-105 transition-transform duration-300 group"
            >
              Say Hello!
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Right side - Service cards */}
          <div className="flex-1 flex flex-col gap-6">
            {servicesData.map((service) => (
              <ServiceCard
                key={service.id}
                {...service}
                isActive={activeService === service.id}
                onHover={() => setActiveService(service.id)}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

interface ServiceCardProps extends Service {
  isActive: boolean;
  onHover: () => void;
}

const ServiceCard = ({ title, description, isActive, onHover }: ServiceCardProps) => {
  return (
    <motion.div
      className={`bg-card border-l-4 px-6 py-4 rounded-lg shadow-md transition-all duration-300 cursor-pointer ${
        isActive
          ? "border-primary shadow-xl shadow-primary/10 scale-[1.02]"
          : "border-transparent hover:border-primary/50"
      }`}
      whileHover={{ scale: 1.02, x: 5 }}
      onMouseEnter={onHover}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h3 className={`text-lg font-bold mb-2 transition-colors duration-300 ${
        isActive ? "text-primary" : "text-foreground"
      }`}>
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};
