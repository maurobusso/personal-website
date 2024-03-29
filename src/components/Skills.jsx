import React from "react"
import javascript from "../Assets/icons/js.png"
import typescript from "../Assets/icons/ts.png"
import html from "../Assets/icons/html.png"
import tailwind from "../Assets/icons/tailwind.png"
import git from "../Assets/icons/git.png"
import api from "../Assets/icons/api-64.png"
import css from "../Assets/icons/css.png"
import node from "../Assets/icons/node-js.png"
import express from "../Assets/icons/express-js.png"
import mongodb from "../Assets/icons/mongodb.png"
import reactLogo from "../Assets/icons/react.png"

export default function Contacts(props) {

    const { darkMode } = props

    return (
      <>
        <div className={`${darkMode ? 'dark' : 'bg-yellow-200' }`}>
            <div className="pt-20 dark:text-slate-300 dark:bg-slate-700" id="contact">
            <h2 className="flex justify-center font-Fredericka text-3xl text-yellow-700" >My Tools</h2>
                <div id="" className="flex flex-row justify-center gap-4 py-10 px-8 md:gap-8 md:py-20 md:mx-40">
                    <ul className="flex flex-row flex-wrap justify-center gap-5 md:gap-4 my-2 text-xs md:text-base">
                        <li className="block w-8 md:w-14 md:inline-block m-2 md:m-8">
                            <img src={html}                    
                                alt="html-logo"
                                className="md:w-14"
                                />
                            <div>
                                <h5 className="flex justify-center">HTML</h5>
                            </div>
                        </li>
                        <li className="block w-8 md:w-14 md:inline-block m-2 md:m-8">
                            <img src={css}                    
                                alt="html-logo"/>
                            <div>
                                <h5 className="flex justify-center">CSS</h5>
                            </div>
                        </li>
                        <li className="block w-8 md:w-14 md:inline-block m-2 md:m-8">
                            <img src={tailwind}                    
                                alt="tailwind-logo"/>
                            <div>
                                <h5 className="flex justify-center">Tailwind.css</h5>
                            </div>
                        </li>
                        <li className="block w-8 md:w-14 md:inline-block m-2 md:m-8">
                            <img src={javascript}                    
                                alt="javascript-logo"/>
                            <div>
                                <h5 className="flex justify-center">JavaScript</h5>
                            </div>
                        </li>
                        <li className="block w-8 md:w-14 md:inline-block m-2 md:m-8">
                            <img src={typescript}                    
                                alt="typescript-logo"/>
                            <div>
                                <h5 className="flex justify-center">TypeScript</h5>
                            </div>
                        </li>
                        <li className="block w-8 md:w-14 md:inline-block m-2 md:m-8">
                            <img src={reactLogo}                    
                                alt="react-logo"/>
                            <div>
                                <h5 className="flex justify-center">React</h5>
                            </div>
                        </li>
                        <li className="block w-8 md:w-14 md:inline-block m-2 md:m-8">
                            <img src={git}                    
                                alt="git-logo"/>
                            <div>
                                <h5 className="flex justify-center">Git</h5>
                            </div>
                        </li>
                        <li className="block w-8 md:w-14 md:inline-block m-2 md:m-8">
                            <img src={node}                    
                                alt="html-logo"/>
                            <div>
                                <h5 className="flex justify-center">Node.js</h5>
                            </div>
                        </li>
                        <li className="block w-8 md:w-14 md:inline-block m-2 md:m-8">
                            <img src={express}                    
                                alt="api-logo"/>
                            <div>
                                <h5 className="flex justify-center">Express.js</h5>
                            </div>
                        </li>
                        <li className="block w-8 md:w-14 md:inline-block m-2 md:m-8">
                            <img src={api}                    
                                alt="html-logo"/>
                            <div>
                                <h5 className="flex justify-center">APIs</h5>
                            </div>
                        </li>
                        <li className="block w-8 md:w-14 md:inline-block m-2 md:m-8">
                            <img src={mongodb}                    
                                alt="html-logo"/>
                            <div>
                                <h5 className="flex justify-center">MongoDB</h5>
                            </div>
                        </li>
                    </ul> 
                </div>
            </div>
        </div>
      </>
    ) 
  }