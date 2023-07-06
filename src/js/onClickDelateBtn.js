import {firebase_deleteItem} from './firebase'
import { refs, hiddenOrVisual } from './markup-shopping-list.js';

const { shoppingList } = refs;
const delateBtnRefs = document.querySelectorAll('.delate-btn');

delateBtnRefs.forEach(delateBtnRef => {
    delateBtnRef.addEventListener('click', onClickDelateBtn);
});

function onClickDelateBtn(event) {
    const id = event.currentTarget.dataset.id;
    localStorage.removeItem(id);
    firebase_deleteItem(id);
    const liRef = event.currentTarget.parentNode;
    liRef.remove();

    if (shoppingList.innerHTML === '') {
        hiddenOrVisual("block", "none");
    } else {
        hiddenOrVisual("none", "flex");
    };
};

