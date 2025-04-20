// src/components/WouldYouRather.js

import React, { useState } from 'react';

const WouldYouRather = () => {
  const questions = [
    {
      question: 'Would you rather be able to fly or be invisible?',
      optionA: 'Fly',
      optionB: 'Invisible',
    },
    {
      question: 'Would you rather have unlimited money or unlimited time?',
      optionA: 'Unlimited Money',
      optionB: 'Unlimited Time',
    },
    {
      question: 'Would you rather live on the moon or under the sea?',
      optionA: 'Moon',
      optionB: 'Under the Sea',
    },
  ];

  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);

  const handleOptionClick = (option) => {
    setSelected(option);
    setTimeout(() => {
      setSelected(null);
      setIndex((prevIndex) => (prevIndex + 1) % questions.length);
    }, 1000);
  };

  const current = questions[index];

  return (
    <div className="section would-you-rather">
      <h2>Would You Rather</h2>
      <p>{current.question}</p>
      <div className="options">
        <button
          onClick={() => handleOptionClick(current.optionA)}
          style={{
            backgroundColor: selected === current.optionA ? '#d1e7dd' : '',
          }}
        >
          {current.optionA}
        </button>
        <button
          onClick={() => handleOptionClick(current.optionB)}
          style={{
            backgroundColor: selected === current.optionB ? '#f8d7da' : '',
          }}
        >
          {current.optionB}
        </button>
      </div>
    </div>
  );
};

export default WouldYouRather;
