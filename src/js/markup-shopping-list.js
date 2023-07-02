
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
      return `<li class="item item-book"><a href="${url}" target="_blank" class="link link-image">${picture}
      </a></li>`
    }).join('\n');
      
    return `<li class="shopplist-item" data-idcard="${_id}">
        <button type="button" class="delate-btn" data-id="${_id}">
          <svg class="delate-svg" width="16" height="16">
            <use href="../images/icon.svg#icon-trash"></use>
          </svg>
        </button>
        <img src="${img}" alt="" width="100" height="142" />
        <div class="card-shopplist">
          <h2 class="text_card_title text_card_title-shopplist">${title}</h2>
          <p class="category-shopplist">${bookName}</p>
          <p class="description-shopplist">${description}</p>
          <div class="wrapper-card-shopplist-footer">
            <p class="text_card_author shopplist-text_card_author">${author}</p>
            <ul class="wrapper-shops">${shopsName}</ul>
          </div></div>
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
