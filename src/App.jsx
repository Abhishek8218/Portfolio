import react from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import SocialLinks from "./SocialLinks";
import About from "./About";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import Contact from "./Contact";

export default function App() {
  return (
    <div>
      
      <NavBar/>
      
     <Home/>
      <div className="hidden md:block"><SocialLinks/></div>
      <About/>
       <Portfolio/>
      <Skills/>
      <Contact/>
    </div>
  );
}

