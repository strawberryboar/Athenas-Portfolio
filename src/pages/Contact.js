import './Contact.css';

export default function Contact() {
    return(
    <div className='Contact'>
        <div className='headerWrap'>
        <div className='header'>
            <header>
                <h1>Let's Chat</h1>
                <p>I have open availability. I look forward to our chat!</p>
            </header>
        </div>
        </div>
        <div className='contactWrap'>
            <div className='contactBox'>
                Email
            </div>
            <div className='contactBox'>
                Github
            </div>
            <div className='contactBox'>
                Twitter
            </div>
        </div>
    </div>
    )
}