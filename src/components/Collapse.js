import React from "react";
import { useState } from "react";
import { ReactComponent as DownArrow } from '../assets/DownArrow.svg';

export default function Collapse(props) {

    const [isShown, setIsShown] = useState(false);
    const style = {
        transform: isShown ? 'rotate(180deg)' : '',
        transition: 'transform 175ms ease'
    }

    return(
        <div className="collapse">
            <button
                onClick={() => setIsShown(!isShown)}>
                    <DownArrow style={style}/>
            </button>
            {/* need to animate on click */}
            <div className="techBox">
            {isShown && (
                props.children
            )
            
            }
            </div>
        </div>
    )
   
}