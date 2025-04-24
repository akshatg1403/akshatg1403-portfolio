import { useRef, useState, useEffect } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import Home from './Homepage/Home';
import Project from './Projects/Project';
import Stack from './Stack/Stack';
import Contact from './Contact/Contact';

function App() {
  const projectRef = useRef(null);
  const skillRef = useRef(null);
  const contactRef = useRef(null);
  const [mode, setMode] = useState(false);

  

  useEffect(()=>{
    if (localStorage.getItem("mode") !==null){
        setMode(localStorage.getItem("mode")==="true");
        //console.log(localStorage.getItem("mode"));
    }else{
        localStorage.setItem("mode",false);
        //console.log("Mode not found");
    }
},[])

  const changeMode = (val) =>{
    setMode(val);
    localStorage.setItem("mode", val);
    //console.log(localStorage.getItem("mode"));
  }

  return (
    <div className={`${mode?'':'dark'}`}>
      <div className='flex flex-col items-center w-screen min-h-screen overflow-x-hidden font z-0 dark:bg-[#222831]'>
        <Navbar projectRef={projectRef} skillRef={skillRef} contactRef={contactRef} mode={mode} changeMode={changeMode}/>

        <Home contactRef={contactRef} />

        <div ref={projectRef} className='w-full flex items-center justify-center bg-gray-100 dark:bg-[#222831]'>
          <Project />
        </div>

        <div ref={skillRef} className='w-full items-center flex justify-center'>
          <Stack />
        </div>

        <div ref={contactRef} className='w-full flex items-center justify-center'>
          <Contact />
        </div>

      </div>
    </div>
  );
}

export default App;
