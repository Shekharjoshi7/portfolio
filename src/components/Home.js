import React from 'react'
import './home.css'


function Home() {
  return (
    <>
    <div id='Home'>
      <div className="info">
        <p className='m5'>HI, I'M A FREELANCER</p>
        <h1 className='m5'>React Developer</h1>
        <div className="icon">

        <a className='m5' href="">
        <i className='fa-brands fa-instagram m5'></i>
        </a>
        <a href="">
        <i className="fa-brands fa-square-facebook m5"></i>
        </a>
        </div>
        <div className="BtnBox m5">
          
          <button className='m5'>GET RESUME</button>
          <button className='m5'>CONTACT</button>
        </div>
      </div>
      <div className="Profile">
        <div className="profile-photo">
          <img src={require('../img2.JPG')} alt="" />
          <h1>Shekhar Joshi</h1>
        </div>
      </div>

    </div>
    </>
  )
}

export default Home
