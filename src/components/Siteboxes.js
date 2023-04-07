import './Siteboxes.css';
import catPng from '../assets/cat.png';
import catPng2 from '../assets/cat2.png';
import catPng3 from '../assets/cat3.png';
import catPng4 from '../assets/cat4.png';

export default function Siteboxes() {
    return(
<div className='introWrap'>
<div className='introBox' id='first'>
<img src={catPng} />
<h2>
    Mow
</h2>
<p>
    I'm a full-stack developer based in Denver, Colorado. 
    <br></br>
    I'm seeking new creative experiences and employment opportunities.
    <br></br>
    
</p>
</div>
<div className='siteWrap'>
    <div className='siteBox'>
    <h2>
    sites go here
    </h2>
    <img src={catPng2}></img>
    </div>
    <div className='siteBox'>
    <h2>
    sites go here
    </h2>
    <img src={catPng3}></img>
    </div>
    <div className='siteBox'>
    <h2>
    sites go here
    </h2>
    <img src={catPng4}></img>
    </div>
</div>
</div>
    )
}
