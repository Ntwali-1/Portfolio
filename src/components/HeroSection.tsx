import { ArrowDown } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useRef } from "react"
import Typed from "typed.js"

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

const HeroSection = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Web Development",
        "Mobile Development",
        "Embedded Systems",
        "Cybersecurity",
        "Hardware Integration"
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: "|"
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-br from-background via-indigo-50/30 to-purple-50/20 dark:from-background dark:via-indigo-900/10 dark:to-purple-900/10">
      <motion.div 
        className="container max-w-6xl mx-auto z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <motion.div 
              className="mb-6"
              variants={itemVariants}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
              variants={itemVariants}
            >
              <span className="block mb-2">Hey there! I'm</span>
              <span className="text-primary block">Yanis Ntwali</span>
            </motion.h1>

            <motion.div 
              className="flex items-center justify-center lg:justify-start gap-3 mb-8 text-xl md:text-2xl font-semibold min-h-[40px]"
              variants={itemVariants}
            >
              <span className="text-foreground/80">I specialize in</span>
              <span ref={typedRef} className="text-primary"></span>
            </motion.div>

            <motion.p 
              className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              I'm a software programmer, embedded systems and cybersecurity engineer with a focus on building efficient, reliable solutions—from web applications to low-level hardware integration. I enjoy working at the intersection of code and electronics to solve real-world problems.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
              variants={itemVariants}
            >
              <a 
                href="#projects" 
                className="cosmic-button hover:scale-105 transition-transform duration-300 group"
              >
                View My Work
                <ArrowDown className="inline-block ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </a>
              <a 
                href="/cv.pdf" 
                target="_blank"
                download
                className="px-6 py-3 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 font-medium"
              >
                Download CV
              </a>
              <a 
                href="/resume.pdf" 
                target="_blank"
                download
                className="px-6 py-3 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 font-medium"
              >
                Resume
              </a>
            </motion.div>
          </div>

          {/* Image Section */}
          <motion.div 
            className="flex-1 flex items-center justify-center order-1 lg:order-2"
            variants={itemVariants}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Main circular image */}
              <motion.div 
                className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 border-4 border-primary/30 overflow-hidden shadow-2xl shadow-primary/20"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src="/profile.jpg" 
                  alt="Yanis Ntwali" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Floating code icon badge */}
              <motion.div 
                className="absolute bottom-4 right-4 w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary shadow-lg shadow-primary/50 flex items-center justify-center border-4 border-background"
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2,
                  ease: "easeInOut"
                }}
                whileHover={{ scale: 1.1, rotate: 360 }}
              >
                <svg 
                  className="w-8 h-8 md:w-10 md:h-10 text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" 
                  />
                </svg>
              </motion.div>

              {/* Decorative circles */}
              <motion.div 
                className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-primary/10 blur-xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 3 }}
              />
              <motion.div 
                className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-purple-500/10 blur-xl"
                animate={{ scale: [1.2, 1, 1.2] }}
                transition={{ repeat: Infinity, duration: 3 }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        whileHover={{ scale: 1.1 }}
      >
        <span className="text-sm text-muted-foreground mb-2">Scroll Down</span>
        <ArrowDown className="h-5 w-5 text-primary"/>
      </motion.div>
    </section>
  )
}

export default HeroSection
