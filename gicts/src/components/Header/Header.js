import React from "react";
import Typed from "react-typed";
import "./Header.css"
function Header() {
  return (
    <div className="head col-sm-12" style={{backgroundColor:"red"}}>
      <div className="col-sm-12">
      <Typed
            strings={["Welcome To Goatmentors"]}
            typeSpeed={150}
            backSpeed={150}
            loop
          />
           <h4 style={{ margin: "15px" }}>Website with Saasland</h4>
          <p style={{ fontSize: "20px", margin: "10px" }}>
            Launch your new website in style with SaasLand, a complete
            collection of carefully crafted pages, modular components and
            awesome features.
          </p>
      </div>
    </div>
  );
}

export default Header;
