import svg from 'bundle-text:../images/trash.svg'
import amazon from '../images/amazon.png';
import apple from '../images/apple.png';
import baren from '../images/baren-nobel.png';
import million from '../images/books-a-million.png';
import bookshop from '../images/book-shop.png';
import indieBound from '../images/india-book.png';
import noImage from '../images/no-image-new.jpg';

const shoppingListRef = document.querySelector('.shopping-list');
const emptyListRef = document.querySelector('.empty-list');

const objShop = {
  Amazon: `<img src= "${amazon}" alt="logo Amazon" width="32" height="11">`,
  'Apple Books':
    `<img src="${apple}" alt="logo Apple" width="16" height="16">`,
  'Barnes and Noble':
    `<img src="${baren}" alt="logo Barnes and Noble" width="16" height="16">`,
  'Books-A-Million':
    `<img src="${million}" alt="logo Books A Million" width="35" height="16">`,
  Bookshop:
    `<img src="${bookshop}" alt="logo Bookshop" width="16" height="16">`,
  IndieBound:
    `<img src="${indieBound}" alt="logo Indie Bound" width="20" height="16">`,
};

let arrSelectedBooks = checkLocalStorage() || [];

function checkLocalStorage() {
    for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    if (key !== 'theme') {
      let value = JSON.parse(localStorage.getItem(key))
      arrSelectedBooks.push(value);
    };
  };
  console.log('arrSelectedBooks from checkLocalStorage()', arrSelectedBooks);
};

console.log('second', localStorage.length);

if (arrSelectedBooks.length !== 0) {
  console.log('second', arrSelectedBooks);
  emptyListRef.style.display = "none";
  markupShoppingList(arrSelectedBooks);
} else {
  emptyListRef.style.display = "block";
};

console.log('third');

function getImages(name) {
  if (name in objShop) {
    const image = objShop[name];
    return image;
  } else return '';
};

function markupShoppingList(arrSelectedBooks) {
  const arrCardsSelectedBooks = arrSelectedBooks.map(({ id, bookName, author, img, description, title, shops }) => {
    const shopsName = shops.map(({ name, url }) =>  {
      const picture =  getImages(name);
      return `<li class="shop-item"><a href="${url}" target="_blank" class="shop-link-image">${picture}</a></li>`;
    }).join('\n');
    if (img === '' || !img) {
    img = `${noImage}`;
  };
      
    return `<li class="shopplist-item" data-idcard="${id}">
        <button type="button" class="delate-btn" data-id="${id}">
          <svg class="delate-svg" width="16" height="16">
            ${svg}
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
