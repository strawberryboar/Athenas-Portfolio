import React, { useState } from "react";
import './LinkButton.css';
import DownArrow from '../assets/DownArrow.svg';
import { Collapse } from "react-collapse";
import catPng from '../assets/cat.png';
import HaulrScreen from '../assets/haulrscreen.png';

export default function LinkButton() {

    const [open, setOpen] = useState(false);

    return(
        <div>
            <button
onClick={() => setOpen(open)}
aria-controls="example-collapse-text"
aria-expanded={(open === 1)? true : false}>
click
</button>
<Collapse in={open}>
<div id="example-collapse-text">
This is a longer card with supporting text below as a natural
    lead-in to additional content. This content is a little bit longer.
</div>
</Collapse>
        </div>
        // <div className='btnDiv'>
        // <img src={HaulrScreen}
        //     onMouseEnter={() => {
        //         setImgOpacity(0.5)
        //         setIsShown(true)
                
        //     }}
        //     onMouseLeave={() => {
        //         setImgOpacity(1)
        //         setIsShown(false)
        //     }}
        //     style={{opacity: imgOpacity}}>
        // </img>
        //     {isShown && (
        //         <div className='linkBtn'
        //         onMouseEnter={() => {
        //             setIsShown(true)
        //             setImgOpacity(0.5)
        //         }}
        //         onMouseLeave={() => setIsShown(false)}>
        //             <a href='https://strawberryboar.github.io/Meal-Assistant/' target="_blank">nyoom</a>
        //         </div>
        //     )}
        // </div>
    )
}