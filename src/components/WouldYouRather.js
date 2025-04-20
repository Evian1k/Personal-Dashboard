import React, { useState, useEffect } from 'react';

const WouldYouRather = () => {
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    // Use fetch instead of axios to fetch the question
    fetch('http://localhost:5000/api/would-you-rather')
      .then(response => response.json())
      .then(data => {
        setQuestion(data);
      })
      .catch(error => {
        console.error('Error fetching question:', error);
      });
  }, []);

  return (
    <div>
      <h2>Would You Rather</h2>
      {question ? (
        <div>
          <p>{question.text}</p>
          <button>{question.option1}</button>
          <button>{question.option2}</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default WouldYouRather;
