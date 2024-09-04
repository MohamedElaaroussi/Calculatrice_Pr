// LanguageQuizzes.js
import React, { useState } from 'react';

const questions = {
    Français: [
        { question: 'Quelle est la capitale de la France?', options: ['Paris', 'Londres', 'Berlin'], answer: 'Paris' },
        { question: 'Comment dit-on "thank you" en français?', options: ['Merci', 'Gracias', 'Danke'], answer: 'Merci' },
        { question: 'Quelle est la couleur du drapeau français?', options: ['Bleu, Blanc, Rouge', 'Rouge, Blanc, Bleu', 'Vert, Blanc, Rouge'], answer: 'Bleu, Blanc, Rouge' },
        { question: 'Quel est le symbole national de la France?', options: ['Le coq', 'L’aigle', 'Le lion'], answer: 'Le coq' },
    ],
    Anglais: [
        { question: 'What is the capital of the United Kingdom?', options: ['London', 'Paris', 'Berlin'], answer: 'London' },
        { question: 'How do you say "bonjour" in English?', options: ['Hello', 'Hola', 'Hallo'], answer: 'Hello' },
        { question: 'What color is the Union Jack?', options: ['Red, White, Blue', 'Green, White, Red', 'Yellow, Black, Red'], answer: 'Red, White, Blue' },
        { question: 'What is the currency of the United Kingdom?', options: ['Pound', 'Euro', 'Dollar'], answer: 'Pound' },
    ],
    // Ajoutez d'autres langues et questions ici
};

function LanguageQuizzes() {
    const [selectedLanguage, setSelectedLanguage] = useState('Français');
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const handleAnswerOptionClick = (selectedOption) => {
        if (selectedOption === questions[selectedLanguage][currentQuestion].answer) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions[selectedLanguage].length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    const handleRestart = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowScore(false);
    };

    return (
        <div className="quiz-container">
            <h2>{selectedLanguage} Quiz</h2>
            {showScore ? (
                <div className="score-section">
                    Vous avez obtenu {score} sur {questions[selectedLanguage].length} bonnes réponses.
                    <button className="quiz-button" onClick={handleRestart}>Recommencer</button>
                </div>
            ) : (
                <>
                    <div className="question-section">
                        <div className="question-count">
                            <span>Question {currentQuestion + 1}</span>/{questions[selectedLanguage].length}
                        </div>
                        <div className="question-text">{questions[selectedLanguage][currentQuestion].question}</div>
                    </div>
                    <div className="answer-section">
                        {questions[selectedLanguage][currentQuestion].options.map((option, index) => (
                            <button key={index} className="quiz-option" onClick={() => handleAnswerOptionClick(option)}>
                                {option}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default LanguageQuizzes;
