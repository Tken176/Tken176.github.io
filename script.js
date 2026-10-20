const I18N = {
  en: {
    tagline: 'Student - BenTre High School for Gifted Students',
    bioShort: 'Physics Specialist - Passionate about AI & Project Development',
    navAbout: 'About',
    navProjects: 'Projects',
    navAchievements: 'Achievements',
    navActivities: 'Activities',
    navContact: 'Contact',
    aboutTitle: 'About',
    projectsTitle: 'Featured Projects',
    projRole: 'Solo Developer · Research & Development',
    achTitle: 'Achievements',
    ach1Title: 'Second Prize (Provincial Level) — Creative Software Development (Category D3)',
    ach1Sub: 'Young Programmer Competition Vinh Long Province',
    ach2Title: 'Second Prize (Provincial Level) — Physics Excellence Award',
    ach2Sub: 'Provincial Physics Excellence Selection Exam - Bến Tre Province',
    acadTitle: 'Academic Activities',
    act1Title: 'March 2026 — Arena Round Participation Certificate',
    act1Sub: 'AI Young Guru National AI Innovation Competition, organized by FPT University, for research and development of the GemXcel education platform.',
    act2Title: 'July 2025 — AI Agent Training Certificate',
    act2Sub: 'Completed intensive AI Agent training at the Computer Science Summer School (CSE Summer School), Ho Chi Minh City University of Technology, National University.',
    contactTitle: 'Contact',
    footer: '© 2026 Dinh Minh Toan · Vinh Long, Vietnam · "Each problem brings a lesson, and each lesson changes a person."'
  },
  vi: {
    tagline: 'Học sinh - Trường THPT Chuyên Bến Tre',
    bioShort: 'Chuyên Lý - Đam mê AI & Phát triển dự án',
    navAbout: 'Giới thiệu',
    navProjects: 'Dự án',
    navAchievements: 'Thành tích',
    navActivities: 'Hoạt động',
    navContact: 'Liên hệ',
    aboutTitle: 'Giới thiệu',
    projectsTitle: 'Dự án tiêu biểu',
    projRole: 'Phát triển độc lập · Nghiên cứu & Phát triển',
    achTitle: 'Thành tích',
    ach1Title: 'Giải Nhì (Cấp Tỉnh) — Sáng tạo phần mềm (Bảng D3)',
    ach1Sub: 'Cuộc thi Lập trình viên trẻ tỉnh Vĩnh Long',
    ach2Title: 'Giải Nhì (Cấp Tỉnh) — Học sinh giỏi Vật lý',
    ach2Sub: 'Kỳ thi chọn học sinh giỏi Vật lý cấp tỉnh - Bến Tre',
    acadTitle: 'Hoạt động học thuật',
    act1Title: 'Tháng 3/2026 — Chứng nhận tham gia Vòng Arena',
    act1Sub: 'Cuộc thi Đổi mới AI Quốc gia AI Young Guru, do Đại học FPT tổ chức, cho nghiên cứu và phát triển nền tảng giáo dục GemXcel.',
    act2Title: 'Tháng 7/2025 — Chứng nhận huấn luyện AI Agent',
    act2Sub: 'Hoàn thành khóa huấn luyện chuyên sâu AI Agent tại Trường hè Khoa học Máy tính (CSE Summer School), Trường Đại học Bách Khoa TP.HCM, ĐHQG.',
    contactTitle: 'Liên hệ',
    footer: '© 2026 Đinh Minh Toàn · Vĩnh Long, Việt Nam · "Mỗi bài toán mang một bài học, và mỗi bài học thay đổi một con người."'
  }
};

/* THEME */
const root = document.documentElement;
const themeBtn = document.getElementById('themeToggle');
const themeEmoji = document.getElementById('themeEmoji');

function applyTheme(theme) {
  root.setAttribute('data-theme', theme);
  themeEmoji.textContent = theme === 'dark' ? '🌙' : '☀️';
  localStorage.setItem('theme', theme);
}
applyTheme(localStorage.getItem('theme') || 'dark');
themeBtn.addEventListener('click', () => {
  applyTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
});

/* LANGUAGE */
const langBtns = document.querySelectorAll('.lang-switch button');
const langBlocks = document.querySelectorAll('[data-lang-block]');

function applyLang(lang) {
  root.setAttribute('data-lang', lang);
  root.setAttribute('lang', lang);
  langBtns.forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  langBlocks.forEach(b => { b.hidden = b.dataset.langBlock !== lang; });
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (I18N[lang] && I18N[lang][key]) el.textContent = I18N[lang][key];
  });
  localStorage.setItem('lang', lang);
}
applyLang(localStorage.getItem('lang') || 'en');
langBtns.forEach(b => b.addEventListener('click', () => applyLang(b.dataset.lang)));

/* SCROLL REVEAL */
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
}

/* TOC ACTIVE HIGHLIGHT */
const tocLinks = document.querySelectorAll('.toc a');
const sections = Array.from(tocLinks).map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);

if ('IntersectionObserver' in window && sections.length)
