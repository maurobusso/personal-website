import React from "react"

export default function Navbar() {
    return (
      <>
        <nav className="ml-8 p-4">
          <div className="">
            <p></p>
            <ul className="inline-flex items-center">
              <li className="mx-4 my-5">Contact</li>
              <li className="mx-4 my-5">Work</li>
              <li className="mx-4 my-5">About</li>
              <li className="mx-4 my-5 p-4 bg-green-700  text-white "><a href="#">Resume</a></li>
            </ul>
          </div>
        </nav>
      </>
    )
  }