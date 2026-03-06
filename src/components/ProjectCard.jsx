import { useContext } from "react";
import { ThemeContext } from "../store/ThemeContext";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {

  const { theme } = useContext(ThemeContext);

  const { name, type, lightImage, darkImage, detail, view, github } = project;

  return (
    <div
      className={
        theme === "light"
          ? "border-gray-200 border-2 w-full h-full rounded-xl flex flex-col items-center p-3"
          : "border-gray-700 border-2 w-full h-full rounded-xl flex flex-col items-center p-3"
      }
    >

      <h3 className="font-medium text-2xl">{name}</h3>

      <div
        className={
          theme === "light"
            ? "h-60 bg-gray-500 rounded-2xl w-full mt-3"
            : "h-60 bg-gray-900 rounded-2xl w-full mt-3"
        }
      >
        <img
          className={
            theme === "light"
              ? "bg-white shadow-md h-full w-full object-cover rounded-2xl"
              : "bg-gray-800 shadow-md h-full w-full object-cover rounded-2xl"
          }
          src={theme === "light" ? lightImage : darkImage}
          alt={name}
        />
      </div>

      <p className="mt-3 text-center">{detail}</p>

      <div className="mt-3">

        <a href={view} target="_blank" rel="noopener noreferrer">
          <button
            className={
              theme === "light"
                ? "p-1 mr-3 rounded border-2 bg-blue-400 hover:bg-blue-600"
                : "p-1 mr-3 rounded border-2 bg-purple-600 hover:bg-purple-700"
            }
          >
            View Project
          </button>
        </a>

        <a href={github} target="_blank" rel="noopener noreferrer">
          <button
            className={
              theme === "light"
                ? "p-1 mr-3 rounded border-2 bg-blue-400 hover:bg-blue-600"
                : "p-1 mr-3 rounded border-2 bg-purple-600 hover:bg-purple-700"
            }
          >
            GitHub
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;