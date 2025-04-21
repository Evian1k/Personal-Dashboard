// components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar">
    <Link to="/mood-tracker">Mood Tracker</Link>
    <Link to="/song-playlist">Song Playlist</Link>
    <Link to="/would-you-rather">Would You Rather</Link>
    <Link to="/daily-quote">Daily Quote</Link>
    <Link to="/password-vault">Password Vault</Link>
    <Link to="/journal">Journal</Link>
  </nav>
);

export default Navbar;
