import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/download.jpeg";
import { FaHome } from "react-icons/fa";
import { AiFillDashboard } from "react-icons/ai";
import { TbLogin2 } from "react-icons/tb";
import { TbLogout2 } from "react-icons/tb";
import { FaQrcode } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Header = () => {
  const isLoggedIn = false;
  return (
    <Navbar expand="md" className="bg-dark" variant="dark">
      <Container>
        <Link to="/" className="nav-link">
          <img src={logo} alt="" style={{ width: "40px" }} />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className="nav-link">
              <FaHome />
              Home
            </Link>
            {isLoggedIn ? (
              <>
                <Link to="/user/dashboard" className="nav-link">
                  <AiFillDashboard />
                  Dashboard
                </Link>
                <Link to="#!" className="nav-link">
                  <TbLogin2 />
                  Log In
                </Link>
              </>
            ) : (
              <>
                {" "}
                <Link to="/signup" className="nav-link">
                  <FaQrcode />
                  Sign Up
                </Link>
                <Link to="/logout" className="nav-link">
                  <TbLogout2 />
                  Log Out
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
