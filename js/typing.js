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
