import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import './Skills.css'
import ProgressBar from "@ramonak/react-progress-bar";

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: "500",
      delay: "500"
    });
  }, []);
  const animation = true;

  return (
    <section id='Skills'>
      <h1 data-aos="fade-down">Skills</h1>

      <div className="items">
        <div className='PBox' data-aos="fade-right">
          <h5>HTML  CSS   JAVASCRIPT</h5>
          <ProgressBar className="progess" animateOnRender={animation} transitionDuration='2s' bgColor='#00abf0' completed={90}> 90% </ProgressBar>
        </div>

        <div className='PBox' data-aos="fade-left">
          <h5>Bootstrap</h5>
          <ProgressBar className="progess" animateOnRender={animation} transitionDuration='2s' bgColor='#00abf0' completed={95}> 95% </ProgressBar>
        </div>
        <div className='PBox' data-aos="fade-right">
          <h5>React JS</h5>
          <ProgressBar className="progess" animateOnRender={animation} transitionDuration='2s' bgColor='#00abf0' completed={70}> 70% </ProgressBar>
        </div>
        <div className='PBox' data-aos="fade-left">
          <h5>Node Js</h5>
          <ProgressBar className="progess" animateOnRender={animation} transitionDuration='2s' bgColor='#00abf0' completed={50}> 50% </ProgressBar>
        </div>
        <div className='PBox' data-aos="fade-right">
          <h5 >Mongo DB</h5>
          <ProgressBar className="progess" animateOnRender={animation} transitionDuration='2s' bgColor='#00abf0' completed={90}> 90% </ProgressBar>
        </div>
        <div className='PBox' data-aos="fade-left">
          <h5>Git & Git Hub</h5>
          <ProgressBar className="progess" animateOnRender={animation} transitionDuration='2s' bgColor='#00abf0' completed={80}> 80% </ProgressBar>
        </div>
      </div>

    </section>
  )
}

export default Skills
