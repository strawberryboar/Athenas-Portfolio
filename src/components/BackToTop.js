import React, { useRef, useState } from "react";
import './BackToTop.css';

export default function BackToTop() {

    const topRef = useRef();

    function handleClick(scrollToRef) {
        scrollToRef.current.scrollIntoView({ behavior: "smooth" });
      }

    return(
        // Trying to scroll back to top
        // topRef is in Homepage.js
        <div className='backToTop'>
        <button href='/'  onClick={() => {
                    handleClick(topRef)
                }}> 
            <p>^</p>
        </button>
    </div>
    )
}