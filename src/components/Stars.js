import React from "react";
import './Stars.css';
import {ReactComponent as Star1} from '../assets/Star1.svg';
import {ReactComponent as Star2} from '../assets/Star2.svg';

export default function Stars() {
    return(
        <div className="StarWrap">
            <div className="Star1" id="one">
                <Star1 />
            </div>
            <div className="Star1" id='two'>
                <Star1 />
            </div>
            <div className="Star1" id='three'>
                <Star1 />
            </div>
            <div className="Star1" id='four'>
                <Star1 />
            </div>
            <div className="Star1" id='five'>
                <Star1 />
            </div>
            <div className="Star1" id='six'>
                <Star1 />
            </div>
        </div>
    )
}