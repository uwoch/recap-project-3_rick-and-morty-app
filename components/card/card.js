/* const cardContainer = document.querySelector('[data-js="card-container"]')
const imageSrc = "https://rickandmortyapi.com/api/character/avatar/1.jpeg";
const title = "Rick Sanchez";
const status = "Alive";
const type = "Yes";
const occurrences = "51"; */

export function createCharacterCard(character) {
    const card = document.createElement("li");
    card.classList.add("card");

card.innerHTML = 
`<div class="card__image-container">
<img
  class="card__image"
  src=${character.image}"
  alt=""
/>
<div class="card__image-gradient"></div>
</div>
<div class="card__content">
<h2 class="card__title">${character.name}</h2>
<dl class="card__info">
  <dt class="card__info-title">Status</dt>
  <dd class="card__info-description">${character.status}</dd>
  <dt class="card__info-title">Type</dt>
  <dd class="card__info-description">${character.type}</dd>
  <dt class="card__info-title">Occurrences</dt>
  <dd class="card__info-description">${character.occurrences}</dd>
</dl>
</div>
`;
return card;
/* cardContainer.append(card); */
}
