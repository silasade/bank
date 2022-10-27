import logo from './logo.svg'
import React from 'react'
import facebook from "./icon-facebook.svg"
import instagram from "./icon-instagram.svg"
import pinterest from "./icon-pinterest.svg"
import twitter from "./icon-twitter.svg"
import youtube from "./icon-youtube.svg"
export default function Footer(){
    return (
        <div className='main'>
            <div className='first'>
            <img className='log' src={logo} alt=""></img>
                <div>
                    <img src={facebook} alt=""></img>
                    <img src={youtube} alt=""></img>
                    <img src={twitter} alt=""></img>
                    <img src={pinterest} alt=""></img>
                    <img src={instagram} alt=""></img>
                </div>
            </div>
            <div className='second'>
                <a href="#">About Us</a>
                <a href="#">Contact</a>
                <a href="#">Blog</a>
            </div>
            <div className='third'>
                <a href="#">Careers</a>
                <a href="#">Support</a>
                <a href="#">Privacy</a>
            </div>
            <div className='fourth'>
                <button>Request Invite</button>
                <h5>&copy;Easybank. All Rights Reserved</h5>
            </div>
        </div>
    )
}