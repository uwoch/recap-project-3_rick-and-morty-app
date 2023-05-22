import { createCharacterCard } from "./components/card/card.js";

export const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 42;
let page = 1;
const searchQuery = "";

async function fetchCharacters() {
  const url = `https://rickandmortyapi.com/api/character?page=${page}&name=${searchQuery}`;
  cardContainer.innerHTML = "";
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      data.results.forEach((character) => {
        createCharacterCard(character);
      });
      return;
  } else {
    console.error("OooOOoopsss!");
  }
 } catch (error) {
    console.error("ERROR occurred" + error.message);
  }
}

fetchCharacters();

nextButton.addEventListener("click", () => {
  page++;
  if (page > maxPage) {
    page = 42;
    return;
  }
  pagination.textContent = `${page} / ${maxPage}`;
  cardContainer.innerHTML = "";
  fetchCharacters(page);
});

prevButton.addEventListener("click", () => {
  page--;
  if (page < page) {
    page = 1;
    return;
  }
  pagination.textContent = `${page} / ${maxPage}`;
  cardContainer.innerHTML = "";
  fetchCharacters(page);
});

/*searchBar.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(searchBar);
  const data = Object.fromEntries(formData);
  console.log(data.query);
  searchQuery = data.query;
  page = 1;
  pagination.textContent = `${page} / ${maxPage}`;
  fetchCharacters();
});*/

pagination.textContent = `${page} / ${maxPage}`;
fetchCharacters();