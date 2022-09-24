import React from "react";
import { Link } from "react-router-dom";
import facebook from "./icons8-facebook-50.png"
import instagram from "./icons8-instagram-48.png"
import linkedin from "./icons8-linkedin-50.png"
import twitter from "./icons8-twitter-squared-50.png"

function NavBar() {
  return (
    <nav style={{backgroundColor:"white"}}>
      <div className="col-sm-12" style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
        <div className="col-sm-12" style={{display:"flex", marginRight:"60vw"}}>
          <div className="facebook">
          <img src={facebook} alt="" style={{height:"40px", width:"40px"}}/>
          </div>
          <div className="instagram">
            <img src={instagram} alt="" style={{height:"40px",width:"40px"}}/>
          </div>
          <div className="linkedin">
            <img src={linkedin} alt="" style={{height:"40px",width:"40px"}}/>
          </div>
          <div className="linkedin">
            <img src={twitter} alt="" style={{height:"40px",width:"40px"}}/>
          </div>
        </div>
        <div className="col-sm-12" style={{display:"flex", flexWrap:"wrap", justifyContent:"center", alignItems:"center", marginRight:"0vw"}}>
          <div className="links" style={{justifyContent:"center"}}>
          <Link className="link"to="/" style={{textDecoration:"none", fontSize:"1rem",color:"black", marginRight:"1vw",fontWeight:"400px"}}>Home</Link>
          <a href="#about" style={{textDecoration:"none",fontSize:"1rem",color:"black", marginRight:"1vw",fontWeight:"400px"}}>About</a>
          <a href="#services" style={{textDecoration:"none",fontSize:"1rem",color:"black", marginRight:"1vw",fontWeight:"400px"}}>Services</a>
          </div>
          <div className="contact">
          <a href="#contact" style={{fontSize:"1rem",color:"white",textDecoration:"none",fontWeight:"400px"}}>
              <button style={{backgroundColor:"#FF0063", border:" solid 0px", height:"35px", width:"70px", borderRadius:"15px"}}>contact</button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
