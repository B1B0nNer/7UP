import { createCategory } from './category';
import Notiflix from 'notiflix';

import {
  createTopBestSellersMarkup,
  accentSelectedTitle,
} from './all-categories';

const bestSellersRef = document.querySelector('.best-sellers');

export default function onCategoryHandle(e) {
  if (e.target.nodeName !== 'LI') {
    return;
  }

  accentSelectedTitle(e);

  if (e.target.dataset.categoryName === 'All categories') {
    bestSellersRef.classList.remove('one-category');

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
  const categoryName = e.target.dataset.categoryName;

  createCategory(categoryName);

  // if (e.target.dataset.categoryName === 'Advice How-To and Miscellaneous') {
  // console.log('a');s
  //   bestSellersRef.innerHTML = 'aa';
  //   return;
  // }

  // api.getBooks(e.target.dataset.categoryName);
  // console.log(e.target.dataset.categoryName);
}

export { createCategory };
