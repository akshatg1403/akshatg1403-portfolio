import c from "../images/icons/c++.svg"
import js from "../images/icons/Javascript.svg"
import html from "../images/icons/HTML.png"
import css from "../images/icons/CSS.png"
import react from "../images/icons/React.png"
import redux from "../images/icons/Redux.svg"
import tailwind from "../images/icons/Tailwind.png"
//import bootstrap from "../images/icons/Bootstrap.svg"
import express from "../images/icons/Express.png"
import node from "../images/icons/NodeJs.svg"
import mysql from "../images/icons/mysql.svg"
import mongo from "../images/icons/MongoDB.svg"
import git from '../images/icons/Git.svg'
import github from '../images/icons/github.svg'
import vercel from '../images/icons/Vercel.svg'
import ts from '../images/icons/ts.svg'
import astro from '../images/icons/astro.svg'
import postman from '../images/icons/postman.svg'
import materialui from '../images/icons/material-ui.svg'
import socket from '../images/icons/socketio-icon.svg'
import redis from '../images/icons/redis.svg'
import '../Projects/Project.css'
import { InView } from 'react-intersection-observer';


export default function Stack() {

    return (
        <div className="w-full max-w-[75rem] my-8 dark:text-[#EEEEEE]">
            <h6 className="text-3xl font-medium mx-5 laptop:text-5xl mb-3 text-slate-800
            dark:text-slate-100">
                My Tech Stack
            </h6>

            <div className="flex flex-col px-5 gap-4 laptop:grid laptop:grid-cols-2">
                {/*programming languages*/}
                <InView triggerOnce>
                    {({ inView, ref, entry }) => (
                        <div ref={ref} className={`flex flex-col bg-gray-100 p-2 rounded-md gap-2 dark:bg-[#393E46]
                        ${inView?'card':''}`}>
                            <h6 className="text-lg font-semibold laptop:text-xl">
                                Programming languages
                            </h6>
                            <div className="flex flex-wrap items-center gap-3">
                                <div className="relative group">
                                    <img src={c} alt="icon" className="w-16" />
                                    <div className="absolute group-hover:opacity-100 opacity-0 bottom-[100%] left-0 dark:bg-slate-800 bg-white dark:text-white text-slate-900 px-2 py-1 rounded-md z-50 transition-opacity duration-200 border dark:border-slate-100 border-slate-800">
                                        C++
                                    </div>
                                </div>
                                <div className="relative group">
                                    <img src={js} alt="icon" className="w-16" />
                                    <div className="absolute group-hover:opacity-100 opacity-0 bottom-[100%] left-0 dark:bg-slate-800 bg-white dark:text-white text-slate-900 px-2 py-1 rounded-md z-50 transition-opacity duration-200 border dark:border-slate-100 border-slate-800">
                                        JavaScript
                                    </div>
                                </div>
                                <div className="relative group">
                                    <img src={ts} alt="icon" className="w-16" />
                                    <div className="absolute group-hover:opacity-100 opacity-0 bottom-[100%] left-0 dark:bg-slate-800 bg-white dark:text-white text-slate-900 px-2 py-1 rounded-md z-50 transition-opacity duration-200 border dark:border-slate-100 border-slate-800">
                                        TypeScript
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </InView>


                {/*Frontend lang*/}
                <InView triggerOnce>
                    {({ inView, ref, entry }) => (
                        <div ref={ref} className={`flex flex-col bg-gray-100 p-2 rounded-md gap-2 dark:bg-[#393E46]
                        ${inView?'card':''}`}>
                            <h6 className="text-lg font-semibold laptop:text-xl">
                        Frontend
                    </h6>
                    <div className="flex flex-wrap items-center gap-3">
                        <div className="relative group">
                            <img src={html} alt="icon" className="w-16" />
                            <div className="absolute group-hover:opacity-100 opacity-0 bottom-[100%] left-0 dark:bg-slate-800 bg-white dark:text-white text-slate-900 px-2 py-1 rounded-md z-50 transition-opacity duration-200 border dark:border-slate-100 border-slate-800">
                                HTML
                            </div>
                        </div>
                        <div className="relative group">
                            <img src={css} alt="icon" className="w-16" />
                            <div className="absolute group-hover:opacity-100 opacity-0 bottom-[100%] left-0 dark:bg-slate-800 bg-white dark:text-white text-slate-900 px-2 py-1 rounded-md z-50 transition-opacity duration-200 border dark:border-slate-100 border-slate-800">
                                CSS
                            </div>
                        </div>
                        <div className="relative group">
                            <img src={react} alt="icon" className="w-16" />
                            <div className="absolute group-hover:opacity-100 opacity-0 bottom-[100%] left-0 dark:bg-slate-800 bg-white dark:text-white text-slate-900 px-2 py-1 rounded-md z-50 transition-opacity duration-200 border dark:border-slate-100 border-slate-800">
                                React.js
                            </div>
                        </div>
                        <div className="relative group">
                            <img src={redux} alt="icon" className="w-16" />
                            <div className="absolute group-hover:opacity-100 opacity-0 bottom-[100%] left-0 dark:bg-slate-800 bg-white dark:text-white text-slate-900 px-2 py-1 rounded-md z-50 transition-opacity duration-200 border dark:border-slate-100 border-slate-800">
                                Redux
                            </div>
                        </div>
                        <div className="relative group">
                            <img src={tailwind} alt="icon" className="w-16" />
                            <div className="absolute group-hover:opacity-100 opacity-0 bottom-[100%] left-0 dark:bg-slate-800 bg-white dark:text-white text-slate-900 px-2 py-1 rounded-md z-50 transition-opacity duration-200 border dark:border-slate-100 border-slate-800">
                                Tailwind
                            </div>
                        </div>
                        <div className="relative group">
                            <img src={materialui} alt="icon" className="w-16" />
                            <div className="w-fit absolute group-hover:opacity-100 opacity-0 bottom-[100%] left-0 dark:bg-slate-800 bg-white dark:text-white text-slate-900 px-2 py-1 rounded-md z-50 transition-opacity duration-200 border dark:border-slate-100 border-slate-800">
                                Material UI
                            </div>
                        </div>
                        <div className="relative group">
                            <img src={astro} alt="icon" className="w-16" />
                            <div className="absolute group-hover:opacity-100 opacity-0 bottom-[100%] left-0 dark:bg-slate-800 bg-white dark:text-white text-slate-900 px-2 py-1 rounded-md z-50 transition-opacity duration-200 border dark:border-slate-100 border-slate-800">
                                Astro
                            </div>
                        </div>
                    </div>
                        </div>
                    )}
                </InView>
                

                {/*backend*/}
                <InView triggerOnce>
                    {({ inView, ref, entry }) => (
                        <div ref={ref} className={`flex flex-col bg-gray-100 p-2 rounded-md gap-2 dark:bg-[#393E46]
                        ${inView?'card':''}`}>
                            <h6 className="text-lg font-semibold laptop:text-xl">
                        Backend
                    </h6>
                    <div className="flex flex-wrap items-center gap-3">
                        <div className="relative group">
                            <img src={express} alt="icon" className="w-16" />
                            <div className="absolute group-hover:opacity-100 opacity-0 bottom-[100%] left-0 dark:bg-slate-800 bg-white dark:text-white text-slate-900 px-2 py-1 rounded-md z-50 transition-opacity duration-200 border dark:border-slate-100 border-slate-800">
                                Express.js
                            </div>
                        </div>
                        <div className="relative group">
                            <img src={node} alt="icon" className="w-16" />
                            <div className="absolute group-hover:opacity-100 opacity-0 bottom-[100%] left-0 dark:bg-slate-800 bg-white dark:text-white text-slate-900 px-2 py-1 rounded-md z-50 transition-opacity duration-200 border dark:border-slate-100 border-slate-800">
                                Node.js
                            </div>
                        </div>
                        <div className="relative group">
                            <img src={socket} alt="icon" className="w-16" />
                            <div className="absolute group-hover:opacity-100 opacity-0 bottom-[100%] left-0 dark:bg-slate-800 bg-white dark:text-white text-slate-900 px-2 py-1 rounded-md z-50 transition-opacity duration-200 border dark:border-slate-100 border-slate-800">
                                Socket.io
                            </div>
                        </div>
                        <div className="relative group">
                            <img src={redis} alt="icon" className="w-16" />
                            <div className="absolute group-hover:opacity-100 opacity-0 bottom-[100%] left-0 dark:bg-slate-800 bg-white dark:text-white text-slate-900 px-2 py-1 rounded-md z-50 transition-opacity duration-200 border dark:border-slate-100 border-slate-800">
                                Redis
                            </div>
                        </div>
                    </div>
                        </div>
                    )}
                </InView>

                {/*database*/}
                <InView triggerOnce>
                    {({ inView, ref, entry }) => (
                        <div ref={ref} className={`flex flex-col bg-gray-100 p-2 rounded-md gap-2 dark:bg-[#393E46]
                        ${inView?'card':''}`}>
                            <h6 className="text-lg font-semibold laptop:text-xl">
                        Database
                    </h6>
                    <div className="flex flex-wrap items-center gap-3">
                        <div className="relative group">
                            <img src={mongo} alt="icon" className="w-16" />
                            <div className="absolute group-hover:opacity-100 opacity-0 bottom-[100%] left-0 dark:bg-slate-800 bg-white dark:text-white text-slate-900 px-2 py-1 rounded-md z-50 transition-opacity duration-200 border dark:border-slate-100 border-slate-800">
                                MongoDB
                            </div>
                        </div>
                        <div className="relative group">
                            <img src={mysql} alt="icon" className="w-16" />
                            <div className="absolute group-hover:opacity-100 opacity-0 bottom-[100%] left-0 dark:bg-slate-800 bg-white dark:text-white text-slate-900 px-2 py-1 rounded-md z-50 transition-opacity duration-200 border dark:border-slate-100 border-slate-800">
                                MySQL
                            </div>
                        </div>
                    </div>
                        </div>
                    )}
                </InView>
                

                {/*Tools*/}
                <InView triggerOnce>
                    {({ inView, ref, entry }) => (
                        <div ref={ref} className={`flex flex-col bg-gray-100 p-2 rounded-md gap-2 dark:bg-[#393E46]
                        ${inView?'card':''}`}>
                            <h6 className="text-lg font-semibold laptop:text-xl">
                        Tools
                    </h6>
                    <div className="flex flex-wrap items-center gap-3">
                        <div className="relative group">
                            <img src={git} alt="icon" className="w-16" />
                            <div className="absolute group-hover:opacity-100 opacity-0 bottom-[100%] left-0 dark:bg-slate-800 bg-white dark:text-white text-slate-900 px-2 py-1 rounded-md z-50 transition-opacity duration-200 border dark:border-slate-100 border-slate-800">
                                Git
                            </div>
                        </div>
                        <div className="relative group">
                            <img src={github} alt="icon" className="w-16" />
                            <div className="absolute group-hover:opacity-100 opacity-0 bottom-[100%] left-0 dark:bg-slate-800 bg-white dark:text-white text-slate-900 px-2 py-1 rounded-md z-50 transition-opacity duration-200 border dark:border-slate-100 border-slate-800">
                                Github
                            </div>
                        </div>
                        <div className="relative group">
                            <img src={vercel} alt="icon" className="w-16" />
                            <div className="absolute group-hover:opacity-100 opacity-0 bottom-[100%] left-0 dark:bg-slate-800 bg-white dark:text-white text-slate-900 px-2 py-1 rounded-md z-50 transition-opacity duration-200 border dark:border-slate-100 border-slate-800">
                                Vercel
                            </div>
                        </div>
                        <div className="relative group">
                            <img src={postman} alt="icon" className="w-16" />
                            <div className="absolute group-hover:opacity-100 opacity-0 bottom-[100%] left-0 dark:bg-slate-800 bg-white dark:text-white text-slate-900 px-2 py-1 rounded-md z-50 transition-opacity duration-200 border dark:border-slate-100 border-slate-800">
                                Postman
                            </div>
                        </div>
                    </div>
                        </div>
                    )}
                </InView>
                

            </div>

        </div>
    )
}