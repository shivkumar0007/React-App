import { useContext } from "react"
import { ThemeContext } from "../../store/ThemeContext"
import Navbar from "../../components/Navbar"

const TodoList = () => {
  const {theme, setTheme} = useContext(ThemeContext)
  return (
    <>
    <Navbar/>
    <div className={theme=="light"? "text-gray-900 pt-20" : "text-gray-200 pt-20"}>TodoList
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit ullam a vitae dolorem quae fugit esse fugiat corporis aliquid ab debitis eos reprehenderit dolor ipsa repudiandae, expedita in recusandae! Ad.
      
    </div>
    </>
  )
}

export default TodoList