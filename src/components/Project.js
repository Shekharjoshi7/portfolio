import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import './Project.css'

const Project = () => {
  const Data = [
    {
      key: '1',
      title: 'Weather',
      src: "./IMG/WEATHER.JPG",
      Live: 'https://shekharjoshi7.github.io/Weather-App/',
      Code: 'https://github.com/Shekharjoshi7/Weather-App'
    },
    {
      key: '2',
      title: 'Our Playlist',
      src: "./IMG/PLAYLIST.JPG",
      Live: 'https://shekharjoshi7.github.io/Our-Playlist/',
      Code: 'https://github.com/Shekharjoshi7/Our-Playlist'
    },
    {
      key: '3',
      title: 'Tic Tac Toe',
      src: "./IMG/TIC.JPG",
      Live: 'https://shekharjoshi7.github.io/tic-tac-toe/',
      Code: 'https://github.com/Shekharjoshi7/tic-tac-toe'
    }
   

  ];
  useEffect(() => {
    AOS.init({
      duration: "500",
      delay: "500"
    });
  }, []);

  return (
    <section id='Project'>
      <h1 data-aos="fade-down">Projects</h1>
      <div className="CardBox">

        
        {Data.map((element) => {
          const { title, Live, Code, src, key } = element

          return (
            <div  data-aos="fade-right" key={key} className="cards">
              <div className="ImgBox">
              <img src={src} alt="website Image" />
              </div>
              <h3 className='m5'>{title}</h3>
              <div className="CardBtn">

                <a className='m5' href={Live} target='_blank'>
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
