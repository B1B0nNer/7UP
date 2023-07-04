import * as basicLightbox from 'basiclightbox';
import svg from 'bundle-text:../images/x-close.svg'
import amazon from '../images/amazon.png';
import apple from '../images/apple.png';
import baren from '../images/baren-nobel.png';
import million from '../images/books-a-million.png';
import bookshop from '../images/book-shop.png';
import indieBound from '../images/india-book.png';
import noImage from '../images/no-image-new.jpg';
const bodyEl = document.querySelector('body');
const URL = 'https://books-backend.p.goit.global/books/';
let idBook = '';

const objShop = {
  Amazon: `<img src= "${amazon}" alt="logo Amazon" width="62" height="19">`,
  'Apple Books':
    `<img src="${apple}" alt="logo Apple" width="44" height="44">`,
  'Barnes and Noble':
    `<img src="${baren}" alt="logo Barnes and Noble" width="33" height="33">`,
  'Books-A-Million':
    `<img src="${million}" alt="logo Books A Million" width="62" height="28">`,
  Bookshop:
    `<img src="${bookshop}" alt="logo Bookshop" width="33" height="33">`,
  IndieBound:
    `<img src="${indieBound}" alt="logo Indie Bound" width="35" height="28">`,
};

async function getInfoAboutBook(bookId) {
  const response = await fetch(`${URL}${bookId}`);
  const dataRespons = await response.json();
  const bookObj = {
    id:dataRespons._id,
    img: dataRespons.book_image,
    bookName: dataRespons.list_name,
    author: dataRespons.author,
    description: dataRespons.description,
    shops: dataRespons.buy_links,
    title:dataRespons.title,
  };
  return bookObj;
}

function getImeges(name) {
  if (name in objShop) {
    const image = objShop[name];
    return image;
  } else return '';
}

async function addConten(bookId) {
  const bookObj = await getInfoAboutBook(bookId);
  const shopsName = bookObj.shops
    .map(({ name, url }) => {
      const pictur = getImeges(name);
      return `<li class="item item-book"><a href="${url}" target="_blank" class="link link-image">${pictur}</a></li>`;
    }).join('\n');
  if (bookObj.img === ''||!bookObj.img) {
    bookObj.img = `${noImage}`;
  };
  let modalHtml = ` <div class="container-modal js-modal">
      <button type='button' class="close-button">
      <svg class="close-svg" width="24" height="24">
                     ${svg}
                  </svg>
                  </button>
                  <div class="info-book-conteiner">
        <div class="image-block">
     <img src="${bookObj.img}" alt="image book ${bookObj.bookName}" width="287" height="408"></img> 
      </div>
      <div class="info-book">
      <h2 class="name-book">${bookObj.bookName}</h2>
     <p class="text-author">${bookObj.author}</p>
     <p class="text-description">${bookObj.description}</p>
     <ul class="list shop-list">${shopsName}</ul>
     </div>
     </div>
     <button type="button" class="btn-local hidden" id='add'>
      add to shopping list
    </button>
    <button type="button" class="btn-local hidden" id="remove">
      remove from the shopping list
    </button>
    <p class="txt-remove">Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>
    </div>
  `;
  return modalHtml;
}

function closeModalEscape(instance) {
  function eventHandler(event) {
    if (event.key === 'Escape') {
      instance.close();
      bodyEl.style.overflow = 'auto';
    }
  }
  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') {
      return;
    }
    document.removeEventListener('keydown', eventHandler);
    instance.close();
  });
}

export async function openModal(event) {
  if (
    !(
      (event.target.parentElement.nodeName === 'LI' &&
        event.target.parentElement.dataset.bookId) ||
      (event.target.nodeName === 'LI' && event.target.dataset.bookId)
    )
  ) {
    return;
  }

  idBook =
    event.target.nodeName === 'LI'
      ? event.target.dataset.bookId
      : event.target.parentElement.dataset.bookId;

  const instance = basicLightbox.create(await addConten(idBook), {
    onShow: () => {
      document.addEventListener('keydown', closeModalEscape(instance));
      bodyEl.style.overflow = 'hidden';
    },
    onClose: () => {
      document.removeEventListener('keydown', closeModalEscape(instance));
      bodyEl.style.overflow = 'auto';
    },
  });

  instance.element().querySelector('.close-button').onclick = instance.close;
  instance.show();

  const btnAddEl = document.querySelector('#add');
  const btnRemoveEl = document.querySelector('#remove');
  const textElRemove = document.querySelector('.txt-remove');
  const bookObj = await getInfoAboutBook(idBook);

  if (localStorage.getItem(bookObj.id) !== null) {
    btnAddEl.classList.add('hidden');
    btnRemoveEl.classList.remove('hidden');
  } else {
    btnAddEl.classList.remove('hidden');
    btnRemoveEl.classList.add('hidden');
    textElRemove.classList.add('hidden');
  }
  btnAddEl.addEventListener('click', () => {
    addLocal(idBook, bookObj);
     btnAddEl.classList.add('hidden');
    btnRemoveEl.classList.remove('hidden')
    textElRemove.classList.remove('hidden')
  });

  btnRemoveEl.addEventListener('click', () => {
    localStorage.removeItem(idBook);
    btnAddEl.classList.remove('hidden');
    btnRemoveEl.classList.add('hidden')
    textElRemove.classList.add('hidden')
  });
}

function addLocal(key, value) {
  let addElementStorage = JSON.stringify(value);
  localStorage.setItem(key, addElementStorage);
}
// function removElementStorage(key) {
//   localStorage.removeItem(key);
// }
