import { useContext } from "react";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import LeftNav from "../LeftSide/LeftNav";

function Header() {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then((result) => {})
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="mb-3"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand>
            <Link to={"/"}>NEWS-PORTAL</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">All News</Nav.Link>
              <Nav.Link href="#pricing">Categories</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">
                {user?.uid ? (
                  <>
                    <span>{user?.displayName}</span>
                    <button onClick={handleLogout}>Logout</button>
                  </>
                ) : (
                  <>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                  </>
                )}
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                {user?.photoURL ? (
                  <Image
                    style={{ height: "30px" }}
                    roundedCircle
                    src={user?.photoURL}
                  ></Image>
                ) : (
                  <FaUser></FaUser>
                )}
              </Nav.Link>
              <div className="d-lg-none">
                <LeftNav />
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
