import { useState } from "react";
import QuizPage from "./pages/QuizPage/QuizPage";
import StartPage from "./pages/startPage/StartPage";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

type ViewState = "start" | "quiz";

function App() {
  const [view, setView] = useState<ViewState>("start");

  return (
    // Добавляем классы d-flex (включает флексбокс), flex-column (выстраивает элементы сверху вниз)
    // и min-vh-100 (растягивает контейнер минимум на 100% высоты экрана)
    <div
      className="d-flex flex-column min-vh-100"
      style={{ backgroundColor: "#8D8C6A" }}
    >
      <Header />

      {/* Сами страницы будут автоматически растягиваться, заполняя пустоту,
          благодаря классу flex-grow-1 внутри их Container */}
      {view === "start" ? (
        <StartPage onStart={() => setView("quiz")} />
      ) : (
        <QuizPage onExit={() => setView("start")} />
      )}

      <Footer />
    </div>
  );
}

export default App;
