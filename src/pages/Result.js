import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import questions from "../questions";
import "../style/style.css";

const Result = () => {
  const location = useLocation();
  const userAnswers = JSON.parse(localStorage.getItem("userAnswers")) || [];

  const calculateScore = () => {
    let score = 0;
    userAnswers.forEach((userAnswer, index) => {
      const correctAnswerIndex = questions[index].correctAnswer;
      if (userAnswer === correctAnswerIndex) {
        score++;
      }
    });
    return score;
  };

  const calculateLevel = (score) => {
    if (score >= 0 && score <= 10) {
      return "Trainee";
    } else if (score > 10 && score <= 20) {
      return "Junior";
    } else if (score > 20 && score <= 30) {
      return "Middle";
    } else if (score > 30 && score <= 35) {
      return "Senior";
    }
    return "Undefined";
  };

  const [score, setScore] = useState(0);
  const [incorrectQuestions, setIncorrectQuestions] = useState([]);
  const [level, setLevel] = useState("Undefined");

  useEffect(() => {
    // Зависимость от userAnswers и calculateScore
    const calculatedScore = calculateScore();
    setScore(calculatedScore);

    // Находим все неправильные вопросы
    const incorrectQuestionsList = [];
    userAnswers.forEach((userAnswer, index) => {
      const correctAnswerIndex = questions[index].correctAnswer;
      if (userAnswer !== correctAnswerIndex) {
        incorrectQuestionsList.push({
          question: questions[index].question,
          userAnswer: questions[index].options[userAnswer],
          correctAnswer: questions[index].options[correctAnswerIndex],
        });
      }
    });

    setIncorrectQuestions(incorrectQuestionsList);
    setLevel(calculateLevel(calculatedScore));
  }, [userAnswers]);

  return (
    <section className="result-section">
      <div className="container">
        <div className="result-container">
          <h1 className="result-title">Результати теста:</h1>
          <p className="result-text">
            Ви дали правильних відповідей: {score}/{questions.length}
          </p>
          <p style={{ marginTop: "20px" }} className="level-text">Ваш рівень: {level}</p>
        </div>

        {score < questions.length && (
          <div className="incorrect-questions">
            <h2 className="incorrect-title">Неправильні відповіді:</h2>
            <ul className="incorrect-list list">
              {incorrectQuestions.map((incorrect, index) => (
                <li key={index}>
                  <p className="incorrect-question">Питання: {incorrect.question}</p>
                  <p className="incorrect-answer">Ваш варіант відповіді: {incorrect.userAnswer}</p>
                  <p className="correct-answer">Правильний варіант відповіді: {incorrect.correctAnswer}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default Result;