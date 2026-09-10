import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Mail, Clock, Heart, ExternalLink } from "lucide-react";
import {
  InstagramIcon,
  YoutubeIcon,
  LinkedinIcon,
  TikTokIcon,
} from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Col */}
          <div className="footer-brand">
            <div className="brand-logo">
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
            </div>
            <p>
              Himpunan Mahasiswa Jurusan Teknologi Komputer & Bisnis Digital —
              wadah akselerasi potensi, kolaborasi riset teknologi, serta
              dedikasi nyata bagi kemajuan almamater dan Indonesia.
            </p>
            <div className="footer-socials">
              <a
                href="https://instagram.com/himtekbi"
                target="_blank"
                rel="noreferrer"
                className="social-btn"
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href="https://tiktok.com/@himtekbi"
                target="_blank"
                rel="noreferrer"
                className="social-btn"
                aria-label="TikTok"
              >
                <TikTokIcon size={18} />
              </a>
              <a
                href="https://youtube.com/@himsiunsri"
                target="_blank"
                rel="noreferrer"
                className="social-btn"
                aria-label="YouTube"
              >
                <YoutubeIcon size={18} />
              </a>
              {/* <a
                href="https://linkedin.com/company/himtekbi"
                target="_blank"
                rel="noreferrer"
                className="social-btn"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Jelajahi</h4>
            <div className="footer-links">
              <Link to="/" className="footer-link-item">
                Beranda
              </Link>
              <Link to="/visi-misi" className="footer-link-item">
                Tentang Kami
              </Link>
              <Link to="/visi-misi#makna-logo" className="footer-link-item">
                Makna Logo
              </Link>
              <Link to="/program-kerja" className="footer-link-item">
                Program Kerja
              </Link>
              <Link to="/pengurus" className="footer-link-item">
                Profil Pengurus
              </Link>
            </div>
          </div>

          {/* Layanan Akademik */}
          <div className="footer-col">
            <h4>Layanan Akademik</h4>
            <div className="footer-links">
              <Link to="/i-mahasiswa" className="footer-link-item">
                Portal I-Mahasiswa
              </Link>
              <Link to="/i-mahasiswa#simak" className="footer-link-item">
                Panduan SIMAK & KRS
              </Link>
              <Link to="/i-mahasiswa#dosen" className="footer-link-item">
                Direktori Dosen
              </Link>
              <Link to="/aspirasi" className="footer-link-item">
                Kotak Aspirasi
              </Link>
            </div>
          </div>

          {/* Sekretariat & Kontak */}
          <div className="footer-col">
            <h4>Sekretariat & Kontak</h4>
            <div className="footer-contact-row">
              <MapPin
                size={18}
                color="var(--himsi-blue-light)"
                style={{ flexShrink: 0, marginTop: "3px" }}
              />
              <span>
                Lantai 2 Ruang FTB Fakultas Teknologi dan Bisnis, Universitas
                Anwar Medika
              </span>
            </div>
            <div className="footer-contact-row">
              <Mail
                size={18}
                color="var(--himsi-blue-light)"
                style={{ flexShrink: 0 }}
              />
              <span>sekretariat@himtekbi.org</span>
            </div>
            <div className="footer-contact-row">
              <Clock
                size={18}
                color="var(--himsi-blue-light)"
                style={{ flexShrink: 0 }}
              />
              <span>Senin - Jumat: 08.00 - 17.00 WIB</span>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} HIMTEKBI UAM</p>
          <p style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span>#SatukanAmbisiWujudkanAksi</span> • Built with React & Vite
          </p>
        </div>
      </div>
    </footer>
  );
}
