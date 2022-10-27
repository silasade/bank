import React from "react";
import data from "./Data2";
export default function Article(prop){
    const art =data.map((items)=>{
        return(
            <div className="inner">
                <div>
                <img className="art" src={items.img} alt="" ></img>

                </div>
                <div className="inner-inner">
                <h6>{items.author}</h6>
                <h3>{items.title}</h3>
                <h5>{items.content}</h5>
                </div>
                
            </div>
        )
    })
    return(
        <div className="article">

            <h1>Latest Articles</h1>
            <div className="outer">
                {art}
            </div>
        </div>
        
    )
}