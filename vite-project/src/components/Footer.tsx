import { Col, Container, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <footer
      className="py-5 mt-auto"
      style={{ backgroundColor: "#2d3220", color: "#fff" }}
    >
      <Container>
        <Row className="justify-content-between align-items-center">
          <Col xs={12} md={6} className="mb-4 mb-md-0">
            <h5 className="fw-bold mb-3">
              Информационно-просветительские квизы
            </h5>

            {/* Иконки соцсетей на основе дизайна */}
            <div className="d-flex gap-2">
              <a
                href="https://vk.com"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "flex",
                  width: 32,
                  height: 32,
                  backgroundColor: "#0077FF",
                  borderRadius: "8px",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#fff",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                вк
              </a>
            </div>
          </Col>
          <Col xs={12} md={3} className="text-md-end">
            <ul className="list-unstyled small opacity-75 mb-0">
              <li className="mb-2" style={{ cursor: "pointer" }}>
                Support
              </li>
              <li className="mb-2" style={{ cursor: "pointer" }}>
                Contact
              </li>
              <li style={{ cursor: "pointer" }}>Legal</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
