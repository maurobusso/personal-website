//import './App.css'
import React from "react"
import myImg from "../Assets/profile-pic.jpg"

// function click(){
//   console.log('hello')
// }

export default function Main() {
  return (
    <>
      <div className="m-10 items-center justify-center md:m-20 lg-60">
        <div className="md:text-center">
          <h1 className="font-Fredericka text-3xl text-green-600 underline my-20">
            Hello, I am Mauro
          </h1>
          <div className="my-8">
            FULL-STACK SOFTWARE ENGINEER | NODE.JS | JAVASCRIPT | REACT | MONGO DB
          </div>
          <span className="">
            I'm a front-end developer with a passion for building web apps and websites. I love to problem solve and think outside of the box. A strong background in Health care has taught me the importance of continus learning and improving, and how to communicate effectively. I am highly passionate about furthering my development and career in tech and I am open to hearing about opportunites!
          </span>
        </div>
        <div className="relative mx-auto rounded-full w-80 h-80 my-20">
          <img src={myImg} alt="img" layout="fill" className="object-cover w-full h-auto rounded-full "></img>
        </div>
      </div>
    </>
  )
}



