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

  let index = 0;
  myLibrary.forEach((book) => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("book-card");
    cardDiv.dataset.indexNumber = index++;
    const titleP = document.createElement("p");
    titleP.textContent = "Title: " + book.title;

    const authorP = document.createElement("p");
    authorP.textContent = "Author: " + book.author;

    const pagesP = document.createElement("p");
    pagesP.textContent = "Page Count: " + book.pageNum;

    const haveReadP = document.createElement("p");
    haveReadP.textContent = "Have Read: " + book.haveRead;

    const buttonContainer = document.createElement("div");
    buttonContainer.style.display = "flex";
    buttonContainer.style.gap = "10px";

    const removeButton = document.createElement("button");
    removeButton.addEventListener("click", removeBook);
    removeButton.classList.add("cardBtn");
    removeButton.textContent = "🗑️";

    const readButton = document.createElement("button");
    readButton.addEventListener("click", changeReadStatus);
    readButton.classList.add("cardBtn");
    readButton.textContent = "📖";

    bookContainer.appendChild(cardDiv);
    cardDiv.appendChild(titleP);
    cardDiv.appendChild(authorP);
    cardDiv.appendChild(pagesP);
    cardDiv.appendChild(haveReadP);
    buttonContainer.appendChild(removeButton);
    buttonContainer.appendChild(readButton);
    cardDiv.appendChild(buttonContainer);
  });
}

function removeBook(e) {
  myLibrary.splice(e.target.parentNode.parentNode.dataset.indexNumber, 1);
  addBooksToCoontainer();
}

function changeReadStatus(e) {
  myLibrary[e.target.parentNode.parentNode.dataset.indexNumber].haveRead =
    !myLibrary[e.target.parentNode.parentNode.dataset.indexNumber].haveRead;
  addBooksToCoontainer();
}
