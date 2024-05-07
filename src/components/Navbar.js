import React, { useState, useEffect } from 'react'
import './Navbar.css'
import AOS from 'aos';
import 'aos/dist/aos.css'

const Navbar = () => {
  const [model, setModel] = useState();
  const [Nav, setNav] = useState('#');
  const click = () => { setModel(!model) }
  useEffect(() => {
    AOS.init({
      duration: "500",
      delay: "500"
    });
  }, []);
  const NavScroll = () => {
    if (window.scrollY <= 548) {
      setNav('#')
    }
    else if (window.scrollY <= 2000) {
      setNav('#About')
    }
    else if (window.scrollY <= 2800) {
      setNav('#Skills')
    }
    else if (window.scrollY <= 3670) {
      setNav('#Project')
    }
    else {
      setNav('#Contact')
    }
  }
  window.addEventListener('scroll', NavScroll)


  return (
    <div className='NavbarContainer'>
      <nav  data-aos-once="true" data-aos="fade-down">

        <div className='Navbar'  >
          <div className="left">
            <h1>Portfolio</h1>
          </div>
          <div className={model ? 'right display' : 'right'}>
            <ul>
              <li>

                <a href='#Contact' onClick={() => setNav('#Contact')} className={Nav === '#Contact' ? 'active' : ''}>Contact</a>
              </li>
              <li>
                <a href='#Project' onClick={() => setNav('#Project')} className={Nav === '#Project' ? 'active' : ''}>Project</a>
              </li>
              <li>
                <a href='#Skills' onClick={() => setNav('#Skills')} className={Nav === '#Skills' ? 'active' : ''}>Skills</a>
              </li>
              <li>
                <a href='#About' onClick={() => setNav('#About')} className={Nav === '#About' ? 'active' : ''}>About</a>
              </li>
              <li>
                <a href='#' onClick={() => setNav('#')} className={Nav === '#' ? 'active' : ''}>Home</a>
              </li>
            </ul>

          </div>
          <div className="hum">
            <i className={model ? 'fa-solid fa-close' : 'fa-solid fa-bars'} onClick={click} ></i>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar
