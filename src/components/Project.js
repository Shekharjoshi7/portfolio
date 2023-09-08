import React from 'react'
import './Project.css'

const Project = () => {
  const Data= [
    {
     title:'Weather',
     key: 1,
     src :"Images/Weather.jpg",
     Live: 'https://shekharjoshi7.github.io/Weather-App/',
     Code:'https://github.com/Shekharjoshi7/Weather-App'},
    {
     title:'Our Playlist',
     key: 2,
     src :"Images/Our-Playlist.jpg",
     Live: 'https://shekharjoshi7.github.io/Our-Playlist/',
     Code:'https://github.com/Shekharjoshi7/Our-Playlist'},
    {
     title:'Tic Tac Toe',
     key: 3,
     src :"Images/tic-tac-toe.jpg",
     Live: 'https://shekharjoshi7.github.io/tic-tac-toe/',
     Code:'https://github.com/Shekharjoshi7/tic-tac-toe'},
    
    ];
  
  return (
    <section id='Project'>
      <h1>Projects</h1>
      <div className="CardBox">

        {Data.map((element,index)=>{
        const {title,Live,Code,src,key} = element
 // eslint-disable-next-line 
          return(
          <div key={key} className="cards">
          <img src={src} alt="" />
          <h2 className='m5'>{title}</h2>
          <div className="CardBtn">
         
            <a className='m5' href= {Live} target='_blank'>
          <button className="btn btn-p">Live </button>
            </a>

            <a className='m5' href={Code} target='_blank'>
          <button className="btn btn-s"> Code</button>
            </a>
          
          </div>
        </div>
        )
        })
        }
      </div>
    </section>
  )
}

export default Project
