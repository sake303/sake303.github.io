const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.site-menu');
const menuLabel = toggle.querySelector('.sr-only');

function setMenu(open) {
  document.body.classList.toggle('menu-open', open);
  toggle.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-hidden', String(!open));
  menu.toggleAttribute('inert', !open);
  menuLabel.textContent = open ? '메뉴 닫기' : '메뉴 열기';
  if (open) {
    menu.focus();
  } else {
    toggle.focus();
  }
}

toggle.addEventListener('click', () => setMenu(!document.body.classList.contains('menu-open')));
menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && document.body.classList.contains('menu-open')) {
    setMenu(false);
  }
});
