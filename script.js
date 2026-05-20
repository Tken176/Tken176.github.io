const themeToggle = document.getElementById('themeToggle');
const themeLabel = document.getElementById('themeLabel');
const themeEmoji = document.getElementById('themeEmoji');

const setTheme = (darkMode) => {
  document.body.classList.toggle('dark', darkMode);
  if (darkMode) {
    themeLabel.textContent = 'Light mode';
    themeEmoji.textContent = '☀️';
  } else {
    themeLabel.textContent = 'Dark mode';
    themeEmoji.textContent = '🌙';
  }
  localStorage.setItem('theme', darkMode ? 'dark' : 'light');
};

const getInitialTheme = () => {
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme === 'dark') return true;
  if (storedTheme === 'light') return false;
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
};

if (themeToggle) {
  setTheme(getInitialTheme());
  themeToggle.addEventListener('click', () => setTheme(!document.body.classList.contains('dark')));
}

const revealElements = document.querySelectorAll('.main-content section, .content-card');
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealElements.forEach((element) => {
  element.classList.add('hidden');
  revealObserver.observe(element);
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href');
    if (!targetId || !targetId.startsWith('#')) return;
    event.preventDefault();
    const target = document.querySelector(targetId);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach((item) => {
  item.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      item.click();
    }
  });
});
