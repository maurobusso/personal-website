import React from "react"
// import project1 from "../Assets/projects-tumbnails/explore-space.png"
// import project2 from "../Assets/projects-tumbnails/local-anahestetic-calculator.png"
// import project3 from "../Assets/projects-tumbnails/travel-journal.png"
// import project4 from "../Assets/projects-tumbnails/blackjack.png"

//project data
import data from "../Assets/project-data"

//import { Link } from "react-scroll"
import ProjectTemplate from "./ProjectTemplate"

 
export default function Project(props) {

  const { darkMode } = props

    const project = data.map( item => {
          return (
              <ProjectTemplate 
                  darkMode={darkMode}
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  img={item.img}
                  link={item.link}
                  icons={item.techUsed}       
              />
          )
    })

    return (
      <>
        <div className={`${darkMode ? 'bg-slate-600 text-slate-300' : ''} pt-20`}>    
          <div className="">
              <h2 className="flex justify-center pt-20 pb-20 font-Fredericka text-3xl text-yellow-600" id="project">My Projects</h2>
              <span className="flex justify-center pb-10 font-SpecialElite">Click on any project to learn more</span>
              <div className="md:grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                {project}
              </div>           
          </div>
        </div>          
      </>
    )
  }    


  //hide project descriptiojn when on mobile 
  //fix tech used section when on mobile