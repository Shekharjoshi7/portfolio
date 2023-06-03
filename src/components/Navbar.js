import React, { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
    const[model, setModel] = useState();
    const click= ()=>{setModel(!model) }

    
   
  return (
    <div className='NavbarContainer'>
        <nav>

        <div className='Navbar'>
             <div className="left">
                <h1>Portfilo</h1>
            </div>
            <div className={model?'right active':'right'}>
                <ul>
                    <li>
                        <a href="">Contact</a>
                    </li>
                    <li>
                        <a href="">Skills</a>
                    </li>
                    <li>
                        <a href="">About</a>
                    </li>
                    <li>
                        <a href="">Home</a>
                    </li>
                </ul>
                
            </div>
        </div>
            <div className="hum">
            <i className="fa-solid fa-bars"onClick={click} ></i>
            </div>
        </nav>
      
    </div>
  )
}

export default Navbar
