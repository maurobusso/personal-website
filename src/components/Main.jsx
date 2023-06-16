//import './App.css'
import React from "react"
import myImg from "../Assets/profile-pic.jpg"

// function click(){
//   console.log('hello')
// }

export default function Main(props) {

  const { darkMode } = props 

  return (
    <>
      <main className={`${darkMode ? 'dark' : ''}`}>
        <div className="p-10 items-center justify-center md:p-20 lg-60 md:text-center dark:bg-slate-700">
            <h1 className="font-Fredericka text-3xl text-yellow-600 underline py-20">
              Hello, I am Mauro
            </h1>
            <div className="my-8 font-SpecialElite text-lg dark:text-slate-300">
              FULL-STACK SOFTWARE ENGINEER | NODE.JS | JAVASCRIPT | REACT | MONGO DB
            </div>
            <div className="md:flex items-center">
              <span className="text-lg md:px-8 lg:px-16 md:mt-20 md:max-w-2xl font-SpecialElite dark:text-slate-300">
                I'm a front-end developer with a passion for building apps and websites. I love to problem solve and think outside of the box. A strong background in Health care has taught me the importance of constantly learning and improving, and how to communicate effectively. I am highly passionate about advancing my development career in tech and I am open to new opportunites!
              </span>
              <div className="relative mx-auto w-60 h-60 my-20 rounded-xl lg:w-80 lg:h-80"> 
                <div className="absolute -right-8 -top-12 bg-yellow-600 w-60 h-60 my-20 rounded-xl lg:w-80 lg:h-80"></div>
                <div className="relative mx-auto w-60 h-60 my-20 rounded-xl lg:w-80 lg:h-80">
                  <img src={myImg} alt="img" layout="fill" className="object-cover w-full h-auto rounded-xl"></img>
                </div>
              </div>
            </div>
        </div>
      </main>
    </>
  )
}



