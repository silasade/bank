import React from "react"
import data from "./Data"
export default function Reasons(prop){
    const newe = data.map((items)=>{
        return(
            <div >
                <img className="small-image" src={items.img} alt=""/>
                <h2>{items.title}</h2>
                <h5>{items.text}</h5>
            </div>
        )

    })
    return(
        <div className="Reasons">
            <h1 >Why choose Easybank?</h1>
            <h5 className="reasons1">We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</h5>
            <div className="reasons">
                    {newe}
            </div>
        </div>
    )
}