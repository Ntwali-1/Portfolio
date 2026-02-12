import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const projects = [
  
  {
    id: 3,
    title: "La Formular",
    description: "La Formular is a web platform for a tech company that offers a variety of big services.",
    image: "/laformular.png",
    images: ["/laformular.png"],
    tags: ["Next.js", "TailwindCSS", "TypeScript"],
    demoUrl: "https://laformular.vercel.app/",
    githubUrl: "https://github.com/Ntwali-1/LaFormula",
    category: "Web"
  },
  
  {
    id: 2,
    title: "Solvify",
    description:
      "Full-featured e-learning platform with user authentication and course management.",
    image: "/image.png",
    images: ["/image.png"],
    tags: ["Next.js", "TailwindCSS", "SQL", "TypeScript"],
    demoUrl: "#",
    githubUrl: "https://github.com/Ntwali-1/Solvify",
    category: "Web"
  },
  
  {
    id: 5,
    title: "Borrowly",
    description:"Borrowly is a comprehensive, backend web application designed to facilitate secure peer-to-peer lending. It enables users to seamlessly request, offer, and manage loans for both money and physical items.",
    image:"https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop"],
    tags: ["Spring Boot", "PostgreSQL", "Docker", "Java"],
    demoUrl: "#",
    githubUrl:"https://github.com/Ntwali-1/Borrowly",
    category: "Backend"
  },

  {
    id: 4,
    title: "ShelfWise",
    description: "A backend system for store management that manages products, orders, inventory, and users with secure API endpoints and database optimization.",
    image:"https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop"],
    tags: ["NestJS", "PostgreSQL", "Prisma", "TypeScript"],
    demoUrl: "#",
    githubUrl: "https://github.com/Ntwali-1/ShelfWise",
    category: "Backend"
  },

  {
    id: 7,
    title: "TerraFund",
    description: "TerraFund is a backend web platform for bridging landowners and agricultural investors. Features include land listing management, investment proposals, real-time chat, and a verification layer. ",
    image:"https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&h=600&fit=crop"
    ],
    tags: ["Spring Boot", "PostgreSQL", "Java"],
    demoUrl: "#",
    githubUrl:"https://github.com/ntwali-1/microservices-springboot",
    category: "Backend"
  },

  {
    id: 6,
    title: "LegitRides",
    description: "LegitRides is a revolutionary ride-sharing platform that introduces the world's first mutual trip exchange system alongside comprehensive dispute resolution mechanisms through appeals.",
    image:"https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop"],
    tags: ["NodeJs", "MongoDB", "JavaScript"],
    demoUrl: "#",
    githubUrl:"https://github.com/Ntwali-1/LegitRides",
    category: "Backend"
  },

  {
    id: 10,
    title: "TerraFund Mobile",
    description: "Mobile application for TerraFund - connecting landowners with agricultural investors on the go. Features include land browsing, investment tracking, and real-time notifications.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop"
    ],
    tags: ["React Native", "Expo", "Firebase"],
    demoUrl: "#",
    githubUrl: "https://github.com/ntwali-1/terrafund-mobile-v2",
    category: "Mobile"
  },
    
  {
    id: 9,
    title: "WasteNet",
    description: "An intelligent waste management system that connects waste generators with recyclers, featuring real-time tracking, route optimization, and environmental impact analytics.",
    image: "/wastenet1.png",
    images: ["/wastenet1.png", "/wastenet2.png"],
    tags: ["React", "Node.js", "MongoDB", "Maps API"],
    demoUrl: "#",
    githubUrl: "https://github.com/Ntwali-1/WasteNet",
    category: "Full Stack"
  },
];

const categories = [
  { id: "Backend", label: "Backend & APIs" },
  { id: "Mobile", label: "Mobile" },
  { id: "Full Stack", label: "Full Stack" },
  { id: "Web", label: "Web" },
];

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
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      type: "spring" as const,
      stiffness: 100
    }
  }
};

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("Web");

  const filteredProjects = projects.filter(
    (project) => project.category === activeCategory
  );

  return (
    <section id="projects" className="py-24 px-4 relative bg-gradient-to-b from-indigo-50/30 to-background dark:from-indigo-900/10 dark:to-background">
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
          Featured <span className="text-primary"> Projects </span>
        </motion.h2>

        <motion.p 
          className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
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
                className={`px-4 md:px-6 py-2 rounded-md transition-all duration-300 text-sm md:text-base font-medium ${
                  activeCategory === category.id
                    ? "bg-primary text-white shadow-lg"
                    : "text-foreground hover:bg-primary/10"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, key) => (
            <ProjectCard key={project.id} project={project} index={key} />
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          variants={itemVariants}
        >
          <a
            className="cosmic-button inline-flex items-center gap-2 hover:scale-105 transition-transform duration-300 group"
            target="_blank"
            href="https://github.com/Ntwali-1"
          >
            View More on GitHub 
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

// Separate ProjectCard component with carousel logic
const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (project.images && project.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
      }, 3000); // Switch every 3 seconds

      return () => clearInterval(interval);
    }
  }, [project.images]);

  return (
    <motion.div
      className="group relative bg-card rounded-xl overflow-hidden shadow-lg border border-border/30 hover:shadow-2xl transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}
      whileHover={{ y: -15, scale: 1.02, rotate: 1 }}
    >
      <div className="h-48 overflow-hidden relative">
        {project.images && project.images.length > 1 ? (
          // Automatic carousel for multiple images
          <div className="relative w-full h-full">
            {project.images.map((img: string, idx: number) => (
              <img
                key={idx}
                src={img}
                alt={`${project.title} ${idx + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                  idx === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        ) : (
          // Single image layout
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        )}
        {/* Overlay with buttons on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-10">
          <a
            href={project.demoUrl}
            target="_blank"
            className="p-3 rounded-full bg-white/90 hover:bg-white text-primary transition-all duration-300 hover:scale-110 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink size={20} />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            className="p-3 rounded-full bg-white/90 hover:bg-white text-primary transition-all duration-300 hover:scale-110 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <Github size={20} />
          </a>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300"> 
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag: string, idx: number) => (
            <span 
              key={idx}
              className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors duration-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
