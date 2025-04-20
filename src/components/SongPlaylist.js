import React, { useState, useEffect } from 'react';

const SongPlaylist = () => {
  const [songInput, setSongInput] = useState('');
  const [playlist, setPlaylist] = useState([]);

  // Load from localStorage on mount
  useEffect(() => {
    const savedPlaylist = JSON.parse(localStorage.getItem('playlist')) || [];
    setPlaylist(savedPlaylist);
  }, []);

  // Save to localStorage on playlist update
  useEffect(() => {
    localStorage.setItem('playlist', JSON.stringify(playlist));
  }, [playlist]);

  const handleAddSong = () => {
    if (songInput.trim() === '') return;

    setPlaylist(prev => [...prev, songInput.trim()]);
    setSongInput('');
  };

  const handleRemoveSong = (index) => {
    const updated = playlist.filter((_, i) => i !== index);
    setPlaylist(updated);
  };

  return (
    <div className="section song-playlist">
      <h2>Song Playlist</h2>

      <input
        type="text"
        placeholder="Enter song title or link"
        value={songInput}
        onChange={(e) => setSongInput(e.target.value)}
      />

      <button onClick={handleAddSong}>Add Song</button>

      <ul>
        {playlist.map((song, index) => (
          <li key={index}>
            <span>{song}</span>
            <button
              onClick={() => handleRemoveSong(index)}
              style={{
                background: 'transparent',
                color: '#c00',
                fontWeight: 'bold',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SongPlaylist;

