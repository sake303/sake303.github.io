const burger = document.querySelector('.nav-burger');
const menu = document.querySelector('.mobile-menu');
const menuLabel = burger.querySelector('.sr-only');

function setMenu(open) {
  burger.classList.toggle('open', open);
  menu.classList.toggle('open', open);
  burger.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-hidden', String(!open));
  menu.toggleAttribute('inert', !open);
  menuLabel.textContent = open ? '메뉴 닫기' : '메뉴 열기';
}

burger.addEventListener('click', () => setMenu(!burger.classList.contains('open')));
menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && burger.classList.contains('open')) {
    setMenu(false);
    burger.focus();
  }
});

matchMedia('(min-width: 901px)').addEventListener('change', (event) => {
  if (event.matches) setMenu(false);
});
