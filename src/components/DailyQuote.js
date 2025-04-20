import React, { useEffect, useState } from 'react';
import axios from 'axios';

const moodCategories = {
  happy: 'happiness',
  sad: 'sadness',
  angry: 'anger',
  sleepy: 'peace',
  neutral: 'inspirational',
};

const DailyQuote = ({ mood = 'neutral' }) => {
  const [quote, setQuote] = useState('Loading...');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    const category = moodCategories[mood] || 'inspirational';

    const fetchQuote = async () => {
      try {
        // Using quotable.io for general categories
        const response = await axios.get(`https://api.quotable.io/random?tags=${category}`);
        setQuote(response.data.content);
        setAuthor(response.data.author);
      } catch (err) {
        setQuote("No matter how you feel, get up, dress up, show up, and never give up.");
        setAuthor("Unknown");
      }
    };

    fetchQuote();
  }, [mood]);

  return (
    <div className="section daily-quote">
      <h2>Quote for Your Mood</h2>
      <p style={{ fontStyle: 'italic', fontSize: '20px' }}>{`"${quote}"`}</p>
      <p style={{ textAlign: 'right', marginTop: '10px', fontWeight: 'bold' }}>— {author}</p>
    </div>
  );
};

export default DailyQuote;
