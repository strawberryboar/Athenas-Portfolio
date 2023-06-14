import React from "react";
import catPng from '../assets/cat.png';
import catPng2 from '../assets/cat2.png';
import catPng3 from '../assets/cat3.png';
import catPng4 from '../assets/cat4.png';
import dogPng5 from '../assets/dog5.png';
import './ScrollImgs.css';

export default function ScrollImgs() {
    return(
        <div className='langContain'>
            <div className='lang' id='lang1'>
                <img src={catPng} />
            </div>
            <div className='lang' id='lang2'>
                <img src={catPng2} />
            </div>
            <div className='lang' id='lang3'>
                <img src={catPng3} />
            </div>
            <div className='lang' id='lang4'>
                <img src={catPng4} />
            </div>
            <div className='lang' id='lang5'>
                <img src={dogPng5} />
            </div>
        </div>
    )
}