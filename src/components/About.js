import React from 'react'
import './About.css'

const About = () => {
  const  Certificate  ='Images/Certificate.jpg'
  return (
    
    <section id='About'>
         <h1> About </h1>
      <div className="Box">
         <div className="content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque qui alias sapiente minima cum est voluptate officia error. Ipsam facilis sapiente exercitationem aut amet odit vero eaque molestiae maiores tempora consequatur iste, dolores quibusdam, cupiditate numquam tempore minus quod nemo recusandae, dolor cumque fuga alias? Error maxime ex eos, inventore aut illo perspiciatis porro hic eius nobis soluta totam nemo doloremque nihil dolores? Repudiandae similique dolor facere nisi, voluptas suscipit asperiores sapiente rem! Doloremque ratione asperiores veniam consectetur nesciunt saepe necessitatibus omnis quo distinctio illo a, veritatis fuga quasi nihil. Numquam perspiciatis iure voluptatum soluta, nihil facilis natus vel? Magni! </p>
         </div>
         <div className="certificate">
          <img src={Certificate} alt='' />

         </div>


      </div>
    </section>
  )
}

export default About
