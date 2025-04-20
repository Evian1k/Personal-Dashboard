// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MoodTrackerPage from './pages/MoodTrackerPage';
import SongPlaylistPage from './pages/SongPlaylistPage';
import WouldYouRatherPage from './pages/WouldYouRatherPage';
import DailyQuotePage from './pages/DailyQuotePage';
import PasswordVaultPage from './pages/PasswordVaultPage';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/mood-tracker" element={<MoodTrackerPage />} />
          <Route path="/song-playlist" element={<SongPlaylistPage />} />
          <Route path="/would-you-rather" element={<WouldYouRatherPage />} />
          <Route path="/daily-quote" element={<DailyQuotePage />} />
          <Route path="/password-vault" element={<PasswordVaultPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
