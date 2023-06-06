//import './App.css'
import React from "react"
import myImg from "../Assets/profile-pic.jpg"

// function click(){
//   console.log('hello')
// }

export default function Main() {
  return (
    <>
      <div className="m-10 items-center justify-center md:m-20 lg-60 md:text-center">
          <h1 className="font-Fredericka text-3xl text-green-600 underline my-20">
            Hello, I am Mauro
          </h1>
          <div className="my-8">
            FULL-STACK SOFTWARE ENGINEER | NODE.JS | JAVASCRIPT | REACT | MONGO DB
          </div>
          <div className=" md:flex items-center">
            <span className="text-xl md:px-8 lg:px-16 md:mt-20 md:max-w-2xl">
              I'm a front-end developer with a passion for building web apps and websites. I love to problem solve and think outside of the box. A strong background in Health care has taught me the importance of continus learning and improving, and how to communicate effectively. I am highly passionate about furthering my development and career in tech and I am open to hearing about opportunites!
            </span>

            <div className="relative mx-auto w-60 h-60 my-20 rounded-xl lg:w-80 lg:h-80"> 
              <div className="absolute -right-8 -top-12 bg-green-700 w-60 h-60 my-20 rounded-xl lg:w-80 lg:h-80"></div>
              <div className="relative mx-auto w-60 h-60 my-20 rounded-xl lg:w-80 lg:h-80">
                <img src={myImg} alt="img" layout="fill" className="object-cover w-full h-auto rounded-xl"></img>
              </div>
            </div>
          </div>



        {/* <div className="relative mx-auto rounded-full w-80 h-80 my-20">
          <img src={myImg} alt="img" layout="fill" className="object-cover w-full h-auto rounded-full "></img>
        </div> */}
      </div>
    </>
  )
}



