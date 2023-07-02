import BooksApiService from './BooksApiService';

import { renderCategoryName, renderBook } from './category';
import Notiflix from 'notiflix';

import {
  createTopBestSellersMarkup,
  accentSelectedTitle,
} from './all-categories';

const titleRef = document.querySelector('.title');
const bestSellersRef = document.querySelector('.best-sellers');
const api = new BooksApiService();

// const bestSellersRef = document.querySelector('.best-sellers');

export default function onCategoryHandle(e) {
  if (e.target.nodeName !== 'LI') {
    return;
  }

  accentSelectedTitle(e);

  // console.log(arrOfCategories);
  // console.log(e.currentTarget.children);
  // console.log(e.target.classList);

  if (e.target.dataset.categoryName === 'All categories') {
    createTopBestSellersMarkup()
      .then(markup => {
        bestSellersRef.innerHTML = markup;
      })
      .catch(e => {
        console.log(e.message);
        Notiflix.Report.failure('Error', `${error}`, 'OK');
      });
    return;
  }

  api
    .getBooks(e.target.dataset.categoryName)
    .then(value => {
      value.map(value => (titleRef.innerHTML = renderCategoryName(value)));
      bestSellersRef.innerHTML = renderBook(value);
    })
    .catch(error => {
      console.log(error.message);
      Notiflix.Report.failure('Error', `${error}`, 'OK');
    });

  // if (e.target.dataset.categoryName === 'Advice How-To and Miscellaneous') {
  // console.log('a');s
  //   bestSellersRef.innerHTML = 'aa';
  //   return;
  // }

  // api.getBooks(e.target.dataset.categoryName);
  // console.log(e.target.dataset.categoryName);
}
