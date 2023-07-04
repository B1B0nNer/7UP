import BooksApiService from './BooksApiService';
import Notiflix from 'notiflix';

const api = new BooksApiService();
const bestSellersRef = document.querySelector('.best-sellers');
const titleRef = document.querySelector('.home-page__title');

export function renderCategoryName(option) {
  const words = option.list_name.split(' ');
  const accentWord = words.pop();
  const blackWords = words.join(' ');
  const markup = `${blackWords} <span class="home-page__title--accent">${accentWord}</span>`;
  return markup;
}

export function renderBook(option) {
  const markup = option
    .map(
      option => `<li class="selected-category-item" data-book-id="${option._id}">
                     <img class="best-sellers-book__img" src="${option.book_image}" alt="Book">
                     <p class="-best-sellers-book__title">${option.title}</p>
                     <p class="best-sellers-book__author">${option.author}</p>
                  </li>`
    )
    .join('');
  return markup;
}

export function createCategory(categoryName) {
  api
    .getBooks(categoryName)
    .then(value => {
      bestSellersRef.classList.add('one-category');

      value.map(value => (titleRef.innerHTML = renderCategoryName(value)));
      bestSellersRef.innerHTML = renderBook(value);
    })
    .catch(error => {
      console.log(error.message);
      Notiflix.Report.failure('Error', 'Try again later!', 'OK');
    });
}
