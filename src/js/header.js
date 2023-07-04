const menuButton = document.querySelector('.menu__btn');
const menuList = document.querySelector('.menu__list');
const login = document.querySelector('.login');

menuButton.addEventListener('click', menuButtonClick);

function menuButtonClick() {
    let expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', !expanded);
    menuButton.classList.toggle('is-open');
    menuList.classList.toggle('is-open');
    login.classList.toggle('is-open');
}
