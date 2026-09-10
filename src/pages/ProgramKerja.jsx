import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, Search, Filter, ChevronRight, 
  Sparkles, Users, Info, X, Clock, MapPin 
} from 'lucide-react';
import { prokerList, prokerCategories } from '../data/prokerData';

export default function ProgramKerja() {
  const [selectedCategory, setSelectedCategory] = useState('Semua Kategori');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProker, setActiveModalProker] = useState(null);

  const filteredProkers = useMemo(() => {
    return prokerList.filter(proker => {
      const matchCategory = selectedCategory === 'Semua Kategori' || proker.kategori === selectedCategory;
      const matchSearch = proker.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          proker.deskripsi.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          proker.penyelenggara.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div>
      {/* Breadcrumb Header */}
      <section className="section-pad-sm" style={{ borderBottom: '1px solid var(--glass-border)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
            <Link to="/">Beranda</Link>
            <ChevronRight size={14} />
            <span>Tentang Kami</span>
            <ChevronRight size={14} />
            <span style={{ color: 'var(--himsi-blue-light)', fontWeight: 600 }}>Program Kerja</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800 }}>Katalog Program Kerja</h1>
          <p style={{ maxWidth: '680px', color: 'var(--text-secondary)' }}>
            Rangkaian program kerja strategis yang dijalankan oleh seluruh divisi HIMSI FASILKOM UNSRI untuk mewadahi minat, bakat, karir, dan keilmuan teknologi mahasiswa.
          </p>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="section-pad">
        <div className="container">
          {/* Top Search & Count Bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            {/* Search Input */}
            <div style={{ position: 'relative', flex: '1', minWidth: '280px', maxWidth: '480px' }}>
              <Search size={18} color="var(--text-muted)" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
              <input 
                type="text" 
                placeholder="Cari nama proker, divisi, atau topik..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 18px 12px 46px',
                  borderRadius: 'var(--radius-pill)',
                  background: 'var(--input-bg)',
                  border: '1px solid var(--glass-border)',
                  color: 'var(--text-primary)',
                  outline: 'none',
                  fontSize: '0.92rem'
                }}
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
                >
                  <X size={16} />
                </button>
              )}
            </div>

            <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              Menampilkan <strong style={{ color: 'var(--himsi-blue-light)' }}>{filteredProkers.length}</strong> program kerja
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="filter-tabs-wrapper">
            {prokerCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`filter-pill-btn ${selectedCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Proker Grid */}
          {filteredProkers.length > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
              {filteredProkers.map((proker) => (
                <div key={proker.id} className="proker-card-item">
                  <div className="proker-card-banner" style={{ background: proker.gradien }}>
                    <span className={`badge ${proker.badgeClass}`} style={{ position: 'absolute', top: '16px', left: '16px' }}>
                      {proker.kategori}
                    </span>
                    <h3>{proker.nama}</h3>
                  </div>

                  <div className="proker-card-content">
                    <div>
                      <h4 className="proker-card-title">{proker.subjudul}</h4>
                      <p className="proker-card-desc" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {proker.deskripsi}
                      </p>
                    </div>

                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                        <Users size={14} color="var(--himsi-blue-light)" />
                        <span>{proker.penyelenggara}</span>
                      </div>

                      <div className="proker-card-footer">
                        <span>🗓️ {proker.jadwal}</span>
                        <button 
                          onClick={() => setActiveModalProker(proker)} 
                          className="btn-glass"
                          style={{ padding: '4px 12px', fontSize: '0.78rem' }}
                        >
                          <Info size={14} /> Detail
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="glass-card" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
              <Calendar size={48} color="var(--text-muted)" style={{ margin: '0 auto 1rem' }} />
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                Tidak Ada Program Kerja Ditemukan
              </h3>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '450px', margin: '0 auto 1.5rem' }}>
                Tidak ada agenda yang cocok dengan filter atau kata kunci "{searchQuery}".
              </p>
              <button 
                onClick={() => { setSelectedCategory('Semua Kategori'); setSearchQuery(''); }}
                className="btn-explore"
              >
                Reset Semua Filter
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Proker Detail Modal */}
      {activeModalProker && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
            zIndex: 999
          }}
          onClick={() => setActiveModalProker(null)}
        >
          <div 
            className="glass-card" 
            style={{ maxWidth: '600px', width: '100%', padding: '0', overflow: 'hidden' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ background: activeModalProker.gradien, padding: '2rem', position: 'relative', color: '#fff' }}>
              <button 
                onClick={() => setActiveModalProker(null)}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: 'rgba(0,0,0,0.3)',
                  border: 'none',
                  color: '#fff',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <X size={18} />
              </button>

              <span className={`badge ${activeModalProker.badgeClass}`} style={{ marginBottom: '0.75rem' }}>
                {activeModalProker.kategori}
              </span>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, margin: '0 0 0.25rem' }}>{activeModalProker.nama}</h2>
              <p style={{ margin: 0, opacity: 0.9, fontSize: '0.95rem' }}>{activeModalProker.subjudul}</p>
            </div>

            <div style={{ padding: '2rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                <div className="glass-card" style={{ padding: '1rem', border: '1px solid var(--glass-border)' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>Periode</span>
                  <div style={{ fontWeight: 700, color: 'var(--text-primary)', marginTop: '2px' }}>{activeModalProker.jadwal}</div>
                </div>
                <div className="glass-card" style={{ padding: '1rem', border: '1px solid var(--glass-border)' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>Pelaksana</span>
                  <div style={{ fontWeight: 700, color: 'var(--text-primary)', marginTop: '2px' }}>{activeModalProker.penyelenggara}</div>
                </div>
              </div>

              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Deskripsi Lengkap</h4>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.95rem', marginBottom: '2rem' }}>
                {activeModalProker.deskripsi}
              </p>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
                <button onClick={() => setActiveModalProker(null)} className="btn-glass">
                  Tutup
                </button>
                <Link to="/aspirasi" className="btn-explore" onClick={() => setActiveModalProker(null)}>
                  Ajukan Ide Proker
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
