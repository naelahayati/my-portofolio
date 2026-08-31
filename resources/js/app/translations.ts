export type Language = 'id' | 'en';

export const translations = {
  id: {
    header: {
      home: 'Beranda',
      about: 'Tentang',
      skills: 'Keahlian',
      projects: 'Proyek',
      modeling: 'Pemodelan',
      certificates: 'Sertifikat',
      contact: 'Kontak',
    },
    hero: {
      status: 'Terbuka untuk Peluang & Proyek ✨',
      typing: 'Menjamin Kualitas, Merangkai Sistem, Mendesain Pengalaman.',
      click_magic: 'Klik untuk Keajaiban!',
      greeting: 'Halo! Saya',
      role: 'QA, Analis Sistem &',
      role_highlight: 'Desainer UI/UX',
      bio: 'Mahasiswa D3 Sistem Informasi Politeknik Negeri Subang. Berdedikasi dalam pengujian QA, merancang arsitektur sistem yang andal, pemodelan logis (UML/ERD), serta merancang UI/UX yang estetik dan user-centric.',
      contact_me: 'Hubungi Saya',
      view_projects: 'Lihat Proyek',
      view_cv: 'Lihat CV',
      ecosystem: 'Ekosistem Teknologi Utama',
    },
    about: {
      subtitle: 'Latar Belakang & Pendekatan Kerja',
      title: 'Profil & Pendidikan',
      bio: 'Saya merupakan mahasiswa aktif D3 Sistem Informasi di Politeknik Negeri Subang yang berfokus pada jembatan antara kebutuhan pengguna dan arsitektur teknologi. Melalui kombinasi logika analisis yang kuat dan kreativitas desain antarmuka, saya berdedikasi menciptakan aplikasi web yang efisien, terstruktur, serta memiliki nilai estetika tinggi.',
      stats: {
        projects: 'Proyek Sistem Selesai',
        accuracy: 'Akurasi Analisis Sistem',
        tools: 'Teknologi & Tools',
        quality: 'Fokus Kualitas UI/UX',
      },
      education: 'Riwayat Pendidikan',
      experience: 'Riwayat Pengalaman',
      workflow: 'Alur & Metode Kerja Logis',
      workflow_desc: 'Pendekatan terstruktur dalam menyelesaikan setiap tantangan rekayasa perangkat lunak',
    },
    footer: {
      rights: 'Hak cipta dilindungi undang-undang.',
      back_to_top: 'Kembali ke Atas',
    }
  },
  en: {
    header: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      modeling: 'Modeling',
      certificates: 'Certificates',
      contact: 'Contact',
    },
    hero: {
      status: 'Open to Opportunities & Projects ✨',
      typing: 'Ensuring Quality, Architecting Systems, Designing Experiences.',
      click_magic: 'Click for Magic!',
      greeting: 'Hello! I am',
      role: 'QA, System Analyst &',
      role_highlight: 'UI/UX Designer',
      bio: 'Information Systems Diploma Student at Politeknik Negeri Subang. Dedicated to QA testing, designing reliable system architectures, logical modeling (UML/ERD), and creating aesthetic UI/UX designs.',
      contact_me: 'Contact Me',
      view_projects: 'View Projects',
      view_cv: 'View CV',
      ecosystem: 'Main Tech Ecosystem',
    },
    about: {
      subtitle: 'Background & Work Approach',
      title: 'Profile & Education',
      bio: 'I am an active Information Systems Diploma student at Politeknik Negeri Subang focusing on the bridge between user needs and technology architecture. Through a combination of strong analytical logic and interface design creativity, I am dedicated to creating efficient, structured web applications with high aesthetic value.',
      stats: {
        projects: 'Completed System Projects',
        accuracy: 'System Analysis Accuracy',
        tools: 'Technology & Tools',
        quality: 'UI/UX Quality Focus',
      },
      education: 'Educational Background',
      experience: 'Experience History',
      workflow: 'Logical Workflow & Methods',
      workflow_desc: 'Structured approach to solving every software engineering challenge',
    },
    footer: {
      rights: 'All rights reserved.',
      back_to_top: 'Back to Top',
    }
  }
};

// Simple type extraction for translation keys to give some basic autocomplete
type PathsToStringProps<T> = T extends string ? [] : {
  [K in Extract<keyof T, string>]: [K, ...PathsToStringProps<T[K]>]
}[Extract<keyof T, string>];

type Join<T extends string[], D extends string> =
  T extends [] ? never :
  T extends [infer F] ? F :
  T extends [infer F, ...infer R] ?
  F extends string ?
  R extends string[] ?
  `${F}${D}${Join<R, D>}` : never : never : never;

export type TranslationKey = Join<PathsToStringProps<typeof translations['id']>, '.'> | string;
