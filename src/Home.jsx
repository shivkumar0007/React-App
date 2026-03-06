import {useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";


function Home() {
  const [hideNav] = useState(true);
  return (
     <div>
      <Navbar/>
      <Hero hideNav={hideNav} />
      <About hideNav={hideNav} />
      <Skills hideNav={hideNav} />
      <Projects hideNav={hideNav} />
      <Contact hideNav={hideNav} />
    </div>
  
  );
}

export default Home;

