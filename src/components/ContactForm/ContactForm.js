import React from 'react'
import '../ContactForm/ContactFormStyles.css'
import{ DarkButton } from '../styles/Button'

const ContactForm = () => {
  return (
    <div className='form' id='contact'>
      <h2>Contact Me</h2>
        <form>
            <label>Your Name</label>
            <input type='text'></input>
            <label>Email</label>
            <input type='email'></input>
            <label>Subject</label>
            <input type='text'></input>
            <label>Message</label>
            <textarea rows='6' placeholder='please type your message here'></textarea>
            <DarkButton>SUBMIT</DarkButton>
        </form>
    </div>
  )
}

export default ContactForm