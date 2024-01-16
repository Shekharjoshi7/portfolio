import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div id='footer'>
      <div className="FBox" >
        <div className='SBox' data-aos="fade-right">
          <div className="Fitem">
            <h3>Get In Touch</h3>
            <div className="Links">
              <a href="https://www.instagram.com/shekhar__joshi/" className='Link'> <i className='fa-brands fa-instagram'></i>Instagram</a>
              <a href="https://www.facebook.com/shekhar.joshi.739326" className='Link'><i className='fa-brands fa-facebook'></i>Facebook</a>
              <a href="mailto:shekharjoshi813@gmail.com" className='Link'><i className='fa-solid fa-envelope'></i>Email</a>
              <a href="" className='Link'><i className='fa-brands fa-twitter'></i>Twitter</a>
            </div>
          </div >
          <div className="Fitem">
            <h3>Quick Links</h3>
            <div className="Links">
              <a href="#About" className='Link'>About</a>
              <a href="#Skills" className='Link'>Skills</a>
              <a href="#Project" className='Link'>Project</a>
              <a href="#Contact" className='Link'>Contact</a>
            </div>
          </div>
        </div>
        <div className="Top">
          <a href="#">
            <i className="fa-solid fa-arrow-up"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
