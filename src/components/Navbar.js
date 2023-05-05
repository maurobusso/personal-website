import React from "react"

export default function Navbar() {
    return (
      <>
        <nav className="">
          <div className="items-center">
            <p></p>
            <ul className="flex items-center">
              <li className="mx-4 my-5">
                <a href="/projects">Contact</a>
              </li>
              <li className="mx-4 my-5">Work</li>
              <li className="mx-4 my-5">About</li>
              <li className="mx-4 my-5 p-4 bg-green-700 text-white "><a href="#">Resume</a></li>
            </ul>
          </div>
        </nav>
      </>
    )
}