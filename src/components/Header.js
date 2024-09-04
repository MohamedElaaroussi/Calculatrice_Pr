// Header.js
import React from 'react';

function Header() {
  const scrollToQuiz = () => {
    const quizSection = document.getElementById('quiz-section');
    if (quizSection) {
      quizSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <h1>LinguaWorld</h1>
      <p>Explorez le monde à travers les langues</p>
      <button className="quiz-button-header" onClick={scrollToQuiz}>
        Commencer le Quiz
      </button>
    </header>
  );
}

export default Header;
