const shoppingListRef = document.querySelector('.shopping-list');
const emptyListRef = document.querySelector('.empty-list');
const objShop = {
  'Amazon': '<img src="../images/amazon.png" alt="logo Amazon" width="62" height="19"></img>',
  'Apple Books':'<img src="../images/apple.png" alt="logo Amazon" width="62" height="19"></img>',
  'Barnes and Noble': '<img src="../images/baren-nobel.png" alt="logo Barnes and Noble" width="33" height="33"></img>',
  'Books-A-Million': '<img src="../images/books-a-million.png" alt="logo Books A Million" width="62" height="28"></img>',
  'Bookshop': '<img src="../images/book-shop.png" alt="logo Bookshop" width="33" height="33"></img>',
  'IndieBound': '<img src="../images/india-book.png" alt="logo Indie Bound" width="35" height="28"></img>',
};

function getImages(name) {
  if (name in objShop) {
    const image = objShop[name];
    return image;
  } else return '';
};

let arrSelectedBooks = [];

for (let i = 0; i < localStorage.length; i++) {
  let key = localStorage.key(i);
  if (key !== 'theme') {
    let value = JSON.parse(localStorage.getItem(key))
  arrSelectedBooks.push(value);
  };
};

function markupShoppingList(arrSelectedBooks) {
  const arrCardsSelectedBooks = arrSelectedBooks.map(({ _id, bookName, author, img, description, title, shops }) => {
    const shopsName = shops.map(({ name, url }) =>  {
      const picture =  getImages(name);
      return `<li class="shop-item"><a href="${url}" target="_blank" class="shop-link-image">${picture}
      </a></li>`
    }).join('\n');
      
    return `<li class="shopplist-item" data-idcard="${_id}">
        <button type="button" class="delate-btn" data-id="${_id}">
          <svg class="delate-svg" width="16" height="16">
            <use href="../images/icon.svg#icon-trash"></use>
          </svg>
        </button>
        <img class="img-shoplist-card" src="${img}" alt="${title}" width="100" height="142" />
        <div class="card-shopplist">
          <h2 class="card-title-shoplist">${title}</h2>
          <p class="card-category-shoplist">${bookName}</p>
          <p class="card-description-shoplist">${description}</p>
          <div class="wrapper-card-shoplist-footer">
            <p class="card-author-shoplist">${author}</p>
            <ul class="shops-list">${shopsName}</ul>
          </div>
        </div>
      </li>`
  });
  shoppingListRef.innerHTML = arrCardsSelectedBooks.join('');   
};

if (arrSelectedBooks.length !== 0) {
  emptyListRef.style.display = "none";
  markupShoppingList(arrSelectedBooks);
} else {
  emptyListRef.style.display = "block";
};
