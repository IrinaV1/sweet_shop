import{a as O,i as E,S as T}from"./assets/vendor-ByIlZ9fe.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=s(o);fetch(o.href,a)}})();const S=document.querySelector(".header-burger-btn");S.addEventListener("click",()=>{S.classList.toggle("is-open")});const f=O.create({baseURL:"https://deserts-store.b.goit.study/api/",headers:{"Content-Type":"application/json"}}),g=async(e={})=>(await f.get("/desserts",{params:e})).data,j=async e=>(await f.get(`/desserts/${e}`)).data,H=async()=>(await f.get("/categories")).data,m=document.querySelector(".dessert-modal-overlay"),I=document.querySelector(".dessert-modal-close"),x=document.querySelector(".dessert-modal-container");I.addEventListener("click",y);m.addEventListener("click",function(e){e.target===m&&y()});window.addEventListener("keydown",function(e){e.key==="Escape"&&y()});async function A(e){try{const t=await j(e);if(console.log(t),!t)return;m.classList.add("is-open"),document.body.classList.add("modal-open"),N(t)}catch(t){console.log(t.message)}}function N({name:e,_id:t,image:s,price:r,category:o,description:a,composition:i,rate:u}){const D=`
  <div class="dessert-modal-card" data-id="${t}">
   <div class="dessert-modal-wrapper">
        <img class="dessert-modal-img" src="${s}" alt="${e}">
      </div>
      <h2 class="dessert-modal-product">${e}</h2>
      <p class="dessert-modal-price">${r} грн</p>
      <div class="dessert-modal-rate">${u}</div>
      <p class="dessert-modal-description">${a}</p>

      <p class="dessert-modal-compound"><span>Склад </span>: ${i}</p>
      <button class="dessert-modal-btn" type="button">
        Перейти до замовлення
      </button>
      </div>`;x.innerHTML=D}function y(){m.classList.remove("is-open"),document.body.classList.remove("modal-open")}const C=document.querySelector(".dessert-list-select"),q=document.querySelector(".dessert-categories-list"),k=document.querySelector(".loader"),h=document.querySelector(".dessert-list"),n=document.querySelector(".dessert-load-btn");let c=1;const p=8;let l="all";const b=document.querySelector(".dessert-list-select"),v=document.querySelector(".dessert-select-wrapper");document.addEventListener("DOMContentLoaded",V);C.addEventListener("change",P);q.addEventListener("change",P);n.addEventListener("click",K);h.addEventListener("click",R);async function V(){w();try{const e=await H(),t=[{name:"Всі десерти",_id:"all"},...e];if(!t.length){d("Помилка завантаження");return}z(t),F(t);const s=await g({page:c,limit:p});if(!s.desserts.length){d("Помилка завантаження");return}L(s.desserts);const r=Math.ceil(s.totalItems/p);n.classList.remove("is-hidden"),c>=r?(n.disabled=!0,M("Десерти завантажено")):n.disabled=!1}catch{d("Помилка завантаження")}finally{$()}}async function P(e){if(w(),B(),l=e.target.value,!l){d("Помилка завантаження");return}c=1,h.innerHTML="";try{const t={page:c,limit:p};l!=="all"&&(t.category=l);const s=await g(t);if(!s.desserts.length){d("Помилка завантаження");return}L(s.desserts);const r=Math.ceil(s.totalItems/p);n.classList.remove("is-hidden"),c>=r?(n.disabled=!0,M("Десерти завантажено")):n.disabled=!1}catch{d("Помилка завантаження")}finally{$()}}async function K(){w(),n.disabled=!0,c+=1,B();try{const e={page:c,limit:p};l!=="all"&&(e.category=l);const t=await g(e);if(!t.desserts.length){d("Помилка завантаження");return}L(t.desserts);const r=document.querySelector(".dessert-list-item").getBoundingClientRect().height;window.scrollBy({top:r*1,behavior:"smooth"});const o=Math.ceil(t.totalItems/p);n.classList.remove("is-hidden"),c>=o?(n.disabled=!0,M("Десерти завантажено")):n.disabled=!1}catch{d("Помилка завантаження")}finally{$()}}function R(e){const t=e.target.closest(".dessert-list-btn");if(!t)return;const r=t.closest(".dessert-list-item").dataset.id;A(r)}function z(e){const t=e.map(({name:s,_id:r})=>`
    <option value="${r}">${s}</option>`).join("");C.innerHTML=t}function F(e){const t=e.map(({name:s,_id:r})=>`
   <label for="${r}" class="dessert-category-label">
        <input ${r==="all"?"checked":""}
        id="${r}" type="radio" name="category" 
        value="${r}" class="dessert-category-input" />
        <span class="dessert-category-btn">
       ${s}
        </span>
      </label>
      `).join("");q.innerHTML=t}function L(e){const t=e.map(({name:s,_id:r,image:o,price:a,category:i,description:u})=>`
  <li class="dessert-list-item" data-id="${r}">
        <div class="dessert-list-wrapper">
          <img class="dessert-list-img" src="${o}" alt="${s}">
        </div>
        <p class="dessert-list-category">${i.name}</p>
        <h3 class="dessert-list-product">${s}</h3>
        <p class="dessert-list-description">${u}</p>
        <span class="dessert-list-price">${a} грн</span>
        <button class="dessert-list-btn" type="button" aria-label="dessert list">
          <svg class="dessert-list-icon" width="24" height="24">
            <use href="./img/icons/sprite.svg#arrow_outward"></use>
          </svg>
        </button>
      </li>`).join("");h.insertAdjacentHTML("beforeend",t)}function w(){k.classList.remove("is-hidden")}function $(){k.classList.add("is-hidden")}function B(){n.classList.add("is-hidden")}b.addEventListener("mousedown",()=>{v.classList.add("is-open")});b.addEventListener("change",()=>{v.classList.remove("is-open")});b.addEventListener("blur",()=>{v.classList.remove("is-open")});function M(e){E.success({title:"OK",message:e,backgroundColor:"#ebfcfb",position:"topLeft"})}function d(e){E.error({message:e,theme:"dark",backgroundColor:"#c07979"})}const U=document.querySelector(".popular-product-list");document.addEventListener("DOMContentLoaded",G);async function G(){try{const t=await g({type:"popular"});if(!t.desserts.length)return;console.log(t.desserts),J(t.desserts),Q()}catch(e){console.log(e.message)}}function J(e){const t=e.map(({name:s,_id:r,image:o,price:a,category:i,description:u})=>`
  <li class="popular-product-item swiper-slide" data-id="${r}">
        <div class="popular-product-wrapper">
          <img class="popular-product-img" src="${o}" alt="${s}">
        </div>
        <p class="popular-product-category">${i.name}</p>
        <h3 class="popular-product-product">${s}</h3>
        <p class="popular-product-description">${u}</p>
        <span class="popular-product-price">${a} грн</span>
        <button class="popular-product-btn" type="button" aria-label="dessert list">
          <svg class="popular-product-icon" width="24" height="24">
            <use href="./img/icons/sprite.svg#arrow_outward"></use>
          </svg>
        </button>
      </li>`).join("");U.insertAdjacentHTML("beforeend",t)}function Q(){new T(".popular-swiper",{slidesPerView:1,spaceBetween:16,navigation:{nextEl:".popular-next",prevEl:".popular-prev"},pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{768:{slidesPerView:2,spaceBetween:24},1280:{slidesPerView:3,spaceBetween:24}}})}
//# sourceMappingURL=index.js.map
