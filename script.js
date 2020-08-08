// Selectors
let burgerMenu = document.querySelector('.burger-menu');
let body = document.querySelector('body');
let navLinks = document.querySelectorAll('.nav-link');

// Event listeners
burgerMenu.addEventListener('click', () => {
  body.classList.toggle('open');
});

navLinks.forEach(navLink => {
  navLink.addEventListener('click', () => {
    body.classList.remove('open');
  });
});

// Scroll Reveal
window.sr = ScrollReveal();

sr.reveal('.wrap', {
  origin: 'top',
  duration: 500,
  distance: '1rem',
  delay: 500
});

sr.reveal('#about-me', {
  origin: 'left',
  duration: 1000,
  distance: '25rem',
  delay: 300
});

sr.reveal('#skills', {
  origin: 'right',
  duration: 1000,
  distance: '25rem',
  delay: 300
});

sr.reveal('.project', {
  origin: 'top',
  duration: 1000,
  distance: '10rem',
  delay: 500
});


