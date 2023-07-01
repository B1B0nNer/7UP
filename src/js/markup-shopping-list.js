
const shoppingListRef = document.querySelector('.shopping-list');

const selectedBooks = JSON.parse(localStorage.getItem('selected-books'));

function markupShoppingList(selectedBooks) {
    const arrSelectedBooks = selectedBooks.map(({ _id, list_name, author, book_image, description, title, buy_links }) => {
        return `<li class="shopplist-item">
        <button type="button" class="delate-btn" data-id="${_id}">
          <svg class="delate-svg" width="16" height="16">
            <use href="../images/sprite.svg#icon-cart"></use>
          </svg>
        </button>
        <img src="${book_image}" alt="" width="100" height="142" />
        <div class="card-shopplist">
          <h2 class="text_card_title text_card_title-shopplist">${title}</h2>
          <p class="category-shopplist">${list_name}</p>
          <p class="description-shopplist">${description}</p>
          <div class="wrapper-card-shopplist-footer">
            <p class="text_card_author shopplist-text_card_author">${author}</p>
            <ul class=wrapper-shops>
              <li><a href="${buy_links[0].url}" target="_blank"><img src="" alt="${buy_links[0].name}" /></a></li>
              <li><a href="${buy_links[1].url}" target="_blank"><img src="" alt="${buy_links[1].name}" /></a></li>
              <li><a href="${buy_links[2].url}" target="_blank"><img src="" alt="${buy_links[2].name}" /></a></li>
            </ul>
          </div></div>
        </li>`
    });
    shoppingListRef.innerHTML = arrSelectedBooks.join('');   
}

markupShoppingList(selectedBooks);