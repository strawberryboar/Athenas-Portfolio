import React from "react";
import { useState } from "react";
import { ReactComponent as DownArrow } from '../assets/DownArrow.svg';
import { ReactComponent as UpArrow } from '../assets/UpArrow.svg';


export default function Collapse(props) {

    const [isShown, setIsShown] = useState(false);
    const styles = {
        transform: {
            transition: '0.3s'
        }
    }

    return(
        <div>
        <a
            onClick={() => setIsShown(!isShown)}>
               {isShown === true ? <UpArrow/> : <DownArrow/>}
        </a>
        <div>
        {isShown && 
            props.children
        }
        </div>
        </div>
    )
   
}