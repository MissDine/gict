import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
// import "./Navbar.css";

function Navb() {
  return (
      <Navbar className='navba' collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#logo">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as = {Link} to = {"/home"}>Home</Nav.Link>
            <NavDropdown title="About St Paul's" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#admissions/2.1">Governance</NavDropdown.Item>
              <NavDropdown.Item href="#admissions/2.2">Alumni</NavDropdown.Item>
              <NavDropdown.Item href="#admissions/2.3">Students</NavDropdown.Item>
              <NavDropdown.Item href="#admissions/2.4">Student Life</NavDropdown.Item>
              <NavDropdown.Item href="#admissions/2.5">Staff</NavDropdown.Item>
              <NavDropdown.Item href="#admissions/2.6">Vacancies</NavDropdown.Item>
              <NavDropdown.Item href="#admissions/2.7">Blogs</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Admissions" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#admissions/3.1">Schools</NavDropdown.Item>
              <NavDropdown.Item href="#admissions/3.2">Courses</NavDropdown.Item>
              <NavDropdown.Item href="#admissions/3.3">Calender</NavDropdown.Item>
              <NavDropdown.Item href="#admissions/3.4">Apply</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as = {Link} to = {"/chaplaincy"}>Chaplaincy</Nav.Link>
            <Nav.Link as = {Link} to = {"/contact"}>Contact Us</Nav.Link>
            <Nav.Link as = {Link} to = {"/support"}>Support St Paul's</Nav.Link>
          </Nav>
          <Nav className='soc'>
            <Nav.Link href="#facebook"><img src="https://img.icons8.com/ios-glyphs/2x/facebook.png" alt="facebook" /></Nav.Link>
            <Nav.Link href="#instagram"><img src="https://img.icons8.com/ios-filled/2x/instagram-new.png" alt="instagram" /></Nav.Link>
            <Nav.Link href="#twitter"><img src="https://img.icons8.com/ios-filled/2x/twitter-squared.png" alt="twitter" /></Nav.Link>
            <Nav.Link href="#facebook"><img src="https://img.icons8.com/external-prettycons-flat-prettycons/2x/external-youtube-multimedia-prettycons-flat-prettycons.png" alt="youtube" /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
  )
}

export default Navb