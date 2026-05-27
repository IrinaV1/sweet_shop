import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { getDesserts } from './services/api/api';
const swiper = new Swiper('.mySwiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
});
const dessertContainer = document.querySelector('.popular-product-list');

document.addEventListener('DOMContentLoaded', popularProducts);

async function popularProducts() {
  try {
    const params = {
      type: 'popular',
    };
    const data = await getDesserts(params);
    if (!data.desserts.length) return;
    console.log(data.desserts);

    renderDesserts(data.desserts);
  } catch (error) {
    console.log(error.message);
  }
}
function renderDesserts(arr) {
  const markup = arr
    .map(
      ({ name, _id, image, price, category, description }) => `
  <li class="dessert-list-item" data-id="${_id}">
        <div class="dessert-list-wrapper">
          <img class="dessert-list-img" src="${image}" alt="${name}">
        </div>
        <p class="dessert-list-category">${category.name}</p>
        <h3 class="dessert-list-product">${name}</h3>
        <p class="dessert-list-description">${description}</p>
        <span class="dessert-list-price">${price} грн</span>
        <button class="dessert-list-btn" type="button" aria-label="dessert list">
          <svg class="dessert-list-icon" width="24" height="24">
            <use href="./img/icons/sprite.svg#arrow_outward"></use>
          </svg>
        </button>
      </li>`
    )
    .join('');
  dessertContainer.insertAdjacentHTML('beforeend', markup);
}
