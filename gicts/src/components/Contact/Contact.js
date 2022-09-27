import React from "react";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    address: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    // const information = { name, email, message };
    fetch("http://localhost:9000/messages", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(formData),
    }).then(() => {
      console.log("New message added");
    });
  };
  return (
    <div className="col-sm-12" style={{ backgroundColor: "#EAF6F6" }}>
      <div className="contacts" style={{ justifyContent: "center" }}>
        {/* <h1 style={{fontSize:"2rem",fontWeight:"600px", textAlign:"center",color:"#FF0063"}}>Contact Us</h1> */}
      </div>
      <div
        className="col-sm-12"
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "5vh",
          marginBottom: "5vh",
        }}
      >
        <div className="col-sm-12">
          <form onSubmit={HandleSubmit}>
            <div className="form-row">
              <div className="identity">
                <div className="col-sm-12">
                  <p>Full Name:</p>
                  <input
                    type="text"
                    required
                    value={formData.fullname}
                    onChange={handleChange}
                    className="form-control"
                    id="name"
                    placeholder="Full Name"
                    name="fullname"
                    style={{
                      height: "5vh",
                      width: "32vw",
                      marginBottom: "3vh",
                      borderRadius: "5px",
                      backgroundColor: "#FFFFFF",
                      border: "0px",
                      fontSize: "1rem",
                      color: "black",
                    }}
                  />
                </div>
                <div className="col-sm-12">
                  <p>Email:</p>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    style={{
                      height: "5vh",
                      width: "32vw",
                      marginBottom: "3vh",
                      borderRadius: "5px",
                      backgroundColor: "#FFFFFF",
                      border: "0px",
                      fontSize: "1rem",
                      color: "black",
                    }}
                  />
                </div>
              </div>
              <div className="col-sm-12">
                <p>Phone:</p>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Phone number"
                  name="phone"
                  style={{
                    height: "5vh",
                      width: "32vw",
                      marginBottom: "3vh",
                      borderRadius: "5px",
                      backgroundColor: "#FFFFFF",
                      border: "0px",
                      fontSize: "1rem",
                      color: "black",
                  }}
                />
              </div>
              <div className="col-sm-12">
                <p>Address:</p>
                <input
                  required
                  value={formData.address}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Address"
                  name="address"
                  style={{
                    height: "5vh",
                      width: "32vw",
                      marginBottom: "3vh",
                      borderRadius: "5px",
                      backgroundColor: "#FFFFFF",
                      border: "0px",
                      fontSize: "1rem",
                      color: "black",
                  }}
                />
              </div>
              <button
                style={{
                  height: "5vh",
                  width: "13vw",
                  marginBottom: "2vh",
                  borderRadius: "8px",
                  backgroundColor: "#FF0063",
                  color: "white",
                  border: "0px",
                  marginLeft: "10vw",
                  fontWeight: "700px",
                  fontSize: "1rem",
                }}
                type="submit"
              >
                SEND
              </button>
            </div>
            <div></div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
