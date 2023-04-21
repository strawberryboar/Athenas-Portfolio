import React, { useState } from "react";
import './LinkButton.css';
import catPng from '../assets/cat.png';


export default function LinkButton() {

    const [isShown, setIsShown] = useState(false);
    const [imgOpacity, setImgOpacity] = useState(1);

    return(
        <div className='btnDiv'>
        <img src={catPng}
            onMouseEnter={() => {
                setImgOpacity(0.5)
                setIsShown(true)
                
            }}
            onMouseLeave={() => {
                setImgOpacity(1)
                setIsShown(false)
            }}
            style={{opacity: imgOpacity}}>
        </img>
            {isShown && (
                <div className='linkBtn'
                onMouseEnter={() => {
                    setIsShown(true)
                    setImgOpacity(0.5)
                }}
                onMouseLeave={() => setIsShown(false)}>
                    <a href='https://strawberryboar.github.io/Meal-Assistant/' target="_blank">nyoom</a>
                </div>
            )}
        </div>
    )
}