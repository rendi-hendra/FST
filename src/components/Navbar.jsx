import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import {
  Sun,
  Moon,
  Menu,
  X,
  ChevronDown,
  Bot,
  Target,
  Shapes,
  Calendar,
  Crown,
  Scale,
  Laptop,
  Briefcase,
  Camera,
  Rocket,
  Trophy,
  FolderCheck,
  GraduationCap,
} from "lucide-react";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const closeMobile = () => setMobileMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container nav-wrapper">
        {/* Brand Logo */}
        <Link to="/" className="brand-logo" onClick={closeMobile}>
          <img
            src="/LOGO_HIMA.png"
            alt="Logo HIMTEKBI"
            className="logo-badge"
            style={{ objectFit: "contain" }}
          />
          <div className="logo-text-group">
            <span className="logo-title">HIMTEKBI</span>
            <span className="logo-subtitle">Universitas Anwar Medika</span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="desktop-nav" aria-label="Navigasi Utama">
          <div className="nav-item">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              Beranda
            </NavLink>
          </div>

          {/* Dropdown Tentang Kami */}
          <div className="nav-item">
            <NavLink
              to="/visi-misi"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              Tentang Kami
              <ChevronDown size={15} style={{ marginTop: "1px" }} />
            </NavLink>
            <div className="dropdown-menu">
              <Link to="/visi-misi" className="dropdown-item">
                <Target size={16} color="var(--himsi-blue-light)" /> Visi & Misi
              </Link>
              <Link to="/visi-misi#makna-logo" className="dropdown-item">
                <Shapes size={16} color="var(--himsi-gold)" /> Makna Logo
              </Link>
              <Link to="/program-kerja" className="dropdown-item">
                <Calendar size={16} color="var(--himsi-red)" /> Program Kerja
              </Link>
            </div>
          </div>

          {/* Dropdown Profil Organisasi */}
          <div className="nav-item">
            <NavLink
              to="/pengurus"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              Profil Organisasi
              <ChevronDown size={15} style={{ marginTop: "1px" }} />
            </NavLink>
            <div className="dropdown-menu">
              <Link to="/pengurus#pengurus-inti" className="dropdown-item">
                <Crown size={16} color="#fbbf24" /> Pengurus Inti
              </Link>
              <Link to="/pengurus#kastrad" className="dropdown-item">
                <Scale size={16} color="#f87171" /> KASTRAD
              </Link>
              <Link to="/pengurus#ristek" className="dropdown-item">
                <Laptop size={16} color="#60a5fa" /> RISTEK
              </Link>
              <Link to="/pengurus#bistra" className="dropdown-item">
                <Briefcase size={16} color="#fbbf24" /> BISTRA
              </Link>
              <Link to="/pengurus#medinfo" className="dropdown-item">
                <Camera size={16} color="#f472b6" /> MEDINFO
              </Link>
              <Link to="/pengurus#psdm" className="dropdown-item">
                <Rocket size={16} color="#a78bfa" /> PSDM
              </Link>
              <Link to="/pengurus#pmb" className="dropdown-item">
                <Trophy size={16} color="#34d399" /> PMB
              </Link>
              <Link to="/pengurus#kestari" className="dropdown-item">
                <FolderCheck size={16} color="#38bdf8" /> KESTARI
              </Link>
            </div>
          </div>

          <div className="nav-item">
            <NavLink
              to="/i-mahasiswa"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              I-Mahasiswa
            </NavLink>
          </div>

          <div className="nav-item">
            <NavLink
              to="/aspirasi"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              Aspirasi
            </NavLink>
          </div>

          {/* <div className="nav-item">
            <NavLink to="/chatbot" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              <Bot size={17} color="var(--himsi-blue-light)" /> Chatbot AI
            </NavLink>
          </div> */}
        </nav>

        {/* Header Action Buttons */}
        <div className="header-actions">
          <button
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label="Toggle Mode Gelap/Terang"
            title={`Ubah ke mode ${theme === "dark" ? "terang" : "gelap"}`}
          >
            {theme === "dark" ? (
              <Sun size={19} color="#fbbf24" />
            ) : (
              <Moon size={19} color="#3b82f6" />
            )}
          </button>

          {/* <Link to="/i-mahasiswa" className="btn-explore">
            <GraduationCap size={16} /> Portal Akademik
          </Link> */}

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-nav-list">
          <NavLink to="/" end className="mobile-nav-link" onClick={closeMobile}>
            Beranda
          </NavLink>
          <NavLink
            to="/visi-misi"
            className="mobile-nav-link"
            onClick={closeMobile}
          >
            Tentang Kami (Visi & Misi)
          </NavLink>
          <NavLink
            to="/program-kerja"
            className="mobile-nav-link"
            onClick={closeMobile}
          >
            Program Kerja
          </NavLink>
          <NavLink
            to="/pengurus"
            className="mobile-nav-link"
            onClick={closeMobile}
          >
            Profil Pengurus
          </NavLink>
          <NavLink
            to="/i-mahasiswa"
            className="mobile-nav-link"
            onClick={closeMobile}
          >
            Portal I-Mahasiswa
          </NavLink>
          <NavLink
            to="/aspirasi"
            className="mobile-nav-link"
            onClick={closeMobile}
          >
            Kotak Aspirasi
          </NavLink>
          <NavLink
            to="/chatbot"
            className="mobile-nav-link"
            onClick={closeMobile}
          >
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Bot size={18} color="var(--himsi-blue-light)" /> HIMSI Chatbot AI
            </span>
          </NavLink>
        </div>
      </div>
    </header>
  );
}
