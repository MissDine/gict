import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav style={{backgroundColor:"green"}}>
      <div className="col-sm-12" style={{display:"flex", alignItems:"center", justifyContent:"end"}}>
        <div className="col-sm-12">
          <h1 className="logo">GictSystems</h1>
        </div>
        <div className="col-sm-12" style={{display:"flex", flexWrap:"wrap", justifyContent:"center", alignContent:"center"}}>
          <div className="links" style={{justifyContent:"center"}}>
          <Link className="link"to="/">
            Home
          </Link>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#team">Team</a>
          </div>
          <div className="contact">
            <a href="#contact">
              <button>contact</button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
