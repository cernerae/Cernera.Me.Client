import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import LogsPage from './pages/LogsPage';
import ContactPage from './pages/ContactPage';
import StatusPage from './pages/StatusPage';
import PingPage from './pages/PingPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/status" element={<StatusPage />} />
        <Route path="/ping" element={<PingPage />} />
        <Route path="/logs" element={<LogsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </Router>
  );
};

export default App;
