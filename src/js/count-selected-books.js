import { arrSelectedBooks } from './markup-shopping-list';

let booksCounter = document.querySelector('.books_counter');

if(arrSelectedBooks.length != 0){
    booksCounter.textContent = arrSelectedBooks.length + 1;
    booksCounter.classList.remove('is-hidden');
}
if(arrSelectedBooks.legnth == 0){
    booksCounter.classList.add('is-hidden');
}