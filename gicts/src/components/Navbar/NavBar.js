import React from 'react'
import {Link} from "react-router-dom"


function NavBar() {
  return (
    <nav>
    <div className='col-sm-12'>
      <div className="col-sm-12">
        <h1 className='logo'>GictSystems</h1>
      </div>
      <div className="links">
      <Link className='link' to="/">Home</Link>
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#team">Team</a>
      <div className="contact">
          <a href="#contact"><button>Send</button></a>
      </div>
      </div>
    </div>
    </nav>
  )
}
export default NavBar

