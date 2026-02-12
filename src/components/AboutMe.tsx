import { Code, User, ShieldCheck, Cpu } from "lucide-react"
import { motion } from "framer-motion"

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

const AboutMe = () => {
  return (
    <section id="about" className="py-24 px-4 relative bg-gradient-to-b from-indigo-50/30 via-purple-50/20 to-background dark:from-indigo-900/10 dark:via-purple-900/10 dark:to-background">
      {" "}
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
          About <span className="text-primary">Me</span>
        </motion.h2>
        <motion.p 
          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Get to know more about my background, skills, and what drives me
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div className="space-y-6" variants={itemVariants}>
          <h3 className="text-2xl font-semibold">Who I Am ?</h3>
          <p className="text-muted-foreground">
            I'm a software programmer and embedded systems engineer with a passion for building reliable digital solutions. I specialize in both high-level application development and low-level hardware interaction.
          </p>
          <p className="text-muted-foreground">
            I enjoy solving real-world problems through code, whether it’s developing responsive web apps, working on embedded devices, or crafting secure systems with a user-first mindset.
          </p>
          <p className="text-muted-foreground">
            My technical journey is grounded in a strong foundation in mathematics and physics, which helps me reason clearly about logic, systems, and real-world problem solving. I also value clear communication—both in code and natural language—and believe language skills are essential for collaboration, documentation, and learning.
          </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#contact" 
                className="cosmic-button hover:scale-105 transition-transform duration-300 text-center"
              >
                Get In Touch
              </a>
              <a 
                href="" 
                className="px-6 py-3 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 font-medium text-center"
              >
                Download CV
              </a>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-4">
            <motion.div 
              className="gradient-border p-6 card-hover bg-card rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary"
              variants={itemVariants}
              whileHover={{ scale: 1.03, x: 5 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary"/>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web and Mobile Development</h4>
                  <p className="text-muted-foreground">
                    I build responsive and dynamic web and mobile applications using modern tools like React, Node.js, and TypeScript to deliver seamless user experiences.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="gradient-border p-6 card-hover bg-card rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary"
              variants={itemVariants}
              whileHover={{ scale: 1.03, x: 5 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <ShieldCheck className="h-6 w-6 text-primary"/>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">CyberSecurity and Networking</h4>
                  <p className="text-muted-foreground">
                    I incorporate fundamental security principles into my projects, from secure authentication flows to best practices for data handling and API protection.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="gradient-border p-6 card-hover bg-card rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary"
              variants={itemVariants}
              whileHover={{ scale: 1.03, x: 5 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Cpu className="h-6 w-6 text-primary"/>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Embedded Systems and Hardware</h4>
                  <p className="text-muted-foreground">
                    I work with microcontrollers and sensors to design and program embedded systems for real-time applications, often bridging software and hardware.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="gradient-border p-6 card-hover bg-card rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary"
              variants={itemVariants}
              whileHover={{ scale: 1.03, x: 5 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary"/>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
I aim to create intuitive and accessible interfaces by combining thoughtful design with user feedback, ensuring both form and function align.
</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default AboutMe
