import React from "react";
import Typed from "react-typed";
import Carousel from 'react-bootstrap/Carousel';
import "../Header/Header.css"

function Head() {
  return (<div>
    <div className = "cont">
        <Carousel fade >
      <Carousel.Item>
        <img
          className="d-block w-100 h-60"
          src="https://images.unsplash.com/photo-1525921429624-479b6a26d84d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29sbGVnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3> */}
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-60"
          src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29sbGVnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="Second slide"
        />

        <Carousel.Caption>
          {/* <h3>Second slide label</h3> */}
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-60"
          src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y29sbGVnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="Third slide"
        />

        <Carousel.Caption>
          {/* <h3>Third slide label</h3> */}
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div className="typed">
        <Typed className="typ"
          strings={[
            "Welcome To St Paul's Nyabururu College",
            "We value our students"
          ]}
          typeSpeed={150}
          backSpeed={150}
          loop
        />
        <h4 style={{margin:"15px", fontSize: "40px", fontWeight: "600px"}}>Motto: <span>Strive to achieve</span></h4>
        <p style={{fontSize: "30px",margin:"10px"}}>Vision: Launch your new website in style with SaasLand,
        a complete collection of carefully
        crafted pages</p>
      </div>
    </div>
    </div>
  );
}

export default Head;