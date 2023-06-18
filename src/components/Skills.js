import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
    <section id='Skills'>
      <h1>Skills</h1>
      
      <div className="items"> 
       <div>
          <h5>HTML  CSS   JAVASCRIPT</h5>
          <progress className="progess" max="100" value="90"> 90% </progress>
        </div>
     
      
       <div>
          <h5>Bootstrap</h5>
          <progress className="progess" max="100" value="95"> 95% </progress>
        </div>
       <div>
          <h5>React JS</h5>
          <progress className="progess" max="100" value="70"> 70% </progress>
        </div>
       <div>
          <h5>Node Js</h5>
          <progress className="progess" max="100" value="50"> 50% </progress>
        </div>
       <div>
          <h5>Mongo DB</h5>
          <progress className="progess" max="100" value="90"> 90% </progress>
        </div>
       <div>
          <h5>Git & Git Hub</h5>
          <progress className="progess" max="100" value="80"> 80% </progress>
        </div>
      </div>
      
    </section>
  )
}

export default Skills
