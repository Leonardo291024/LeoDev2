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
