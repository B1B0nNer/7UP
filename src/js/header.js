const menuButton = document.querySelector('.menu__btn');
const menuList = document.querySelector('.menu__list');
const login = document.querySelector('.login-btn');
const logout = document.querySelector('.logout-btn');
const substrate = document.querySelector('.menu__substrate');
const scrollup = document.querySelector('.scrollup');

menuButton.addEventListener('click', menuButtonClick);

function menuButtonClick() {
  toggleClass(menuButton, 'is-open');
  toggleClass(menuList, 'is-open');
  toggleClass(login, 'is-open');
  toggleClass(logout, 'is-open');
  toggleClass(substrate, 'is-open');
  toggleClass(scrollup, 'is-hidden');

  const expanded = menuButton.getAttribute('aria-expanded');
  menuButton.setAttribute(
    'aria-expanded',
    expanded === 'true' ? 'false' : 'true'
  );

  document.body.classList.toggle('no-scroll');
  menuList.classList.toggle('no-scroll');
}

function toggleClass(element, className) {
  element.classList.toggle(className);
}

login.addEventListener('click', logoutShow);

function logoutShow() {
  logout.classList.toggle('is-open');
}
