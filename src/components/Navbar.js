import React from "react"

export default function Navbar() {
    return (
      <>
        <nav className="flex ml-8 p-4">
          <div className="flex">
            <p></p>
            <ul className="inline-flex">
              <li className="ml-8">Contact</li>
              <li className="ml-8">Work</li>
              <li className="ml-8">About</li>
              <li className="ml-8 bg-green-700 p-4 text-white"><a href="#">Resume</a></li>
            </ul>
          </div>
        </nav>
      </>
    )
  }