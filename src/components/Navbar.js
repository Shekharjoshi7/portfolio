import React, { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
    const[model, setModel] = useState();
    const[Nav, setNav] = useState('#');
    const click= ()=>{setModel(!model) }
    

  return (
    <div className='NavbarContainer'>
        <nav>

        <div className='Navbar'>
             <div className="left">
                <h1>Portfilo</h1>
            </div>
            <div className={model?'right display':'right'}>
                <ul>
                    <li>
                        
                        <a href='#Contact' onClick={()=>setNav('#Contact')} className={Nav === '#Contact'?'active':''}>Contact</a>
                    </li>
                    <li>
                        <a href='#Project' onClick={()=>setNav('#Project')} className={Nav === '#Project'?'active':''}>Project</a>
                    </li>
                    <li>
                        <a href='#Skills' onClick={()=>setNav('#Skills')} className={Nav === '#Skills'?'active':''}>Skills</a>
                    </li>
                    <li>
                        <a href='#About' onClick={()=>setNav('#About')} className={Nav === '#About'?'active':''}>About</a>
                    </li>
                    <li>
                        <a href='#'  onClick={()=>setNav('#')} className={Nav === '#'?'active':''}>Home</a>
                    </li>
                </ul>
                
            </div>
        </div>
            <div className="hum">
            <i className= {model?'fa-solid fa-close':'fa-solid fa-bars'}onClick={click} ></i>
            </div>
        </nav>
      
    </div>
  )
}

export default Navbar
