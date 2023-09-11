import React from 'react'
import './About.css'

const About = () => {
  const  Certificate  = './IMG/CERTIFICATE.JPG'
  return (
    
    <section id='About'>
         <h1> About </h1>
      <div className="Box">
         <div className="content">
            <p>Successfully completed a 8 weeks online certified training on Web Development. The training consisted of HTML, CSS,Bootstrap, DBMS, PHP, JS, React, and Final Project modules. I scored 100% in the final assessment and was a top performerin the training. </p>
         </div>
         <div className="certificate">
          <img src={Certificate} alt="Certificate" />

         </div>


      </div>
    </section>
  )
}

export default About
