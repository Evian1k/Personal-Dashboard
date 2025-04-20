import React, { useState, useEffect } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const moodLabels = {
  "😄": "Happy",
  "😐": "Neutral",
  "😢": "Sad",
  "😡": "Angry",
  "😴": "Tired"
};

const moodScores = {
  "😄": 5,
  "😐": 3,
  "😢": 2,
  "😡": 1,
  "😴": 2
};

const motivationalQuotes = {
  "😄": "Keep spreading those good vibes! ✨",
  "😐": "Every day won't be perfect — and that's okay.",
  "😢": "It's okay to feel down. Better days are ahead 💙",
  "😡": "Take a breath, let it go. You've got this 💪",
  "😴": "Rest is productive too. Recharge and shine 🔋"
};

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [note, setNote] = useState('');
  const [moodHistory, setMoodHistory] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('moodHistory')) || [];
    setMoodHistory(savedData);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('moodHistory', JSON.stringify(moodHistory));
  }, [moodHistory]);

  const handleSave = () => {
    if (!selectedMood) return;

    const entry = {
      mood: selectedMood,
      note,
      date: new Date().toLocaleDateString(),
      score: moodScores[selectedMood]
    };

    setMoodHistory(prev => [...prev, entry]);
    setSelectedMood(null);
    setNote('');
  };

  return (
    <div className="section mood-tracker">
      <h2>Mood Tracker</h2>

      <div className="emoji-options">
        {Object.keys(moodLabels).map((emoji) => (
          <button
            key={emoji}
            onClick={() => setSelectedMood(emoji)}
            style={{
              borderColor: selectedMood === emoji ? '#1a73e8' : '#dadce0',
              transform: selectedMood === emoji ? 'scale(1.2)' : 'scale(1)'
            }}
          >
            {emoji}
          </button>
        ))}
      </div>

      <textarea
        className="mood-note"
        placeholder="Optional note..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />

      <button className="mood-save-btn" onClick={handleSave}>
        Save
      </button>

      {selectedMood && (
        <p style={{ marginTop: 20, fontStyle: 'italic', color: '#555' }}>
          {motivationalQuotes[selectedMood]}
        </p>
      )}

      {moodHistory.length > 0 && (
        <div style={{ marginTop: 50 }}>
          <h3 style={{ marginBottom: 20 }}>Mood Over Time</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={moodHistory}>
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="date" />
              <YAxis domain={[0, 5]} />
              <Tooltip />
              <Line type="monotone" dataKey="score" stroke="#1a73e8" strokeWidth={2} dot={{ r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
      )}
    </div>
  );
};

export default MoodTracker;



