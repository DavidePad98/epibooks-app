import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const MyNav = () => (
  <Navbar collapseOnSelect expand="md" bg="dark" data-bs-theme="dark">
    <Container fluid>
      <Navbar.Brand href="#home">EpiBooks</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#booking">Home</Nav.Link>
          <Nav.Link href="#admin">About</Nav.Link>
          <Nav.Link href="#contacts">Browe</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
export default MyNav;
