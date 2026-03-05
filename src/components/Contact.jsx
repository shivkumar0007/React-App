import { useContext } from "react";
import { ThemeContext } from "../store/ThemeContext";
import Navbar from "./Navbar";

const Contact = () => {
  const {theme, setTheme} = useContext(ThemeContext);
  return (
    <>
    <Navbar/>
        <div className={theme=="light"? "bg-gray-700 text-gray-200 flex flex-col items-center pt-20  border-t-2" : "bg-black text-gray-200 flex flex-col items-center pt-20 border-t-2"}>

      <h2 className="font-bold text-xl mb-3 underline">Contact Me</h2>

      <p>Email: shiv@email.com</p>

      <button className={theme=="light"?"p-1 mr-3 rounded border-2 mt-3 bg-blue-400 hover:bg-blue-600" : "p-1 mr-3 rounded border-2 mt-3 bg-purple-600  hover:bg-purple-700"}>Send Message</button>

    </div>
    </>
  );
};

export default Contact;
