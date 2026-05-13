import { Button, Card, Col, Container, Row } from "react-bootstrap";

interface StartPageProps {
  onStart: () => void;
}
export default function StartPage({ onStart }: StartPageProps) {
  // Данные для квизов (можно вынести в массив)
  const quizzes = [1, 2, 3];

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        {/* Hero секция */}
        <Col
          md={10}
          className="text-center p-3 d-flex flex-column align-items-center mb-5"
        >
          <h1 className="fw-bolder display-4">Заголовок</h1>
          <p className="fw-medium text-muted mb-4">
            В дальнейшем все подписи можно изменить
          </p>
          <div
            style={{
              backgroundColor: "#7D2826",
              borderRadius: "24px",
              width: "100%",
              maxWidth: "800px",
              aspectRatio: "16/9",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            }}
            className="d-flex align-items-center justify-content-center text-white"
          >
            <span className="opacity-50 text-inter-custom">
              Здесь могла быть ваша картинка
            </span>
          </div>
        </Col>

        {/* Текстовые блоки */}
        <Col md={10} className="mb-5">
          <h4 className="text-start fw-bold">First subheader</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            laborum nesciunt dignissimos facere, praesentium sequi! Nemo
            repudiandae nobis placeat officiis at itaque voluptates, sit
            perspiciatis magni esse architecto ipsum neque. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Quos at voluptatum illo
            provident dolore necessitatibus, dolor tempora placeat possimus
            culpa aperiam temporibus ducimus laborum delectus non unde ea ullam.
            Illo!
          </p>

          <h4 className="text-start fw-bold mt-4">
            Last subheader, for good measure
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            laborum nesciunt dignissimos facere, praesentium sequi! Nemo
            repudiandae nobis placeat officiis at itaque voluptates, sit
            perspiciatis magni esse architecto ipsum neque. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Quos at voluptatum illo
            provident dolore necessitatibus, dolor tempora placeat possimus
            culpa aperiam temporibus ducimus laborum delectus non unde ea ullam.
            Illo!
          </p>
        </Col>

        {/* Секция Квизов */}
        <Col md={12}>
          <h1 className="text-center mb-5 mt-4">
            Предлагаем пройти наши квизы
          </h1>
          <Row className="g-4">
            {" "}
            {/* g-4 задает отступы между карточками */}
            {quizzes.map((item) => (
              <Col key={item} xs={12} md={4}>
                <Card
                  className="h-100 border-0 shadow-sm"
                  style={{ borderRadius: "18px", backgroundColor: "#EFE9D7" }}
                >
                  {/* Заглушка вместо картинки квиза */}
                  <div
                    style={{
                      height: "180px",
                      backgroundColor: "#EFE9D7",
                      borderRadius: "18px 18px 0 0",
                    }}
                  ></div>
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="fw-bold">Квиз #{item}</Card.Title>
                    <Card.Text className="flex-grow-1 text-muted">
                      Краткое описание квиза, которое поможет пользователю
                      понять, о чем идет речь.
                    </Card.Text>
                    <Button
                      onClick={onStart}
                      style={{ backgroundColor: "#7D2826", border: "none" }}
                      className="w-100 mt-3"
                    >
                      Пройти квиз
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
