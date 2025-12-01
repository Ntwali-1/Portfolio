import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AirVolt",
    description: "An energy management system for smart homes",
    image: "/image 2.png",
    tags: ["Blender","Arduino"],
    demoUrl: "#",
    githubUrl: "https://github.com/Ntwali-1/AirVolt",
  },
  
  {
    id: 2,
    title: "E-learning Platform",
    description:
      "Full-featured e-learning platform with user authentication and course management.",
    image: "/image.png",
    tags: ["Next.js", "TailwindCSS", "SQL", "TypeScript"],
    demoUrl: "#",
    githubUrl: "https://github.com/Ntwali-1/TOTC.git",
  },

  {
    id: 3,
    title: "La Formular",
    description: "La Formular is a web platform for a tech company that offers a variety of big services.",
    image: "/laformular.png",
    tags: ["Next.js", "TailwindCSS", "TypeScript"],
    demoUrl: "https://laformular.vercel.app/",
    githubUrl: "https://github.com/Ntwali-1/LaFormula"
  },

  {
    id: 4,
    title: "ShelfWise",
    description: "A backend system for store management that manages products, orders, inventory, and users with secure API endpoints and database optimization.",
    image:"/shelfwise.png",
    tags: ["NestJS", "PostgreSQL", "Prisma", "TypeScript"],
    demoUrl: "#",
    githubUrl: "https://github.com/Ntwali-1/ShelfWise"
  },

  {
    id: 5,
    title: "Borrowly",
    description:"Borrowly is a comprehensive, backend web application designed to facilitate secure peer-to-peer lending. It enables users to seamlessly request, offer, and manage loans for both money and physical items.",
    image:"/borrowly.png",
    tags: ["Spring Boot", "PostgreSQL", "Docker", "Java"],
    demoUrl: "#",
    githubUrl:"https://github.com/Ntwali-1/Borrowly"
  },

  {
    id: 6,
    title: "LegitRides",
    description: "LegitRides is a revolutionary ride-sharing platform that introduces the world’s first mutual trip exchange system alongside comprehensive dispute resolution mechanisms through appeals.",
    image:"/legitrides.png",
    tags: ["NodeJs", "MongoDB", "JavaScript"],
    demoUrl: "#",
    githubUrl:"https://github.com/Ntwali-1/LegitRides",
  },

  {
    id: 7,
    title: "TerraFund",
    description: "TerraFund is a backend web platform for bridging landowners and agricultural investors. Features include land listing management, investment proposals, real-time chat, and a verification layer. ",
    image:"/terrafund.png",
    tags: ["Spring Boot", "PostgreSQL", "Java"],
    demoUrl: "#",
    githubUrl:"https://github.com/TerraFund/TerraFund-Backend"
  }

];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Ntwali-1"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
