import { getDessertsById } from './services/api/api';

const overlay = document.querySelector('.dessert-modal-overlay');
const closeBtn = document.querySelector('.dessert-modal-close');
const dessertContainer = document.querySelector('.dessert-modal-container');
let currentPage = 1;
const LIMIT = 8;
closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', function (event) {
  if (event.target === overlay) {
    closeModal();
  }
});
window.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});
export async function openModal(id) {
  try {
    const data = await getDessertsById(id);
    console.log(data);
    if (!data) return;

    overlay.classList.add('is-open');
    document.body.classList.add('modal-open');
    renderDesserts(data);
  } catch (error) {
    console.log(error.message);
  }
}

function renderDesserts({
  name,
  _id,
  image,
  price,
  category,
  description,
  composition,
  rate,
}) {
  const markup = `
   <div class="dessert-modal-wrapper" data-id="${_id}">
        <img class="dessert-modal-img" src="${image}" alt="${name}">
      </div>
      <h2 class="dessert-modal-product">${name}</h2>
      <p class="dessert-modal-price">${price} грн</p>
      <div class="dessert-modal-rate">${rate}</div>
      <p class="dessert-modal-description">${description}</p>

      <p class="dessert-modal-compound"><span>Склад </span>: ${composition}</p>
      <button class="dessert-modal-btn" type="button">
        Перейти до замовлення
      </button>`;

  dessertContainer.innerHTML = markup;
}
function closeModal() {
  overlay.classList.remove('is-open');
  document.body.classList.remove('modal-open');
}
