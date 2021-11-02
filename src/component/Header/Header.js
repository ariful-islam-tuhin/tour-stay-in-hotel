import React from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Header.css";
const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="header p-4"
        variant="dark"
        sticky="top"
      >
        <Navbar.Brand as={Link} to="/">
          MIDTOWN HOTEL <span>(New York)</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/home" className="home">
              Home
            </Nav.Link>
            {user?.email && (
              <>
                <Nav.Link as={Link} to="/myorder" className="home">
                  My orders
                </Nav.Link>
                <Nav.Link as={Link} to="/manallorder" className="home">
                  Man is all orders
                </Nav.Link>
                <Nav.Link as={Link} to="/addservice" className="home">
                  Add Order
                </Nav.Link>
              </>
            )}

            {user.email ? (
              <span>
                <span className="text-white">{user?.displayName}</span>

                <Button onClick={logOut}>Logout</Button>
              </span>
            ) : (
              <Nav.Link as={Link} to="/login" className="home">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
