import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav style={{backgroundColor:"green"}}>
      <div className="col-sm-12" style={{display:"flex", alignItems:"center", justifyContent:"end"}}>
        <div className="col-sm-12">
          <h1 className="logo" style={{marginRight:"70vw"}}>GictSystems</h1>
        </div>
        <div className="col-sm-12" style={{display:"flex", flexWrap:"wrap", justifyContent:"center", alignContent:"center", marginRight:"2vw"}}>
          <div className="links" style={{justifyContent:"center"}}>
          <Link className="link"to="/" style={{textDecoration:"none", fontSize:"1rem",color:"white"}}>Home</Link>
          <a href="#about" style={{textDecoration:"none",fontSize:"1rem",color:"white"}}>About</a>
          <a href="#services" style={{textDecoration:"none",fontSize:"1rem",color:"white"}}>Services</a>
          <a href="#team" style={{textDecoration:"none",fontSize:"1rem",color:"white"}}>Team</a>
          </div>
          <div className="contact">
            <a href="#contact" style={{fontSize:"1rem",color:"black",textDecoration:"none"}}>
              <button>contact</button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
