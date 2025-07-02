import { useEffect, useState } from "react"
import { cn } from "../lib/utils"
import { Menu, X } from "lucide-react"

const navItems = [
  {name:"Home",href:"#hero"},
  {name:"About",href:"#about"},
  {name:"Skills",href:"#skills"},
  {name:"Projects",href:"#projects"},
  {name:"Contact",href:"#contact"},
]

const Navbar = () => {
  const [isScrolled,setIsScrolled] = useState(false)
  const [isMenuOpen,setIsMenuOpen] = useState(true)

  useEffect(()=>{
    const handleScroll = ()=>{
      setIsScrolled(window.screenY > 10)
    }
    window.addEventListener("scroll",handleScroll)
    return ()=> window.removeEventListener("scroll",handleScroll)
  },[])


  return (
    <nav className={cn("fixed w-full z-40 transition-all duration-300",
      isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs":"py-5"
    )}>
      <div className="container flex items-center justify-between">
        <a href="#hero" className="text-xl font-bold text-primary flex items-center">
          <span className="relative z-10">
            <span className="text-glow text-foreground">Ntwali's</span> {" "} Portfolio
          </span>
        </a>

        {/* desktop nav - now centered with flex-grow */}
        <div className="hidden md:flex flex-grow justify-center space-x-8">
          {
            navItems.map((item,key)=>(
              <a href={item.href} key={key} className="text-foreground/80 hover:text-primary transition-colors duration-300">{item.name}</a>
            ))
          }
        </div>
        
        {/* This empty div balances the logo space to keep links truly centered */}
        <div className="md:block hidden w-[160px]"></div>

        {/* Mobile menu button */}
        <button onClick={()=>setIsMenuOpen((prev)=>!prev)} className="md:hidden text-foreground z-50" aria-label={isMenuOpen?"Close Menu":"Open Menu"}>{isMenuOpen ? <X size={24}/> : <Menu size={24}/>}</button>

        <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden",
          isMenuOpen ? "opacity-100 pointer-events-auto":"opacity-0 pointer-events-none"
        )}>
          <div className="flex flex-col space-y-8 text-xl">
          {
            navItems.map((item,key)=>(
              <a 
              href={item.href} 
              key={key} 
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
              onClick={()=> setIsMenuOpen(false)}
              >{item.name}
              
              </a>
            ))
          }
        </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar