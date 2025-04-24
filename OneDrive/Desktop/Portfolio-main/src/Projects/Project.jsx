import { data } from "../data/projects"
import { FaGithub } from "react-icons/fa";
import { InView } from 'react-intersection-observer';
import './Project.css'
import { useState } from "react";

export default function Project() {
    const [currData, setCurrData] = useState(data[0]);

    return (
        <div className="w-full max-w-[75rem] py-8 dark:bg-[#222831] dark:text-[#EEEEEE]">
            <h6 className="text-3xl font-medium mx-5 laptop:text-5xl mb-6 text-slate-800
            dark:text-slate-100">
                Projects
            </h6>

            {/* <div className="flex flex-col gap-4 px-5 laptop:grid w-full laptop:grid-cols-3
             sm:grid sm:grid-cols-2">

                {
                    data.map((project, index) => {
                        return (
                            <InView triggerOnce key={index}>
                                {({ inView, ref, entry }) => (
                                    <div className={`relative  ${inView ? 'card' : ''}`} ref={ref}>
                                        <a href={project.link} target="_blank" rel="noopener noreferrer"
                                            className="flex flex-col shadow-card rounded-lg cursor-pointer
                                laptop:w-full w-full p-2 dark:bg-[#393E46] bg-white"
                                        >
                                            <img src={project.url} alt="project_photo" loading="lazy"
                                                className="w-full h-52 object-cover rounded-t-lg"
                                            />
                                            <div className="flex flex-col pt-6 bg-white rounded-b-lg px-3 dark:bg-[#393E46]">
                                                <h5 className="text-lg font-semibold laptop:text-xl">
                                                    {project.heading}
                                                </h5>
                                                <p className="text-sm text-gray-500 h-14 laptop:text-base">
                                                    {project.stack}
                                                </p>
                                            </div>
                                        </a>

                                        <a className="absolute top-3 left-3 text-4xl text-white"
                                            href={project.github}>
                                            <FaGithub />
                                        </a>
                                    </div>
                                )}
                            </InView>

                        )
                    })
                }
            </div> */}

            <div className="flex laptop:flex-row flex-col px-5 gap-4">
                <div className="flex flex-row laptop:flex-col gap-2 h-fit rounded-md w-full laptop:w-fit overflow-x-auto laptop:max-h-96 laptop:overflow-x-hidden laptop:overflow-y-auto laptop:scrollbar-dark">
                    {
                        data.map((project, index)=> (
                            <div onClick={()=>{setCurrData(project)}} key={index} className={`whitespace-nowrap cursor-pointer border rounded-lg px-2 py-3 ${currData.heading===project.heading?'border-[#30baba] text-slate-50 bg-[#30baba]':'border-slate-500 text-slate-200'}`}>
                                {project.heading}
                            </div>
                        ))
                    }
                </div>

                <div className="flex-1 grid grid-cols-1 laptop:grid-cols-2 gap-2">
                    <div className="w-full">
                        <img src={currData.url} alt="project-image" className="w-full"/>
                    </div>

                    <div className="w-full flex flex-col gap-1">
                        <h3 className="text-2xl font-semibold text-slate-100">
                            {currData.heading}
                        </h3>
                        {
                            currData.desc.map((para, index)=>(
                                <p key={index}>
                                    {para}
                                </p>
                            ))
                        }

                        <p>
                            <span>Tech Stack: </span>
                            {currData.stack}
                        </p>

                        <div className="flex gap-2 mt-1">
                            <a href={currData.github} target="_blank" className="flex items-center gap-2 text-lg text-[#30baba] border border-[#30baba] py-1 px-2 rounded-md">
                                <FaGithub/> link
                            </a>

                            <a href={currData.link} target="_blank" className="flex items-center gap-2 text-lg text-[#30baba] border border-[#30baba] py-1 px-2 rounded-md">
                                Website
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
