import React from "react"

import html from "../Assets/icons/html.png"
import tailwind from "../Assets/icons/tailwind.png"
import react from "../Assets/icons/react.png"
import js from "../Assets/icons/js.png"
import ts from "../Assets/icons/ts.png"
import api from "../Assets/icons/api-64.png"
import node from "../Assets/icons/node-js.png"
import express from "../Assets/icons/express-js.png"
import mongodb from "../Assets/icons/mongodb.png"


export default function ProjectTemplate(props) {

  const { darkMode, link, icons} = props

  console.log(props)

  // const handleClick = () => {
  //   window.open(link , 'https://maurobusso.netlify.app/' ) Open the link in a new tab/window
  // }
  
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
    } else if (tech === 'ts') {
      icons.push(
          <li className="w-10 flex-col justify-center items-center">
            <img src={ts}
                alt="ts-logo"/>
            <div>
              <h5 className="flex justify-center">TypeScript</h5>
            </div>
          </li>
      )
    }else if (tech === 'node') {
      icons.push(
          <li className="w-10 flex-col justify-center items-center">
            <img src={node}
                alt="node-logo"/>
            <div>
              <h5 className="flex justify-center">Node.JS</h5>
            </div>
          </li>
      )
    }else if (tech === 'express') {
      icons.push(
          <li className="w-10 flex-col justify-center items-center">
            <img src={express}
                alt="express-logo"/>
            <div>
              <h5 className="flex justify-center">Express</h5>
            </div>
          </li>
      )
    }else if (tech === 'mongodb') {
      icons.push(
          <li className="w-10 flex-col justify-center items-center">
            <img src={mongodb}
                alt="mongodb-logo"/>
            <div>
              <h5 className="flex justify-center">MongoDB</h5>
            </div>
          </li>
      )
    }
    return icons
  })
  

    return (

        <>
          <div className={`${darkMode ? 'bg-slate-600 text-slate-300' : ''} p-14`}>   
            <div className={`${darkMode ? 'bg-slate-700 text-slate-300' : ''}flex-1 md:basis-1/4 shadow-2xl shadow-yellow-600 rounded-2xl p-4 border-2 border-yellow-600`}>
              <h1 className="my-4 font-SpecialElite">{props.title}</h1> 
                <div className="flex justify-center content-center ">
                  <a href={link} rel="noopener noreferrer">
                    <img src={`${props.img}`} 
                        //onClick={handleClick}
                        alt={props.id} 
                        style={{ height: "200px", width: "300px", cursor: 'pointer' }}
                        className="rounded-lg object-cover border border-black" >                
                    </img>
                  </a>
                </div>
                <div className="my-2">
                  <h4>Tech used:</h4>
                  <ul className="flex my-2 py-2 border-b-2 border-yellow-600">
                    <li className="flex flex-wrap items-center gap-8 justify-center text-sm md:text-base">
                      {iconElement}
                    </li>
                  </ul>
                </div>
                <div className="my-4 font-SpecialElite text-sm md:text-lg">{props.description}</div>
              </div>
          </div> 
        </>
    )
}



// Imagine I asked you to add a new table to the UI of our application.

// The table needs to display a list of drinks.

// Each drink can be one of either: Soft Drink, Alcoholic Drink, Caffeinated Drink.

// All drinks have a name. Example: Coca Cola, Beer, Coffee.

// Caffeinated drinks have caffeine content (e.g. 50mg/100ml)
// Alcoholic drinks have alcohol content (e.g. 4%)
// Soft drinks have sugar content (e.g. 8g/100ml)
// For each drink in the table, the first column should be the name of the drink.

// The second column will be a details column, which will show either the sugar content, caffeine content, or alcohol content of the drink.

// How would you go about implementing this?

// Try to adhere to best practices and remain open to extension.