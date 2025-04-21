import React, { useState, useEffect } from 'react';

const WouldYouRather = () => {
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchQuestion = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://would-you-rather-api.abaanshanid.repl.co');
      const data = await response.json();
      setQuestion(data.data);
    } catch (error) {
      console.error('Error fetching question:', error);
      setQuestion('Failed to load question. Try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestion();
  }, []);

  return (
    <div className="would-you-rather-section">
      <h2>Would You Rather...</h2>
      <div className="question-box">
        {loading ? <p>Loading...</p> : <p>{question}</p>}
      </div>
      <button onClick={fetchQuestion}>Get Another Question</button>
    </div>
  );
};

export default WouldYouRather;



