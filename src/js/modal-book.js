// const divEl = document.querySelector('.js-cart');
// divEl.addEventListener('click', openModal);
const bodyEl = document.querySelector('body');
const URL = 'https://books-backend.p.goit.global/books/'
const objShop = {
  'Amazon': '<img src="../images/amazon.png" alt="logo Amazon" width="62" height="19"></img>',
  'Apple Books':'<img src="../images/apple.png" alt="logo Amazon" width="62" height="19"></img>',
  'Barnes and Noble': '<img src="../images/baren-nobel.png" alt="logo Barnes and Noble" width="33" height="33"></img>',
  'Books-A-Million': '<img src="../images/books-a-million.png" alt="logo Books A Million" width="62" height="28"></img>',
  'Bookshop': '<img src="../images/book-shop.png" alt="logo Bookshop" width="33" height="33"></img>',
  'IndieBound': '<img src="../images/india-book.png" alt="logo Indie Bound" width="35" height="28"></img>',
};


async function getInfoAboutBook(bookId) {
    const response = await fetch(`${URL}${bookId}`);
    const dataRespons = await response.json();
    const bookObj = {
    img: dataRespons.book_image,
    bookName: dataRespons.list_name,
    author: dataRespons.author,
    description: dataRespons.description,
    shops:dataRespons.buy_links,
  }
    return bookObj;
};

function getImeges(name) {
  if (name in objShop) {
    const image = objShop[name];
    return image;
  } else return '';
};
async function addConten(bookId) {
  const bookObj = await getInfoAboutBook(bookId)
  const shopsName = bookObj.shops.map(({ name, url }) =>  {
  const pictur=  getImeges(name);
    return `<li class="item item-book"><a href="${url}" target="_blank" class="link link-image">${pictur}
    </a></li>`
  }).join('\n');
let  modalHtml =  ` <div class="container-modal js-modal">
      <button type='button' class="close-button">
      <svg class="close-svg" width="24" height="24">
                    <use href="./img/sprite.svg#icon-close"></use>
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
     <button type="button" class="btn-local" id='add'>
      add to shopping list
    </button>
    <button type="button" class="btn-local" id="remove">
      remove from the shopping list
    </button>
    <p class="txt-remove">Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>
    </div>
  `
  return modalHtml;
}

function closeModalEscape(instance) {
     function eventHandler(event) {
       if (event.key === 'Escape') {
         instance.close();
         bodyEl.style.overflow = 'auto';
    }
  }
    document.addEventListener("keydown", event => {
    if (event.key !== 'Escape') {
        return
      }
      document.removeEventListener("keydown", eventHandler); 
      instance.close();
});}
async function openModal(event) {
  event.preventDefault();
  if (event.target.tagName !== 'BUTTON') {
    return;
  }
  
  const instance = basicLightbox.create(await addConten('643282b1e85766588626a085'), {
    onShow: () => {
      document.addEventListener("keydown", closeModalEscape(instance));
      bodyEl.style.overflow = 'hidden';
    },
    onClose: () =>{ document.removeEventListener("keydown", closeModalEscape(instance));
      bodyEl.style.overflow = 'auto';
      },
  });
  
  instance.element().querySelector('.close-button').onclick = instance.close;
  instance.show();
  const btnAddEl = document.querySelector('#add');
  const btnRemoveEl = document.querySelector('#remove');
  const textElRemove = document.querySelector('.txt-remove');
  const bookObj = await getInfoAboutBook('643282b1e85766588626a085');
  

  if (localStorage.getItem(bookObj.bookName) !== null) {
    btnAddEl.classList.add('hidden')
  } else {
    btnRemoveEl.classList.add('hidden')
    textElRemove.classList.add('hidden')
  }
  btnAddEl.addEventListener('click', () => {
    addLocal(bookObj.bookName, bookObj);
    btnAddEl.classList.add('hidden');
    btnRemoveEl.classList.remove('hidden')
    textElRemove.classList.remove('hidden')
  });

  btnRemoveEl.addEventListener('click', () => {
    localStorage.removeItem(bookObj.bookName);
    btnAddEl.classList.remove('hidden');
    btnRemoveEl.classList.add('hidden')
    textElRemove.classList.add('hidden')
  });
}
function addLocal(key, value) {
   let addElementStorage = JSON.stringify(value);
    localStorage.setItem(key, addElementStorage);
};
function removElementStorage(key) {
  localStorage.removeItem(key);
};
