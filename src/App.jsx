import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import VisiMisi from './pages/VisiMisi';
import ProgramKerja from './pages/ProgramKerja';
import Pengurus from './pages/Pengurus';
import IMahasiswa from './pages/IMahasiswa';
import Aspirasi from './pages/Aspirasi';
import Chatbot from './pages/Chatbot';

export default function App() {
  return (
    <div className="app-wrapper">
      <ScrollToTop />
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/visi-misi" element={<VisiMisi />} />
          <Route path="/program-kerja" element={<ProgramKerja />} />
          <Route path="/pengurus" element={<Pengurus />} />
          <Route path="/i-mahasiswa" element={<IMahasiswa />} />
          <Route path="/aspirasi" element={<Aspirasi />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
