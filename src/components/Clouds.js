import React from "react";
import { ReactComponent as Clouds } from '../assets/Cloud.svg';
import './Clouds.css';

export default function CloudAnimation() {

    return(
        <div className="Clouds">
        <div className="solidClouds">
            <svg><Clouds/></svg>
        </div>
        <div className="transClouds">
            <svg><Clouds/></svg>
        </div>
        <div className="smallClouds">
            <svg><Clouds/></svg>
        </div>
        <div className="solidClouds2">
            <svg><Clouds/></svg>
        </div>
        <div className="transClouds2">
            <svg><Clouds/></svg>
        </div>
        <div className="smallClouds2">
            <svg><Clouds/></svg>
        </div>
        <div className="solidClouds3">
            <svg><Clouds/></svg>
        </div>
        <div className="transClouds3">
            <svg><Clouds/></svg>
        </div>
        <div className="smallClouds3">
            <svg><Clouds/></svg>
        </div>
        <div className="solidClouds4">
            <svg><Clouds/></svg>
        </div>
        <div className="transClouds4">
            <svg><Clouds/></svg>
        </div>
        <div className="smallClouds4">
            <svg><Clouds/></svg>
        </div>
        </div>
    )
}

// WHEN the user loads the page, THEN the app will generate a random number of clouds. The clouds need to go in different directions at different opacities.