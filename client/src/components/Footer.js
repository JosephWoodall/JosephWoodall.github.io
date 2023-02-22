import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="home">Joseph Woodall</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="https://www.linkedin.com/in/joseph-lee-woodall-iv/">
              <button data-text="Awesome" class="button">
                <span class="actual-text">&nbsp;LinkedIn&nbsp;</span>
                <span class="hover-text" aria-hidden="true">
                  &nbsp;LinkedIn&nbsp;
                </span>
              </button>
            </Nav.Link>
            <Nav.Link href="https://github.com/JosephWoodall">
              <button data-text="Awesome" class="button">
                <span class="actual-text">&nbsp;Github_Homepage&nbsp;</span>
                <span class="hover-text" aria-hidden="true">
                  &nbsp;Github_Homepage&nbsp;
                </span>
              </button>
            </Nav.Link>
            <Nav.Link href="https://twitter.com/josephwoodall_">
              <button data-text="Awesome" class="button">
                <span class="actual-text">&nbsp;Twitter&nbsp;</span>
                <span class="hover-text" aria-hidden="true">
                  &nbsp;Twitter&nbsp;
                </span>
              </button>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}