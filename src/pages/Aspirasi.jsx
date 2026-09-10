import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, Send, CheckCircle2, ChevronRight, 
  MessageSquare, UserCheck, AlertCircle, History, Clock 
} from 'lucide-react';

export default function Aspirasi() {
  const [formData, setFormData] = useState({
    nama: '',
    angkatan: '2026',
    kategori: 'akademik',
    pesan: ''
  });

  const [submittedAspirations, setSubmittedAspirations] = useState(() => {
    const saved = localStorage.getItem('himsi_aspirasi_list');
    return saved ? JSON.parse(saved) : [
      {
        id: 'asp-1',
        nama: 'Anonim (Angkatan 2025)',
        kategori: 'Fasilitas Kampus',
        pesan: 'Mohon perbaikan proyektor di ruang F2.3 yang sering mati mendadak saat perkuliahan berlangsung.',
        tanggal: '10 Sep 2026',
        status: 'Disampaikan ke Dekanat'
      },
      {
        id: 'asp-2',
        nama: 'Ahmad (Angkatan 2024)',
        kategori: 'Akademik & SIMAK',
        pesan: 'Jadwal praktikum Basis Data bentrok dengan mata kuliah umum, mohon bantuan mediasi penyesuaian jadwal.',
        tanggal: '08 Sep 2026',
        status: 'Ditinjau Advokasi'
      }
    ];
  });

  const [showSuccessToast, setShowSuccessToast] = useState(false);

  useEffect(() => {
    localStorage.setItem('himsi_aspirasi_list', JSON.stringify(submittedAspirations));
  }, [submittedAspirations]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.pesan.trim()) return;

    const newEntry = {
      id: `asp-${Date.now()}`,
      nama: formData.nama.trim() ? formData.nama.trim() : `Anonim (Angkatan ${formData.angkatan})`,
      kategori: formData.kategori === 'fasilitas' ? 'Fasilitas Kampus' :
                formData.kategori === 'akademik' ? 'Akademik & SIMAK' :
                formData.kategori === 'keuangan' ? 'UKT & Beasiswa' :
                formData.kategori === 'organisasi' ? 'Saran Kegiatan HIMSI' : 'Lain-lain',
      pesan: formData.pesan.trim(),
      tanggal: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }),
      status: 'Diterima Tim Advokasi'
    };

    setSubmittedAspirations([newEntry, ...submittedAspirations]);
    setFormData({ nama: '', angkatan: '2026', kategori: 'akademik', pesan: '' });
    setShowSuccessToast(true);
    setTimeout(() => setShowSuccessToast(false), 5000);
  };

  return (
    <div>
      {/* Breadcrumb Header */}
      <section className="section-pad-sm" style={{ borderBottom: '1px solid var(--glass-border)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
            <Link to="/">Beranda</Link>
            <ChevronRight size={14} />
            <span style={{ color: 'var(--himsi-blue-light)', fontWeight: 600 }}>Kotak Aspirasi</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800 }}>Kotak Aspirasi & Advokasi</h1>
          <p style={{ maxWidth: '680px', color: 'var(--text-secondary)' }}>
            Salurkan kritik, saran, keluhan perkuliahan, dan ide konstruktif secara aman & anonim. Divisi Advokasi KASTRAD HIMSI siap mendampingi Anda.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="section-pad">
        <div className="container">
          {/* Toast Notification */}
          {showSuccessToast && (
            <div 
              style={{
                background: 'rgba(16, 185, 129, 0.15)',
                border: '1px solid #10b981',
                color: '#34d399',
                padding: '1rem 1.5rem',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '2rem',
                animation: 'fadeIn 0.3s ease'
              }}
            >
              <CheckCircle2 size={20} />
              <span style={{ fontSize: '0.95rem', fontWeight: 600 }}>
                Aspirasi Anda berhasil terkirim! Laporan telah masuk ke database Divisi Advokasi KASTRAD HIMSI.
              </span>
            </div>
          )}

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'start' }}>
            {/* Left Box: Jaminan Kerahasiaan */}
            <div className="glass-card" style={{ padding: '2.5rem' }}>
              <span className="section-label">Jaminan Kerahasiaan</span>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem' }}>
                Mengapa Aspirasi Anda Sangat Berarti?
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                HIMSI berkomitmen menjadi garda terdepan pembela kesejahteraan dan hak-hak akademik mahasiswa Sistem Informasi Unsri. Setiap laporan akan dikaji secara objektif dan dibawa ke forum resmi audiensi pimpinan fakultas.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '14px', background: 'rgba(59, 130, 246, 0.15)', color: '#60a5fa', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <ShieldCheck size={22} />
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: '1rem', marginBottom: '0.25rem' }}>
                      Identitas Terjaga / 100% Anonim
                    </h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', margin: 0 }}>
                      Anda diperbolehkan mengosongkan nama untuk menjamin privasi penuh.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '14px', background: 'rgba(239, 68, 68, 0.15)', color: '#f87171', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MessageSquare size={22} />
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: '1rem', marginBottom: '0.25rem' }}>
                      Audiensi Berkala Dekanat
                    </h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', margin: 0 }}>
                      KASTRAD menyampaikan langsung rangkuman keluhan mahasiswa ke dekanat Fasilkom.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Box: Form Aspirasi */}
            <div className="glass-card" style={{ padding: '2.5rem' }}>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
                Formulir Aspirasi Mahasiswa
              </h3>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                    Nama Lengkap (Opsional / Boleh Dikosongkan)
                  </label>
                  <input 
                    type="text"
                    placeholder="Kosongkan jika ingin anonim"
                    value={formData.nama}
                    onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: 'var(--input-bg)',
                      border: '1px solid var(--glass-border)',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--text-primary)',
                      outline: 'none',
                      fontSize: '0.92rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                    Angkatan Mahasiswa
                  </label>
                  <select 
                    value={formData.angkatan}
                    onChange={(e) => setFormData({ ...formData, angkatan: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: 'var(--dropdown-bg)',
                      border: '1px solid var(--glass-border)',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--text-primary)',
                      outline: 'none',
                      fontSize: '0.92rem'
                    }}
                  >
                    <option value="2026">Angkatan 2026</option>
                    <option value="2025">Angkatan 2025</option>
                    <option value="2024">Angkatan 2024</option>
                    <option value="2023">Angkatan 2023</option>
                    <option value="alumni">Alumni / Lainnya</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                    Kategori Aspirasi
                  </label>
                  <select 
                    value={formData.kategori}
                    onChange={(e) => setFormData({ ...formData, kategori: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: 'var(--dropdown-bg)',
                      border: '1px solid var(--glass-border)',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--text-primary)',
                      outline: 'none',
                      fontSize: '0.92rem'
                    }}
                  >
                    <option value="akademik">Perkuliahan, Dosen & SIMAK</option>
                    <option value="fasilitas">Fasilitas Kampus & Ruang Kelas</option>
                    <option value="keuangan">UKT & Beasiswa</option>
                    <option value="organisasi">Saran Kegiatan HIMSI</option>
                    <option value="lainnya">Lain-lain</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                    Pesan / Detail Aspirasi *
                  </label>
                  <textarea 
                    rows={5}
                    required
                    placeholder="Tuliskan saran, kritik, atau keluhan Anda secara rinci di sini..."
                    value={formData.pesan}
                    onChange={(e) => setFormData({ ...formData, pesan: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: 'var(--input-bg)',
                      border: '1px solid var(--glass-border)',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--text-primary)',
                      outline: 'none',
                      fontSize: '0.92rem',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn-explore" 
                  style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}
                >
                  <Send size={16} /> Kirim Aspirasi Sekarang
                </button>
              </form>
            </div>
          </div>

          {/* Aspirations Live Tracker / History */}
          <div style={{ marginTop: '4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
              <History size={20} color="var(--himsi-blue-light)" />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                Pelacakan Status Aspirasi Terkini
              </h3>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              {submittedAspirations.map((asp) => (
                <div key={asp.id} className="glass-card" style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                    <span className="badge badge-secondary">{asp.kategori}</span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{asp.tanggal}</span>
                  </div>
                  <p style={{ color: 'var(--text-primary)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                    "{asp.pesan}"
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--glass-border)', paddingTop: '0.75rem', fontSize: '0.8rem' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Oleh: {asp.nama}</span>
                    <span className="badge badge-success">
                      <Clock size={12} /> {asp.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
