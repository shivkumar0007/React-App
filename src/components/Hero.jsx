import { useContext } from 'react';
import image from '../assets/study_Anime.png'
import { ThemeContext } from '../store/ThemeContext';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  const {theme, setTheme} = useContext(ThemeContext);
  return (
    <>
    <Navbar/>
    <div className={theme=="light"?"text-gray-800 flex justify-center pt-20" : "text-gray-200 flex justify-center pt-20"}>

      <div className='flex flex-col justify-center items-center'><h1 className='font-bold text-2xl mb-1.5'>Hi, I'm Shiv Maurya 👋</h1>

      <h2 className='font-medium text-xl mb-2'>Frontend Developer | React Developer</h2>

      <p>
        I build modern web applications using React and JavaScript.
      </p>

      <button onClick={()=>{
        navigate("/projects")
        
      }} className={theme=="light"?"border-2 bg-blue-400 hover:bg-blue-600 p-1 rounded-tl-2xl rounded-br-2xl mt-2 mb-2" : "border-2 bg-purple-600  hover:bg-purple-700 p-1 rounded-tl-2xl rounded-br-2xl mt-2 mb-2"}>View Projects</button>
</div>
<img className=' transform scale-x-[-1]' src={image} alt="" />
    </div>
    </>
  );
};

export default Hero;
