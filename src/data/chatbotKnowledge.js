// Basis Pengetahuan & Respons Cerdas HIMSI Chatbot AI 24/7

export const quickPrompts = [
  'Cara isi KRS di SIMAK Unsri?',
  'Syarat Stop Out / Cuti di Fasilkom?',
  'Info Beasiswa Mahasiswa Unsri?',
  'Siapa Ketua Umum HIMSI?',
  'Daftar Dosen Pembimbing SI?',
  'Apa itu SI FEST 2026?'
];

export const findAnswer = (query) => {
  const q = query.toLowerCase().trim();

  if (q.includes('krs') || q.includes('simak') || q.includes('mata kuliah') || q.includes('sks')) {
    return `🎓 **Panduan Pengisian KRS di SIMAK UNSRI:**
1. Login ke portal resmi [simak.unsri.ac.id](https://simak.unsri.ac.id) menggunakan NIM dan Password akun Anda.
2. Pastikan UKT semester berjalan telah lunas diverifikasi bank.
3. Masuk ke menu **KRS > Input KRS**, lalu pilih paket mata kuliah sesuai semester dan kurikulum.
4. Maksimal beban SKS bergantung pada IPS semester lalu (maks. 24 SKS).
5. Klik **Simpan** dan segera hubungi Dosen Pembimbing Akademik (PA) Anda untuk approval KRS secara online.
6. Cetak bukti KRS ber-barcode sebagai syarat presensi dan kartu ujian!`;
  }

  if (q.includes('cuti') || q.includes('stop out') || q.includes('istirahat') || q.includes('so')) {
    return `⏸️ **Prosedur Pengajuan Stop Out (Cuti Kuliah) Fasilkom:**
- Mahasiswa minimal telah menempuh **2 semester aktif**.
- Mengisi formulir permohonan Cuti Kuliah bermeterai Rp10.000 dengan persetujuan orang tua/wali.
- Memperoleh tanda tangan persetujuan dari **Dosen PA** dan **Ketua Jurusan Sistem Informasi (Dr. Endang Lestari, M.T.)**.
- Mengajukan berkas ke Subbag Akademik Dekanat Fasilkom Unsri sebelum batas akhir pembayaran UKT semester yang bersangkutan.
- Selama cuti, mahasiswa dibebaskan dari kewajiban pembayaran UKT semester tersebut.`;
  }

  if (q.includes('ketua') || q.includes('ketum') || q.includes('rio') || q.includes('bph') || q.includes('pengurus')) {
    return `👥 **Struktur Inti BPH HIMSI Periode 2025-2026:**
- **Ketua Umum**: Rio Adrian Dwiputra (@rioadrndp)
- **Wakil Ketua Umum**: M. Wahyu Al Basyid (@w.yyu0)
- **Sekretaris Umum I & II**: M. Dimas Anwar & Nadhira Putri Syabita
- **Bendahara Umum I & II**: Fidia Adella Wulandari & Athirah Zayyanah

HIMSI menaungi **7 Departemen Strategis**: KASTRAD, RISTEK, BISTRA, MEDINFO, PSDM, PMB, dan KESTARI dengan semangat tagline *#SatukanAmbisiWujudkanAksi*!`;
  }

  if (q.includes('beasiswa') || q.includes('ukt') || q.includes('bantuan') || q.includes('keringanan')) {
    return `💰 **Informasi Beasiswa & Bantuan UKT Mahasiswa Unsri:**
- **KIP Kuliah**: Beasiswa pemerintah bagi mahasiswa berprestasi dari keluarga prasejahtera.
- **Beasiswa Bank Indonesia (BI)**: Bantuan tunai bulanan + wadah komunitas GenBI bagi mahasiswa min. semester 3 dengan IPK ≥ 3.00.
- **Djarum Beasiswa Plus**: Dana beasiswa 1 tahun + pelatihan character building & leadership.
- **Beasiswa Pemprov Sumsel / CSR BUMN (PTBA, Pusri, Bank Sumsel Babel)**: Diumumkan secara berkala di portal kemahasiswaan Unsri.
- Divisi Advokasi KASTRAD HIMSI siap mendampingi proses pengajuan keringanan UKT ke dekanat Fasilkom!`;
  }

  if (q.includes('dosen') || q.includes('pembimbing') || q.includes('kajur') || q.includes('pengajar')) {
    return `👨‍🏫 **Direktori Dosen Jurusan Sistem Informasi Fasilkom:**
- **Prof. Dr. Ir. H. Deris Stiawan, M.T.** — Guru Besar Cyber Security & Computer Network.
- **Dr. Endang Lestari, S.Kom., M.T.** — Ketua Jurusan Sistem Informasi (Enterprise Systems & ERP).
- **Rahmat Izwan Heroza, S.T., M.T.** — Kepala Lab Software Engineering & Architecture.
- **Pacu Putra, S.Kom., M.Cs.** — Human-Computer Interaction, UI/UX Research, & Enterprise Architecture.
- **Ali Bardadi, S.Si., M.Kom.** — Basis Data & Knowledge Discovery.
- **Ken Ditha Tania, S.Kom., M.Kom.** — Business Intelligence & Big Data Analytics.

Anda dapat melihat detail kontak dan ruang dosen lengkap pada menu **Portal I-Mahasiswa**!`;
  }

  if (q.includes('fest') || q.includes('proker') || q.includes('program') || q.includes('lomba') || q.includes('acara')) {
    return `🚀 **SI FEST (Sistem Informasi Festival) 2026:**
SI FEST adalah flagship event tahunan terbesar persembahan HIMSI Fasilkom Unsri.
- **Perlombaan Nasional**: UI/UX Design Competition, Web Development Showcase, Business Case Competition.
- **Seminar Karir & Tech**: Menghadirkan pembicara pakar industri digital dan startup ternama.
- **Expo Inovasi Digital**: Pameran produk karya tugas akhir mahasiswa Sistem Informasi.
- Pelaksanaan dijadwalkan pada **Oktober 2026**! Cek katalog lengkapnya di menu **Program Kerja**.`;
  }

  if (q.includes('aspirasi') || q.includes('keluhan') || q.includes('lapor') || q.includes('kontak') || q.includes('sekre')) {
    return `📢 **Kotak Aspirasi & Layanan Advokasi Mahasiswa:**
- Mahasiswa Sistem Informasi dapat menyampaikan saran, kritik sarana perkuliahan, atau kendala dosen melalui menu **Kotak Aspirasi**.
- Anda dapat mengirimkan laporan secara **100% Anonim** demi keamanan privasi.
- Seluruh aspirasi dikaji oleh Divisi Advokasi **KASTRAD** dan dibawa langsung ke forum audiensi pimpinan Fakultas Ilmu Komputer.
- **Sekretariat HIMSI**: Gedung F Lantai 1 Ruang F1.2, Fasilkom Unsri Indralaya. Email: *sekretariat@himsiunsri.org*.`;
  }

  if (q.includes('halo') || q.includes('hai') || q.includes('pagi') || q.includes('siang') || q.includes('sore') || q.includes('malam')) {
    return `Halo! 👋 Saya **HIMSI Assistant AI 24/7**. Ada yang bisa saya bantu hari ini seputar perkuliahan SIMAK, KRS, prosedur Stop Out, informasi beasiswa, atau kegiatan himpunan mahasiswa SI Unsri?`;
  }

  // Fallback intelligent response
  return `Terima kasih telah bertanya! Mengenai topik "${query}", saya menyarankan Anda untuk:
1. Mengecek panduan lengkap di menu **I-Mahasiswa** untuk urusan SIMAK, KRS, Stop Out, dan Direktori Dosen.
2. Membuka menu **Program Kerja** untuk jadwal kegiatan dan perlombaan IT.
3. Menyalurkan pertanyaan spesifik atau kendala akademik ke Divisi Advokasi KASTRAD melalui halaman **Kotak Aspirasi**.

Atau silakan klik salah satu topik cepat (prompt pills) di bawah untuk informasi populer!`;
};
