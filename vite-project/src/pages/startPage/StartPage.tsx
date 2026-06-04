import { Button, Card, Col, Container, Row } from "react-bootstrap";

interface StartPageProps {
  onStart: () => void;
}

export default function StartPage({ onStart }: StartPageProps) {
  const quizzes = [1];

  return (
    <Container className="py-4 py-md-5">
      <Row className="justify-content-center">
        {/* Hero секция с портретом */}
        <Col
          xs={12}
          md={10}
          className="text-center p-3 d-flex flex-column align-items-center mb-5"
        >
          <h1 className="fw-bolder display-4 mb-3">
            А. А. Ухтомский: Великий ученый и его наследие
          </h1>
          <p className="fw-medium text-muted mb-4">
            Погрузитесь в историю жизни и научных открытий знаменитого физиолога
          </p>
          <div
            style={{
              borderRadius: "24px",
              width: "100%",
              maxWidth: "800px",
              aspectRatio: "16/10",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              overflow: "hidden",
            }}
          >
            <img
              src="/images/portret1.jpg"
              alt="Алексей Алексеевич Ухтомский"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </Col>

        {/* Текстовые блоки */}
        <Col xs={12} md={10} className="mb-5">
          <h4 className="text-start fw-bold">Принцип доминанты</h4>
          <p>
            Aлексей Алексеевич Ухтомский — выдающийся отечественный физиолог,
            создавший учение о доминанте как главном принципе работы головного
            мозга. Согласно его теории, в организме всегда существует
            господствующий очаг возбуждения, который предопределяет характер
            реакции человека на внешние раздражители и направляет наше
            поведение, мысли и действия в конкретный момент времени.
          </p>

          <h4 className="text-start fw-bold mt-4">
            Рыбинские корни и путь в науке
          </h4>
          <p>
            Родовое гнездо князей Ухтомских находилось именно на рыбинской
            земле, где будущий академик провел свои детские годы. Сочетая в себе
            глубокую духовность, интерес к философии и строгий научный подход,
            Ухтомский оставил колоссальный след не только в биологии и
            физиологии, но и в понимании человеческой психологии и природы
            собеседника.
          </p>
        </Col>

        {/* Секция Квизов */}
        <Col xs={12} id="quizzes-section" style={{ scrollMarginTop: "20px" }}>
          <h1 className="text-center mb-5 mt-4">
            Предлагаем пройти наши квизы
          </h1>
          <Row className="g-4 justify-content-center">
            {quizzes.map((item) => (
              <Col
                key={item}
                xs={12}
                sm={6}
                md={6}
                className="align-items-center"
              >
                <Card
                  className="h-100 border-0 shadow-sm overflow-hidden"
                  style={{ borderRadius: "18px", backgroundColor: "#EFE9D7" }}
                >
                  <div
                    style={{
                      height: "200px",
                      background:
                        "url('/images/1_Rybinsk_dom_Uhtomskogo.jpg') center/cover",
                    }}
                  />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="fw-bold">Квиз #{item}</Card.Title>
                    <Card.Text className="flex-grow-1 text-muted">
                      Проверьте свои знания о биографии А. А. Ухтомского, его
                      научных трудах, открытиях в области физиологии и истории
                      мемориального дома в Рыбинске.
                    </Card.Text>
                    <Button
                      onClick={onStart}
                      style={{ backgroundColor: "#7D2826", border: "none" }}
                      className="w-100 mt-3 py-2 fw-bold"
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
