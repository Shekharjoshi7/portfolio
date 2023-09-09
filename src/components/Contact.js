import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section id='Contact'>
      <form action="https://formspree.io/f/xknlbaad" className="ContactBox" method="post">
      
        <h1>Contact</h1>
        <input type="Name" className='form' placeholder='Full Name'/>
        <input type="Email" className='form' placeholder='Email'/>
        <textarea name="Message" className='form' placeholder='Message' id="" cols="30" rows="10"></textarea>
        <div className="buttons">
          <button id='submit' className="btn btn-p">Submit</button>
          </div>     
          </form>
    </section>
  )
}

export default Contact
