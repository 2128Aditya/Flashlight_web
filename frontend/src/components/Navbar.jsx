import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">Pheonix</div>
      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
      <button className="nav-btn">Get Started</button>
    </div>
  )
}

export default Navbar
