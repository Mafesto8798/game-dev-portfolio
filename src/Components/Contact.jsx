import React from 'react'

export default function Contact() {
    return (
        <>
        <div className="contact-form">
            <form action={(e) => e.preventDefault()}>
                <input type="text" spellCheck="false" placeholder="First name here..."/>
                <input type="text" spellCheck="false" placeholder="Last name here..."/>
                <textarea  placeholder="Your message..." spellCheck="false" />
                <button type="submit">Submit</button>
            </form>
        </div>
        <footer>
        <h1>Weather Now inc.</h1>
        <ul>
            <li>Home</li>
            <li>About Weather Now</li>
            <li>Contact us</li>
        </ul>
    </footer>
    </>
    )
}
