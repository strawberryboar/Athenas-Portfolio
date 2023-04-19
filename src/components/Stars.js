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
            <div className="Star1" id='seven'>
                <Star1 />
            </div>
            <div className="Star1" id='eight'>
                <Star1 />
            </div>
            <div className="Star1" id='nine'>
                <Star1 />
            </div>
            <div className="Star1" id='ten'>
                <Star1 />
            </div>
            <div className="Star1" id='eleven'>
                <Star1 />
            </div>
{/*  */}
            <div className="Star2" id="one2">
                <Star2 />
            </div>
            <div className="Star2" id="two2">
                <Star2 />
            </div>
            <div className="Star2" id="three2">
                <Star2 />
            </div>
            <div className="Star2" id="four2">
                <Star2 />
            </div>
            <div className="Star2" id="five2">
                <Star2 />
            </div>
            <div className="Star2" id="six2">
                <Star2 />
            </div>
            <div className="Star2" id="seven2">
                <Star2 />
            </div>
            <div className="Star2" id="eight2">
                <Star2 />
            </div>
            <div className="Star2" id="nine2">
                <Star2 />
            </div>
            <div className="Star2" id="ten2">
                <Star2 />
            </div>
            <div className="Star2" id="eleven2">
                <Star2 />
            </div>
        </div>
    )
}