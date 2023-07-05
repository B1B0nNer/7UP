import { refs, hiddenOrVisual } from './markup-shopping-list.js';

const { shoppingList } = refs;
const delateBtnRefs = document.querySelectorAll('.delate-btn');

delateBtnRefs.forEach(delateBtnRef => {
    delateBtnRef.addEventListener('click', onClickDelateBtn);
});

function onClickDelateBtn(event) {
    const id = event.currentTarget.dataset.id;
    localStorage.removeItem(id);

    const liRef = event.currentTarget.parentNode;
    liRef.remove();

    if (shoppingList.innerHTML === '') {
        hiddenOrVisual("block", "none");
    } else {
        hiddenOrVisual("none", "flex");
    };
};

