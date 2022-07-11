const dialogBtnAddBook = document.getElementById("add-book");
const bookDialog = document.getElementById("book-dialog");
const createBookBtn = document.getElementById("create-book");
const bookForm = document.getElementById("book-form");

dialogBtnAddBook.addEventListener("click", () => bookDialog.showModal());
createBookBtn.addEventListener("click", addBookToLibrary);

let myLibrary = [];

function Book(title, author, pageNum, haveRead) {
  this.title = title;
  this.author = author;
  this.pageNum = pageNum;
  this.haveRead = haveRead;
}

function addBookToLibrary() {
  const bookTitle = document.getElementById("title").value;
  const bookAuthor = document.getElementById("author").value;
  const bookPageNum = document.getElementById("page-count").value;
  const readBook = document.getElementById("have-read").checked;

  myLibrary.push(new Book(bookTitle, bookAuthor, bookPageNum, readBook));

  console.table(myLibrary);

  bookForm.reset();

  addBooksToCoontainer();
}

function addBooksToCoontainer() {
  const bookContainer = document.getElementById("book-container");

  bookContainer.replaceChildren();

  myLibrary.forEach((book) => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("book-card");

    const titleP = document.createElement("p");
    titleP.textContent = "Title: " + book.title;

    const authorP = document.createElement("p");
    authorP.textContent = "Author: " + book.author;

    const pagesP = document.createElement("p");
    pagesP.textContent = "Page Count: " + book.pageNum;

    const haveReadP = document.createElement("p");
    haveReadP.textContent = "Have Read: " + book.haveRead;

    bookContainer.appendChild(cardDiv);
    cardDiv.appendChild(titleP);
    cardDiv.appendChild(authorP);
    cardDiv.appendChild(pagesP);
    cardDiv.appendChild(haveReadP);
  });
}
