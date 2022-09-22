import React from "react";
import {useState} from "react"

function Contact() {
  const [name, setName] =useState("")
  const [email, setEmail] =useState("")
  const [message, setMessage] =useState("")
  const HandleSubmit = (e)=>{
    e.preventDefault()
    const information = {name,email,message}
    fetch("http://localhost:9000/messages", {
            method: "POST",
            headers: {"content-type":"application/json"},
            body:JSON.stringify(information)
    })
    .then(()=>{
      console.log("New message added")
    })
  }
  return (
    <div className="row">
    <div className="contacts" style={{justifyContent:"center"}}>
    <h1 style={{fontSize:"2rem",fontWeight:"600px", textAlign:"center"}}>Contact Us</h1>
    </div>
      <div
        className="col-sm-12"
        style={{ display: "flex", justifyContent: "center",marginTop:"5vh",marginBottom:"5vh"}}
      >
        
        <div className="col-md-6">
          <form onSubmit={HandleSubmit}>
            <div
              class="form-row"
            >
              <div className="identity" >
              <div class="col">
              <label>Name:</label>
                <input
                  type="text"
                  required value={name}
                  onChange = {(e)=>setName(e.target.value)}
                  class="form-control"
                  id="name"
                  placeholder="Name"
                  name="name"
                  style={{
                    height: "5vh",
                    width: "15vw",
                    marginBottom: "3vh",
                    borderRadius: "5px",
                    backgroundColor: "#8B4411",
                  opacity:"39%",
                  border: "0px",
                  fontSize:"1rem",
                  color:"black"
                  }}
                />
              </div>
              <div class="col-sm-12">
              <label>Email:</label>
                <input
                  type="password"
                  required value ={email}
                  onChange = {(e)=>setEmail(e.target.value)}
                  class="form-control"
                  placeholder="Email"
                  name="email"
                  style={{
                    height: "5vh",
                    width: "15vw",
                    marginBottom: "3vh",
                    borderRadius: "5px",
                    backgroundColor: "#8B4411",
                  opacity:"39%",
                  border: "0px",
                  fontSize:"1rem",
                  color:"black"
                  }}
                />
              </div>
              </div>
              <div className="col-sm-12">
              <label>Message:</label>
              <input
                type="password"
                required value ={message}
                  onChange = {(e)=>setMessage(e.target.value)}
                class="form-control"
                placeholder="Message"
                name="message"
                style={{
                  height: "9vh",
                  width: "32vw",
                  marginBottom: "3vh",
                  backgroundColor: "#8B4411",
                  borderRadius: "5px",
                  opacity:"39%",
                  border: "0px",
                  fontSize:"1rem",
                  color:"black"
                }}
              />
              </div>
              <button
              style={{
                height: "5vh",
                width: "13vw",
                marginBottom: "2vh",
                borderRadius: "8px",
                backgroundColor: "#8B4411",
                color: "white",
                border: "0px",
                marginLeft:"22vw",
                fontWeight:"700px",
                fontSize:"1rem"
              }}
              type="submit"
            >
              SEND
            </button>
            </div>
            <div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
