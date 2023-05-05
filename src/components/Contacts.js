import React from "react"

export default function Contacts() {
    return (
      <>
        <div className="flex flex-row justify-center gap-4 my-10 md:gap-8 md:m-20">
            <div>
                <a href="#" className="block md:inline-block m-2 md:m-8">email</a>
            </div>
            <div>
                <a href="#" className="block md:inline-block m-2 md:m-8">Linkedin</a>
            </div>
            <div>
                <a href="#" className="block md:inline-block m-2 md:m-8">Github</a>
            </div>
            <div>
                <a href="#" className="block md:inline-block m-2 md:m-8">Twitter</a>
            </div>
        </div>
      </>
    )
  }