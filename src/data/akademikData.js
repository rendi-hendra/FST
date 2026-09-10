// Data Akademik & Dosen Jurusan Sistem Informasi FASILKOM UNSRI

export const panduanAkademikList = [
  {
    id: 'simak',
    judul: 'Panduan SIMAK & Pengisian KRS',
    kategori: 'SIMAK Unsri',
    badge: 'Akademik Semester',
    icon: 'GraduationCap',
    color: '#3b82f6',
    deskripsi: 'Panduan langkah demi langkah pengisian Kartu Rencana Studi (KRS) online melalui portal resmi SIMAK Universitas Sriwijaya.',
    langkah: [
      'Akses portal resmi simak.unsri.ac.id menggunakan NIM dan password akun mahasiswa Anda.',
      'Periksa status pembayaran UKT semester berjalan, pastikan telah terverifikasi lunas oleh sistem perbankan mitra.',
      'Pilih menu KRS > Pilih Mata Kuliah sesuai dengan jadwal kurikulum yang ditawarkan dan paket semester angkatan Anda.',
      'Perhatikan batasan beban SKS yang didasarkan pada Indeks Prestasi Semester (IPS) sebelumnya (maksimal 24 SKS).',
      'Lakukan pengajuan KRS dan hubungi Dosen Pembimbing Akademik (PA) untuk persetujuan (approval) secara sistem.',
      'Cetak dan simpan bukti KRS resmi ber-barcode sebagai syarat presensi perkuliahan dan kartu ujian UTS/UAS.'
    ]
  },
  {
    id: 'stopout',
    judul: 'Prosedur Stop Out / Cuti Kuliah',
    kategori: 'Cuti Akademik',
    badge: 'Administrasi Fasilkom',
    icon: 'PauseCircle',
    color: '#ef4444',
    deskripsi: 'Informasi persyaratan permohonan istirahat kuliah sementara (Stop Out) resmi di Fakultas Ilmu Komputer Universitas Sriwijaya.',
    langkah: [
      'Mahasiswa telah menempuh perkuliahan sekurang-kurangnya 2 (dua) semester aktif berturut-turut.',
      'Mengisi formulir permohonan Cuti Kuliah yang ditandatangani mahasiswa dan orang tua/wali bermeterai Rp10.000.',
      'Meminta surat persetujuan dari Dosen Pembimbing Akademik (PA) dan Ketua Jurusan Sistem Informasi.',
      'Menyerahkan berkas lengkap ke Bagian Akademik Fasilkom Unsri sebelum batas akhir masa pembayaran UKT semester bersangkutan.',
      'Surat Keterangan Cuti Resmi diterbitkan oleh Wakil Rektor I Bidang Akademik Universitas Sriwijaya.',
      'Pada saat ingin aktif kembali, ajukan surat permohonan aktif kuliah 1 bulan sebelum semester baru dimulai.'
    ]
  },
  {
    id: 'elearning',
    judul: 'E-Learning & Portal LMS Unsri',
    kategori: 'LMS & Modul',
    badge: 'Kuliah Daring',
    icon: 'MonitorPlay',
    color: '#f59e0b',
    deskripsi: 'Akses cepat platform pembelajaran daring, pengumpulan tugas, forum diskusi, dan unduhan materi kuliah dosen.',
    langkah: [
      'Kunjungi laman elearning.unsri.ac.id dan lakukan autentikasi Single Sign-On (SSO) akun Unsri.',
      'Pastikan seluruh mata kuliah yang diambil pada KRS telah muncul otomatis pada dashboard kursus Anda.',
      'Unduh silabus, RPS (Rencana Pembelajaran Semester), modul ajar, dan tugas mandiri dari dosen pengampu.',
      'Gunakan forum diskusi online untuk konsultasi kelompok dan asistensi tugas besar praktikum laboratorium.',
      'Perhatikan tenggat waktu (deadline) submit tugas untuk menghindari penalti keterlambatan sistem otomatis.'
    ]
  }
];

export const dosenList = [
  {
    id: 1,
    nama: 'Prof. Dr. Ir. H. Deris Stiawan, M.T.',
    jabatan: 'Guru Besar Cyber Security & Computer Network',
    kategori: 'Guru Besar',
    bidang: 'Cyber Security, Intrusion Detection, Computer Networks, IoT Security',
    email: 'deris@unsri.ac.id',
    ruang: 'Lab Jaringan & Cyber Security, Gedung Perkuliahan Fasilkom'
  },
  {
    id: 2,
    nama: 'Dr. Endang Lestari, S.Kom., M.T.',
    jabatan: 'Ketua Jurusan Sistem Informasi',
    kategori: 'Ketua Jurusan',
    bidang: 'Information Systems, Enterprise Resource Planning (ERP), IT Governance',
    email: 'endang_lestari@unsri.ac.id',
    ruang: 'Ruang Pimpinan Jurusan SI, Gedung Dekanat Lantai 2'
  },
  {
    id: 3,
    nama: 'Rahmat Izwan Heroza, S.T., M.T.',
    jabatan: 'Kepala Laboratorium Software Engineering',
    kategori: 'Kepala Laboratorium',
    bidang: 'Software Engineering, Agile Methodology, Software Architecture, Web Tech',
    email: 'rahmat_izwan@unsri.ac.id',
    ruang: 'Laboratorium Rekayasa Perangkat Lunak Gedung F'
  },
  {
    id: 4,
    nama: 'Pacu Putra, S.Kom., M.Cs.',
    jabatan: 'Dosen Bidang UI/UX & Enterprise Architecture',
    kategori: 'Dosen Pembimbing',
    bidang: 'Human-Computer Interaction (HCI), UI/UX Research, Enterprise Architecture (TOGAF)',
    email: 'pacu_putra@unsri.ac.id',
    ruang: 'Ruang Dosen Sistem Informasi Gedung F Lantai 1'
  },
  {
    id: 5,
    nama: 'Ali Bardadi, S.Si., M.Kom.',
    jabatan: 'Dosen Basis Data & Sistem Cerdas',
    kategori: 'Dosen Pembimbing',
    bidang: 'Relational Database Management, Data Warehousing, Data Mining',
    email: 'ali_bardadi@unsri.ac.id',
    ruang: 'Ruang Dosen Gedung F'
  },
  {
    id: 6,
    nama: 'Ken Ditha Tania, S.Kom., M.Kom.',
    jabatan: 'Dosen Business Intelligence & Data Analytics',
    kategori: 'Dosen Pembimbing',
    bidang: 'Business Intelligence, Knowledge Management, Big Data Analytics',
    email: 'kendithatania@unsri.ac.id',
    ruang: 'Laboratorium Sistem Informasi & Komputasi Awan'
  }
];
