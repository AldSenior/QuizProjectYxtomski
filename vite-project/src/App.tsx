import React, { useState } from "react";
import QuizPage from "./pages/QuizPage/QuizPage";
import StartPage from "./pages/startPage/StartPage";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

type ViewState = "start" | "quiz";

function App() {
  const [view, setView] = useState<ViewState>("start");

  return (
    <div className="" style={{ backgroundColor: "#8D8C6A" }}>
      <Header />
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
