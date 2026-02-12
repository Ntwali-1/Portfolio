import { useEffect, useState } from "react"
import { cn } from "../lib/utils"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"

const navItems = [
  {name:"Home",href:"#hero"},
  {name:"About",href:"#about"},
  {name:"Skills",href:"#skills"},
  {name:"Services",href:"#services"},
  {name:"Projects",href:"#projects"},
  {name:"Testimonials",href:"#testimonials"},
  {name:"Contact",href:"#contact"},
]

const Navbar = () => {
  const [isScrolled,setIsScrolled] = useState(false)
  const [isMenuOpen,setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(()=>{
    const handleScroll = ()=>{
      setIsScrolled(window.scrollY > 10)
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1))
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) setActiveSection(currentSection)
    }
    window.addEventListener("scroll",handleScroll)
    return ()=> window.removeEventListener("scroll",handleScroll)
  },[])


  return (
    <nav className={cn("w-full z-50 transition-all duration-300",
      isScrolled ? "py-3 bg-background/90 backdrop-blur-lg shadow-lg border-b border-border/50 fixed top-0 left-0 right-0":"py-5 fixed top-0 left-0 right-0"
    )}>
      <div className="container flex items-center justify-between px-4 md:px-6">
        <motion.a 
          href="#hero" 
          className="text-xl font-bold text-primary flex items-center"
          whileHover={{ scale: 1.05 }}
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">Ntwali's</span> {" "} Portfolio
          </span>
        </motion.a>

        {/* desktop nav - now centered with flex-grow */}
        <div className="hidden md:flex flex-grow justify-center space-x-8">
          {
            navItems.map((item,key)=>(
              <motion.a 
                href={item.href} 
                key={key} 
                className={cn(
                  "text-foreground/80 hover:text-primary transition-all duration-300 pb-1 relative",
                  activeSection === item.href.substring(1) && "text-primary font-semibold"
                )}
                whileHover={{ y: -2 }}
              >
                {item.name}
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            ))
          }
        </div>
        
        {/* This empty div balances the logo space to keep links truly centered */}
        <div className="md:block hidden w-[160px]"></div>

        {/* Mobile menu button */}
        <motion.button 
          onClick={()=>setIsMenuOpen((prev)=>!prev)} 
          className="md:hidden text-foreground z-50" 
          aria-label={isMenuOpen?"Close Menu":"Open Menu"}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}        </motion.button>

        <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden",
          isMenuOpen ? "opacity-100 pointer-events-auto":"opacity-0 pointer-events-none"
        )}>
          <div className="flex flex-col space-y-8 text-xl">
          {
            navItems.map((item,key)=>(
              <motion.a 
              href={item.href} 
              key={key} 
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
              onClick={()=> setIsMenuOpen(false)}
              whileHover={{ x: 10 }}
              >
                {item.name}
              </motion.a>
            ))
          }
        </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar