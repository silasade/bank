import React from "react";
import Navbar from "./Navbar";
import Intro from "./Intro";
import Reasons from "./Reasons";
import Article from "./Article";
import Footer from "./Footer";
export default function App(){

    return(
        <body >
            <Navbar/>
            <br/>
            <Intro/>
            <Reasons/>
            <Article/>
            <Footer/>
        </body>
        
    )
}