// LanguageTest.js
import React, { useState } from 'react';

const questions = {
  Français: [
    { question: 'Quelle est la capitale de la France?', options: ['Paris', 'Londres', 'Berlin'], answer: 'Paris' },
    // Ajoutez d'autres questions ici
  ],
  Anglais: [
    { question: 'What is the capital of the United Kingdom?', options: ['London', 'Paris', 'Berlin'], answer: 'London' },
    // Ajoutez d'autres questions ici
  ],
  // Ajoutez d'autres langues et questions ici
};

function LanguageTest({ language }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (selectedOption) => {
    if (selectedOption === questions[language][currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions[language].length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="test-container">
      {showScore ? (
        <div className="score-section">
          Vous avez obtenu {score} sur {questions[language].length} bonnes réponses.
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions[language].length}
            </div>
            <div className="question-text">{questions[language][currentQuestion].question}</div>
          </div>
          <div className="answer-section">
            {questions[language][currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswerOptionClick(option)}>
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default LanguageTest;
