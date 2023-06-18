import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section id='Contact'>
      <div className="ContactBox">
        <h1>Contact</h1>
        <input type="Name" className='form' placeholder='Full Name'/>
        <input type="Email" className='form' placeholder='Email'/>
        <textarea name="Message" className='form' placeholder='Message' id="" cols="30" rows="10"></textarea>
        <div className="buttons">
          <button id='submit' className="btn btn-p">Submit</button>
          <button  id='clear'className="btn btn-s">Clear</button>
          </div>     
      </div>
    </section>
  )
}

export default Contact
