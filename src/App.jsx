import { useContext, useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { ThemeContext } from "./store/ThemeContext";
import Home from "./Home";
import ProjectLoader from "./components/ProjectLoader";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
const {theme, setTheme} = useContext(ThemeContext);
  return (
     <div className={theme=="light"?"bg-gray-50 min-h-screen" : "bg-gray-950 min-h-screen"}>
         <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Skills" element={<Skills/>} />
        <Route path="/Projects" element={<Projects/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/projects/:projectName" element={<ProjectLoader />} />
       </Routes>
    
    </div>
  
  );
}

export default App;

