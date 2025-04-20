// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/mood-tracker">Mood Tracker</Link>
      <Link to="/song-playlist">Song Playlist</Link>
      <Link to="/would-you-rather">Would You Rather</Link>
      <Link to="/daily-quote">Daily Quote</Link>
      <Link to="/password-vault">Password Vault</Link>
    </div>
  );
};

export default Navbar;
