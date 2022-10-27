import logo from './logo.svg'
import React from "react";
import close from "./icon-close.svg";
import menu from "./icon-hamburger.svg";
export default function Navbar(){
    
    const [closes, setClose]=React.useState(true)
    var man= document.getElementsByClassName("links")
    //var show =document.getElementsByClassName("links").classList.toggle("active")
    const menus=closes? menu:  close
    function state(){
        
        setClose((inside)=>{
            return inside? false : true
        })
       if (menus===menu){
            for (var i =0; i<man.length; i++){
                man[i].style.display="flex"
               
                
                }
           
            
       }
       else{
        for (var i =0; i<man.length; i++){
            man[i].style.display="none"
        }
       }
       
    }
   
    return (
            <nav id='navbar' >
                
                <img src={logo} alt=""/>
                <div className='links'>
                    <div>
                        <a href="#">Home</a>
                    </div>
                    <div>
                        <a href="#">About</a>
                    </div>
                    <div>
                        <a href="#">Contact</a>
                    </div>
                    <div>
                        <a href="#">Blog</a>
                    </div>
                    <div>
                        <a href="#">Careers</a>
                    </div>
                </div>
                <img src={menus} onClick={state} alt="" className='menu'/>
                <button className='request'>Request Invite</button>
            </nav>
        )
    
}