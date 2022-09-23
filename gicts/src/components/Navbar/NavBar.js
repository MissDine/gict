import React from "react";
import { Link } from "react-router-dom";
import facebook from "./icons8-facebook-50.png"
import instagram from "./icons8-instagram-48.png"
import youtube from "./icons8-youtube-47.png"
import twitter from "./icons8-twitter-squared-50.png"

function NavBar() {
  return (
    <nav style={{backgroundColor:"white"}}>
      <div className="col-sm-12" style={{display:"flex", alignItems:"center", justifyContent:"end"}}>
        <div className="col-sm-12" style={{display:"flex", marginRight:"69vw"}}>
          <div className="facebook">
          <img src={facebook} alt="" style={{height:"40px", width:"40px"}}/>
          </div>
          <div className="instagram">
            <img src={instagram} alt="" style={{height:"40px",width:"40px"}}/>
          </div>
          <div className="youtube">
            <img src={youtube} alt="" style={{height:"40px",width:"40px"}}/>
          </div>
          <div className="linkedin">
            <img src={twitter} alt="" style={{height:"40px",width:"40px"}}/>
          </div>
          {/* <div className="twitter">
            <img src={youtube} alt="" style={{height:"40px",width:"40px"}}/>
          </div> */}
        </div>
        <div className="col-sm-12" style={{display:"flex", flexWrap:"wrap", justifyContent:"center", alignItems:"center", marginRight:"0vw"}}>
          <div className="links" style={{justifyContent:"center"}}>
          <Link className="link"to="/" style={{textDecoration:"none", fontSize:"1rem",color:"black"}}>Home</Link>
          <a href="#about" style={{textDecoration:"none",fontSize:"1rem",color:"black"}}>About</a>
          <a href="#services" style={{textDecoration:"none",fontSize:"1rem",color:"black"}}>Services</a>
          <a href="#team" style={{textDecoration:"none",fontSize:"1rem",color:"black"}}>team</a>
          <a href="#contact" style={{fontSize:"1rem",color:"black",textDecoration:"none"}}>
              <button style={{backgroundColor:"#FF0063"}}>contact</button>
            </a>
          </div>
          <div className="contact">
            
          </div>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
