const menuButton = document.querySelector('.menu__btn');
const menuList = document.querySelector('.menu__list');
const login = document.querySelector('.login-btn');
const logout = document.querySelector('.logout-btn');
const substrate = document.querySelector('.menu__substrate');

menuButton.addEventListener('click', menuButtonClick);

function menuButtonClick() {
    let expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', !expanded);
    menuButton.classList.toggle('is-open');
    menuList.classList.toggle('is-open');
    login.classList.toggle('is-open');
    logout.classList.toggle('is-open');
    substrate.classList.toggle('is-open');
}
