import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import ParticlesBackground from './components/ParticlesBackground';
import HeroAbout from './pages/HeroAbout';
import CTA from './pages/CTA';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import CodingProfiles from './pages/CodingProfiles';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <Router>
      <div className="app">
        <ParticlesBackground />
        <Navigation setCurrentPage={setCurrentPage} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HeroAbout />} />
            <Route path="/cta" element={<CTA />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profiles" element={<CodingProfiles />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
