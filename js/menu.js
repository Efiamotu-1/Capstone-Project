const mainMenu = document.querySelector('.mainMenu');
const openMenu = document.querySelector('.hamburger');
const menuLinks = document.querySelectorAll('.mainMenu li');
openMenu.addEventListener('click', () => {
  mainMenu.classList.toggle('d-none');
});
menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    mainMenu.classList.toggle('d-none');
  });
});