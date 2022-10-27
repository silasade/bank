import React from 'react';
import phone from './image-mockups.png'
export default function Intro(){
        return(
            <div className='intro'>
                <div className="intro2">
                    <h1 className='title'>Next generation digital banking</h1>
                    <h5>Take your financial life online. Your Easybank account will be a one-stop for spending, saving, budgeting, investing, and much more.</h5>
                    <button>Request Invite</button>
                </div>
                <div>
                    <img src={phone} alt=''  className='image'></img>
                </div>
            </div>
        )
}