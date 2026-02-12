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

export const CallToAction = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
      </div>

      <motion.div 
        className="container mx-auto max-w-4xl text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
          variants={itemVariants}
        >
          Do you have a project idea?
        </motion.h2>
        <motion.h3 
          className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white/90 mb-6"
          variants={itemVariants}
        >
          Let's discuss your project
        </motion.h3>
        <motion.p 
          className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
          variants={itemVariants}
        >
          As a developer, I'm highly interested in collaborating on projects.
          I'm a quick learner and a strong team player. I'm confident I can make
          a real difference in achieving the project goals. Let me know how we
          can move forward!
        </motion.p>
        <motion.div variants={itemVariants}>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-primary/50 group"
          >
            Let's work together
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};
