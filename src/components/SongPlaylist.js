import React, { useState, useEffect } from 'react';

const SongPlaylist = () => {
  const [songs, setSongs] = useState(JSON.parse(localStorage.getItem('songs')) || []);
  const [songName, setSongName] = useState('');
  const [songArtist, setSongArtist] = useState('');
  const [songUrl, setSongUrl] = useState('');
  const [currentVideo, setCurrentVideo] = useState(null);

  useEffect(() => {
    localStorage.setItem('songs', JSON.stringify(songs));
  }, [songs]);

  const extractYouTubeId = (url) => {
    const regex = /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const addSong = () => {
    if (songName && songArtist && songUrl) {
      const newSong = {
        name: songName,
        artist: songArtist,
        url: songUrl,
      };
      setSongs([...songs, newSong]);
      setSongName('');
      setSongArtist('');
      setSongUrl('');
    }
  };

  const removeSong = (index) => {
    setSongs(songs.filter((_, i) => i !== index));
    if (index === currentVideo) setCurrentVideo(null);
  };

  const playVideo = (index) => {
    setCurrentVideo(index);
  };

  return (
    <div className="song-playlist">
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
      <input
        type="text"
        placeholder="YouTube URL"
        value={songUrl}
        onChange={(e) => setSongUrl(e.target.value)}
      />
      <button onClick={addSong}>Add Song</button>

      <ul>
        {songs.map((song, i) => (
          <li key={i}>
            <span>{song.name} by {song.artist}</span>
            <div>
              <button onClick={() => playVideo(i)}>Play</button>
              <button onClick={() => removeSong(i)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>

      {currentVideo !== null && songs[currentVideo] && (
        <div className="song-video">
          <iframe
            src={`https://www.youtube.com/embed/${extractYouTubeId(songs[currentVideo].url)}?autoplay=1`}
            title="YouTube video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
};

export default SongPlaylist;

