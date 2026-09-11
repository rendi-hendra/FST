import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Bot,
  Users,
  Layers,
  Award,
  Camera,
  CheckCircle2,
  Target,
} from "lucide-react";
import { prokerList } from "../data/prokerData";

export const momenPhotos1 = [
  { title: "Inagurasi Akbar Mahasiswa Baru SI", tag: "Inagurasi" },
  { title: "Workshop UI/UX Design Series", tag: "Ristek" },
  { title: "Pekan Olahraga Sistem Informasi (PORSI)", tag: "Olahraga" },
  { title: "Kunjungan Industri & Tech Talk", tag: "Ekskursi" },
  { title: "Bakti Sosial & Literasi Digital Peduli", tag: "Sosial" },
];

export const momenPhotos2 = [
  { title: "Malam Puncak SI FEST Nasional", tag: "SI FEST" },
  { title: "Sidang Pleno & LKMM Fungsionaris", tag: "Kaderisasi" },
  { title: "Upgrading BPH & Malam Keakraban", tag: "Makrab" },
  { title: "Sharing Session Alumni Masuk Startup", tag: "Karir" },
  { title: "Peringatan Hari Kemerdekaan RI di Fasilkom", tag: "HUT RI" },
];

const recentActivities = [
  {
    id: 1,
    nama: "Webinar AI",
    deskripsi: "Bersama Badan Eksekutif Mahasiswa Universitas Anwar Medika",
    tanggal: "15 Agustus 2026",
    foto: "/proker/Webinar AI bersama Badan Eksekutif Mahasiswa Universitas anwar medika 15 agustus 2026.jpeg",
    kategori: "Akademik"
  },
  {
    id: 2,
    nama: "Back To School",
    deskripsi: "Berkolaborasi bersama Badan Eksekutif Mahasiswa",
    tanggal: "25 Juli 2026",
    foto: "/proker/Back To School X Badan Eksekutif mahasiswa 25 juli 2026.jpeg",
    kategori: "Sosial"
  },
  {
    id: 3,
    nama: "Sister School",
    deskripsi: "Bersama Dosen Rekayasa Perangkat Lunak",
    tanggal: "18 Juni 2026",
    foto: "/proker/IMG_7346.jpg",
    kategori: "Pendidikan"
  },
  {
    id: 4,
    nama: "Pelatihan Aplikasi Komputer",
    deskripsi: "Pelatihan Word, Excel, dan Mendeley",
    tanggal: "23 Mei 2026",
    foto: "/proker/IMG_2877.jpg",
    kategori: "Pelatihan"
  },
  {
    id: 5,
    nama: "Buka Bersama HIMTEKBI",
    deskripsi: "Bersama Seluruh Civitas Akademika Fakultas Teknologi & Bisnis",
    tanggal: "10 Maret 2026",
    foto: "/proker/Buka Bersama HIMTEKBI bersama Seluruh Civitas Akademika Fakultas Teknologi & Bisnis 10 maret 2026.jpeg",
    kategori: "Kekeluargaan"
  },
  {
    id: 6,
    nama: "Bersih Masjid & Bagi Takjil",
    deskripsi: "Bersama seluruh ormawa Universitas Anwar Medika",
    tanggal: "7 Maret 2026",
    foto: "/proker/Bersih Majid & Bagi Takjil bersama seluruh ormawa Universitas Anwar Medika 7 maret 2026.jpeg",
    kategori: "Sosial"
  }
];

