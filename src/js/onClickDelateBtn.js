const delateBtnRefs = document.querySelectorAll('.delate-btn');
const shoppingListRef = document.querySelector('.shopping-list');
const emptyListRef = document.querySelector('.empty-list');

delateBtnRefs.forEach(delateBtnRef => {
    delateBtnRef.addEventListener('click', onClickDelateBtn)
});

function onClickDelateBtn(event) {
    console.log('remove');
    const id = event.currentTarget.dataset.id;
    localStorage.removeItem(id);
    const itemIdRef = document.querySelector(`[data-idcard="${id}"]`);
    itemIdRef.remove();
    if (shoppingListRef.innerHTML === '') {
    emptyListRef.style.display = "block";
}
};

