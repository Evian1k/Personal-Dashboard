import React, { useState, useEffect } from 'react';

const SongPlaylist = () => {
  const [songs, setSongs] = useState(JSON.parse(localStorage.getItem('songs')) || []);
  const [songName, setSongName] = useState('');
  const [songArtist, setSongArtist] = useState('');

  // Save songs to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('songs', JSON.stringify(songs));
  }, [songs]);

  const addSong = () => {
    if (songName && songArtist) {
      const newSong = { name: songName, artist: songArtist };
      setSongs([...songs, newSong]);
      setSongName('');
      setSongArtist('');
    }
  };

  const removeSong = (index) => {
    setSongs(songs.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Song Playlist</h2>
      <input
        type="text"
        placeholder="Song Name"
        value={songName}
        onChange={(e) => setSongName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Artist Name"
        value={songArtist}
        onChange={(e) => setSongArtist(e.target.value)}
      />
      <button onClick={addSong}>Add Song</button>
      <ul>
        {songs.map((song, i) => (
          <li key={i}>
            {song.name} by {song.artist}
            <button onClick={() => removeSong(i)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SongPlaylist;
