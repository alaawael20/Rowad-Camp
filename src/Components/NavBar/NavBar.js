import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import camping from "../../Images/camping.png";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <Navbar expand="lg" className="custom-navbar">
        <Container>
          <Navbar.Brand href="" className="navbar-brand">
            <img src={camping} alt="Logo" className="navbar-logo" />
            <span>مخيم رواد</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="" className="linkStyle">
                الصفحة الرئيسية
              </Nav.Link>
              <Nav.Link href="" className="linkStyle">
                حول المخيم
              </Nav.Link>
              <Nav.Link href="" className="linkStyle">
                موقعنا
              </Nav.Link>
              <Nav.Link href="" className="linkStyle">
                التواصل معنا
              </Nav.Link>
              <Nav.Link href="" className="linkStyle nav-login">
                <i className="fa-solid fa-right-to-bracket"></i>
                <span>تسجيل دخول</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
