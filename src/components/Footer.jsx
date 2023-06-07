import React from "react"

export default function Footer() {
    return (
      <>
        <div className="m-10 items-center justify-center md:m-20 lg-60">
          <span className="font-SpecialElite text-lg">If you consider me a good candidate for an open position, or if you'd like to discuss a freelance project, else if you just want to say hello, contact me on social media, or send me a message!</span>
          <form>
              <input></input>
              <input></input>
              <input></input>
          </form> 
        </div>
        <div className="py-10 bg-green-700" >
          <span className="flex justify-center font-SpecialElite">Thank you for visiting my portfolio :)</span>
        </div>   
      </>
    )
  }