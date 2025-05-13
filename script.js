const menuToggle = document.getElementById('menu-toggle');
const sideMenu = document.getElementById('side-menu');
const overlay = document.getElementById('overlay');
const body = document.body;  // Adicionei esta linha

menuToggle.addEventListener('click', () => {
  sideMenu.classList.toggle('active');
  overlay.classList.toggle('active');
  menuToggle.classList.toggle('active'); // <- aqui ativa o X
  
  // Adiciona ou remove a classe no-scroll no body
  body.classList.toggle('no-scroll');
});

overlay.addEventListener('click', () => {
  sideMenu.classList.remove('active');
  overlay.classList.remove('active');
  menuToggle.classList.remove('active'); // <- aqui remove o X
  
  // Remove a classe no-scroll do body
  body.classList.remove('no-scroll');
});
