import React  from 'react'
import './home.css'

function Home() {
  const profile = 'img/img2.JPG';
  const ShekharResume ='resume/ShekharResume.pdf';
  return (
    <>
    <div id='Home'>

      <div className="info">
        <p className='m5'>HI, I'M A FREELANCER</p>
        <h1 className='m5'>React Developer</h1>
        <div className="icon">
        <a className='m5' href="https://www.instagram.com/shekhar__joshi/" target='_blank'>
        <i className='fa-brands fa-instagram m5'></i>
        </a>
        <a href="https://www.facebook.com/shekhar.joshi.739326/"  target='_blank' >
        <i className="fa-brands fa-square-facebook m5"></i>
        </a>
        </div>
        <div className="BtnBox m5">
          <a href= {ShekharResume}download='ShekharResume.pdf'> 
          <button className='m5 btn btn-p'>GET RESUME</button>
          </a>
         <a href="#Contact">
           <button className='m5 btn btn-s'>CONTACT</button>
          </a>
        </div>
      </div>


      <div className="Profile">
        <div className="profile-photo">
          <img src={profile} alt="" />
          <h1>Shekhar Joshi</h1>
        </div>
      </div>

    </div>
    </>
  )
}

export default Home
