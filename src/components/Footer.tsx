import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-gradient-to-t from-card via-indigo-50/20 to-background dark:from-card dark:via-indigo-900/10 dark:to-background relative border-t border-border mt-12 pt-8">
      <div className="container mx-auto max-w-5xl flex flex-wrap justify-between items-center gap-4">
        <motion.p 
          className="text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          &copy; {new Date().getFullYear()} Yanis Ntwali. All rights reserved.
        </motion.p>
        <motion.a
          href="#hero"
          className="p-3 rounded-full bg-primary/10 hover:bg-primary hover:text-white text-primary transition-all duration-300 hover:scale-110 shadow-md"
          whileHover={{ scale: 1.1, rotate: 360 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          <ArrowUp size={20} />
        </motion.a>
      </div>
    </footer>
  );
};
