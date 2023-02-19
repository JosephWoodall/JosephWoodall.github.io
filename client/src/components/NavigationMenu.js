import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function NavigationMenu() {
  return (
    <>
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
    </>
  );
}
