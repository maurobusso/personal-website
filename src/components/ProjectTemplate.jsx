import React from "react"
import Icon from "./Icon"


export default function ProjectTemplate(props) {

  const { darkMode } = props

    return (
        <>
          <div className={`${darkMode ? 'dark' : ''}`}>    
            <h2 className="flex justify-center pt-40 pb-20 font-Fredericka text-3xl text-yellow-600 dark:bg-slate-700" id="project">My Projects</h2>
            <span className="flex justify-center px-10 font-SpecialElite dark:text-slate-300 dark:bg-slate-700">Click on any project to learn more</span>
            <div className="flex flex-col gap-10 px-4 md:px-10 lg:flex-row lg:flex-wrap dark:text-slate-300 dark:bg-slate-700"></div>
              <div className="flex-1 m-8 md:basis-1/4 shadow-2xl shadow-yellow-600  rounded-2xl p-4">
              <h1 className="my-4 font-SpecialElite">{props.title}</h1> 
                <div className="flex justify-center content-center">
                  <a href={`${props.link}`}>
                    <img src={`${props.img}`} 
                        alt={props.id} 
                        style={{ height: "200px", width: "300px" }}
                        className="rounded-lg object-cover" >                
                    </img>
                  </a>
                </div>
                <div className="my-4">
                <h4>Tech used:</h4>
                
                <ul className="flex item-center gap-8 my-4">
                  <li className="w-10 flex-col justify-center items-center">
                    <Icon />
                  </li>
                </ul>
                </div>
              <div className="my-4 font-SpecialElite">{props.description}</div>
            </div>
          </div> 
        </>
    )
}