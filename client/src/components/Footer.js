import Card from "react-bootstrap/Card";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <Card className="text-center">
        <Card.Header></Card.Header>
        <Card.Body>
          <Card.Title>Socials</Card.Title>
          <a href="https://www.linkedin.com/in/joseph-lee-woodall-iv/">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/JosephWoodall">
            <FaGithub />
          </a>
          <a href="https://twitter.com/josephwoodall_">
            <FaTwitter />
          </a>
        </Card.Body>
        <Card.Footer className="text-muted">
          &copy;Joseph Woodall. All rights reserved.
        </Card.Footer>
      </Card>
    </>
  );
}
