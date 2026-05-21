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
        "В каком старинном русском городе прошли детские годы Алексея Ухтомского, и где сейчас находится его дом-музей?",
      options: ["Ярославль", "Рыбинск", "Кострома", "Углич"],
      correctAnswer: "Рыбинск",
      image: "/vopros.png",
    },
    {
      id: 2,
      question:
        "Алексей Алексеевич принадлежал к древнему княжескому роду. От какого легендарного князя вела свою родословную эта династия?",
      options: [
        "Рюрика",
        "Владимира Мономаха",
        "Александра Невского",
        "Дмитрия Донского",
      ],
      correctAnswer: "Рюрика",
      image: "/vopros.png",
    },
    {
      id: 3,
      question:
        "Кто из известных святых, с которым Ухтомский случайно познакомился на пароходе, оказал серьёзное влияние на его решение поступать в Духовную академию?",
      options: [
        "Серафим Саровский",
        "Иоанн Кронштадтский",
        "Сергий Радонежский",
        "Лука Войно-Ясенецкий",
      ],
      correctAnswer: "Иоанн Кронштадтский",
      image: "/vopros.png",
    },
    {
      id: 4,
      question:
        "Как назывался главный научный труд Ухтомского, защищенный им в Духовной академии, который парадоксальным образом подтолкнул его к изучению физиологии?",
      options: [
        "«О доминанте как рабочем принципе нервных центров»",
        "«Космологическое доказательство Бытия Божия»",
        "«Физиология двигательного аппарата»",
        "«О единстве научного и религиозного познания»",
      ],
      correctAnswer: "«Космологическое доказательство Бытия Божия»",
      image: "/vopros.png",
    },
    {
      id: 5,
      question:
        "Кого Алексей Ухтомский на протяжении всей жизни называл своим главным «учителем мысли» и был благодарен ему за привитый интерес к естествознанию?",
      options: [
        "Своего брата, архиепископа Андрея (Ухтомского)",
        "Профессора Н.Е. Введенского",
        "Учителя математики И.П. Долбню",
        "Профессора И.П. Павлова",
      ],
      correctAnswer: "Учителя математики И.П. Долбню",
      image: "/vopros.png",
    },
    {
      id: 6,
      question:
        "Выпускникам духовных семинарий и академий в империи было запрещено поступать на естественные отделения университетов. На какой факультет Петербургского университета пришлось поступить Ухтомскому в 1899 году, чтобы год спустя всё же перевестись на физико-математический?",
      options: [
        "Историко-филологический",
        "Восточный",
        "Юридический",
        "Физико-математический (он сразу поступил туда, преодолев запрет)",
      ],
      correctAnswer: "Восточный",
      image: "/vopros.png",
    },
    {
      id: 7,
      question:
        "В 1911 году Ухтомский защитил магистерскую диссертацию, в которой впервые изложил принцип, ставший его главным научным открытием. О каком принципе идёт речь?",
      options: [
        "Принципе обратной связи",
        "Принципе доминанты",
        "Принципе условного рефлекса",
        "Принципе парабиоза",
      ],
      correctAnswer: "Принципе доминанты",
      image: "/vopros.png",
    },
    {
      id: 8,
      question:
        "Имя какого своего учителя и предшественника Ухтомский чтил больше всего и чью кафедру он возглавил в Петроградском университете после его смерти?",
      options: [
        "И.М. Сеченова",
        "В.М. Бехтерева",
        "Н.Е. Введенского",
        "И.П. Павлова",
      ],
      correctAnswer: "Н.Е. Введенского",
      image: "/vopros.png",
    },
    {
      id: 9,
      question:
        "В 1920 году Алексей Алексеевич был арестован и несколько месяцев провёл в заключении. Из-за какой своей неосторожности он оказался под арестом?",
      options: [
        "За публикацию религиозных статей в подпольной типографии",
        "Из-за неосторожных разговоров в научном обществе, сочтенных контрреволюционными",
        "За отказ читать лекции для красноармейцев",
        "За помощь в организации нелегального церковного хора",
      ],
      correctAnswer:
        "Из-за неосторожных разговоров в научном обществе, сочтенных контрреволюционными",
      image: "/vopros.png",
    },
    {
      id: 10,
      question:
        "Помимо глубоких научных знаний, Ухтомский обладал множеством талантов. Какие два увлечения из перечисленных ему принадлежали?",
      options: [
        "Игра на скрипке и верховая езда",
        "Иконопись и знание древних языков (включая древнееврейский)",
        "Поэзия и игра в шахматы",
        "Столярное дело и фотография",
      ],
      correctAnswer:
        "Иконопись и знание древних языков (включая древнееврейский)",
      image: "/vopros.png",
    },
    {
      id: 11,
      question:
        "Ухтомский был глубоко верующим человеком. В 1920 году, уже при советской власти, он принял монашеский постриг. Какое имя он получил в монашестве?",
      options: ["Алексий", "Алипий", "Андрей", "Анатолий"],
      correctAnswer: "Алипий",
      image: "/vopros.png",
    },
    {
      id: 12,
      question:
        "С 1911 года и до конца жизни Алексей Алексеевич исполнял важную церковную должность в храме на Васильевском острове. Какую именно?",
      options: [
        "Был священником (иереем)",
        "Был регентом хора",
        "Был старостой (единоверческого Никольского храма)",
        "Был псаломщиком",
      ],
      correctAnswer: "Был старостой (единоверческого Никольского храма)",
      image: "/vopros.png",
    },
    {
      id: 13,
      question:
        "Как сложилась судьба старшего брата Алексея Ухтомского, Александра?",
      options: [
        "Он эмигрировал во Францию после революции",
        "Стал известным физиологом, работал вместе с братом",
        "Стал церковным деятелем, архиепископом Андреем, и был расстрелян в 1937 году",
        "Погиб на фронтах Первой мировой войны",
      ],
      correctAnswer:
        "Стал церковным деятелем, архиепископом Андреем, и был расстрелян в 1937 году",
      image: "/vopros.png",
    },
    {
      id: 14,
      question:
        "Какая высокая научная награда была присуждена Ухтомскому в 1932 году, ещё до избрания академиком?",
      options: [
        "Премия имени В.И. Ленина",
        "Сталинская премия",
        "Золотая медаль имени И.П. Павлова",
        "Орден Трудового Красного Знамени",
      ],
      correctAnswer: "Премия имени В.И. Ленина",
      image: "/vopros.png",
    },
    {
      id: 15,
      question:
        "Алексей Алексеевич Ухтомский умер 31 августа 1942 года в Ленинграде. Какие трагические обстоятельства стали причиной его смерти?",
      options: [
        "Он был арестован и умер в тюремной больнице",
        "Блокада Ленинграда (умер от голода и истощения, отказавшись от эвакуации)",
        "Тяжелая болезнь, полученная при вскрытии трупов животных",
        "Он погиб во время артиллерийского обстрела университета",
      ],
      correctAnswer:
        "Блокада Ленинграда (умер от голода и истощения, отказавшись от эвакуации)",
      image: "/vopros.png",
    },
    {
      id: 16,
      question:
        'В каком году вышла в свет программная статья Ухтомского, в которой он впервые развернуто изложил принцип доминанты как основной принцип работы нервных центров, и которая стала "визитной карточкой" его учения?',
      options: [
        "1911 год (в его магистерской диссертации)",
        "1923 год («Доминанта как рабочий принцип нервных центров»)",
        "1927 год («Парабиоз и доминанта»)",
        "1935 год («Возбуждение, утомление, торможение»)",
      ],
      correctAnswer:
        "1923 год («Доминанта как рабочий принцип нервных центров»)",
      image: "/vopros.png",
    },
    {
      id: 17,
      question:
        "Согласно учению Ухтомского, что происходит в нервной системе, когда возникает доминанта — господствующий очаг возбуждения?",
      options: [
        "Все остальные центры полностью отключаются и перестают реагировать на сигналы.",
        "Доминантный очаг ослабляет собственное возбуждение, чтобы распределить ресурсы равномерно.",
        "Доминантный очаг притягивает к себе импульсы из других центров, усиливаясь за их счет и тормозя их активность",
        "Возбуждение хаотически перескакивает с одного центра на другой, не задерживаясь надолго.",
      ],
      correctAnswer:
        "Доминантный очаг притягивает к себе импульсы из других центров, усиливаясь за их счет и тормозя их активность",
      image: "/vopros.png",
    },
    {
      id: 18,
      question:
        "Ухтомский рассматривал доминанту не просто как физиологический, но и как психологический и даже нравственный феномен. Какое понятие, важное для философии диалога, он ввел для описания высшего уровня человеческого общения, когда мы воспринимаем другого не как наше отражение, а как уникальную личность?",
      options: [
        '"Сверхчеловек"',
        '"Заслуженный собеседник"',
        '"Коллективный разум"',
        '"Идеальное Я"',
      ],
      correctAnswer: '"Заслуженный собеседник"',
      image: "/vopros.png",
    },
    {
      id: 19,
      question:
        "Как называется другая важная работа Ухтомского, вышедшая в 1927 году, где он рассматривает взаимосвязь своего учения о доминанте с теорией парабиоза, разработанной его учителем — Н.Е. Введенским?",
      options: [
        "«Доминанта как фактор поведения»",
        "«Физиология двигательного аппарата»",
        "«Парабиоз и доминанта»",
        "«Система рефлексов в восходящем ряду»",
      ],
      correctAnswer: "«Парабиоз и доминанта»",
      image: "/vopros.png",
    },
    {
      id: 20,
      question:
        "Идеи Ухтомского о доминанте нашли применение далеко за пределами физиологии. Согласно современным исследованиям, какой феномен, выявленный в педагогике, подтверждает правильность его теории о том, что одна доминанта может усиливать другую?",
      options: [
        'Феномен "эмоционального выгорания" учителя',
        'Феномен "коллективной резонансной доминанты познания" (усиление познавательной активности при объединении пищевой и познавательной доминант)',
        'Феномен "клипового мышления" у студентов',
        'Феномен "цифрового аутизма"',
      ],
      correctAnswer:
        'Феномен "коллективной резонансной доминанты познания" (усиление познавательной активности при объединении пищевой и познавательной доминант)',
      image: "/vopros.png",
    },
    {
      id: 21,
      question:
        "В своих философских исканиях Ухтомский ввел понятие, позже заимствованное М.М. Бахтиным, которое описывает неразрывную связь пространственных и временных отношений в переживании и поведении человека. Как называется это понятие?",
      options: ["Континуум", "Хронотоп", "Ноосфера", "Биосфера"],
      correctAnswer: "Хронотоп",
      image: "/vopros.png",
    },
    {
      id: 22,
      question:
        "Последней работой ученого, которую он подготовил, но не успел зачитать из-за смерти в блокадном Ленинграде, стал доклад. Еще в 1920-е годы он начал читать новаторский курс, связанный с этой темой, что делает его одним из основоположников научной организации труда в СССР. Как назывался этот доклад?",
      options: [
        "«Система рефлексов в восходящем ряду»",
        "«Физиология двигательного аппарата как основа физиологии труда»",
        "«15 лет советской физиологии»",
        "«Возбуждение, утомление, торможение»",
      ],
      correctAnswer: "«Система рефлексов в восходящем ряду»",
      image: "/vopros.png",
    },
  ];
  const totalQuestions = questions.length;
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

  // Метод для вывода текста-комментария в зависимости от успешности
  const getScoreComment = () => {
    const ratio = score / totalQuestions;
    if (ratio === 1)
      return "Великолепно! Вы идеально знаете биографию и труды А.А. Ухтомского.";
    if (ratio >= 0.7)
      return "Отличный результат! Вы прекрасно знакомы с наследием ученого.";
    if (ratio >= 0.4)
      return "Хорошая попытка! Вы знаете основные моменты, но есть куда расти.";
    return "Вы познакомились с основными вехами жизни Ухтомского. Попробуйте пройти еще раз!";
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
            backgroundColor: "#EFE9D7",
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

        <Row className="align-items-center gx-md-5 justify-content-center">
          {/* Текстовый блок */}
          <Col
            xs={{ span: 12, order: 1 }}
            md={{ span: 6, order: 2 }}
            className="text-start pt-2"
          >
            <h2
              className="fw-bold mb-1"
              style={{ color: "#2d3220", fontSize: "2.5rem" }}
            >
              Ваш результат
            </h2>
            <p
              className="fw-bold mb-1"
              style={{ color: "#2d3220", fontSize: "0.95rem" }}
            >
              Поздравляем!
            </p>
            <p
              className="mb-3"
              style={{ color: "#2d3220", fontSize: "0.9rem", opacity: 0.8 }}
            >
              {getScoreComment()}
            </p>

            {/* Исправлен цвет текста счета, чтобы он не сливался с фоном */}
            <div
              className="display-4 fw-bold mb-4 mb-md-5"
              style={{
                color: "#2d3220",
                letterSpacing: "-1px",
              }}
            >
              {score} / {totalQuestions}
            </div>
          </Col>

          {/* Картинка */}
          <Col
            xs={{ span: 10, order: 2 }}
            md={{ span: 6, order: 1 }}
            className="mb-4 mb-md-0 d-flex justify-content-center"
          >
            <div
              className="rounded-4 shadow-sm w-100"
              style={{
                aspectRatio: "1/1",
                maxWidth: "320px",
                background: "url(/vopros.png)",
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
        {/* Вопрос и Ответы */}
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

        {/* Изображение */}
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
