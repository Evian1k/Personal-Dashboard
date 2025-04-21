import React, { useState, useEffect } from 'react';

const DailyQuote = () => {
  const [quote, setQuote] = useState('');
  const [isLoading, setIsLoading] = useState(true); // Added loading state
  const [error, setError] = useState(''); // Added error state

  useEffect(() => {
    // Fetch the quote when the component mounts using fetch
    fetch('https://api.quotable.io/random')
      .then((response) => response.json()) // Convert the response to JSON
      .then((data) => {
        setQuote(data.content); // Set the quote
        setIsLoading(false); // Stop loading once the quote is fetched
      })
      .catch((error) => {
        setError('Sorry, we couldn\'t fetch a quote at the moment.');
        setIsLoading(false); // Stop loading if there is an error
        console.error('Error fetching quote:', error);
      });
  }, []);

  return (
    <div>
      <h2>Daily Quote</h2>
      {isLoading ? (
        <p>Loading...</p> // Show loading message while fetching
      ) : error ? (
        <p>{error}</p> // Show error message if there's an issue
      ) : (
        <p>{quote}</p> // Display the fetched quote
      )}
    </div>
  );
};

export default DailyQuote;
