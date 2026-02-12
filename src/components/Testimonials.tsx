import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useState } from "react";

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

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ntwali Isimbi Vieira",
    role: "Senior Backend Developer",
    company: "RCA",
    image: "https://ui-avatars.com/api/?name=Ntwali+Vieira&background=8b5cf6&color=fff&size=128",
    text: "Working with Yanis was an absolute pleasure. His technical skills and problem-solving abilities are exceptional. He delivered high-quality code and was always willing to go the extra mile."
  },
  {
    id: 2,
    name: "NIYOBYOSE Isaac Precieux",
    role: "CEO",
    company: "Tech4Impact",
    image: "https://ui-avatars.com/api/?name=Isaac+Precieux&background=8b5cf6&color=fff&size=128",
    text: "Yanis is a talented developer who brings creativity and technical expertise to every project. His attention to detail and commitment to excellence make him a valuable team member."
  },
  {
    id: 3,
    name: "KANEZA Amandine",
    role: "Co-Founder",
    company: "BlinkTechnologiz",
    image: "https://ui-avatars.com/api/?name=Kaneza+Amandine&background=8b5cf6&color=fff&size=128",
    text: "I highly recommend Yanis for any development project. He has a deep understanding of both frontend and backend technologies, and his work ethic is outstanding."
  }
];

export const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section id="testimonials" className="py-24 px-4 bg-gradient-to-b from-background via-purple-50/20 to-indigo-50/30 dark:from-background dark:via-purple-900/10 dark:to-indigo-900/10">
      <motion.div 
        className="container mx-auto max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
          variants={itemVariants}
        >
          What People <span className="text-primary">Say</span>
        </motion.h2>
        <motion.p 
          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Feedback from clients and colleagues I've worked with
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Testimonials */}
          <motion.div 
            className="space-y-6"
            variants={itemVariants}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className={`bg-card p-6 rounded-xl shadow-md border-l-4 transition-all duration-300 cursor-pointer ${
                  activeTestimonial === index
                    ? "border-primary shadow-xl scale-[1.02]"
                    : "border-transparent hover:border-primary/50"
                }`}
                onClick={() => setActiveTestimonial(index)}
                whileHover={{ x: 5 }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <Quote className="h-8 w-8 text-primary flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center gap-3">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full border-2 border-primary/30"
                      />
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role} at {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* GitHub Contribution Chart */}
          <motion.div 
            className="bg-card p-6 rounded-xl shadow-lg border border-border/30"
            variants={itemVariants}
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub Activity
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              My contribution activity over the past year
            </p>
            
            {/* GitHub Chart Embed */}
            <div className="relative w-full overflow-hidden rounded-lg bg-background/50 p-4">
              <img 
                src="https://ghchart.rshah.org/8b5cf6/ntwali-1" 
                alt="GitHub Contribution Chart"
                className="w-full h-auto"
                style={{ imageRendering: 'crisp-edges' }}
              />
            </div>

            {/* GitHub Stats */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-background/50 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-primary">800+</p>
                <p className="text-sm text-muted-foreground">Contributions</p>
              </div>
              <div className="bg-background/50 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-primary">40+</p>
                <p className="text-sm text-muted-foreground">Repositories</p>
              </div>
            </div>

            <a
              href="https://github.com/ntwali-1"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary/10 hover:bg-primary hover:text-white text-primary rounded-lg transition-all duration-300 hover:scale-105 font-medium"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View GitHub Profile
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
