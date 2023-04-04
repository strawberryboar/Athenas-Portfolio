import './Contact.css';

export default function Contact() {
    return(
    <div className='contact'>
        <div className='header'>
            <header>
                <h1>Let's Chat</h1>
            </header>
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