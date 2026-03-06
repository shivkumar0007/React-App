import { useParams } from "react-router-dom";
import Counter from "../project/counter/Counter";
import TodoList from "../project/todoList/TodoList";

const ProjectLoader = () => {

  const { projectName } = useParams();

  const projectMap = {
    counter: <Counter />,
    todolist: <TodoList/>
  };

  return projectMap[projectName] || <h1>Project Not Found</h1>;
};

export default ProjectLoader;