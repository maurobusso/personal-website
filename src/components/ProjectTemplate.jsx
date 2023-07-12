import React from "react"

import html from "../Assets/icons/html.png"
import tailwind from "../Assets/icons/tailwind.png"
import react from "../Assets/icons/react.png"
import js from "../Assets/icons/js.png"
import api from "../Assets/icons/api-64.png"


export default function ProjectTemplate(props) {

  const { darkMode, link, icons} = props

  console.log(props)

  const handleClick = (link) => {
    window.open(link) // Open the link in a new tab/window
  }
  
  const iconElement = icons.map(tech => {
    
    const icons = []

    if (tech === 'html') {
      icons.push(
          <li className="w-10 flex-col justify-center items-center">
            <img src={html}
                alt="html-logo"/>
            <div>
              <h5 className="flex justify-center">html</h5>
            </div>
          </li>
      )
    } else if (tech === 'js') {
      icons.push(
          <li className="w-10 flex-col justify-center items-center">
            <img src={js}
                alt="js-logo"/>
            <div>
              <h5 className="flex justify-center">Javascript</h5>
            </div>
          </li>
      )
    } else if (tech === 'api') {
      icons.push(
          <li className="w-10 flex-col justify-center items-center">
            <img src={api}
                alt="api-logo"/>
            <div>
              <h5 className="flex justify-center">APIs</h5>
            </div>
          </li>
      )
    } else if (tech === 'react') {
      icons.push(
          <li className="w-10 flex-col justify-center items-center">
            <img src={react}
                alt="react-logo"/>
            <div>
              <h5 className="flex justify-center">React.js</h5>
            </div>
          </li>
      )
    } else if (tech === 'tailwind') {
      icons.push(
          <li className="w-10 flex-col justify-center items-center">
            <img src={tailwind}
                alt="tailwind-logo"/>
            <div>
              <h5 className="flex justify-center">Tailwind</h5>
            </div>
          </li>
      )
    } 
    return icons
  })

    return (

        <>
          <div className={`${darkMode ? 'bg-slate-700 text-slate-300' : ''} p-14`}>    
              <div className="flex-1 md:basis-1/4 shadow-2xl shadow-yellow-600 rounded-2xl p-4">
              <h1 className="my-4 font-SpecialElite">{props.title}</h1> 
                <div className="flex justify-center content-center">
                  <a  rel="noopener noreferrer">
                    <img src={`${props.img}`} 
                        onClick={handleClick}
                        alt={props.id} 
                        style={{ height: "200px", width: "300px", cursor: 'pointer' }}
                        className="rounded-lg object-cover" >                
                    </img>
                  </a>
                </div>
                <div className="my-4">
                  <h4>Tech used:</h4>
                  <ul className="flex justify-center my-4">
                    <li className="flex items-center gap-8 md:gap-12 justify-center ">
                      {iconElement}
                    </li>
                  </ul>
                </div>
                <div className="my-4 font-SpecialElite">{props.description}</div>
              </div>
          </div> 
        </>
    )
}