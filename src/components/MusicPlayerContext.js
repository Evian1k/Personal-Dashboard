import React, { createContext, useState, useRef, useContext } from "react";

const MusicPlayerContext = createContext();

export const useMusicPlayer = () => useContext(MusicPlayerContext);

export const MusicPlayerProvider = ({ children }) => {
  const [playlist, setPlaylist] = useState([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio());

  const playTrack = (index) => {
    const track = playlist[index];
    if (track) {
      audioRef.current.src = track.url;
      audioRef.current.play();
      setCurrentTrackIndex(index);
      setIsPlaying(true);
    }
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    const nextIndex = (currentTrackIndex + 1) % playlist.length;
    playTrack(nextIndex);
  };

  const setAndPlayPlaylist = (songs, startIndex = 0) => {
    setPlaylist(songs);
    playTrack(startIndex);
  };

  return (
    <MusicPlayerContext.Provider
      value={{
        playlist,
        currentTrackIndex,
        isPlaying,
        playTrack,
        togglePlayPause,
        nextTrack,
        setAndPlayPlaylist,
      }}
    >
      {children}
    </MusicPlayerContext.Provider>
  );
};
