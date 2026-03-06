import { useContext, useState } from 'react';
import imageCounter from '../assets/study_Anime.png'
import { ThemeContext } from '../store/ThemeContext';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';


const Projects = ({ hideNav }) => {
  const [projectContainer] = useState([{name: "Counter",image: imageCounter, para: "Counter Application"}
    ,{name: "TodoList",image: imageCounter, para: "Counter Application"}
    ])

    const navigate = useNavigate();

  const {theme, setTheme} = useContext(ThemeContext);
  return (
    <>
    {!hideNav && <Navbar/>}
    <div className={theme=="light"? "text-gray-800 flex flex-col items-center pt-20 justify-around " : "text-gray-200 flex flex-col items-center pt-20 justify-around"}>

      <h2 className="text-2xl font-bold underline">Projects</h2>
<div className="grid grid-cols-4 mt-10 gap-7 p-10 w-full justify-around ">
  
  {
      projectContainer.map((ele,idx)=>{
        return    <div key={idx} className={theme=="light"? "border-gray-200 border-2 w-full h-full rounded-xl flex flex-col items-center justify-center": "border-gray-700 border-2 w-full h-full rounded-xl flex flex-col items-center justify-center"}>
        <h3 className='font-medium text-2xl'>{ele.name}</h3>
        <div className={theme=="light"? "h-60 bg-gray-500 rounded-2xl w-full" : "h-60 bg-gray-900 rounded-2xl w-full"}>
          <img className={theme=="light"?"bg-white shadow-md h-full w-full object-cover rounded-2xl" : "bg-gray-800 shadow-md h-full w-full object-cover rounded-2xl"} src={ele.image} alt="" />
        </div>
        <p>{ele.para}</p>
       <div>
         <button onClick={()=>{navigate(`/projects/${ele.name.toLowerCase()}`)}} className={theme=="light"?"p-1 mr-3 rounded border-2 bg-blue-400 hover:bg-blue-600" : "p-1 mr-3 rounded border-2 bg-purple-600  hover:bg-purple-700"}>View Project</button>
         <button className={theme=="light"?"p-1 mr-3 rounded border-2 bg-blue-400 hover:bg-blue-600" : "p-1 mr-3 rounded border-2 bg-purple-600  hover:bg-purple-700"}>GitHub</button>
       </div>
      </div>

      })
  }

</div>
    </div>
    </>
  );
};

export default Projects;


   