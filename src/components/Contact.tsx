import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import { cn } from "../lib/utils";
import { useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

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

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast.success("Thank you for your message. I'll get back to you soon.");
      setIsSubmitting(false);
    }, 1500);
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-gradient-to-b from-purple-50/30 via-indigo-50/30 to-background dark:from-purple-900/10 dark:via-indigo-900/10 dark:to-background">
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
          Get In <span className="text-primary"> Touch</span>
        </motion.h2>

        <motion.p 
          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div className="space-y-8" variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Contact Information
            </h3>

            <div className="space-y-6 justify-center">
              <motion.div 
                className="flex items-start space-x-4"
                variants={itemVariants}
              >
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="mailto:hello@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    ntwaliyanis@gmail.com
                  </a>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-start space-x-4"
                variants={itemVariants}
              >
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Phone</h4>
                  <a
                    href="tel:+11234567890"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +250 791 096 846
                  </a>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-start space-x-4"
                variants={itemVariants}
              >
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Kanombe-Kigali-Rwanda
                  </a>
                </div>
              </motion.div>
            </div>

            <motion.div 
              className="pt-8"
              variants={itemVariants}
            >
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4">
                <motion.a 
                  href="#" 
                  target="_blank" 
                  className="p-3 rounded-full bg-card hover:bg-primary hover:text-white border border-border hover:border-primary transition-all duration-300 shadow-md"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin />
                </motion.a>
                <motion.a 
                  href="#" 
                  target="_blank" 
                  className="p-3 rounded-full bg-card hover:bg-primary hover:text-white border border-border hover:border-primary transition-all duration-300 shadow-md"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Twitter />
                </motion.a>
                <motion.a 
                  href="https://www.instagram.com/n.t.w.a.l.i_______/" 
                  target="_blank" 
                  className="p-3 rounded-full bg-card hover:bg-primary hover:text-white border border-border hover:border-primary transition-all duration-300 shadow-md"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Instagram />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="bg-card p-8 rounded-xl shadow-xl border border-border/30 hover:shadow-2xl transition-all duration-300"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="johndoe@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none transition-all duration-300"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
