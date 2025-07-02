import Navbar from "../components/Navbar"
import StarBackground from "../components/StarBackground"
import ThemeToggle from "../components/ThemeToggle"
import HeroSection from "../components/HeroSection"
import AboutMe from "../components/AboutMe"
import { Skills } from "../components/Skills"
import { ProjectsSection } from "../components/Content"
import { ContactSection } from "../components/Contact"
import { Footer } from "../components/Footer"

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
        <ThemeToggle/>
      {/* Star-Background */}
        <StarBackground/>
      {/* Navbar */}
        <Navbar/>
        <main>
          <HeroSection/>
          <AboutMe/>
          <Skills/>
          <ProjectsSection/>
          <ContactSection/>
          <Footer/>
        </main>
    </div>
  )
}

export default Home
