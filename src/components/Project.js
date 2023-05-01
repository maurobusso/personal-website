import React from "react"

export default function Project() {
    return (
      <>
        <div className="flex flex-col gap-10 lg:flex-row lg:flex-wrap">
          <div className="basis-1/3 flex-1 border-2 border-black m-8">
            <h1>title</h1>
            <img src="web1" className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"></img>
            <span>tech used</span>
            <div></div>
          </div>
          <div className="basis-1/3 flex-1 border-2 border-black m-8">
            <h1>title</h1>
            <img src="web1" className="rounded-lg object-cover" ></img>
            <span>tech used</span>
            <div></div>
          </div>
          <div className="basis-1/3 flex-1 border-2 border-black m-8">
            <h1>title</h1>
            <img src="web1" className="rounded-lg object-cover" ></img>
            <span>tech used</span>
            <div></div>
          </div>
          <div className="basis-1/3 flex-1 border-2 border-black m-8">
            <h1>title</h1>
            <img src="web1" className="rounded-lg object-cover" ></img>
            <span>tech used</span>
            <div></div>
          </div>  
        </div>
      </>
    )
  }