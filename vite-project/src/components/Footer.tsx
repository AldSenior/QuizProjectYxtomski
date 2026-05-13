import { Col, Container, Row } from "react-bootstrap";
export default function Footer() {
  return (
    <footer
      className="py-5 mt-auto"
      style={{ backgroundColor: "#2d3220", color: "#fff" }}
    >
      <Container>
        <Row>
          <Col xs={12} md={6} className="mb-4 mb-md-0">
            <h5 className="fw-bold">Namedly</h5>
            <p className="small opacity-75 w-75">
              Descriptive line about what your company does.
            </p>
            <div className="d-flex gap-2">
              <div
                style={{
                  width: 24,
                  height: 24,
                  backgroundColor: "#fff",
                  borderRadius: "4px",
                }}
              ></div>
              <div
                style={{
                  width: 24,
                  height: 24,
                  backgroundColor: "#0077FF",
                  borderRadius: "4px",
                }}
              ></div>
            </div>
          </Col>
          <Col xs={6} md={3}>
            <ul className="list-unstyled small  opacity-75">
              <li className="mb-2">Support</li>
              <li className="mb-2">Contact</li>
              <li className="mb-2">Support</li>
              <li>Legal</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
