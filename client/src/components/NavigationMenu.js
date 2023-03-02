import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

import { Canvas, useThree } from "@react-three/fiber";
import Starfield from "./Starfield";
import * as THREE from "three";

export default function NavigationMenu() {


  return (
    <>
      <div className="NavMenu">
        <Navbar bg="dark" variant="dark" collapseOnSelect expand='lg'>
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
            <Navbar.Brand as={Link} to="home">
              Joseph Woodall
            </Navbar.Brand>
            <Row>
              <Nav className="me-auto">
                <Col>
                  <Nav.Link as={Link} to="/home">
                    <button data-text="Awesome" class="button">
                      <span class="actual-text">&nbsp;Home&nbsp;</span>
                      <span class="hover-text" aria-hidden="true">
                        &nbsp;Home&nbsp;
                      </span>
                    </button>
                  </Nav.Link>
                </Col>
                <Col>
                  <Nav.Link as={Link} to="/github_repositories">
                    <button data-text="Awesome" class="button">
                      <span class="actual-text">
                        &nbsp;Github_Highlights&nbsp;
                      </span>
                      <span class="hover-text" aria-hidden="true">
                        &nbsp;Github_Highlights&nbsp;
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
