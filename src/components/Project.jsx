import React from "react"
import project1 from "../Assets/projects-tumbnails/explore-space.png"
import project2 from "../Assets/projects-tumbnails/local-anahestetic-calculator.png"
import project3 from "../Assets/projects-tumbnails/travel-journal.png"
import html from "../Assets/icons/html.png"
import tailwind from "../Assets/icons/tailwind.png"
import react from "../Assets/icons/react.png"
import js from "../Assets/icons/js.png"


export default function Project() {
    return (
      <>
        <span className="flex justify-center mt-20 mb-20">My Projects</span>
        {/* <span className="px-10">click on any project to learn more</span> */}
        <div className="flex flex-col gap-10 mx-4 md:mx-10 lg:flex-row lg:flex-wrap">
          <div className="basis-1/3 flex-1 m-8 md:basis-1/4">
            <h1 className="my-4">Explore Space</h1> 
            <a href="https://explore-space-app.netlify.app/">
              <img src={project1} alt="" className="rounded-lg object-cover" ></img>
            </a>
            <div className="my-4">
              <h4>Tech used</h4>
              <ul className="flex my-4 gap-4">
                <li className="">
                  <img src={html}
                       alt="html-logo"/>
                  <h5>html</h5>
                </li>
                <li>
                  <img src={tailwind}
                      alt="tailwind-logo"/>
                  <h5>Tailwind.css</h5>    
                </li>
                <li>
                  <img src={js} 
                       alt="react-logo"/>
                  <h5>Javascript</h5>                       
                  </li> 
              </ul>
            </div>
            <div className="my-4">This is an app that allow the user to fetch data from the NASA API and display images and some informations about our amazing universe.</div>
          </div>
          <div className="basis-1/3 flex-1 m-8 md:basis-1/4">
            <h1 className="my-4">Calculator for Local Anaesthetic</h1>
            <a href="https://msd-app.netlify.app/">
              <img src={project2} alt="" className="rounded-lg object-cover" ></img>
            </a>
            <div className="my-4">
              <h4>Tech used</h4>
              <ul className="flex items-center w-32 my-4">
                <li>
                  <img src={html}
                       alt="html-logo"/>
                </li>
                <li>
                  <img src={tailwind}
                      alt="tailwind-logo"/>
                </li>
                <li>
                  <img src={js} 
                       alt="react-logo"/>
                  </li>                     
              </ul>
            </div>
            <div className="my-4">This app was made as a tool to be used by podiatrist when calculating the amount of local anaesthetic to safely inject into a patient. This is because for experience, i know that most podiatry do not remember the exact mathematical equation and they always have to look it up and manually calculate the dose, which is not ideal. Taking up time that can be used more efficiently.</div>
          </div>
          <div className="basis-1/3 flex-1 m-8 md:basis-1/4">
            <h1 className="my-4">Travel Journal</h1>
            <a href="https://mauro-travel-journal.netlify.app/">
              <img src={project3} alt="" className="rounded-lg object-cover" ></img>
            </a>
            <span className="my-4">Tech used</span>
            <div className="my-4">This project was inspired by the Scrimba react course as a final solo project at the end of the second module of the course. It is a static page that display different location with immages, a brief description and a link to the google map location.</div>
          </div>
          <div className="basis-1/3 flex-1 m-8 md:basis-1/4">
            <h1 className="my-4">Project</h1>
            <a href="something">
              <img src="web1" alt="" className="rounded-lg object-cover" ></img>
            </a>
            <span className="my-4">tech used</span>
            <div className="my-4"></div>
          </div>  
        </div>
      </>
    )
  }

  <li>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                  alt="html-logo"
                />
              </li>