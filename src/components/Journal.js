import React, { useState, useEffect } from 'react';

const Journal = () => {
  const [entry, setEntry] = useState('');
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('journalEntries')) || [];
    setHistory(stored);
  }, []);

  const saveEntry = () => {
    if (entry.trim() === '') return;

    const newEntry = {
      text: entry,
      date: new Date().toLocaleString(),
    };

    const updated = [newEntry, ...history];
    setHistory(updated);
    localStorage.setItem('journalEntries', JSON.stringify(updated));
    setEntry('');
  };

  return (
    <div className="section journal">
      <h2>My Journal</h2>

      <textarea
        placeholder="Write your thoughts..."
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        rows={6}
        style={{
          width: '100%',
          padding: '16px',
          borderRadius: '10px',
          border: '1px solid #ccc',
          marginBottom: '16px',
          resize: 'vertical'
        }}
      />

      <button onClick={saveEntry} className="mood-save-btn">
        Save Entry
      </button>

      <div style={{ marginTop: '30px' }}>
        <h3>Previous Entries</h3>
        <ul style={{ paddingLeft: 0, listStyle: 'none' }}>
          {history.map((item, index) => (
            <li key={index} style={{
              background: '#f8f9fa',
              marginBottom: '12px',
              padding: '16px',
              borderRadius: '8px'
            }}>
              <strong>{item.date}</strong>
              <p style={{ marginTop: '8px' }}>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Journal;
