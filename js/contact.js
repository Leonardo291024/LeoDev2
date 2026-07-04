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
