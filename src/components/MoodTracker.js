import React, { useState, useEffect } from 'react';

const MoodTracker = () => {
  const [moods, setMoods] = useState(JSON.parse(localStorage.getItem('moods')) || []);
  const [todayMood, setTodayMood] = useState('');
  const [note, setNote] = useState('');
  const emojis = ['😄', '😐', '😢', '😡', '😴'];

  useEffect(() => {
    localStorage.setItem('moods', JSON.stringify(moods));
  }, [moods]);

  const saveMood = () => {
    if (todayMood) {
      setMoods([...moods, { date: new Date().toLocaleDateString(), mood: todayMood, note }]);
      setTodayMood('');
      setNote('');
    }
  };

  return (
    <div>
      <h2>Mood Tracker</h2>
      <div>
        {emojis.map((emoji) => (
          <button
            key={emoji}
            onClick={() => setTodayMood(emoji)}
            style={{ fontSize: '30px', padding: '10px' }}
          >
            {emoji}
          </button>
        ))}
        <button onClick={saveMood}>Save</button>
      </div>
      <textarea value={note} onChange={(e) => setNote(e.target.value)} placeholder="Optional note..." />
      <ul>
        {moods.map((entry, index) => (
          <li key={index}>
            {entry.date} – {entry.mood} <br />
            <span>{entry.note}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoodTracker;
