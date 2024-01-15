import React, { useEffect }  from 'react'
import './home.css'
import Typed from 'typed.js';
import AOS from 'aos';
import 'aos/dist/aos.css'

function Home() {
  const profile = './IMG/PROFILE.PNG';
  const ShekharResume ='resume/ShekharResume.pdf';
  useEffect(() => {
    AOS.init({
    duration: "500",
    delay: "500"
  });
  }, []);

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

      <div className="info" >
        <h3 className='m5' data-aos="fade-up">HI, I'M A FREELANCER</h3>
        <h1 className='m5 ' data-aos="fade-up" ref={el}>React Developer</h1>
        <p className='m5 para' data-aos="fade-up">Welcome to my React portfolio! I'm Shekhar Joshi, a passionate React developer with a strong foundation in building dynamic and responsive web applications.</p>
        <div className="icon"  data-aos="fade-up">
        <a className='m5' href="https://www.linkedin.com/in/shekhar-joshi-51a27728b/" target='_blank'>
        <i className='fa-brands fa-linkedin m5'></i>
        </a>
        <a href="https://github.com/Shekharjoshi7"  target='_blank' >
        <i className="fa-brands fa-github m5"></i>
        </a>
        </div>
        <div className="BtnBox m5"  data-aos="fade-up">
          <a href= {ShekharResume}download='ShekharResume.pdf'> 
          <button className='m5 btn btn-p'>GET RESUME</button>
          </a>
         <a href="#Contact">
           <button className='m5 btn btn-s'>CONTACT</button>
          </a>
        </div>
      </div>


      <div className="Profile" data-aos="fade-left">
        <div className="profile-photo">
          <img src={profile} alt="" />
        </div>
      </div>

    </section>
    </>
  )
}

export default Home
