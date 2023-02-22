import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Home";
import GithubRepositories from "./pages/GithubRepositories";
import NoPage from "./pages/NoPage";

import NavigationMenu from "./components/NavigationMenu";
import Quote from "./components/Quote";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <HashRouter basename="/">

        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="home">Joseph Woodall</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/home">
                <button data-text="Awesome" class="button">
                  <span class="actual-text">&nbsp;Home&nbsp;</span>
                  <span class="hover-text" aria-hidden="true">
                    &nbsp;Home&nbsp;
                  </span>
                </button>
              </Nav.Link>
              <Nav.Link href="/github_repositories">
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
        <div className='body-background'>
          <Routes>
            <Route index element={<Home />} />
            <Route exact path="home" element={<Home />} />
            <Route exact path="github_repositories" element={<GithubRepositories />} />
            <Route exact path="*" element={<NoPage />} />
          </Routes>
        </div>
        <Footer />
      </HashRouter>
    </>
  );
}
