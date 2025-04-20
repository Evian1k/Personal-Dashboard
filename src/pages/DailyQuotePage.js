import React, { useState, useEffect } from 'react';
import axios from 'axios';  // Import axios here

const DailyQuote = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    // Fetch the quote when the component mounts
    axios.get('https://api.quotable.io/random')
      .then((response) => setQuote(response.data.content))
      .catch((error) => console.error('Error fetching quote:', error));
  }, []);

  return (
    <div>
      <h2>Daily Quote</h2>
      <p>{quote}</p>
    </div>
  );
};

export default DailyQuote;
