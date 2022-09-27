import React from "react";
import Typed from "react-typed";
// import "./Header.css"
function Header() {
  return (
    <div className="col-sm-12" style={{backgroundColor:"#66BFBF", marginTop:"5vh", backgroundSize:"cover",backgroundRepeat:"no-repeat",height:"30vw"}}>
      <div className="col-sm-12" style={{marginLeft:"10vw",marginRight:"10vw",marginTop:"3vh"}}>
      <Typed
            strings={["Welcome To GICT"]}
            typeSpeed={150}
            backSpeed={150}
            loop
            style={{fontSize:"1.5rem",fontWeight:"400px"}}
          />
          <p style={{ fontSize: "1rem"}}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque odit aliquid sit inventore iusto quos saepe consequatur eveniet, eius omnis ipsam blanditiis quaerat voluptates commodi. Architecto, iste delectus quis minus dolorum consequuntur voluptatem commodi, dicta soluta ab maiores vitae nam aut quisquam voluptatum saepe? Dolorum aliquid similique nam soluta veritatis!
          </p>
      </div>
    </div>
  );
}

export default Header;
