import React from 'react'
import copy from "./icons8-copyright-all-rights-reserved-24 (1).png"

function Copyright() {
  return (
    <div className="row">
      <div className="col-sm-12" style={{justifyItems:'center',alignItems:'center', display:"flex", flexWrap:"wrap",justifyContent:"center"}}>
        <img src={copy} alt="" style={{height:"24px",width:"24px"}}/>
        <h1 style={{fontSize:"1rem"}}>2022|All rights reserved</h1>
      </div>
    </div>
  )
}

export default Copyright
