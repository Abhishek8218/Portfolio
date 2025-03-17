"use client"
import NavBar from "./NavBar"
import Home from "./Home"
import SocialLinks from "./SocialLinks"
import About from "./About"
import Portfolio from "./Portfolio"
import Skills from "./Skills"
import Contact from "./Contact"
import Footer from "./footer"
import CustomCursor from "./ui/cursor"
import AnimatedBackground from "./ui/animated-background"

export default function App() {
  return (
    <div className="relative">
      <CustomCursor />
      <AnimatedBackground />
      <NavBar />
      <Home />
      <div className="hidden md:block">
        <SocialLinks />
      </div>
      <About />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

