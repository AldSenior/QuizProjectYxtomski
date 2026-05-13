import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  image?: string;
}

interface QuizPageProps {
  onExit: () => void;
}

export default function QuizPage({ onExit }: QuizPageProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isChecked, setIsChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const questions: Question[] = [
    {
      id: 1,
      question:
        "Выпускникам духовных семинарий и академий в имерии было запрещено поступать на естественные отделения университетов. На какой факультет Петербургского университета пришлось поступить Ухтомскому в 1899 году, чтобы год спустя все же перевестись на физико-математический?",
      options: [
        "Историко-филологический",
        "Восточный",
        "Юридический",
        "Физико-математический (он сразу поступил туда, преодолев запрет)",
      ],
      correctAnswer: "Юридический",
      image: "",
    },
  ];

  const totalQuestions = 15;
  const progressPercent = Math.round((currentStep / totalQuestions) * 100);

  const handleCheckOrNext = () => {
    if (!selectedOption) return;

    if (!isChecked) {
      setIsChecked(true);
      if (selectedOption === questions[currentStep].correctAnswer) {
        setScore((s) => s + 1);
      }
    } else {
      if (currentStep < questions.length - 1) {
        setCurrentStep((s) => s + 1);
        setSelectedOption(null);
        setIsChecked(false);
      } else {
        setIsFinished(true);
      }
    }
  };

  const getOptionStyle = (option: string) => {
    if (!isChecked) return { color: "#2d3220" };
    if (option === questions[currentStep].correctAnswer)
      return { color: "#28a745", fontWeight: "bold" };
    if (option === selectedOption)
      return { color: "#dc3545", fontWeight: "bold" };
    return { color: "#2d3220", opacity: 0.5 };
  };

  if (isFinished) {
    return (
      <Container
        className="py-4 py-md-5 flex-grow-1 text-inter-custom"
        style={{ maxWidth: "900px" }}
      >
        {/* Прогресс-бар 100% */}
        <div
          className="text-center mb-2 small fw-bold"
          style={{ color: "#2d3220" }}
        >
          Прогресс: 100%
        </div>
        <div
          className="mb-4"
          style={{
            height: "20px",
            backgroundColor: "#3a3f2d",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "#2d3220",
            }}
          />
        </div>

        <Row className="align-items-start gx-md-5 justify-content-center">
          {/* Текстовый блок: Первый на мобилке (order-1), второй на десктопе (order-md-2) */}
          <Col
            xs={{ span: 12, order: 1 }}
            md={{ span: 6, order: 2 }}
            className="text-start  pt-2"
          >
            <h2
              className="fw-bold mb-1"
              style={{ color: "#2d3220", fontSize: "2.5rem" }}
            >
              Ваш результат
            </h2>
            <p
              className="fw-bold mb-0"
              style={{ color: "#2d3220", fontSize: "0.95rem" }}
            >
              Поздравляем! Ваш результат:
            </p>
            <p
              className="mb-3"
              style={{ color: "#2d3220", fontSize: "0.9rem", opacity: 0.7 }}
            >
              &lt;комментарий по результату&gt;
            </p>

            {/* Счет: (от 0 до 15) / 15 */}
            <div
              className="display-4 fw-bold mb-4 mb-md-5"
              style={{
                color: "rgba(255, 255, 255, 0.9)",
                letterSpacing: "-1px",
              }}
            >
              ({score} до 15) / 15
            </div>
          </Col>

          {/* Картинка: Вторая на мобилке (order-2), первая на десктопе (order-md-1) */}
          <Col
            xs={{ span: 10, order: 2 }}
            md={{ span: 6, order: 1 }}
            className="mb-4 mb-md-0 d-flex justify-content-center"
          >
            <div
              className="rounded-4 shadow-sm w-100"
              style={{
                aspectRatio: "1/1",
                maxWidth: "320px", // Ограничение размера на мобилке
                background: questions[0].image
                  ? `url(${questions[0].image}) center/cover`
                  : "linear-gradient(135deg, #FFD1D1 0%, #D1D9FF 100%)",
                borderRadius: "20px",
              }}
            />
          </Col>
        </Row>

        {/* Кнопка завершения */}
        <div className="mt-4 mt-md-5">
          <Button
            onClick={onExit}
            className="w-100 py-3 border-0 shadow-sm fw-bold"
            style={{
              backgroundColor: "#7D2826",
              borderRadius: "12px",
              fontSize: "1rem",
            }}
          >
            Завершить квиз
          </Button>
        </div>
      </Container>
    );
  }

  const currentQuestion = questions[currentStep] || questions[0];

  return (
    <Container className="py-4 py-md-5 flex-grow-1 text-inter-custom">
      {/* Прогресс-бар */}
      <div
        className="text-center mb-2 small fw-bold"
        style={{ color: "#2d3220" }}
      >
        Прогресс:{" "}
        {progressPercent < 10 ? `0${progressPercent}` : progressPercent}%
      </div>
      <div
        className="mb-5 shadow-inner"
        style={{
          height: "24px",
          backgroundColor: "#EFE9D7",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${progressPercent}%`,
            height: "100%",
            backgroundColor: "#2d3220",
            transition: "width 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
            borderRadius: "12px",
          }}
        />
      </div>

      <Row className="gx-md-5">
        {/* Вопрос и Ответы (Первые на мобильном) */}
        <Col xs={{ span: 12, order: 1 }} md={{ span: 7, order: 2 }}>
          <h2 className="display-5 fw-bold mb-3" style={{ color: "#2d3220" }}>
            Вопрос {currentStep + 1}
          </h2>
          <p
            className="fs-5 fw-bold mb-4"
            style={{ color: "#2d3220", lineHeight: "1.4" }}
          >
            {currentQuestion.question}
          </p>

          <Form>
            {currentQuestion.options.map((option, idx) => (
              <div
                key={idx}
                className={`d-flex align-items-start mb-3 transition-all ${isChecked ? "pe-none" : "option-hover"}`}
                style={{ cursor: "pointer" }}
                onClick={() => setSelectedOption(option)}
              >
                <div
                  className="me-3 mt-1 shadow-sm"
                  style={{
                    minWidth: "26px",
                    height: "26px",
                    borderRadius: "50%",
                    backgroundColor:
                      selectedOption === option ? "#2d3220" : "#EFE9D7",
                    transition: "background-color 0.2s ease",
                  }}
                />
                <span className="fw-bold fs-5" style={getOptionStyle(option)}>
                  {option}
                </span>
              </div>
            ))}
          </Form>
        </Col>

        {/* Изображение (Под вопросом на мобильном) */}
        <Col
          xs={{ span: 12, order: 2 }}
          md={{ span: 5, order: 1 }}
          className="mt-4 mt-md-0"
        >
          <div
            className="rounded-4 shadow-sm w-100"
            style={{
              aspectRatio: "1/1",
              backgroundColor: "#7D2826",
              background: currentQuestion.image
                ? `url(${currentQuestion.image}) center/cover`
                : "linear-gradient(135deg, #fce0e0 0%, #d8e1ff 100%)",
              border: "8px solid rgba(255,255,255,0.2)",
            }}
          />
        </Col>
      </Row>

      {/* Кнопки действий */}
      <Row className="mt-5 g-3">
        <Col xs={12} md={6}>
          <Button
            className="w-100 py-3 text-white fw-bold border-0 shadow-sm"
            style={{ backgroundColor: "#7D2826", borderRadius: "15px" }}
            onClick={onExit}
          >
            Завершить квиз
          </Button>
        </Col>
        <Col xs={12} md={6}>
          <Button
            className="w-100 py-3 text-white fw-bold border-0 shadow-sm"
            style={{
              backgroundColor: "#7D2826",
              borderRadius: "15px",
              opacity: !selectedOption ? 0.6 : 1,
            }}
            disabled={!selectedOption}
            onClick={handleCheckOrNext}
          >
            {isChecked
              ? currentStep === questions.length - 1
                ? "Результат"
                : "Далее"
              : "Проверить ответ"}
          </Button>
        </Col>
      </Row>

      <style>{`
        .option-hover:hover div { transform: scale(1.1); }
        .transition-all { transition: all 0.3s ease; }
        .shadow-inner { box-shadow: inset 0 2px 4px rgba(0,0,0,0.1); }
      `}</style>
    </Container>
  );
}
