import React from "react"
import project1 from "../Assets/projects-tumbnails/explore-space.png"
import project2 from "../Assets/projects-tumbnails/local-anahestetic-calculator.png"
import project3 from "../Assets/projects-tumbnails/travel-journal.png"

export default function Project() {
    return (
      <>
        <span className="flex justify-center">My Projects</span>
        <div className="flex flex-col gap-10 mx-4 md:mx-10 lg:flex-row lg:flex-wrap">
          <div className="basis-1/3 flex-1 m-8 md:basis-1/4">
            <h1>Explore Space</h1>
            <a href="https://explore-space-app.netlify.app/">
              <img src={project1} alt="" className="rounded-lg object-cover" ></img>
            </a>
            <span>tech used</span>
            <div></div>
          </div>
          <div className="basis-1/3 flex-1 m-8 md:basis-1/4">
            <h1>Calculator for Local Anaesthetic</h1>
            <a href="https://msd-app.netlify.app/">
              <img src={project2} alt="" className="rounded-lg object-cover" ></img>
            </a>
            <span>tech used</span>
            <div></div>
          </div>
          <div className="basis-1/3 flex-1 m-8 md:basis-1/4">
            <h1>Travel Journal</h1>
            <a href="https://mauro-travel-journal.netlify.app/">
              <img src={project3} alt="" className="rounded-lg object-cover" ></img>
            </a>
            <span>tech used</span>
            <div></div>
          </div>
          <div className="basis-1/3 flex-1 m-8 md:basis-1/4">
            <h1>Project</h1>
            <a>
              <img src="web1" alt="" className="rounded-lg object-cover" ></img>
            </a>
            <span>tech used</span>
            <div></div>
          </div>  
        </div>
      </>
    )
  }