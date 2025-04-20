import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DailyQuote = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    axios.get('https://api.quotable.io/random').then((response) => setQuote(response.data.content));
  }, []);

  return (
    <div>
      <h2>Daily Quote</h2>
      <p>{quote}</p>
    </div>
  );
};

export default DailyQuote;

