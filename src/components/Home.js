import React  from 'react'
import './home.css'
import Typed from 'typed.js';

function Home() {
  const profile = './IMG/PROFILE.JPG';
  const ShekharResume ='resume/ShekharResume.pdf';

  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [ 'Web Developer','Frontend Developer','React Developer'],
      typeSpeed: 50,
      smartBackspace: true,
      backDelay: 1000,
      loop:true,
      loopCount: Infinity

    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
 
  return (
    <>
    <section id='Home'>

      <div className="info">
        <p className='m5'>HI, I'M A FREELANCER</p>
        <h1 className='m5 ' ref={el}>React Developer</h1>
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

    </section>
    </>
  )
}

export default Home
