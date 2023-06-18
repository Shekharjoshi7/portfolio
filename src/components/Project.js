import React from 'react'
import './Project.css'

const Project = () => {
  const weather = "img/Weather.JPG"
  return (
    <section id='Project'>
      <h1>Projects</h1>
      <div className="CardBox">
        <div className="cards">
          <img src={weather} alt="" />
          <div className="CardBtn">
            <a href="https://shekharjoshi7.github.io/Weather-App/" target='_blank'>
          <button className="btn btn-p">Live </button>
            </a>

            <a href="">
          <button className="btn btn-p"> Code</button>
            </a>
          
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project
