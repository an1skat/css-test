import "../style/style.css";
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import questions from "../questions";

const Test = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [timer, setTimer] = useState(60);
  const [shouldReload, setShouldReload] = useState(false);
  const [timerRunning, setTimerRunning] = useState(true);
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (shouldReload) {
        // Предотвращаем перезагрузку страницы
        event.preventDefault();
        // Сохраняем таймер и состояние
        localStorage.setItem("timer", JSON.stringify(timer));
        localStorage.setItem("shouldReload", JSON.stringify(true));
        localStorage.setItem("timerRunning", JSON.stringify(timerRunning));
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [shouldReload, timer, timerRunning]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden" && timerRunning) {
        setShouldReload(true);
        setTimerRunning(false);
        // Сохраняем таймер и состояние
        localStorage.setItem("timer", JSON.stringify(timer));
        localStorage.setItem("shouldReload", JSON.stringify(true));
        localStorage.setItem("timerRunning", JSON.stringify(timerRunning));
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [timerRunning, timer]);

  useEffect(() => {
    const savedTimer = JSON.parse(localStorage.getItem("timer"));
    const savedShouldReload = JSON.parse(localStorage.getItem("shouldReload"));
    const savedTimerRunning = JSON.parse(localStorage.getItem("timerRunning"));

    if (savedTimer !== null) {
      setTimer(savedTimer);
    }

    if (savedShouldReload !== null) {
      setShouldReload(savedShouldReload);
    }

    if (savedTimerRunning !== null) {
      setTimerRunning(savedTimerRunning);
    }
  }, []);

  useEffect(() => {
    const questionId = parseInt(
      new URLSearchParams(location.search).get("question"),
      10
    );
    if (
      !isNaN(questionId) &&
      questionId >= 1 &&
      questionId <= questions.length
    ) {
      setCurrentQuestion(questionId - 1);
    } else {
      setCurrentQuestion(0);
      navigate(`/test?question=1`);
    }
  }, [location.search, navigate]);

  useEffect(() => {
    if (timerRunning) {
      const intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      if (timer === 0) {
        clearInterval(intervalId);
        setTimerRunning(false);
        localStorage.setItem("timer", JSON.stringify(timer));
        localStorage.setItem("timerRunning", JSON.stringify(timerRunning));
      }
      return () => clearInterval(intervalId);
    } else {
      return;
    }
  }, [timer]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };


  const handleAnswerSelect = (answerIndex) => {
    const updatedUserAnswers = [...userAnswers];
    updatedUserAnswers[currentQuestion] = answerIndex;
    setUserAnswers(updatedUserAnswers);
    setSelectedAnswer(answerIndex);
  };

  const handleNextClick = () => {
    setSelectedAnswer(null);
    setTimer(60);
    setTimerRunning(true);

    const updatedUserAnswers = [...userAnswers];
    updatedUserAnswers[currentQuestion] = selectedAnswer;
    setUserAnswers(updatedUserAnswers);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      navigate(`/test?question=${nextQuestion + 1}`);
    } else {
        localStorage.setItem("userAnswers", JSON.stringify(updatedUserAnswers));
        navigate("/result");
    }
  };
  const resetLocalStorage = () => {
    localStorage.clear();
  };
  return (
    <div>
      <section className="test-section">
        <div className="container">
          <div className="timer-display">{formatTime(timer)}</div>
          <h1 className="test-title">
            Питання {questions[currentQuestion].id}: <br />
            {questions[currentQuestion].question}
          </h1>
          <form className="test-form">
            {questions[currentQuestion].options.map((option, index) => (
              <div className="test-option" key={index}>
                <input
                  type="radio"
                  className="test-input"
                  id={`option${index}`}
                  name="answer"
                  checked={selectedAnswer === index}
                  onChange={() => handleAnswerSelect(index)}
                />
                <label className="test-label" htmlFor={`option${index}`}>
                  {option}
                </label>
              </div>
            ))}
            <button
              className="test-button"
              type="button"
              onClick={handleNextClick}
            >
              Далі
            </button>
          </form>
        </div>
      </section>
      {timer === 0 && (
        <div className="timeout-overlay">
          <p className="timeout-text">Час вийшов!</p>
          <button
            className="test-button"
            type="button"
            onClick={handleNextClick}
          >
            Далі
          </button>
        </div>
      )}
      {shouldReload && !timerRunning && (
        <div className="reload-overlay">
          <p className="timeout-text">
            Ти покинув сторінку. Твій тест анулюється
          </p>
          <Link className="reload-button link" to="/rules" onClick={resetLocalStorage}>
            Спочатку
          </Link>
        </div>
      )}
    </div>
  );
};

export default Test;
