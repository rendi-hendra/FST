import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, Sparkles, HeartHandshake, Award, 
  Lightbulb, Users, Compass, ChevronRight 
} from 'lucide-react';

export default function VisiMisi() {
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
            <span style={{ color: 'var(--himsi-blue-light)', fontWeight: 600 }}>Visi & Misi</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800 }}>Visi, Misi & Identitas Organisasi</h1>
          <p style={{ maxWidth: '680px', color: 'var(--text-secondary)' }}>
            Landasan filosofis, arah perjuangan, dan cita-cita luhur HIMSI FASILKOM UNSRI dalam membina insan akademis yang unggul, berintegritas, dan solutif.
          </p>
        </div>
      </section>

      {/* 1. VISI SECTION */}
      <section className="section-pad">
        <div className="container">
          <div className="glass-card" style={{ padding: '3.5rem 2.5rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ maxWidth: '850px', margin: '0 auto' }}>
              <span className="section-label">
                <Target size={16} /> Visi Organisasi
              </span>
              <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', fontWeight: 800, lineHeight: 1.45, margin: '1.25rem 0 1.5rem', color: 'var(--text-primary)' }}>
                “Menjadikan HIMSI FASILKOM UNSRI sebagai organisasi yang berlandaskan nilai kekeluargaan dan kedisiplinan, unggul dalam bidang akademik, serta berani berpikir kritis dan bersuara secara solutif terhadap isu-isu kemahasiswaan.”
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.8 }}>
                Menjadi wadah yang memanusiakan manusia, memberdayakan nalar kritis, dan menghasilkan karya nyata yang bermanfaat bagi almamater Universitas Sriwijaya dan masyarakat luas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MISI SECTION */}
      <section className="section-pad" style={{ background: 'rgba(255,255,255,0.01)', borderTop: '1px solid var(--glass-border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem' }}>
            <span className="section-label">
              <Compass size={16} /> Misi Strategis
            </span>
            <h2 className="section-title">Lima Pilar <span>Misi HIMSI</span></h2>
            <p className="section-desc">
              Langkah-langkah konkret yang diwujudkan secara konsisten oleh seluruh fungsionaris dan anggota organisasi sepanjang periode kepengurusan.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.75rem' }}>
            {/* Pilar 1 */}
            <div className="glass-card">
              <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(59, 130, 246, 0.15)', color: '#60a5fa', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1.2rem', marginBottom: '1.25rem' }}>
                01
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                Inklusif & Kolaboratif
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.7 }}>
                Membangun lingkungan organisasi yang inklusif, harmonis, dan kolaboratif sebagai ruang yang nyaman bagi seluruh anggota untuk bertumbuh dan berproses secara optimal tanpa membedakan latar belakang.
              </p>
            </div>

            {/* Pilar 2 */}
            <div className="glass-card">
              <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(239, 68, 68, 0.15)', color: '#f87171', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1.2rem', marginBottom: '1.25rem' }}>
                02
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                Nilai Kekeluargaan
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.7 }}>
                Menumbuhkan nilai kekeluargaan, rasa saling menghargai, serta empati antaranggota HIMSI dalam menghadapi dinamika perkuliahan dan ragam sudut pandang pemikiran.
              </p>
            </div>

            {/* Pilar 3 */}
            <div className="glass-card">
              <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1.2rem', marginBottom: '1.25rem' }}>
                03
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                Prestasi & Akademik
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.7 }}>
                Mendorong akselerasi prestasi dan pengembangan kemampuan akademik serta hard skill teknologi anggota melalui pelatihan intensif, mentoring lomba IT, dan kelompok belajar mandiri.
              </p>
            </div>

            {/* Pilar 4 */}
            <div className="glass-card">
              <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(16, 185, 129, 0.15)', color: '#34d399', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1.2rem', marginBottom: '1.25rem' }}>
                04
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                Kritis & Solutif
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.7 }}>
                Mengembangkan nalar kritis, tanggap, dan solutif terhadap isu-isu kemahasiswaan, sarana pendidikan, serta dinamika sosial masyarakat melalui kajian ilmiah yang konstruktif.
              </p>
            </div>

            {/* Pilar 5 */}
            <div className="glass-card">
              <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(139, 92, 246, 0.15)', color: '#a78bfa', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1.2rem', marginBottom: '1.25rem' }}>
                05
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                Partisipasi Aktif
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.7 }}>
                Mengajak seluruh anggota untuk aktif berpartisipasi, menepis apatisme, serta berani menyuarakan aspirasi demi kemajuan HIMSI dan Jurusan Sistem Informasi secara berkesinambungan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MAKNA & FILOSOFI LOGO */}
      <section id="makna-logo" className="section-pad" style={{ borderTop: '1px solid var(--glass-border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem' }}>
            <span className="section-label">
              <Sparkles size={16} /> Identitas Visual
            </span>
            <h2 className="section-title">Makna & <span>Filosofi Logo</span></h2>
            <p className="section-desc">
              Setiap goresan lambang dan kombinasi warna kebanggaan HIMSI menyimpan nilai integritas perjuangan mahasiswa Sistem Informasi Unsri.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            {/* Logo Badge Showcase */}
            <div className="glass-card" style={{ padding: '3.5rem 2rem', textAlign: 'center' }}>
              <div style={{ width: '180px', height: '180px', borderRadius: '40px', background: 'linear-gradient(135deg, #1e40af, #ef4444)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '4.5rem', fontWeight: 900, margin: '0 auto 1.5rem', boxShadow: '0 20px 50px rgba(30, 64, 175, 0.45)' }}>
                SI
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.3rem' }}>
                Lambang Resmi HIMSI
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
                FASILKOM UNIVERSITAS SRIWIJAYA
              </p>
            </div>

            {/* Color Breakdown */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Biru */}
              <div className="glass-card" style={{ padding: '1.5rem 1.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <span style={{ width: '16px', height: '16px', borderRadius: '50%', background: '#3b82f6', display: 'inline-block' }}></span>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#60a5fa', margin: 0 }}>
                    Biru Navy & Biru Langit
                  </h4>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.7, margin: 0 }}>
                  Melambangkan kedalaman ilmu pengetahuan sistem informasi, kecerdasan teknologi digital, integritas moral para fungsionaris, serta visi eksplorasi tanpa batas.
                </p>
              </div>

              {/* Kuning */}
              <div className="glass-card" style={{ padding: '1.5rem 1.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <span style={{ width: '16px', height: '16px', borderRadius: '50%', background: '#f59e0b', display: 'inline-block' }}></span>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#fbbf24', margin: 0 }}>
                    Kuning Emas
                  </h4>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.7, margin: 0 }}>
                  Menggambarkan kejayaan almamater Universitas Sriwijaya, kemuliaan budi pekerti mahasiswa, dan tekad pantang menyerah dalam mengukir prestasi di tingkat nasional maupun global.
                </p>
              </div>

              {/* Merah */}
              <div className="glass-card" style={{ padding: '1.5rem 1.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <span style={{ width: '16px', height: '16px', borderRadius: '50%', background: '#ef4444', display: 'inline-block' }}></span>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#f87171', margin: 0 }}>
                    Merah Marun
                  </h4>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.7, margin: 0 }}>
                  Mencerminkan keberanian berpikir kritis, semangat membara dalam berkarya, serta rasa solidaritas persaudaraan yang kokoh antarmahasiswa Sistem Informasi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
