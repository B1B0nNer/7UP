// Імпорт всіх js що стосуються Sopping-list

const book1 = {
    "_id": "642fd89ac8cf5ee957f122da",
    bookName: "Middle Grade Paperback Monthly",
    author: "Barbara O'Connor",
   img: "https://storage.googleapis.com/du-prd/books/images/9781250144058.jpg",
    description: "дапитщушкптикш лцуаимшцуг амиуг мммммммдапитщ ушкптикшлц уаимшцугами угммммммммдапитщ ушкптикшлцуаимшцуг амиугмммммммм мммммммммммм идапи тщушкптикшлцуаимшцугами угммммммм ммммммммммммид апитщу шкптикш лцуаимшцугами угмммммммм ммммммммм мммиммммммммммммиммм мммммммммми",
    "title": "WISH",
    shops: [
        {
            "name": "Amazon",
            "url": "https://www.amazon.com/Wish-Barbara-OConnor/dp/1250144051?tag=NYTBSREV-20"
        },
        {
            "name": "Apple Books",
            "url": "https://goto.applebooks.apple/9781250144058?at=10lIEQ"
        },
        {
            "name": "Barnes and Noble",
            "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781250144058"
        }
    ],
};

const book2 =
{
    "_id": "642fd89ac8cf5ee957f122db",
    bookName: "Non-fiction",
    author: "Mort",
    img: "https://storage.googleapis.com/du-prd/books/images/9780525657743.jpg",
    description: "asgrsдап итщушкптикшлц уаимшцугамиугмммммммм мммммммммммми дапитщ ушкптикшлцуаим шцугамиугммммммм мммммммммммммидапитщушкптикшлцуаимшцугамиугммммммммммммммммммммидапитщушкптикшлцуаимшцугамиугммммм мммммммммммммммиerhgrthg",
    "title": "BOM",
    shops: [
        {
            "name": "Amazon",
            "url": "https://www.amazon.com/Wish-Barbara-OConnor/dp/1250144051?tag=NYTBSREV-20"
        },
        {
            "name": "Apple Books",
            "url": "https://goto.applebooks.apple/9781250144058?at=10lIEQ"
        },
        {
            "name": "Barnes and Noble",
            "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781250144058"
        },
        {
            "name": "Books-A-Million",
            "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FWISH%252FBarbara%252BO%252527Connor%252F9781250144058&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DWISH%252BBarbara%252BO%252527Connor"
        },
        {
            "name": "Bookshop",
            "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781250144058&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DWISH"
        },
        {
            "name": "IndieBound",
            "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781250144058%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DWISH%2BBarbara%2BO%2527Connor%26aff%3DNYT"
        }
    ],
};

localStorage.setItem('642fd89ac8cf5ee957f122da', JSON.stringify(book1));
localStorage.setItem('642fd89ac8cf5ee957f122db', JSON.stringify(book2));
localStorage.setItem('theme', 'dark');

