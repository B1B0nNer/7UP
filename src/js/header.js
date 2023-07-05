const menuButton = document.querySelector('.menu__btn');
const menuList = document.querySelector('.menu__list');
const login = document.querySelector('.login-btn');
const logout = document.querySelector('.logout-btn');
const substrate = document.querySelector('.menu__substrate');

menuButton.addEventListener('click', menuButtonClick);

function menuButtonClick() {
    toggleClass(menuButton, 'is-open');
    toggleClass(menuList, 'is-open');
    toggleClass(login, 'is-open');
    toggleClass(logout, 'is-open');
    toggleClass(substrate, 'is-open');

    const expanded = menuButton.getAttribute('aria-expanded');
    menuButton.setAttribute('aria-expanded', expanded === 'true' ? 'false' : 'true');
}

function toggleClass(element, className) {
    element.classList.toggle(className);
}
