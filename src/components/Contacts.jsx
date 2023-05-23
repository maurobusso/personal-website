import React from "react"
import github from "../Assets/icons/github.png"
import linkedin from "../Assets/icons/linkedin.png"
import gmail from "../Assets/icons/gmail.png"
import twitter from "../Assets/icons/twitter.png"

export default function Contacts() {
    return (
      <>
        <span className="flex justify-center">Get in contact</span>
        <div className="flex flex-row justify-center gap-4 my-10 mx-10 pb-20 border-b-4 border-green-700 md:gap-8 md:my-20 md:mx-40 ">
            <div>
                <a href="mailto:mauro.busso12@gmail.com" className="block w-14 md:inline-block m-2 md:m-8">
                    <img src={gmail} alt="gmail logo" />
                </a>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/maurobusso/" className="block w-14 md:inline-block m-2 md:m-8">
                    <img src={linkedin} alt="linkedin logo" />
                </a>
            </div>
            <div>
                <a href="https://github.com/maurobusso" className="block w-14 md:inline-block m-2 md:m-8">                    
                    <img src={github} alt="github logo" />
                </a>
            </div>
            <div>
                <a href="https://twitter.com/MauroBusso4" className="block w-14 md:inline-block m-2 md:m-8">   
                    <img src={twitter} alt="twitter logo" />         
                </a>
            </div>
        </div>
      </>
    )
  }