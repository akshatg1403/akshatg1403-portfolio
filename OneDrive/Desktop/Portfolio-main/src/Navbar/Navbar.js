
import { useState } from 'react';
import './Navbar.css'
import { CiDark, CiLight } from "react-icons/ci";

export default function Navbar({ projectRef, skillRef, contactRef, mode, changeMode }) {
    const scrollTo = (element) => {
        //console.log(contactRef)
        //console.log(element.current.getBoundingClientRect());
        const targetPos = element.current.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: targetPos, behavior: 'smooth' });
    }
    const [open, setOpen] = useState(false);
    const openModal = () => {
        setOpen(!open);
    }

    

    return (
        <div className="w-full flex justify-center items-center fixed z-50 bg-white border-b border-gray-200
        dark:bg-[#222831] dark:text-[#EEEEEE] dark:border-[#393E46] ">

            {/*Navbar*/}
            <div className='w-full max-w-[75rem] px-4 py-2 flex justify-between items-center bg-white dark:bg-[#222831]'>
                {/*Aditya Kumar*/}
                <div className="flex items-center">
                    <span className="lobster text-4xl laptop:text-5xl">
                        A
                    </span>
                    <span className='font-calibri text-xl font-medium laptop:text-2xl'>
                        kshat
                    </span>
                    <span className='font-calibri hidden laptop:text-2xl laptop:inline'>
                        &nbsp;Goyal
                    </span>
                </div>

                {/*Ul list*/}
                <div className='flex gap-3 text-lg laptop:text-xl items-center'>
                    {/* <span onClick={() => { scrollTo(projectRef) }} className='cursor-pointer  select-none hidden laptop:inline'>
                        Projects
                    </span>
                    <span onClick={() => { scrollTo(skillRef) }} className='cursor-pointer  select-none hidden laptop:inline'>
                        Skills
                    </span> */}
                    {/* <span onClick={() => { scrollTo(contactRef) }} className='cursor-pointer hidden laptop:inline underline select-none'>
                        Contact Me
                    </span> */}

                    {/*Resume Link*/}
                    <a href='https://drive.google.com/drive/folders/14-a1p7ADDbUsV9URSHDBNZPTRwbDUxQp?usp=sharing'
                    target='_black' referrerPolicy='no-referrer'
                    className='hidden laptop:block'>
                        Resume
                    </a>

                    {/*Three line menu bar*/}
                    <span className='cursor-pointer laptop:hidden text-3xl text-black dark:text-white w-fit
                    flex flex-col h-5 justify-around'
                        onClick={openModal}>
                        {/* <FiMenu /> */}
                        <span className={`w-5 h-[2px] dark:bg-[#EEEEEE] bg-black
                        ${open?'rotate-45 translate-y-2 duration-500':'rotate-0 translate-y-0 duration-500'}`}></span>
                        <span className={`w-5 h-[2px] dark:bg-[#EEEEEE] bg-black
                        ${open?'opacity-0':''}`}></span>
                        <span className={`w-5 h-[2px] dark:bg-[#EEEEEE] bg-black
                        ${open?'-rotate-45 -translate-y-[0.35rem] duration-500':'rotate-0 translate-y-0 duration-500'}`}></span>
                    </span>

                    {/*Change Mode*/}
                    {/* <div className={`hidden laptop:flex items-center transition duration-150 
                      ${mode ? 'bg-blue-500' : 'bg-black'} py-1 rounded-full px-1 cursor-pointer`}
                        onClick={() => { changeMode(!mode) }}>

                        <span className={`bg-yellow-300 text-white rounded-full  transition duration-150
                        ${mode ? '' : 'translate-x-3 opacity-0'} flex items-center justify-center w-6 h-6`}>
                            <CiLight />
                        </span>

                        <span className={`rounded-full bg-[#393E46]  text-white transition duration-150
                        ${mode ? '-translate-x-3 opacity-0' : ''}  flex items-center justify-center w-6 h-6`}>
                            <CiDark />
                        </span>

                    </div> */}


                </div>
            </div>

            {/*Sidebar*/}
            <div className={`${open ? 'absolute' : 'hidden'}  top-0 right-0 left-0 dark:bg-white/30 bg-black/40  w-full h-screen`}
                onClick={() => { setOpen(false) }}>
                
            </div>

            <div className={`${open ? '' : 'translate-x-96 opacity-0'} transition  flex flex-col absolute top-12 right-4 items-end
                 dark:bg-[#393E46] rounded-lg px-5 py-2 gap-3 bg-white`}>
                    <span onClick={() => { scrollTo(projectRef) }} className='cursor-pointer  select-none'>
                        Projects
                    </span>
                    <span onClick={() => { scrollTo(skillRef) }} className='cursor-pointer  select-none '>
                        Skills
                    </span>
                    <span onClick={() => { scrollTo(contactRef) }} className='cursor-pointer  select-none'>
                        Contact Me
                    </span>

                    <a href='https://drive.google.com/drive/foldhttps://drive.google.com/drive/folders/14-a1p7ADDbUsV9URSHDBNZPTRwbDUxQp?usp=sharingers/19pAgkMMll0c61PBwXYW5jgPPg8-7-rKf'
                    target='_black' referrerPolicy='no-referrer'>
                        Resume
                    </a>

                    {/*Change Mode*/}
                    {/* <div className={`w-fit flex items-center transition duration-150
                      ${mode ? 'bg-blue-500' : 'bg-black'} py-1 rounded-full px-1 cursor-pointer`}
                        onClick={() => { changeMode(!mode) }}>

                        <span className={`bg-yellow-300 text-white rounded-full  transition duration-150
                        ${mode ? '' : 'translate-x-3 opacity-0'} flex items-center justify-center w-6 h-6`}>
                            <CiLight />
                        </span>

                        <span className={`rounded-full bg-[#393E46]  text-white transition duration-150
                        ${mode ? '-translate-x-3 opacity-0' : ''}  flex items-center justify-center w-6 h-6`}>
                            <CiDark />
                        </span>

                    </div> */}
                </div>

        </div>
    )
}