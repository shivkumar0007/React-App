import { useContext } from "react";
import { ThemeContext } from "../store/ThemeContext";
import Navbar from "./Navbar";

const Skills = () => {
  const {theme, setTheme} = useContext(ThemeContext);
  return (
    <>
    <Navbar/>
    <div className={theme=="light"? "text-gray-800 flex flex-col items-center pt-20 w-full justify-center " : "text-gray-200 flex flex-col items-center pt-20 w-full justify-center "}>

      <h2 className="text-2xl font-bold underline mb-6">Skills</h2>

      <div className="grid grid-cols-6 gap-6 text-center">
        <div className={theme=="light"?"p-2 bg-gray-200 rounded" : "p-2 bg-gray-800 rounded"}>HTML</div>
        <div className={theme=="light"?"p-2 bg-gray-200 rounded" : "p-2 bg-gray-800 rounded"}>CSS</div>
        <div className={theme=="light"?"p-2 bg-gray-200 rounded" : "p-2 bg-gray-800 rounded"}>JavaScript</div>
        <div className={theme=="light"?"p-2 bg-gray-200 rounded" : "p-2 bg-gray-800 rounded"}>React</div>
        <div className={theme=="light"?"p-2 bg-gray-200 rounded" : "p-2 bg-gray-800 rounded"}>Node</div>
        <div className={theme=="light"?"p-2 bg-gray-200 rounded" : "p-2 bg-gray-800 rounded"}>Git</div>
      </div>
    </div>
    </>
  );
};

export default Skills;