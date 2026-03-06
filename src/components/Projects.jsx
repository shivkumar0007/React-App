import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../store/ThemeContext";
import Navbar from "./Navbar";
import ProjectCard from "./ProjectCard";
import ProjectSearch from "./projectSearch";

const Projects = ({ hideNav }) => {
  const [projectContainer, setProjectContainer] = useState([]);
  const { theme } = useContext(ThemeContext);
  const [loading, setLoading] = useState(true);

  async function dataFetch() {
    try {
    const localData = localStorage.getItem("projects");
    if (localData) {
      setProjectContainer(JSON.parse(localData));
      setLoading(false);
      return;
    }
    const data = await fetch(
      "https://69aa9d1ae051e9456fa1e8d7.mockapi.io/products",
    );
    const res = await data.json();
    setProjectContainer(res);
    setLoading(false);
    localStorage.setItem("projects", JSON.stringify(res));
  }
  catch (error){
    console.error("Error fetching projects:", error);
  } finally{
    setLoading(false);
  }
  }
  useEffect(() => {
    dataFetch();
  }, []);

  if (loading) {
    return (
      <p
        className={
          theme == "light"
            ? "font-bold text-2xl text-gray-800 text-center mt-20"
            : "font-bold text-2xl text-gray-200 text-center mt-20"
        }
      >
        Loading...
      </p>
    );
  }

  return (
    <>
      {!hideNav && <Navbar />}

      <div
        className={
          theme === "light"
            ? "text-gray-800 flex flex-col items-center pt-20"
            : "text-gray-200 flex flex-col items-center pt-20"
        }
      > 
        <h2 className="text-2xl font-bold underline">Projects</h2>

        <ProjectSearch />

        <div className="grid grid-cols-4 mt-10 gap-7 p-10 w-full">
          {projectContainer.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
