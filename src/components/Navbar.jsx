import React from "react"
import { Link } from "react-scroll"
import mauroCv from "../Assets/Mauro-cv.pdf"
import ToggleButton from "./ToggleButton"


export default function Navbar(props) {

  const {darkMode, toggleSwitch } = props 

  const [ isMenuOpen, setIsMenuOpen ] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

    return (
      <>
        <nav className={`${darkMode ? 'dark' : 'bg-yellow-200'} font-SpecialElite shadow border-b-2`}>
          <div className="dark:bg-slate-700 dark:text-slate-300 dark:border-b-2 dark:border-white p-8">

            <div className="flex justify-end items-center ">
              <span className="ml-4 border rounded p-2 pt-0 pb-0 cursor-pointer md:hidden block bg-yellow-600 max-w-min hover:text-orange-800">
                <button className="flex flex-col justify-center items-center w-8 h-12" 
                        onClick={toggleMenu}
                >
                  <span className="w-full h-0.5 bg-black my-0.5"></span>
                  <span className="w-full h-0.5 bg-black my-0.5"></span>
                  <span className="w-full h-0.5 bg-black my-0.5"></span>
                </button>
              </span>
            </div>            

              <ul
                className={`md:flex md:items-center md:justify-end w-full md:w-auto ${
                  isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8 h-0"
                } transition-all ease-in-out duration-300 transform md:opacity-100 md:translate-y-0 md:static md:-mt-0`}
              >
                <li className="m-4 md:mx-8 hover:text-orange-800">
                  <Link to="contact" smooth={true} duration={500}>Contact</Link>
                </li>
                <li className="m-4 md:mx-8 hover:text-orange-800">
                  <Link to="project" smooth={true} duration={500}>Projects</Link>
                </li>
                <li className="m-4 md:mx-8 hover:text-orange-800">
                  <Link to="about" smooth={true} duration={500}>About</Link>
                </li>
                <li className="m-4 p-4 max-w-min bg-yellow-600 md:mx-8 hover:text-orange-800">
                  <a href={mauroCv} target="_blank" rel="noreferrer">Resume</a>
                </li>
                <li className="">
                  <ToggleButton 
                    toggleSwitch={toggleSwitch} 
                    darkMode={darkMode}
                  />
                </li>
              </ul>
            
          </div>
        </nav>
      </>
    )
}