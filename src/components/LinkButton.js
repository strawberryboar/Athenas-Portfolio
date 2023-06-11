import React, { useState } from "react";
import './LinkButton.css';
import catPng from '../assets/cat.png';
import HaulrScreen from '../assets/haulrscreen.png';
import Collapse from "./Collapse";

export default function LinkButton(props) {

    return(
        <div className="projBox">
            <p>{props.children}</p>
            <Collapse>
                <ul>
                    <li>{props.children}</li>
                    <li>{props.children}</li>
                    <li>{props.children}</li>
                    <li>{props.children}</li>
                </ul>
            </Collapse>
        </div>
    )
    }