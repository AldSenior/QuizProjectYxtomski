import { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  ProgressBar,
  Row,
} from "react-bootstrap";

// Типы данных
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
  // Состояния квиза
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  // Данные (добавил еще один вопрос для демонстрации переключения)
  const questions: Question[] = [
    {
      id: 1,
      question:
        "Как называется основной компонент в React Bootstrap для создания сетки?",
      options: ["Box", "Container", "Div", "Section"],
      correctAnswer: "Container",
      image: "https://placehold.co/600x400/7D2826/white?text=React+Bootstrap",
    },
    {
      id: 2,
      question:
        "Какой хук используется для управления состоянием в функциональном компоненте?",
      options: ["useEffect", "useState", "useContext", "useReducer"],
      correctAnswer: "useState",
      image: "https://placehold.co/600x400/28267D/white?text=React+Hooks",
    },
  ];

  const totalQuestions = questions.length;

  const progressPercent = Math.round(
    ((currentStep + 1) / totalQuestions) * 100,
  );

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
  };

  const handleNextQuestion = () => {
    if (!selectedOption) return;

    // Проверка ответа
    const isCorrect = selectedOption === questions[currentStep].correctAnswer;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    // Логика перехода
    if (currentStep < totalQuestions - 1) {
      setCurrentStep((prev) => prev + 1);
      setSelectedOption(null);
    } else {
      setIsFinished(true);
    }
  };

  // Экран завершения
  if (isFinished) {
    return (
      <Container className="text-center py-5">
        <Card
          className="shadow-sm border-0 p-5"
          style={{ borderRadius: "24px" }}
        >
          <h1 className="mb-4">Квиз завершен!</h1>
          <h3 className="mb-4">
            Ваш результат: <span className="text-success fw-bold">{score}</span>{" "}
            из {totalQuestions}
          </h3>
          <p className="text-muted mb-4">
            {score === totalQuestions
              ? "Отличная работа! Вы настоящий эксперт."
              : "Хорошая попытка! Попробуйте еще раз, чтобы улучшить результат."}
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Button variant="outline-dark" onClick={onExit}>
              Выйти в меню
            </Button>
            <Button
              style={{ backgroundColor: "#7D2826", border: "none" }}
              onClick={() => window.location.reload()}
            >
              Пройти еще раз
            </Button>
          </div>
        </Card>
      </Container>
    );
  }

  const currentQuestion = questions[currentStep];
  const isLastQuestion = currentStep === totalQuestions - 1;

  return (
    <Container className="py-4 text-inter-custom">
      {/* Прогресс бар */}
      <Row className="mb-4">
        <Col>
          <div className="d-flex justify-content-between mb-2 fw-bold">
            <span>
              Вопрос {currentStep + 1} из {totalQuestions}
            </span>
            <span>{progressPercent}%</span>
          </div>
          <ProgressBar
            now={progressPercent}
            variant="success"
            animated
            style={{ height: "10px", backgroundColor: "#EFE9D7" }}
            className="rounded-pill"
          />
        </Col>
      </Row>

      {/* Основной блок квиза */}
      <Card className="shadow-sm border-0 p-4" style={{ borderRadius: "24px" }}>
        <Row className="align-items-center">
          {/* Лево: Картинка */}
          <Col md={6} className="mb-4 mb-md-0">
            <div
              className="rounded overflow-hidden shadow-sm"
              style={{
                backgroundImage: `url(${currentQuestion.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                aspectRatio: "4/3",
                backgroundColor: "#7D2826",
              }}
            />
          </Col>

          {/* Право: Вопрос и ответы */}
          <Col md={6}>
            <h3 className="fw-bold mb-4">{currentQuestion.question}</h3>

            <Form>
              {currentQuestion.options.map((option, index) => (
                <div
                  key={index}
                  className={`p-3 border rounded mb-2 d-flex align-items-center ${
                    selectedOption === option
                      ? "border-primary bg-light"
                      : "hover-bg-light"
                  }`}
                  style={{
                    cursor: "pointer",
                    transition: "all 0.2s ease-in-out",
                  }}
                  onClick={() => handleOptionChange(option)}
                >
                  <Form.Check
                    type="radio"
                    label={option}
                    name="quiz-options"
                    value={option}
                    checked={selectedOption === option}
                    onChange={() => handleOptionChange(option)}
                    id={`option-${index}`}
                    className="mb-0 w-100 custom-radio"
                  />
                </div>
              ))}
            </Form>
          </Col>
        </Row>

        {/* Кнопки снизу */}
        <Row className="mt-5 pt-3 border-top">
          <Col className="d-flex justify-content-between">
            <Button variant="outline-danger" onClick={onExit} className="px-4">
              Завершить квиз
            </Button>
            <Button
              style={{
                backgroundColor: selectedOption ? "#7D2826" : "#ccc",
                border: "none",
                cursor: selectedOption ? "pointer" : "not-allowed",
              }}
              className="px-4"
              disabled={!selectedOption}
              onClick={handleNextQuestion}
            >
              {isLastQuestion ? "Завершить" : "Следующий вопрос"}
            </Button>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}
