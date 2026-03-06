import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../store/ThemeContext';

const ProjectSearch = () => {
  const [suggestProject, setSuggestProject] = useState([]);
  const [search, setSearch] = useState("");
const {theme} = useContext(ThemeContext);

  async function fetchProject() {
    try {
      const data = await fetch("https://69aa9d1ae051e9456fa1e8d7.mockapi.io/products");
      const jsonData = await data.json();
      setSuggestProject(jsonData);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
    
  } 

useEffect(()=>{
  fetchProject();
}, []);

  const searchFilter = suggestProject.filter((project) =>
    project.name.toLowerCase().includes(search.toLowerCase())
  );
 
  return (
    <div>
          <div className={theme=="light" ? "relative bg-gray-300 rounded-2xl w-full mt-3 flex items-center justify-center p-2": " relative bg-gray-800 rounded-2xl w-full mt-3 flex items-center justify-center p-2"}>
            <input 
              className={theme=="light" ? "bg-gray-300 text-gray-800 focus:outline-none" : " focus:outline-none bg-gray-800 text-gray-200 "} 
              type="text" 
              placeholder="Search projects..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              />
          </div>

         {search && (
        <div
          className={
            theme === "light"
              ? " absolute bg-white w-60 max-h-70 overflow-y-auto shadow-md rounded-2xl mt-2 p-2 z-50"
              : " absolute bg-gray-900 w-60 max-h-70 overflow-y-auto shadow-md rounded-2xl p-2 mt-2 z-50"
          }
        >
          {searchFilter.map((project) => (
            <a 
              key={project.id}
               href={project.view} target="_blank" rel="noopener noreferrer"
              className={
                theme === "light"
                  ? "p-2  cursor-pointer hover:bg-gray-200"
                  : "p-2  border-gray-700 cursor-pointer hover:bg-gray-700"
              }
            >
              {project.name}
            </a>
            
          ))}
        </div>
      )}

        
    </div>
  )
}

export default ProjectSearch