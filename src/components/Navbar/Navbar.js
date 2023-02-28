import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarComponent() {
    return (
        <Navbar bg="light" expand="lg" className="shadow-lg mb-5">
        <Container fluid>
          <Navbar.Brand href="/">Fit Quest</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <Nav.Link href="/create-routine">Create Routine</Nav.Link>
              <Nav.Link href="/routines">Routines</Nav.Link>
              <Nav.Link href="/logout">Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    );
}

export default NavbarComponent;