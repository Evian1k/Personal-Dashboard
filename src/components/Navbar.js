// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/mood-tracker">Mood Tracker</Link></li>
        <li><Link to="/song-playlist">Song Playlist</Link></li>
        <li><Link to="/would-you-rather">Would You Rather</Link></li>
        <li><Link to="/daily-quote">Daily Quote</Link></li>
        <li><Link to="/password-vault">Password Vault</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
