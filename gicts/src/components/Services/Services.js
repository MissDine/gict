import React from 'react'
import Ui from "./Prototyping process-amico.png"
import Design from "./Group 5.png"
import Development from "./Static assets-cuate.png"

function Services() {
  return (
    <div className="col-sm-12" >
      <h1 style={{fontSize:"2rem", textAlign:"center"}}>Our Services</h1>
      <div className="col-sm-12" style={{display:"flex", flexWrap:"wrap", marginLeft:"10vw"}}>
        <div className="uiux">
          <img src={Ui} alt="" style={{height:"300px", width:"250px"}} />
          <p>UI/UX</p>
        </div>
        <div className="design">
          <img src={Design} alt="" style={{height:"300px", width:"250px",marginLeft:"4vw"}} />
          <p>Web Design</p>
        </div>
        <div className="development">
          <img src={Development} alt="" style={{height:"300px", width:"250px",marginLeft:"4vw"}} />
          <p>Web Development</p>
        </div>
      </div>
    </div>
  )
}

export default Services