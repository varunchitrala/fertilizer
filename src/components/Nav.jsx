import React from 'react'

function Nav() {
  
  return (
    <>
    <nav className="navbar">
      <div className="logo">
        Agriculture
      </div>

      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Products</a>
        <a href="#">Gallery</a>
        <a href="#">Awards</a>
        <a href="#">Contact</a>
      </div>

      <div className="language-switcher">
        <button>EN</button>
        <button>मराठी</button>
      </div>
    </nav>
    </>
  )
}



export default Nav
