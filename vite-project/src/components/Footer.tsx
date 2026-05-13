import { Col, Container, Row } from "react-bootstrap";
import { FaTelegramPlane, FaVk } from "react-icons/fa";
export default function Footer() {
  return (
    <footer
      className="py-4 mt-auto"
      style={{ backgroundColor: "#323723", color: "#EFE9D7" }} // Единый светлый фон и серый текст
    >
      <Container>
        <Row>
          {/* Пустая колонка слева, чтобы контент был справа */}
          <Col md={6}>
            {/* 1. Name & Desc */}
            <div>
              <span className="fw-bold d-block">Namedly</span>
              <small style={{ fontSize: "0.75rem" }}>
                Образовательная платформа
              </small>
            </div>
            {/* 3. Contacts & Icons */}

            <div className="d-flex gap-3 fs-5">
              <a href="#" style={{ color: "inherit" }}>
                <FaVk />
              </a>
              <a href="#" style={{ color: "inherit" }}>
                <FaTelegramPlane />
              </a>
            </div>
          </Col>

          {/* Колонка справа со всем контентом */}
          <Col
            md={6}
            className="d-flex flex-column align-items-end text-end gap-2"
          >
            {/* 2. Links (Support & Legal) */}
            <div
              className="d-flex flex-column gap-1"
              style={{ color: "#8D8C6A" }}
            >
              <a
                href="#support"
                className="text-decoration-none small"
                style={{ color: "inherit" }}
              >
                Support
              </a>
              <a
                href="#legal"
                className="text-decoration-none small"
                style={{ color: "inherit" }}
              >
                Contacts
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
