import { useContext } from "react";
import { ThemeContext } from "../store/ThemeContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const {theme,setTheme} = useContext(ThemeContext);
  
const toggleTheme = () => {
  setTheme(theme === "light" ? "dark" : "light");
};

  return (
    <div className={theme=="light"?"text-gray-800 flex justify-between  pl-8 pr-8 border-b-2 pb-2 mb-10  items-center fixed left-0 right-0 z-10 h-15 bg-white" : "text-gray-200 flex justify-between  pl-8 pr-8 border-b-2 pb-2  items-center fixed left-0 right-0 z-10 h-15 bg-gray-900"}>
      <h2 className="font-bold text-2xl">Shiv kumar Portfolio</h2>

      <ul className="flex gap-5">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Skills">Skills</Link>
        <Link to="/Projects">Projects</Link>
        <Link to="/Contact">Contact</Link>
      </ul>
<label className="inline-flex items-center cursor-pointer">
  <input
    type="checkbox"
    className="sr-only peer"
    defaultChecked={theme === "dark"}
    onClick={toggleTheme}
  />

  <div className="relative w-9 h-5 bg-gray-300 rounded-full peer
  peer-checked:after:translate-x-full
  after:content-[''] after:absolute after:top-[2px] after:left-[2px]
  after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all
  peer-checked:bg-blue-800">
  </div>

  <span className="ms-3 text-sm font-medium">
    {theme === "dark" ? "Dark" : "Light"}
  </span>
</label>
    </div>
  );
};

export default Navbar;
