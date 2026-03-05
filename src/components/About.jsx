import { useContext } from "react";
import { ThemeContext } from "../store/ThemeContext";
import Navbar from "./Navbar";

const About = () => {
  const {theme, setTheme} = useContext(ThemeContext);
  return (
<>
<Navbar/>
    <div className={theme=="light"?"text-gray-800 flex flex-col items-center pt-20 pb-10" : "text-gray-200 flex flex-col items-center  pt-20"}>
      <h2 className="font-bold text-2xl underline mb-1">About Me</h2>

      <p>
        I am a passionate web developer who loves building
        modern responsive web applications using React,
        JavaScript and APIs.
      </p>
    </div>
    </>
  );
};

export default About;