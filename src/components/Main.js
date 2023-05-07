//import './App.css'
import React from "react"

function click(){
  console.log('hello')
}

export default function Main() {
  return (
    <>
      <div>
        <div>
          <h1>
            Hi, I am Mauro
          </h1>
          <p>I'm a front-end developer with a passion for building impressive web apps and websites. I love to problem solve and think outside of the box.</p>
        </div>
        <div>
          <button onClick={click}>Get in touch</button>
        </div>
      </div>
    </>
  )
}



