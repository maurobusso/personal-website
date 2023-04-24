//import './App.css'
import React from "react"
import myImg from "../Assets/profile-pic.jpg"

// function click(){
//   console.log('hello')
// }

export default function Main() {
  return (
    <>
      <div className="m-20">
        <div className="">
          <h1 className="font-extrabold text-3xl text-green-600 underline my-6">
            Hello, I am Mauro
          </h1>
          <div className="my-3">
            FULL-STACK SOFTWARE ENGINEER | NODE.JS | JAVASCRIPT | REACT | MONGO DB
          </div>
          <p className="text-justify">I'm a front-end developer with a passion for building web apps and websites. I love to problem solve and think outside of the box. A strong background in the Health care has taught me the importance of continus learning and improving, and how to communicate effectively. I am highly passionate about furthering my development and career in tech and I am open to hearing about opportunites!
          </p>
        </div>
        <div className="relative mx-auto rounded-full w-80 h-80 mt-20 ">
          <img src={myImg} alt="JPG image" layout="fill" className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 "></img>
        </div>
      </div>
    </>
  )
}



