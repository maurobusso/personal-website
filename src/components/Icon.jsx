import React from 'react'
import data from "../Assets/project-data"

export default function Icon(props) {

    // const { techUsed } = props
    // console.log(techUsed)
    console.log(data)

    const icon = data.map( item => {


    return (
            <li key={item.key} className="w-10 flex-col justify-center items-center">
                <img src={item.icon}                    
                    alt={item.techUsed}/>
                <div>
                    <h5 className="flex justify-center">{item.techUsed}</h5>
                </div>
            </li>
        )

    })  

    return (
        <div> {icon} </div>
    )
}                         
                            
                        