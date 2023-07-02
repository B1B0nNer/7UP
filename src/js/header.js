    const menuButton = document.querySelector('.menu__button');
    const menuList = document.querySelector('.menu__list');

    menuButton.addEventListener('click', menuButtonClick);

    function menuButtonClick() {
        let expanded = menuButton.getAttribute('aria-expanded') === 'true';
        menuButton.setAttribute('aria-expanded', !expanded);
        menuButton.classList.toggle('menu__button--open');
        menuList.classList.toggle('menu__list--open');
    }
