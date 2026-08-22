import React, { useState } from 'react'

const navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () =>{
    setMenuOpen(!menuOpen);
  }
    
  return (
    
    <nav className='navbar'>
      <div className='container'>

        <div className='logo'> 
            <p>
              <span style={{ color: "orange" }}>Pu</span>
              <span style={{ color: "white" }}>rve</span>
              <span style={{ color: "green" }}>sh</span>
            </p>
        </div>

        <button className="hamburger" onClick={toggleMenu}>
          {menuOpen ? "✕" : "☰"}
        </button>

           <ul className={menuOpen ? 'menu show' :'menu'}>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        
      </div>

    </nav>
  );
}

export default navbar;