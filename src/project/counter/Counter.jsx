import React, { useContext, useState } from "react";
import { ThemeContext } from "../../store/ThemeContext";
import Navbar from "../../components/Navbar";

const Counter = () => {
 const {theme, setTheme} = useContext(ThemeContext)
  const [count, setCount] = useState(0);
const [defaultValue, setDefaultValue] = useState(1);
  function increamentValue(e){
  let value = Number(e.target.value);
  if(value===0 || value==""){
    setDefaultValue(1);
  }else{
    setDefaultValue(value);
  }
  }
  return (
    <>
    <Navbar/>
    <div className="flex justify-center items-center h-screen">
      <div className={theme=="light" ? "bg-gary-100 text-gray-700 p-8 rounded-xl shadow-lg flex flex-col items-center gap-6 w-[350px]" : "bg-gray-400 text-gray-200 p-8 rounded-xl shadow-lg flex flex-col items-center gap-6 w-[350px]"}>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setCount(count + defaultValue)}
            className={theme=="light"?"px-4 py-2 bg-green-400 text-gary-700 rounded-lg hover:bg-green-500" : "px-4 py-2 bg-green-500 text-gray-200 rounded-lg hover:bg-green-600"}
          >
            Add
          </button>

          <h3 className="text-3xl font-bold">{count}</h3>

          <button
            onClick={() => setCount(count - defaultValue)}
            className={theme=="light"? "px-4 py-2 bg-red-400 text-gray-700 rounded-lg hover:bg-red-500" : "px-4 py-2 bg-red-500 text-gary-200 rounded-lg hover:bg-red-600"}
          >
            Minus
          </button>
        </div>

        <input
        onChange={(e)=>{increamentValue(e)}}
          type="number"
          placeholder="Increment value"
          className={theme=="light" ? "border text-gray-700 border-gray-500 rounded-lg px-4 py-2 w-full outline-none focus:ring-2" : "border text-gray-200 border-gray-300 rounded-lg px-4 py-2 w-full outline-none focus:ring-2"}
        />
      </div>
    </div>
    </>
  );
};

export default Counter;
