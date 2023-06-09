import React from 'react'
import './Project.css'

const Project = () => {
  const Data= [
    {
     src :"img/Weather.JPG",
     Live: 'https://shekharjoshi7.github.io/Weather-App/',
     Code:'https://github.com/Shekharjoshi7/Weather-App'},
    {
     src :"img/Our-Playlist.JPG",
     Live: 'https://shekharjoshi7.github.io/Our-Playlist/',
     Code:'https://github.com/Shekharjoshi7/Our-Playlist'},
    {
     src :"img/tic-tac-toe.JPG",
     Live: 'https://shekharjoshi7.github.io/tic-tac-toe/',
     Code:'https://github.com/Shekharjoshi7/tic-tac-toe'},
    
    ];
  const weather = "img/Weather.JPG"
  return (
    <section id='Project'>
      <h1>Projects</h1>
      <div className="CardBox">

        {Data.map((element,index)=>{
        const {id,Live,Code,src} = element

          return(<div className="cards">
          <img src={src} alt="" />
          <h2 className='m5'>Weather</h2>
          <div className="CardBtn">
            <a className='m5' href= {Live} target='_blank'>
          <button className="btn btn-p">Live </button>
            </a>

            <a className='m5' href={Code} target='_blank'>
          <button className="btn btn-s"> Code</button>
            </a>
          
          </div>
        </div>)

        })
        }
        

      </div>
    </section>
  )
}

export default Project
