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
  delay: 1000
});

sr.reveal('#about-me', {
  origin: 'left',
  duration: 1000,
  distance: '50%',
  delay: 300
});

sr.reveal('#skills', {
  origin: 'right',
  duration: 1000,
  distance: '50%',
  delay: 300
});



sr.reveal('.project', {
  origin: 'top',
  duration: 1000,
  distance: '50%',
  delay: 300
});


