import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Crown, Scale, Laptop, Briefcase, 
  Camera, Rocket, Trophy, FolderCheck, ChevronRight, 
  CheckCircle, ArrowUpRight 
} from 'lucide-react';
import { InstagramIcon } from '../components/SocialIcons';
import { bphInti, departemenList } from '../data/organizationData';

const iconMap = {
  Scale: Scale,
  Laptop: Laptop,
  Briefcase: Briefcase,
  Camera: Camera,
  Rocket: Rocket,
  Trophy: Trophy,
  FolderCheck: FolderCheck
};

export default function Pengurus() {
  return (
    <div>
      {/* Breadcrumb Header */}
      <section className="section-pad-sm" style={{ borderBottom: '1px solid var(--glass-border)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
            <Link to="/">Beranda</Link>
            <ChevronRight size={14} />
            <span>Profil Organisasi</span>
            <ChevronRight size={14} />
            <span style={{ color: 'var(--himsi-blue-light)', fontWeight: 600 }}>Pengurus Inti & Departemen</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800 }}>Struktur Organisasi HIMSI</h1>
          <p style={{ maxWidth: '680px', color: 'var(--text-secondary)' }}>
            Pengurus Inti dan Fungsionaris Badan Pengurus Harian (BPH) HIMSI FASILKOM UNSRI Periode 2025-2026 yang mendedikasikan diri untuk melayani kemahasiswaan.
          </p>
        </div>
      </section>

      {/* Quick Jump Anchor Tabs */}
      <div style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--glass-border)', position: 'sticky', top: '76px', zIndex: 90, padding: '0.75rem 0' }}>
        <div className="container">
          <div className="filter-tabs-wrapper" style={{ margin: 0, padding: 0 }}>
            <a href="#pengurus-inti" className="filter-pill-btn">BPH Inti</a>
            {departemenList.map(dep => (
              <a key={dep.id} href={`#${dep.id}`} className="filter-pill-btn">
                {dep.singkatan}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* 1. BPH INTI SECTION */}
      <section id="pengurus-inti" className="section-pad">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem' }}>
            <span className="section-label">
              <Crown size={16} /> Pimpinan Harian
            </span>
            <h2 className="section-title">Badan Pengurus Harian <span>(BPH)</span></h2>
            <p className="section-desc">
              Pimpinan inti yang bertanggung jawab mengkoordinasikan keseluruhan operasional kerja, tata kelola keuangan, dan representasi resmi himpunan.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {bphInti.map((bph) => (
              <div key={bph.id} className="glass-card" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: bph.colorGrad, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '2.5rem', fontWeight: 900, marginBottom: '1.25rem', boxShadow: '0 8px 25px rgba(0,0,0,0.3)' }}>
                  {bph.initial}
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                  {bph.nama}
                </h3>
                <span className="badge badge-primary" style={{ marginBottom: '1.25rem' }}>
                  {bph.jabatan}
                </span>

                <p style={{ fontSize: '0.88rem', fontStyle: 'italic', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem', flex: 1 }}>
                  {bph.quote}
                </p>

                <a 
                  href={`https://instagram.com/${bph.instagram}`} 
                  target="_blank" 
                  rel="noreferrer"
                  className="btn-glass"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <InstagramIcon size={15} color="#ec4899" />
                  <span>@{bph.instagram}</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. DEPARTEMEN & BIRO SECTIONS */}
      <section className="section-pad" style={{ background: 'rgba(255,255,255,0.01)', borderTop: '1px solid var(--glass-border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem' }}>
            <span className="section-label">Pilar Pelaksana</span>
            <h2 className="section-title">Departemen & <span>Biro HIMSI</span></h2>
            <p className="section-desc">
              Tujuh departemen spesifik yang mengeksekusi program kerja dalam bidang akademik, riset teknologi, advokasi, bisnis, minat bakat, dan media informasi.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {departemenList.map((dept) => {
              const IconComp = iconMap[dept.icon] || Scale;
              return (
                <div key={dept.id} id={dept.id} className="glass-card" style={{ scrollMarginTop: '150px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                      <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: dept.bgBadge, color: dept.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <IconComp size={28} />
                      </div>
                      <div>
                        <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                          Departemen {dept.nama} ({dept.singkatan})
                        </h3>
                        <p style={{ color: dept.color, fontWeight: 700, fontSize: '0.88rem', margin: 0 }}>
                          Fokus: {dept.fokus}
                        </p>
                      </div>
                    </div>
                  </div>

                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                    {dept.deskripsi}
                  </p>

                  <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '1.25rem' }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--text-muted)', display: 'block', marginBottom: '0.75rem' }}>
                      Divisi di Bawah Naungan:
                    </span>
                    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                      {dept.divisi.map((div, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'var(--input-bg)', border: '1px solid var(--glass-border)', padding: '0.45rem 0.9rem', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem', color: 'var(--text-primary)' }}>
                          <CheckCircle size={15} color="var(--himsi-green)" />
                          <span>{div}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
