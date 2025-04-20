import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WouldYouRather = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState(null);

  useEffect(() => {
    axios.get('https://would-you-rather-api.com/api/questions').then((response) => setQuestions(response.data));
  }, []);

  const nextQuestion = () => {
    setCurrentQuestionIndex((prev) => (prev + 1) % questions.length);
    setAnswer(null);
  };

  const handleVote = (selectedAnswer) => {
    setAnswer(selectedAnswer);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
      <h2>Would You Rather?</h2>
      {currentQuestion ? <p>{currentQuestion.q}</p> : <p>Loading...</p>}
      <div>
        <button onClick={() => handleVote('A')}>{currentQuestion?.a}</button>
        <button onClick={() => handleVote('B')}>{currentQuestion?.b}</button>
      </div>
      {answer && <p>You chose: {answer === 'A' ? currentQuestion.a : currentQuestion.b}</p>}
      <button onClick={nextQuestion}>Next Question</button>
    </div>
  );
};

export default WouldYouRather;
