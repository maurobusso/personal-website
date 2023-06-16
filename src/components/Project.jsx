import React from "react"
import project1 from "../Assets/projects-tumbnails/explore-space.png"
import project2 from "../Assets/projects-tumbnails/local-anahestetic-calculator.png"
import project3 from "../Assets/projects-tumbnails/travel-journal.png"
import project4 from "../Assets/projects-tumbnails/blackjack.png"
import html from "../Assets/icons/html.png"
import tailwind from "../Assets/icons/tailwind.png"
import react from "../Assets/icons/react.png"
import js from "../Assets/icons/js.png"
import api from "../Assets/icons/api-64.png"

//data that i need from every project
//title, img, logo of techs used, description


export default function Project(props) {

    const { darkMode } = props

    return (
      <>
        <div className={`${darkMode ? 'dark' : ''}`}>    
          <h2 className="flex justify-center pt-40 pb-20 font-Fredericka text-3xl text-yellow-600 dark:bg-slate-700" id="project">My Projects</h2>
          <span className="flex justify-center px-10 font-SpecialElite dark:text-slate-300 dark:bg-slate-700">Click on any project to learn more</span>
          <div className="flex flex-col gap-10 px-4 md:px-10 lg:flex-row lg:flex-wrap dark:text-slate-300 dark:bg-slate-700">
            <div className="flex-1 m-8 md:basis-1/4 shadow-2xl shadow-yellow-600  rounded-2xl p-4">
              <h1 className="my-4 font-SpecialElite">Explore Space</h1> 
              <div className="flex justify-center content-center">
                <a href="https://explore-space-app.netlify.app/">
                  <img src={project1} 
                      alt="project 1 img" 
                      style={{ height: "200px", width: "300px" }}
                      className="rounded-lg object-cover" >                
                  </img>
                </a>
              </div>
              <div className="my-4">
                <h4>Tech used:</h4>
                <ul className="flex item-center gap-8 my-4">
                  <li className="w-10 flex-col justify-center items-center">
                    <img src={html}                    
                        alt="html-logo"/>
                    <div>
                      <h5 className="flex justify-center">html</h5>
                    </div>
                  </li>
                  <li className="w-10 flex-col justify-center items-center">
                    <img src={tailwind}
                        alt="tailwind-logo"/>
                    <div>
                      <h5 className="flex justify-center">Tailwind</h5>
                    </div>   
                  </li>
                  <li className="w-10 flex-col justify-center items-center">
                    <img src={js} 
                        alt="js-logo"/>
                    <div>
                      <h5 className="flex justify-center">Javascript</h5>
                    </div>                      
                  </li> 
                  <li className="w-10 flex-col justify-center items-center">
                    <img src={api} 
                        alt="api-logo"/>
                    <div>
                      <h5 className="flex justify-center">API</h5>
                    </div>                      
                  </li>
                </ul>
              </div>
              <div className="my-4 font-SpecialElite">This is an app that allow the user to fetch data from various NASA APIs and display images and informations about our amazing universe. In the first section the app retrieve information regarding asteroids near our planet, in the other two section an image or photograph of our universe is fetured.</div>
            </div>
            <div className=" flex-1 m-8 md:basis-1/4 shadow-2xl shadow-yellow-600 rounded-2xl p-4">
              <h1 className="my-4 font-SpecialElite">Calculator for Local Anaesthetic</h1>
              <div className="flex justify-center content-center">
                <a href="https://msd-app.netlify.app/">
                  <img src={project2} 
                      alt="project 2 img" 
                      style={{ height: "200px", width: "300px" }}
                      className="rounded-lg object-cover" >
                  </img>
                </a>
              </div>
              <div className="my-4">
                <h4>Tech used:</h4>
                <ul className="flex item-center gap-8 my-4">
                  <li className="w-10 flex-col justify-center items-center">
                    <img src={html}
                        alt="html-logo"/>
                    <div>
                      <h5 className="flex justify-center">html</h5>
                    </div>
                  </li>
                  <li className="w-10 flex-col justify-center items-center">
                    <img src={tailwind}
                        alt="tailwind-logo"/>
                    <div>
                      <h5 className="flex justify-center">Tailwind</h5>
                    </div>   
                  </li>
                  <li className="w-10 flex-col justify-center items-center">
                    <img src={js} 
                        alt="js-logo"/>
                    <div>
                      <h5 className="flex justify-center">Javascript</h5>
                    </div>                      
                  </li> 
                </ul>
              </div>
              <div className="my-4 font-SpecialElite">This app was made as a tool to be used by podiatrist when calculating the amount of local anaesthetic to safely inject into a patient. This is because for experience, i know that most podiatry do not remember the exact mathematical equation and they always have to look it up and manually calculate the dose, which is not ideal. Taking up time that can be used more efficiently.</div>
            </div>
            <div className="flex-1 m-8 md:basis-1/4 shadow-2xl shadow-yellow-600  rounded-2xl p-4">
              <h1 className="my-4 font-SpecialElite">Travel Journal</h1>
              <div className="flex justify-center content-center">
                <a href="https://mauro-travel-journal.netlify.app/">
                  <img src={project3} 
                      alt="project 3 img" 
                      style={{ height: "200px", width: "300px" }}
                      className="rounded-lg object-cover" >
                  </img>
                </a>
              </div>
              <div className="my-4">
                <h4>Tech used:</h4>
                <ul className="flex item-center gap-8 my-4">
                  <li className="w-10 flex-col justify-center items-center">
                    <img src={html}
                        alt="html-logo"/>
                    <div>
                      <h5 className="flex justify-center">html</h5>
                    </div>
                  </li>
                  <li className="w-10 flex-col justify-center items-center">
                    <img src={tailwind}
                        alt="tailwind-logo"/>
                    <div>
                      <h5 className="flex justify-center">Tailwind</h5>
                    </div>   
                  </li>
                  <li className="w-10 flex-col justify-center items-center">
                    <img src={react} 
                        alt="react-logo"/>
                    <div>
                      <h5 className="flex justify-center">React</h5>
                    </div>                      
                  </li> 
                </ul>
              </div>
              <div className="my-4 font-SpecialElite">This project was inspired by the Scrimba react course as a final solo project at the end of the second module of the course. It is a static page that display different location with immages, a brief description and a link to the google map location.
              </div>
            </div>
            <div className="flex-1 m-8 md:basis-1/4 shadow-2xl shadow-yellow-600  rounded-2xl p-4">
              <h1 className="my-4 font-SpecialElite">Blackjack</h1>
              <div className="flex justify-center content-center">
                <a href="https://blackjack-game-mauro.netlify.app/">
                  <img src={project4} 
                      alt="project 3 img" 
                      style={{ height: "200px", width: "300px" }}
                      className="rounded-lg object-cover" >
                  </img>
                </a>
              </div>
              <div className="my-4">
                <h4>Tech used:</h4>
                <ul className="flex item-center gap-8 my-4">
                  <li className="w-10 flex-col justify-center items-center">
                    <img src={html}
                        alt="html-logo"/>
                    <div>
                      <h5 className="flex justify-center">html</h5>
                    </div>
                  </li>
                  <li className="w-10 flex-col justify-center items-center">
                    <img src={tailwind}
                        alt="tailwind-logo"/>
                    <div>
                      <h5 className="flex justify-center">Tailwind</h5>
                    </div>   
                  </li>
                  <li className="w-10 flex-col justify-center items-center">
                    <img src={js} 
                        alt="js-logo"/>
                    <div>
                      <h5 className="flex justify-center">Javascrip</h5>
                    </div>                      
                  </li>
                  <li className="w-10 flex-col justify-center items-center">
                    <img src={api} 
                        alt="api-logo"/>
                    <div>
                      <h5 className="flex justify-center">API</h5>
                    </div>                      
                  </li> 
                </ul>
              </div>
              <div className="my-4 font-SpecialElite">This project was inspired by the Scrimba react course as a final solo project at the end of the second module of the course. It is a static page that display different location with immages, a brief description and a link to the google map location.
              </div>
              <div className="my-4"></div>
            </div>  
          </div>
        </div>
      </>
    )
  }