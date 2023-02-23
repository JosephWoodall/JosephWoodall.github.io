import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="NavMenu">
        <Navbar bg="dark" variant="dark">
          <Container fluid>
            <Navbar.Brand href="home">Joseph Woodall</Navbar.Brand>
            <Row>
              <Nav className="me-auto">
                <Col xs>
                  <Nav.Link href="https://www.linkedin.com/in/joseph-lee-woodall-iv/">
                    <button data-text="Awesome" class="button">
                      <span class="actual-text">&nbsp;LinkedIn&nbsp;</span>
                      <span class="hover-text" aria-hidden="true">
                        &nbsp;LinkedIn&nbsp;
                      </span>
                    </button>
                  </Nav.Link>
                </Col>
                <Col xs>
                  <Nav.Link href="https://github.com/JosephWoodall">
                    <button data-text="Awesome" class="button">
                      <span class="actual-text">&nbsp;Github_Homepage&nbsp;</span>
                      <span class="hover-text" aria-hidden="true">
                        &nbsp;Github_Homepage&nbsp;
                      </span>
                    </button>
                  </Nav.Link>
                </Col>
                <Col xs>
                  <Nav.Link href="https://twitter.com/josephwoodall_">
                    <button data-text="Awesome" class="button">
                      <span class="actual-text">&nbsp;Twitter&nbsp;</span>
                      <span class="hover-text" aria-hidden="true">
                        &nbsp;Twitter&nbsp;
                      </span>
                    </button>
                  </Nav.Link>
                </Col>
              </Nav>
            </Row>
          </Container>
        </Navbar>
      </div>
    </>
  );
}
