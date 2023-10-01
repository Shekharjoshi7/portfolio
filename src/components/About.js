import React from 'react'
import './About.css'

const About = () => {
  const  Certificate  = './IMG/CERTIFICATE.JPG'
  return (
    
    <section id='About'>
         <h1> About </h1>
      <div className="Box">
         <div className="content">
            <p>Successfully completed a 8 weeks online certified training on Web Development. The training consisted of HTML, CSS,Bootstrap, DBMS, PHP, JS, React, and Final Project modules. I scored 100% in the final assessment and was a top performerin the training.I'm dedicated to staying up-to-date with the latest trends and best practices in web development, ensuring that the solutions I create are not only functional but also maintainable and scalable. Whether you're looking for a developer to enhance your existing project or start from scratch, I'm excited to collaborate and bring your ideas to life.Feel free to explore my portfolio to see some of my previous work, and don't hesitate to reach out if you have any questions or project inquiries. Let's work together to turn your web development goals into reality!" </p>
         </div>
         <div className="certificate">
          <img src={Certificate} alt="Certificate" />

         </div>


      </div>
    </section>
  )
}

export default About
