import React from "react"

export default function Navbar() {
    return (
      <>
        <nav className="flex">
          <div className="inline-flex">
            <p>Mauro Busso</p>
            <ul className="inline-flex ml-4">
              <li>Contact</li>
              <li>Work</li>
              <li>About</li>
              <li>Resume</li>
            </ul>
          </div>
        </nav>
      </>
    )
  }