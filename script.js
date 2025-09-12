// Theme management
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
  document.body.classList.add('dark');
}

const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const active = document.body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', active);
});

// Navbar reveal after landing animation
const navbar = document.getElementById('navbar');
const landingAnimationsMs = 1600;
setTimeout(() => navbar.classList.add('visible'), landingAnimationsMs);

// Intersection Observer for scroll-triggered animations
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { 
    if (e.isIntersecting) e.target.classList.add('in'); 
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Dynamic year in footer
document.getElementById('year').textContent = new Date().getFullYear();
