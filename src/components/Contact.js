import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import './Contact.css'

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: "500",
      delay: "500"
    });
  }, []);
  return (
    <section id='Contact'>
      <form action="https://formspree.io/f/xknlbaad" className="ContactBox" method="post">
        <h1 data-aos="fade-down">Contact</h1>
        <input data-aos="fade-up" name='Name' type="Name" className='form' placeholder='Full Name' required/>
        <input data-aos="fade-up" name='Email' type="Email" className='form' placeholder='Email' required/>
        <textarea data-aos="fade-up" name="Message" className='form' placeholder='Message' id="" cols="30" rows="10" required></textarea>
        <div data-aos="fade-up" className="buttons">
          <button id='submit' className="btn btn-p">Submit</button>
        </div>
      </form>
    </section>
  )
}

export default Contact
