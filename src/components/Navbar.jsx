import React from "react"
import { Link } from "react-scroll"
import mauroCv from "../Assets/Mauro-cv.pdf"

export default function Navbar() {

    return (
      <>
        <nav className="font-SpecialElite">
          <div className="">
            <p></p>
            <ul className="flex items-center justify-center md:justify-end">
              <li className="mx-4 my-5 md:mx-8">
                <Link to="contact" smooth={true} duration={500}>Contact</Link>
              </li>
              <li className="mx-4 my-5 md:mx-8">
                <Link to="project" smooth={true} duration={500}>Projects</Link>
              </li>
              <li className="mx-4 my-5 md:mx-8">
                <Link to="about" smooth={true} duration={500}>About</Link>
              </li>
              <li className="mx-4 my-5 p-4 bg-yellow-600 text-white md:mx-8">
                <a href={mauroCv} target="_blank" rel="noreferrer">Resume</a>
              </li>
            </ul>
          </div>
        </nav>
      </>
    )
}