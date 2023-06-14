import React from 'react'
import './Greeting.css'

const Greeting = () => {
    let myDate = new Date();
    let hours= myDate.getHours();
    let greet;

    if (hours < 12)
        greet =  "morning";
    else if (hours >= 12 && hours <= 17)
        greet = "afternoon";
    else if (hours >= 17 && hours <= 24)
       greet = "evening";
    
    return <span className='animate__animated animate__fadeInDown' id='greet'>Good {greet}, I'm Pee-Pee.</span>
}

export default Greeting