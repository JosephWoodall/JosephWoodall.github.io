import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Canvas, useThree } from "@react-three/fiber";
import Starfield from "./Starfield";
import * as THREE from "three";

export default function Footer() {

  return (
    <>
      <div className="NavMenu">
        <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
          <Canvas
            clearColor="transparent"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          >
            <perspectiveCamera
              position={[0, 0, 10]}
              fov={100}
              aspect={window.innerWidth / window.innerHeight}
              onUpdate={(camera) => camera.updateProjectionMatrix()}
            />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Starfield />
          </Canvas>
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
                      <span class="actual-text">
                        &nbsp;Github_Homepage&nbsp;
                      </span>
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
