import React from "react";
import { useState } from "react";
import { ReactComponent as DownArrow } from '../assets/DownArrow.svg';
import { ReactComponent as UpArrow } from '../assets/UpArrow.svg';


export default function Collapse(props) {

    const [isShown, setIsShown] = useState(false);
    const style = {
        transform: isShown ? 'rotate(180deg)' : '',
        transition: 'transform 175ms ease'
    }

    return(
        <div>
        <a
            onClick={() => setIsShown(!isShown)}>
                <DownArrow style={style}/>
        </a>
        {/* need to animate on click */}
        <div>
        {isShown && (
             props.children
        )
           
        }
        </div>
        </div>
    )
   
}