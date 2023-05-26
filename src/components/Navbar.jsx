import { queries } from "@testing-library/react"
import React from "react"

export default function Navbar() {
  
  // work it out
  function contact(){
    const contactSectio = document.getElementById('contact')
    contactSectio.scrollIntoView({ behavior: 'smooth' });
    console.log('clicked')
  }

    return (
      <>
        <nav className="">
          <div className="">
            <p></p>
            <ul className="flex items-center justify-center md:justify-end">
              <li className="mx-4 my-5 md:mx-8">
                <a href="/projects">Contact</a>
              </li>
              <li className="mx-4 my-5 md:mx-8">Work</li>
              <li className="mx-4 my-5 md:mx-8">About</li>
              <li className="mx-4 my-5 p-4 bg-green-700 text-white md:mx-8"><a href="#" onClick={contact}>Resume</a></li>
            </ul>
          </div>
        </nav>
      </>
    )
}