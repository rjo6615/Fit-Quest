import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarComponent() {
    return (
        <Navbar expand="lg" className="shadow-lg mb-5 bg-image"  style={{
          backgroundImage: 'url(./images/black_paper.webp)'}}>
        <Container fluid>
        <div class="logo-image" style={{width: '46px', height: '46px', borderRadius: '50%', overflow: 'hidden', marginRight: '5px'}}>
            <img src="./favicon.ico" class="img-fluid" alt="logo"></img>
        </div>
          <Navbar.Brand className="text-light" href="/">Fit Quest</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <Nav.Link className="text-light" href="/create-routine">Create Routine</Nav.Link>
              <Nav.Link className="text-light" href="/routines">Routines</Nav.Link>
              <Nav.Link className="text-light" href="/logout">Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    );
}

export default NavbarComponent;