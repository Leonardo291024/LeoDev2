const typingText = document.getElementById('typingText');
const text = 'Hola, soy LeoDev';
const splitAt = 'Hola, soy '.length;
let idx = 0;

function type() {
  if (idx <= text.length) {
    if (idx <= splitAt) {
      typingText.textContent = text.slice(0, idx);
    } else {
      const before = text.slice(0, splitAt);
      const highlight = text.slice(splitAt, idx);
      typingText.innerHTML = `${before}<span class="hero__highlight">${highlight}</span>`;
    }
    idx++;
    setTimeout(type, 72);
  }
}
type();

const header = document.getElementById('header');
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
const navLinks = document.querySelectorAll('.header__link');

menuToggle.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  menuToggle.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', open);
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

const sections = document.querySelectorAll('section[id]');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const id = entry.target.getAttribute('id');
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
    });
  });
}, { rootMargin: '-50% 0px -50% 0px' });

sections.forEach(s => observer.observe(s));

let lastScroll = 0;
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  header.classList.toggle('scrolled', y > 50);
  lastScroll = y;
}, { passive: true });

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

const projects = [
  {
    title: 'VORTEX1000R',
    desc: 'LandingPage para la demostracion de una nueva motocicleta a la venta.',
    tags: ['HTML', 'CSS'],
    image: 'images/portada_vortex1000.png',
    repo: 'https://github.com/Leonardo291024/Landing_Page_Motocicleta_Urban_Sport',
    demo: 'https://leonardo291024.github.io/Landing_Page_Motocicleta_Urban_Sport/',
  },
  {
    title: 'TECHSTORE',
    desc: 'E-comerce productos de Tecnologia',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: 'images/portadaTechStore.png',
    repo: 'https://github.com/Leonardo291024/TechStore',
    demo: 'https://leonardo291024.github.io/TechStore/',
  },
];

const grid = document.getElementById('projectsGrid');
projects.forEach(p => {
  const card = document.createElement('article');
  card.className = 'project-card';
  card.innerHTML = `
    <div class="project-card__image">
      <img src="${p.image}" alt="${p.title}" loading="lazy">
    </div>
    <div class="project-card__body">
      <h3 class="project-card__title">${p.title}</h3>
      <p class="project-card__desc">${p.desc}</p>
      <div class="project-card__tags">
        ${p.tags.map(t => `<span class="project-card__tag">${t}</span>`).join('')}
      </div>
      <div class="project-card__actions">
        <a href="${p.repo}" class="btn btn--outline btn--sm" target="_blank" rel="noopener">Repositorio</a>
        <a href="${p.demo}" class="btn btn--primary btn--sm" target="_blank" rel="noopener">Demo</a>
      </div>
    </div>
  `;
  grid.appendChild(card);
});

const form = document.getElementById('contactForm');
form.addEventListener('submit', e => {
  e.preventDefault();
  const btn = form.querySelector('button[type="submit"]');
  const orig = btn.textContent;
  btn.textContent = '¡Mensaje enviado!';
  btn.disabled = true;
  btn.style.opacity = '0.7';
  setTimeout(() => {
    btn.textContent = orig;
    btn.disabled = false;
    btn.style.opacity = '1';
    form.reset();
  }, 2500);
});
