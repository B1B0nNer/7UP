import axios from 'axios';

export default class BooksApiService {
  static URL = 'https://books-backend.p.goit.global/books/';
  static ENDPOINT_CATEGORIES_LIST = 'category-list';
  static ENDPOINT_TOP_BOOKS = 'top-books';

  // constructor() {
  //   this.query = '';
  //   this.page = 1;
  // }

  // Отримати масив усіх категорій
  async getCategoriesList() {
    const url = `${BooksApiService.URL}${BooksApiService.ENDPOINT_CATEGORIES_LIST}`;

    const { data } = await axios.get(url);
    return data;
  }

  // Отримати масив об'єктів з двома полями: 
  // list_name: назва категорії, 
  // books: масив топ 5 книг за категорією 
  async getTopBooks() {
    const url = `${BooksApiService.URL}${BooksApiService.ENDPOINT_TOP_BOOKS}`;

    const { data } = await axios.get(url);
    return data;
  }

  // Отримати масив топ 5 книг за категорією categoryName
  async getTopBooksByCategory(categoryName) {
    const url = `${BooksApiService.URL}${BooksApiService.ENDPOINT_TOP_BOOKS}`;

    const { data } = await axios.get(url);
    let books = await data.find(
      category =>
        category.list_name.toLowerCase() === categoryName.toLowerCase()
    );
    return books.books;
  }

  // Отримати масив усіх книг за категорією categoryName
  async getBooks(categoryName) {
    const url = `${BooksApiService.URL}category?category=${categoryName}`;

    const { data } = await axios.get(url);
    return data;
  }

  // отримати об'єкт з інформацією про книгу за ІD книги bookId
  async getInfoAboutBook(bookId) {
    const url = `${BooksApiService.URL}${bookId}`;

    const { data } = await axios.get(url);
    return data;
  }

  // incrementPage() {
  //   this.page += 1;
  // }

  // resetPage() {
  //   this.page = 1;
  // }
}

// const api = new BooksApiService();

// api
//   .getCategoriesList()
//   .then(list => console.log(list))
//   .catch(err => console.log(err));
