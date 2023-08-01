import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import SearchIcon from '../assets/SearchIcon.svg';
import BagIcon from '../assets/BagIcon.svg';
import GroupIcon from '../assets/GroupIcon.svg'
function Navb() {
  return (
    <Navbar expand="lg" className="bg-black px-4">
      <Container fluid>
        {/* Navbar.Toggle button */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="order-first text-white bg-white " />
        {/* Navbar.Collapse content */}
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Nav items aligned to the left */}
          <Nav className="me-auto">
            <Nav.Link href="#home" className="text-white fs-5 me-3">
              Men
            </Nav.Link>
            <Nav.Link href="#link" className="text-white fs-5 me-3">
              Women
            </Nav.Link>
          </Nav>
          {/* Nav items aligned to the right */}
          <Nav className="ms-auto">
            <Nav.Link href="#link" className="text-white ms-3">
            <Image src={SearchIcon}  />

            </Nav.Link>
            <Nav.Link href="#link" className="text-white ms-3">
            <Image src={BagIcon}  />

            </Nav.Link>
            {/* Additional Nav items */}
            <Nav.Link href="#link" className="text-white ms-3">
              {/* Replace the GroupIcon component with an image tag */}
              <Image src={GroupIcon}  />

            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {/* Navbar.Brand with flexbox classes */}
        <Navbar.Brand href="#home" className="text-white text-center fs-2 position-absolute start-50 translate-middle-x">
          WearCraft
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Navb;
