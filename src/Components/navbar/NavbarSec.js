import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FiGlobe } from "react-icons/fi";
import Popup from "../heroSection/popup/Popup";
import "./navbar.css";

const NavbarSec = () => {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup((prev) => !prev);
  };

  return (
    <>
      <Navbar sticky="top" fixed="top" variant="dark" className="navbar">
        <div href="#" className="nav-items">
          <FiGlobe className="logo" />
          <h3 className="nav-heading">BRILLIANT</h3>
        </div>
        <Nav className="mr-auto nav-items">
          <Nav.Link className="nav-middle" href="#">
            TODAY
          </Nav.Link>
          <Nav.Link className="nav-middle" href="#">
            COURSES
          </Nav.Link>
          <Nav.Link className="nav-middle" href="#">
            PRACTICE
          </Nav.Link>
        </Nav>
        <div className="mr-auto nav-items register">
          <Nav.Link onClick={openPopup} className="register-l" href="#">
            Log In
          </Nav.Link>
          <Nav.Link onClick={openPopup} className="register-s" href="#">
            Sign up
          </Nav.Link>
        </div>
      </Navbar>
      <Popup showPopup={showPopup} setShowPopup={setShowPopup} />
    </>
  );
};

export default NavbarSec;