export default function Home() {
  const [activeProkerIndex, setActiveProkerIndex] = useState(0);

  const nextProker = () => {
    setActiveProkerIndex((prev) => (prev + 1) % recentActivities.length);
  };

  const prevProker = () => {
    setActiveProkerIndex(
      (prev) => (prev - 1 + recentActivities.length) % recentActivities.length,
    );
  };

  return (
    <div>
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div className="container hero-container">
          <h1 className="hero-title-massive">HIMTEKBI</h1>
          <h3 className="hero-univ">UNIVERSITAS ANWAR MEDIKA</h3>

          <p className="hero-desc">
            Himpunan Mahasiswa Jurusan Teknologi Komputer & Bisnis Digital —
            wadah akselerasi potensi, kolaborasi riset teknologi, serta dedikasi
            nyata bagi kemajuan almamater dan Indonesia.
          </p>

          {/* <div className="hero-cta-group">
            <Link to="/i-mahasiswa" className="btn-explore">
              Jelajahi Portal Akademik <ArrowRight size={16} />
            </Link>
            <Link to="/chatbot" className="btn-glass">
              <Bot size={16} color="var(--himsi-blue-light)" /> Tanya HIMSI AI 24/7
            </Link>
            <Link to="/program-kerja" className="btn-glass">
              Katalog Proker 2026
            </Link>
          </div> */}

          {/* Stats Bar */}
          <div className="hero-stats-banner">
            <div className="hero-stat-item">
              <h3>7</h3>
              <p>Departemen Strategis</p>
            </div>
            <div className="hero-stat-item">
              <h3>12</h3>
              <p>Anggota</p>
            </div>
            <div className="hero-stat-item">
              <h3>5</h3>
              <p>Badan Pengurus Harian</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SAMBUTAN KETUA UMUM */}
      <section
        className="section-pad"
        style={{
          background: "rgba(255,255,255,0.01)",
          borderTop: "1px solid var(--glass-border)",
        }}
      >
        <div className="container">
          <div
            style={{
              textAlign: "center",
              maxWidth: "700px",
              margin: "0 auto 3rem",
            }}
          >
            <h2 className="section-title">
              Sambutan <span>Ketua Umum</span>
            </h2>
            {/* <p className="section-desc">
              Refleksi dan komitmen fungsionaris HIMSI FASILKOM UNSRI dalam
              membersamai perjuangan seluruh mahasiswa Sistem Informasi.
            </p> */}
          </div>

          <div className="sambutan-grid">
            <div className="ketum-photo-card">
              <div className="ketum-bg-logo">
                <img src="/LOGO_HIMA.png" alt="" />
              </div>
              <div className="ketum-photo-wrapper">
                <img
                  src="/Ketua.jpeg"
                  alt="Ketua HIMTEKB"
                  className="ketum-photo"
                />
              </div>
              <div className="ketum-info-plate">
                <h4>Firdaus</h4>
                <p>KETUA HIMTEKB</p>
              </div>
            </div>

            <div className="sambutan-text-container">
              <p className="sambutan-text">
                Proses dan dinamika di HimTekBi Universitas Anwar Medika
                memberikan banyak pembelajaran berharga. Himpunan ini bukan
                sekadar organisasi, melainkan rumah dan keluarga tempat kita
                saling belajar, bertukar gagasan, serta berkembang bersama dalam
                memadukan dunia teknologi dan bisnis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROKER UNGGULAN SLIDER */}
      <section className="section-pad">
        <div className="container">
          <div className="proker-carousel-header">
            <div>
              <span className="section-label">Agenda Utama</span>
              <h2 className="section-title" style={{ marginBottom: 0 }}>
                Program Kerja <span>Unggulan</span>
              </h2>
            </div>
            <div className="carousel-nav-arrows">
              <button
                onClick={prevProker}
                className="carousel-nav-arrow"
                aria-label="Previous Proker"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextProker}
                className="carousel-nav-arrow"
                aria-label="Next Proker"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="proker-cards-grid">
            {recentActivities.map((proker, index) => (
              <div
                key={proker.id}
                className="proker-card-item"
                style={{
                  outline:
                    index === activeProkerIndex
                      ? "2px solid var(--himsi-blue-light)"
                      : "none",
                }}
              >
                <div
                  className="proker-card-banner"
                  style={{ 
                    backgroundImage: `url('${proker.foto}')`, 
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '200px',
                    position: 'relative'
                  }}
                >
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 100%)' }} />
                  <span
                    className={`badge badge-primary`}
                    style={{ position: "absolute", top: "16px", left: "16px", zIndex: 1 }}
                  >
                    {proker.kategori}
                  </span>
                  <h3 style={{ position: 'relative', zIndex: 1, textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
                    {proker.nama}
                  </h3>
                </div>
                <div className="proker-card-content">
                  <div>
                    <h4 className="proker-card-title">{proker.deskripsi}</h4>
                  </div>
                  <div className="proker-card-footer">
                    <span>🗓️ {proker.tanggal}</span>
                    <span
                      style={{
                        color: "var(--himsi-green)",
                        fontWeight: 600,
                      }}
                    >
                      Selesai
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link to="/program-kerja" className="btn-explore">
              Lihat Seluruh Katalog Program Kerja (8+ Proker){" "}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. VISI & MISI */}
      <section
        className="section-pad"
        style={{
          background: "rgba(255,255,255,0.02)",
          borderTop: "1px solid var(--glass-border)",
          borderBottom: "1px solid var(--glass-border)",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "3.5rem",
              alignItems: "flex-start",
            }}
          >
            {/* Visi */}
            <div
              className="glass-card"
              style={{
                padding: "3rem 2rem",
                position: "relative",
                overflow: "hidden",
                height: "100%",
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "16px",
                  background: "linear-gradient(135deg, #1e40af, #ef4444)",
                  marginBottom: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                }}
              >
                <Target size={30} />
              </div>
              <span className="section-label">Tujuan Utama</span>
              <h3
                style={{
                  fontSize: "1.8rem",
                  fontWeight: 800,
                  color: "var(--text-primary)",
                  marginBottom: "1rem",
                }}
              >
                Visi HIMTEKBI
              </h3>
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  fontWeight: 500,
                }}
              >
                Menjadikan organisasi kemahasiswaan yang profesional, aspiratif,
                dan berintegritas dalam mewadahi pengembangan potensi mahasiswa
                Fakultas Teknologi dan Bisnis yang unggul, inovatif, serta
                berjiwa kewirausahaan.
              </p>
            </div>

            {/* Misi */}
            <div>
              <span className="section-label">Langkah Strategis</span>
              <h2 className="section-title">
                Misi <span>HIMTEKBI</span>
              </h2>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.2rem",
                  marginTop: "2rem",
                }}
              >
                {[
                  "Menjadi wadah penyaluran aspirasi mahasiswa secara efektif, transparan, dan bertanggung jawab.",
                  "Mengembangkan potensi akademik dan non-akademik mahasiswa di bidang teknologi dan bisnis.",
                  "Meningkatkan kemampuan kepemimpinan, manajerial, dan soft skills mahasiswa.",
                  "Menjalin hubungan yang harmonis antara mahasiswa, fakultas, dan pihak eksternal.",
                  "Menyelenggarakan program kerja yang edukatif, kolaboratif, dan berdampak bagi mahasiswa serta masyarakat.",
                ].map((misi, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "1rem",
                    }}
                  >
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        background: "rgba(59, 130, 246, 0.1)",
                        color: "var(--himsi-blue-light)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 700,
                        flexShrink: 0,
                      }}
                    >
                      {idx + 1}
                    </div>
                    <p
                      style={{
                        color: "var(--text-secondary)",
                        fontSize: "0.95rem",
                        lineHeight: 1.6,
                        margin: 0,
                        marginTop: "4px",
                      }}
                    >
                      {misi}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MOMEN HIMSI (DOKUMENTASI MARQUEE) */}
    </div>
  );
}
