const booksList = document.querySelector(".books");
const booksInput = document.querySelector("#books");

let showBooks = false;

const hideBooksHandler = () => {
  booksList.classList.add("hidden");
};

booksInput.addEventListener("click", (e) => {
  booksList.classList.remove("hidden");
  showBooks = true;
});

document.addEventListener("click", (e) => {
  if (e.target.closest("#books") || !showBooks) return;
  hideBooksHandler();
});

const booksSelectHandler = (e) => {
  const clicked = e.target.closest(".books__item");
  if (!clicked) return;
  booksInput.value = clicked.textContent;
  hideBooksHandler();
};

booksList.addEventListener("click", booksSelectHandler);
