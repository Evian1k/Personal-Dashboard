import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import SongPlaylistPage from './pages/SongPlaylistPage';
import MoodTrackerPage from './pages/MoodTrackerPage';
import WouldYouRatherPage from './pages/WouldYouRatherPage';
import DailyQuotePage from './pages/DailyQuotePage';
import PasswordVaultPage from './pages/PasswordVaultPage';
import JournalPage from './pages/JournalPage';
import './styles/App.css';

function App() {
  // Create a ref for the audio player
  const audioRef = useRef(null);

  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/song-playlist" element={<SongPlaylistPage audioRef={audioRef} />} />
          <Route path="/mood-tracker" element={<MoodTrackerPage />} />
          <Route path="/would-you-rather" element={<WouldYouRatherPage />} />
          <Route path="/daily-quote" element={<DailyQuotePage />} />
          <Route path="/password-vault" element={<PasswordVaultPage />} />
          <Route path="/journal" element={<JournalPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;




