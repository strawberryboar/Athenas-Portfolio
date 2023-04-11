import React, { useState } from "react";
import './LinkButton.css';
import catPng from '../assets/cat.png';


export default function LinkButton() {

    const [isShown, setIsShown] = useState(false);

    return(
        <div className='btnDiv'>
        <img src={catPng}
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}>
        </img>
            {isShown && (
                <button className='linkBtn'>
                    <a href='/'>nyoom</a>
                </button>
            )}
        </div>
    )
}