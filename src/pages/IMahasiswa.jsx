import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, PauseCircle, MonitorPlay, Search, 
  ChevronRight, Mail, MapPin, CheckCircle2, ChevronDown, ChevronUp, BookOpen 
} from 'lucide-react';
import { panduanAkademikList, dosenList } from '../data/akademikData';

const iconMap = {
  GraduationCap: GraduationCap,
  PauseCircle: PauseCircle,
  MonitorPlay: MonitorPlay
};

export default function IMahasiswa() {
  const [activeGuideId, setActiveGuideId] = useState('simak');
  const [dosenSearch, setDosenSearch] = useState('');

  const filteredDosen = dosenList.filter(d => 
    d.nama.toLowerCase().includes(dosenSearch.toLowerCase()) ||
    d.bidang.toLowerCase().includes(dosenSearch.toLowerCase()) ||
    d.jabatan.toLowerCase().includes(dosenSearch.toLowerCase())
  );

  return (
    <div>
      {/* Breadcrumb Header */}
      <section className="section-pad-sm" style={{ borderBottom: '1px solid var(--glass-border)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
            <Link to="/">Beranda</Link>
            <ChevronRight size={14} />
            <span style={{ color: 'var(--himsi-blue-light)', fontWeight: 600 }}>I-Mahasiswa</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800 }}>Portal Akademik I-Mahasiswa</h1>
          <p style={{ maxWidth: '680px', color: 'var(--text-secondary)' }}>
            Pusat informasi lengkap seputar SIMAK, KRS, prosedur Stop Out / cuti kuliah, kurikulum perkuliahan, dan direktori Dosen Pembimbing Jurusan Sistem Informasi FASILKOM UNSRI.
          </p>
        </div>
      </section>

      {/* 1. ACADEMIC GUIDES TABS */}
      <section id="panduan" className="section-pad">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem' }}>
            <span className="section-label">Layanan Mahasiswa</span>
            <h2 className="section-title">Panduan <span>Perkuliahan & Administrasi</span></h2>
            <p className="section-desc">
              Pilih salah satu panduan di bawah ini untuk melihat langkah-langkah prosedural resmi yang berlaku di lingkungan kampus Fasilkom Unsri.
            </p>
          </div>

          {/* Guide Selection Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
            {panduanAkademikList.map((item) => {
              const IconComp = iconMap[item.icon] || GraduationCap;
              const isActive = activeGuideId === item.id;
              return (
                <div 
                  key={item.id}
                  onClick={() => setActiveGuideId(item.id)}
                  className="glass-card"
                  style={{
                    cursor: 'pointer',
                    borderColor: isActive ? 'var(--himsi-blue-light)' : 'var(--glass-border)',
                    background: isActive ? 'rgba(30, 64, 175, 0.12)' : 'var(--glass-bg)',
                    boxShadow: isActive ? '0 0 25px rgba(56, 189, 248, 0.2)' : 'var(--shadow-sm)'
                  }}
                >
                  <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: `${item.color}22`, color: item.color, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                    <IconComp size={24} />
                  </div>
                  <span className="badge badge-primary" style={{ marginBottom: '0.75rem' }}>{item.badge}</span>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                    {item.judul}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
                    {item.deskripsi}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Active Guide Detail Accordion Box */}
          {(() => {
            const currentGuide = panduanAkademikList.find(g => g.id === activeGuideId) || panduanAkademikList[0];
            return (
              <div className="glass-card" style={{ padding: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: `${currentGuide.color}22`, color: currentGuide.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <BookOpen size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                      Alur Pelaksanaan: {currentGuide.judul}
                    </h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: 0 }}>Ikuti petunjuk teknis berikut secara berurutan.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {currentGuide.langkah.map((step, idx) => (
                    <div 
                      key={idx} 
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '1rem',
                        padding: '1rem 1.25rem',
                        background: 'var(--input-bg)',
                        border: '1px solid var(--glass-border)',
                        borderRadius: 'var(--radius-sm)'
                      }}
                    >
                      <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--himsi-blue)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.85rem', flexShrink: 0 }}>
                        {idx + 1}
                      </div>
                      <p style={{ margin: 0, color: 'var(--text-primary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* 2. DIREKTORI DOSEN */}
      <section id="dosen" className="section-pad" style={{ background: 'rgba(255,255,255,0.01)', borderTop: '1px solid var(--glass-border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem' }}>
            <span className="section-label">Direktori Akademik</span>
            <h2 className="section-title">Dosen Pembimbing <span>Sistem Informasi</span></h2>
            <p className="section-desc">
              Daftar pengajar, pakar teknologi, dan pembimbing tugas akhir Jurusan Sistem Informasi FASILKOM UNSRI.
            </p>
          </div>

          {/* Search Dosen Bar */}
          <div style={{ maxWidth: '500px', margin: '0 auto 2.5rem', position: 'relative' }}>
            <Search size={18} color="var(--text-muted)" style={{ position: 'absolute', left: '18px', top: '50%', transform: 'translateY(-50%)' }} />
            <input 
              type="text"
              placeholder="Cari nama dosen, bidang keahlian, atau lab..."
              value={dosenSearch}
              onChange={(e) => setDosenSearch(e.target.value)}
              style={{
                width: '100%',
                padding: '14px 20px 14px 48px',
                borderRadius: 'var(--radius-pill)',
                background: 'var(--input-bg)',
                border: '1px solid var(--glass-border)',
                color: 'var(--text-primary)',
                outline: 'none',
                fontSize: '0.95rem'
              }}
            />
          </div>

          {/* Dosen Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.75rem' }}>
            {filteredDosen.map((dosen) => (
              <div key={dosen.id} className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <span className="badge badge-primary">{dosen.kategori}</span>
                  </div>
                  <h3 style={{ fontSize: '1.18rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.35rem', lineHeight: 1.35 }}>
                    {dosen.nama}
                  </h3>
                  <p style={{ color: 'var(--himsi-blue-light)', fontWeight: 600, fontSize: '0.85rem', marginBottom: '1rem' }}>
                    {dosen.jabatan}
                  </p>
                  
                  <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '0.85rem', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700 }}>Fokus Keahlian:</span>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', margin: '0.2rem 0 0' }}>
                      {dosen.bidang}
                    </p>
                  </div>
                </div>

                <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '0.85rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                    <Mail size={14} color="var(--himsi-blue-light)" />
                    <a href={`mailto:${dosen.email}`} style={{ color: 'var(--text-secondary)' }}>{dosen.email}</a>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <MapPin size={14} color="var(--himsi-gold)" />
                    <span>{dosen.ruang}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
