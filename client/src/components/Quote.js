import Card from "react-bootstrap/Card";

export default function Quote() {
  return (
    <>
      <Card>
        <Card.Header>Quote</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p> Nothing in life is to be feared, only understood. </p>
            <footer className="blockquote-footer">
              Marie Curie
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    </>
  );
}
