import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { getDesserts } from './services/api/api';

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
    initSwiper();
  } catch (error) {
    console.log(error.message);
  }
}
function renderDesserts(arr) {
  const markup = arr
    .map(
      ({ name, _id, image, price, category, description }) => `
  <li class="popular-product-item swiper-slide" data-id="${_id}">
        <div class="popular-product-wrapper">
          <img class="popular-product-img" src="${image}" alt="${name}">
        </div>
        <p class="popular-product-category">${category.name}</p>
        <h3 class="popular-product-product">${name}</h3>
        <p class="popular-product-description">${description}</p>
        <span class="popular-product-price">${price} грн</span>
        <button class="popular-product-btn" type="button" aria-label="dessert list">
          <svg class="popular-product-icon" width="24" height="24">
            <use href="./img/icons/sprite.svg#arrow_outward"></use>
          </svg>
        </button>
      </li>`
    )
    .join('');
  dessertContainer.insertAdjacentHTML('beforeend', markup);
}

function initSwiper() {
  new Swiper('.popular-swiper', {
    slidesPerView: 1,
    spaceBetween: 16,

    navigation: {
      nextEl: '.popular-next',
      prevEl: '.popular-prev',
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
  });
}
