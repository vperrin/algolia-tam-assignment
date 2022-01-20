const resultHit = hit => `<div class="result-hit">
  <div class="result-hit__image-container">
    <img class="result-hit__image" src="${hit.image}" />
  </div>
  <div class="result-hit__details">
    <h3 class="result-hit__name">${hit.name}</h3>
    <p class="result-hit__brand">${hit.brand}</p>
    <p class="result-hit__price">£${hit.price}</p>
  </div>
</div>`;

export default resultHit;