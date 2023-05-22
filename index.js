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
let maxPage = 42;
let page = 1;
let searchQuery = "";

async function fetchCharacters(p = 1, query = "") {
  const url = `https://rickandmortyapi.com/api/character?page=${p}&name=${query}`;
  cardContainer.innerHTML = "";
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      data.results.forEach((character) => {
        createCharacterCard(character);
      });
      maxPage = data.info.pages;
      return data.info.pages;
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
    page = maxPage;
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

searchBar.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  searchQuery = data.query;
  maxPage = await fetchCharacters(0, searchQuery);
  pagination.textContent = `1 / ${maxPage}`;
  event.target.reset();
  });
 


/* searchBar.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(searchBar);
  const data = Object.fromEntries(formData);
  console.log(data.query);
  searchQuery = data.query;
  page = 1;
  pagination.textContent = `${page} / ${maxPage}`;
  fetchCharacters();
});
 */
pagination.textContent = `${page} / ${maxPage}`;
fetchCharacters();