import React from "react"

export default function About(props) {

  const { darkMode } = props

    return (
      <>
        <div className={`${darkMode ? 'bg-slate-700 text-slate-300' : ''}`}>
          <div className="p-10 items-center justify-center md:p-20 lg-60" id="about">
            <span className="flex justify-center mt-40 mb-20 font-Fredericka text-3xl text-yellow-600">About Me</span>
            <div className="">

              <p className="font-SpecialElite">""At the age of 13, I discovered my passion for coding while exploring my dad's computer. Despite the limited resources and a lack of learning materials in my native language, I began teaching myself Python. Although I faced initial challenges and setbacks, my love for technology never wavered. 
              <br/>
              <br/>
              During my university years, I worked on a project using Wix to create a website that helped people with rehabilitation. It was then that I realized my deep affinity for web development. Motivated by this newfound passion, I dived into learning HTML, CSS, and JavaScript. This marked the turning point in my career, as I decided to transition into software development. 
              <br/>
              <br/>
              Since then, I have embraced continuous learning, leveraging online resources and engaging with coding communities. Through perseverance and tackling challenging projects, I have sharpened my skills and grown as a developer.
              <br/>
              <br/>
              I am now equipped with the knowledge and skills to contribute to the ever-evolving field of software development. I look forward to making a meaningful impact and collaborating with like-minded professionals in creating innovative solutions."
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