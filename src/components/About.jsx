import React from "react"

export default function About(props) {

  const { darkMode } = props

    return (
      <>
        <div className={`${darkMode ? 'bg-slate-600 text-slate-300' : 'bg-yellow-200'}`}>
          <div className="p-10 items-center justify-center md:p-20 lg-60" id="about">
            <span className="flex justify-center mt-20 mb-20 font-Fredericka text-3xl text-yellow-700">About Me</span>
            <div className="md:px-20 lg:px-40">

              <p className="font-SpecialElite text-sm md:text-base">
                At the age of 13, I discovered my passion for tech while exploring my parents' Windows 98 PC. My brother and I would visit the recycling center, where we picked up discarded computers to take them apart and explore their inner workings.
              <br/>
              <br/>
                During my university years, I worked on a project using Wix to create a website that helped people with rehabilitation. It was then that I realized my deep affinity for web development. Motivated by this newfound passion, I dived into learning HTML, CSS, and JavaScript. This marked the turning point in my career, as I decided to transition into software development. 
              <br/>
              <br/>
                Since then, I have embraced continuous learning, leveraging online resources and engaging with coding communities. Through perseverance and tackling challenging projects, I have sharpened my skills and grown as a developer.
              </p>
            </div>
          </div>
          <div className="py-10 bg-yellow-600" >
            <span className="flex justify-center font-SpecialElite text-xs md:text-lg">Thank you for visiting my portfolio :)</span>
          </div>   
        </div>
      </>
    )
  }