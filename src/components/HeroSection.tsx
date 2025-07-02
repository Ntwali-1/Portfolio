import { ArrowDown } from "lucide-react"

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
      <div className="container max-w-4xl mx-auto text-center z-10">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight my-6">
          <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
          <span className="text-primary opacity-0 animate-fade-in-delay-1">{" "} Yanis</span>
          <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-1"> Ntwali</span>
        </h1>
        <p className="text-lg md:text-lg text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3 my-4">
        I'm a software programmer, embedded systems and cyber security engineer with a focus on building efficient, reliable solutions—from web applications to low-level hardware integration. I enjoy working at the intersection of code and electronics to solve real-world problems. 
        </p>
        <div className="pt-4 opacity-0 animate-fade-in-delay-4">
          <a href="#projects" className="cosmic-button">View My Work</a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
      <span className="text-sm text-muted-foreground mb-2">Scroll</span>
      <ArrowDown className="h-5 w-5 text-primary"/>
      </div>
    </section>
  )
}

export default HeroSection
