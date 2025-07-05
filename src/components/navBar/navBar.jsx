import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./navBar.css";

const NavBar = () => {
  return (
    <div>
      <Navbar expand="lg" className="custom-navbar">
        <Container>
          <Navbar.Brand href="/" className="navbar-brand">
            <img src="/assets/camping.png" alt="Logo" className="navbar-logo" />
            <span>مخيم رواد</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/camp-structure" className="linkStyle">
                هيكلية المخيم
              </Nav.Link>
              <Nav.Link href="/initiatives-page" className="linkStyle">
                المبادرات
              </Nav.Link>
              <Nav.Link href="/partners-page" className="linkStyle">
                الشركاء والداعمون
              </Nav.Link>
              <Nav.Link href="/contact" className="linkStyle">
                التواصل معنا
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
