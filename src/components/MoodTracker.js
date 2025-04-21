
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const moods = {
  happy: '😄',
  neutral: '😐',
  sad: '😢',
  angry: '😡',
  sleepy: '😴',
};

const motivationalSpeeches = {
  happy: "Keep spreading joy. The world needs your light!",
  neutral: "Balance is beautiful. Stay steady and strong.",
  sad: "It’s okay to feel down. Better days are coming 💛",
  angry: "Breathe deep. Use that fire for something great.",
  sleepy: "Rest is productive. Recharge your soul.",
};

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [note, setNote] = useState('');
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('moodHistory')) || [];
    setHistory(stored);
  }, []);

  const handleSave = () => {
    if (!selectedMood) return;

    const newEntry = {
      date: new Date().toLocaleDateString(),
      mood: selectedMood,
      note
    };

    const updated = [...history.slice(-6), newEntry]; // Keep last 7 entries
    localStorage.setItem('moodHistory', JSON.stringify(updated));
    setHistory(updated);
    setNote('');
    setSelectedMood(null);
  };

  const data = {
    labels: history.map((entry) => entry.date),
    datasets: [
      {
        label: 'Mood Trend',
        data: history.map((entry) =>
          Object.keys(moods).indexOf(entry.mood)
        ),
        borderColor: '#1a73e8',
        backgroundColor: '#e3f2fd',
        tension: 0.3,
        fill: true,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        ticks: {
          callback: function (val) {
            return Object.keys(moods)[val] || '';
          },
          stepSize: 1,
        },
        min: 0,
        max: Object.keys(moods).length - 1,
      },
    },
  };

  return (
    <div className="section mood-tracker">
      <h2>Mood Tracker</h2>

      {/* Mood Selection */}
      <div className="emoji-options">
        {Object.entries(moods).map(([key, emoji]) => (
          <button
            key={key}
            onClick={() => setSelectedMood(key)}
            style={{
              border: selectedMood === key ? '3px solid #1a73e8' : '2px solid #ccc',
              transform: selectedMood === key ? 'scale(1.1)' : 'scale(1)',
              backgroundColor: selectedMood === key ? '#e8f0fe' : '#fff',
            }}
          >
            {emoji}
          </button>
        ))}
      </div>

      {/* Mood Note */}
      <textarea
        className="mood-note"
        placeholder="Optional note..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />

      {/* Save Mood Button */}
      <button className="mood-save-btn" onClick={handleSave}>
        Save Mood
      </button>

      {/* Display Motivational Speech */}
      {selectedMood && (
        <div style={{ marginTop: '20px', fontStyle: 'italic', fontSize: '18px', color: '#555' }}>
          {motivationalSpeeches[selectedMood]}
        </div>
      )}

      {/* Mood History */}
      {history.length > 0 && (
        <div style={{ marginTop: '40px' }}>
          <h3 style={{ marginBottom: '16px' }}>Mood History</h3>
          {/* Display Chart */}
          <Line data={data} options={options} />
        </div>
      )}
    </div>
  );
};

export default MoodTracker;
