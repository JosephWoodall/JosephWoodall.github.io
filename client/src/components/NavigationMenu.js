import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

import { Canvas, useThree } from "@react-three/fiber";
import Box from "../components/threeJSVizOne";
import * as THREE from "three";

export default function NavigationMenu() {
  const points = [];
  for (let i = 0; i < 8000; i++) {
    const x = Math.random() * 10 - 5;
    const y = Math.random() * 10 - 5;
    const z = Math.random() * 10 - 5;
    const point = new THREE.Vector3(x, y, z);
    points.push(point);
  }

  return (
    <>
      <Navbar bg="dark" variant="dark">
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
            fov={60}
            aspect={window.innerWidth / window.innerHeight}
            onUpdate={(camera) => camera.updateProjectionMatrix()}
          />
          <ambientLight intensity={0.5}/>
          <pointLight position={[10, 10, 10]} />
          <Box points={points} />
        </Canvas>
        <Container>
          <Navbar.Brand as={Link} to="home">
            Joseph Woodall
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">
              <button data-text="Awesome" class="button">
                <span class="actual-text">&nbsp;Home&nbsp;</span>
                <span class="hover-text" aria-hidden="true">
                  &nbsp;Home&nbsp;
                </span>
              </button>
            </Nav.Link>
            <Nav.Link as={Link} to="/github_repositories">
              <button data-text="Awesome" class="button">
                <span class="actual-text">&nbsp;Github_Highlights&nbsp;</span>
                <span class="hover-text" aria-hidden="true">
                  &nbsp;Github_Highlights&nbsp;
                </span>
              </button>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
