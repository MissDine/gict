import React from "react";
import logoo from "./logo.png";
import Phone from "./carbon_phone (1).png";
import mail from "./maill.png";
import location from "./location.png";
import Copyright from "./Copyright.jsx"

const Footer = () => {
  return (
    <>
    <div className="col-sm-12" style={{ backgroundColor: "#66BFBF",color:"white"}}>
      <div className="footers col-sm-12" style={{ display: "flex", flexWrap:"wrap",justifyContent: "center",paddingRight:"20vw",paddingTop:"3vh" }}>
        <div className="logo" >
          <img src={logoo} alt="" />
        </div>
        <div className="links" style={{paddingLeft:"10vw"}}>
          <h1 style={{color:"white"}}>Get In Touch</h1>
          <div className="phone" style={{ display: "flex",alignItems:"center" }}>
            <img src={Phone} alt=""style={{height:"24px",width:"24px"}} />
            <p style={{color:"white", paddingLeft:"1vw"}}>+254700000000</p>
          </div>
          <div className="email mt-3" style={{ display: "flex", alignItems:"center"}}>
            <img src={mail} alt="" style={{height:"24px",width:"24px"}}  />
            <p style={{color:"white", paddingLeft:"1vw"}}>email@email.com</p>
          </div>
          <div className="locations mt-3" style={{ display: "flex", alignItems:"center" }}>
            <img src={location} alt="" style={{height:"24px",width:"24px"}} />
            <p style={{color:"white",paddingLeft:"1vw"}}>Location, Kenya</p>
          </div>
        </div>
        <div className="links" style={{paddingLeft:"10vw"}}>
          <h1 style={{color:"white"}}>Useful Links</h1>
          <div className="home"  style={{marginTop:"1vh"}}>
            <a href="#home" style={{ textDecoration: "none" ,color:"white" }}>
              Home 
            </a>
          </div>
          <div className="about"  style={{marginTop:"1vh"}}>
            <a href="#about" style={{ textDecoration: "none" ,color:"white" }}>
              About
            </a>
          </div>
          <div className="services"  style={{marginTop:"1vh"}}>
            <a href="#services" style={{ textDecoration: "none",color:"white"  }}>
              Services
            </a>
          </div>
          <div className="contacts"  style={{marginTop:"1vh"}}>
            <a href="#contacts" style={{ textDecoration: "none",color:"white"  }}>
              Contacts
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Footer;
