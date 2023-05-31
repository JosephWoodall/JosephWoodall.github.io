import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

import { Canvas } from "@react-three/fiber";

import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "../pages/Home";
import GithubRepositories from "../pages/GithubRepositories";
import NoPage from "../pages/NoPage";
import PepePlanetSpin from "./PepePlanetSpin";

export default function Background() {
  return (
    <>
      <HashRouter basename="/">
        <div className="NavMenu">
          <Navbar bg="dark" variant="dark" collapseOnSelect expand='lg'>
            <Canvas
              resize={{ scroll: false }}
              clearColor="transparent"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            >
            </Canvas>
            <Container fluid>
              <Row>
                <Navbar.Brand as={Link} to="home">
                  Joseph Woodall
                </Navbar.Brand>
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
                  <Col>
                    <Nav.Link href="https://www.linkedin.com/in/joseph-lee-woodall-iv/">
                      <button data-text="Awesome" class="button">
                        <span class="actual-text">&nbsp;LinkedIn&nbsp;</span>
                        <span class="hover-text" aria-hidden="true">
                          &nbsp;LinkedIn&nbsp;
                        </span>
                      </button>
                    </Nav.Link>
                  </Col>
                  <Col>
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
                  <Col>
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
                <div className="body-background">
                  <Routes>
                    <Route index element={<Home />} />
                    <Route exact path="/home" element={<Home />} />
                    <Route
                      path="/github_repositories"
                      element={<GithubRepositories />}
                    />
                    <Route path="/*" element={<NoPage />} />
                  </Routes>
                </div>
              </Row>
            </Container>
          </Navbar>
        </div>
      </HashRouter>
    </>
  );
}
