import React from "react"
import javascript from "../Assets/icons/js.png"
import html from "../Assets/icons/html.png"
import tailwind from "../Assets/icons/tailwind.png"
import git from "../Assets/icons/git.png"
import api from "../Assets/icons/api-64.png"
import css from "../Assets/icons/css.png"
import node from "../Assets/icons/node-js.png"
import express from "../Assets/icons/express-js.png"
import mongodb from "../Assets/icons/mongodb.png"

export default function Contacts() {
    return (
      <>
        <div className="mt-60" id="contact">
        <h2 className="flex justify-center font-Fredericka text-3xl text-yellow-600" >My Tools</h2>
            <div id="contact" className="flex flex-row justify-center gap-4 my-10 mx-8 pb-20 md:gap-8 md:my-20 md:mx-40">
                <ul className="flex flex-row flex-wrap justify-center gap-5 md:gap-10 my-2">
                    <li className="block w-14 md:inline-block m-2 md:m-8">
                        <img src={html}                    
                            alt="html-logo"/>
                        <div>
                            <h5 className="flex justify-center">HTML</h5>
                        </div>
                    </li>
                    <li className="block w-14 md:inline-block m-2 md:m-8">
                        <img src={css}                    
                            alt="html-logo"/>
                        <div>
                            <h5 className="flex justify-center">CSS</h5>
                        </div>
                    </li>
                    <li className="block w-14 md:inline-block m-2 md:m-8">
                        <img src={tailwind}                    
                            alt="tailwind-logo"/>
                        <div>
                            <h5 className="flex justify-center">Tailwind.css</h5>
                        </div>
                    </li>
                    <li className="block w-14 md:inline-block m-2 md:m-8">
                        <img src={javascript}                    
                            alt="javascript-logo"/>
                        <div>
                            <h5 className="flex justify-center">Javascript</h5>
                        </div>
                    </li>
                    <li className="block w-14 md:inline-block m-2 md:m-8">
                        <img src={git}                    
                            alt="git-logo"/>
                        <div>
                            <h5 className="flex justify-center">Git</h5>
                        </div>
                    </li>
                    <li className="block w-14 md:inline-block m-2 md:m-8">
                        <img src={node}                    
                            alt="html-logo"/>
                        <div>
                            <h5 className="flex justify-center">Node.js</h5>
                        </div>
                    </li>
                    <li className="block w-14 md:inline-block m-2 md:m-8">
                        <img src={express}                    
                            alt="api-logo"/>
                        <div>
                            <h5 className="flex justify-center">Express.js</h5>
                        </div>
                    </li>
                    <li className="block w-14 md:inline-block m-2 md:m-8">
                        <img src={api}                    
                            alt="html-logo"/>
                        <div>
                            <h5 className="flex justify-center">APIs</h5>
                        </div>
                    </li>
                    <li className="block w-14 md:inline-block m-2 md:m-8">
                        <img src={mongodb}                    
                            alt="html-logo"/>
                        <div>
                            <h5 className="flex justify-center">MongoDB</h5>
                        </div>
                    </li>
                </ul> 
            </div>
        </div>
      </>
    ) 
  }