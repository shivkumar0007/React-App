import { useContext, useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import { ThemeContext } from "./store/ThemeContext";


function Home() {
  const {theme, setTheme}= useContext(ThemeContext);
  return (
     <div>
      <Navbar/>
      <Hero/>
       <div className={theme=="light"?"text-gray-800 flex flex-col items-center pt-20 " : "text-gray-200 flex flex-col items-center  pt-20"}>
      <h2 className="font-bold text-2xl underline mb-1">About Me</h2>

      <p>
        I am a passionate web developer who loves building
        modern responsive web applications using React,
        JavaScript and APIs.
      </p>
    </div>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  
  );
}

export default Home;

