
const shoppingListRef = document.querySelector('.shopping-list');

const selectedBooks = JSON.parse(localStorage.getItem('selected-books'));

console.log(selectedBooks);

function markupShoppingList(selectedBooks) {
    const arrSelectedBooks = selectedBooks.map(({ list_name, author, book_image, description, title, buy_links }) => {
        return `<li class="shopplist-item">
        <button type="button" class="delate-btn" data-delate-book>
          <svg class="delate-svg" width="8" height="8">
            <use href=""></use>
          </svg>
        </button>
        <img src="${book_image}" alt="" width="100" height="142" />
        <div class="card-shopplist">
          <h2 class="text_card_title">${title}</h2>
          <p>${list_name}</p>
          <p>${description}</p>
          <p class="text_card_author">${author}</p>
          <ul><li><a href="${buy_links[0].url}"><img src="" alt="${buy_links[0].name}" />${buy_links[0].name}</a></li>
          <li><a href="${buy_links[1].url}"><img src="" alt="${buy_links[1].name}" />${buy_links[1].name}</a></li>
          <li><a href="${buy_links[2].url}"><img src="" alt="${buy_links[2].name}" />${buy_links[2].name}</a></li></ul>
        </div>
        </li>`
    });
    shoppingListRef.innerHTML = arrSelectedBooks.join('');   
}

markupShoppingList(selectedBooks);