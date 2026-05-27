import{a as P,i as C,S as T}from"./assets/vendor-ByIlZ9fe.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=t(o);fetch(o.href,n)}})();const S=document.querySelector(".header-burger-btn");S.addEventListener("click",()=>{S.classList.toggle("is-open")});const f=P.create({baseURL:"https://deserts-store.b.goit.study/api/",headers:{"Content-Type":"application/json"}}),g=async(e={})=>(await f.get("/desserts",{params:e})).data,j=async e=>(await f.get(`/desserts/${e}`)).data,H=async()=>(await f.get("/categories")).data,m=document.querySelector(".dessert-modal-overlay"),I=document.querySelector(".dessert-modal-close"),A=document.querySelector(".dessert-modal-container");I.addEventListener("click",y);m.addEventListener("click",function(e){e.target===m&&y()});window.addEventListener("keydown",function(e){e.key==="Escape"&&y()});async function N(e){try{const s=await j(e);if(console.log(s),!s)return;m.classList.add("is-open"),document.body.classList.add("modal-open"),K(s)}catch(s){console.log(s.message)}}function K({name:e,_id:s,image:t,price:r,category:o,description:n,composition:i,rate:p}){const O=`
  <div class="dessert-modal-card" data-id="${s}">
   <div class="dessert-modal-wrapper">
        <img class="dessert-modal-img" src="${t}" alt="${e}">
      </div>
      <h2 class="dessert-modal-product">${e}</h2>
      <p class="dessert-modal-price">${r} грн</p>
      <div class="dessert-modal-rate">${p}</div>
      <p class="dessert-modal-description">${n}</p>

      <p class="dessert-modal-compound"><span>Склад </span>: ${i}</p>
      <button class="dessert-modal-btn" type="button">
        Перейти до замовлення
      </button>
      </div>`;A.innerHTML=O}function y(){m.classList.remove("is-open"),document.body.classList.remove("modal-open")}const E=document.querySelector(".dessert-list-select"),q=document.querySelector(".dessert-categories-list"),k=document.querySelector(".loader"),h=document.querySelector(".dessert-list"),a=document.querySelector(".dessert-load-btn");let c=1;const u=8;let l="all";const b=document.querySelector(".dessert-list-select"),L=document.querySelector(".dessert-select-wrapper");document.addEventListener("DOMContentLoaded",R);E.addEventListener("change",D);q.addEventListener("change",D);a.addEventListener("click",x);h.addEventListener("click",z);async function R(){w();try{const e=await H(),s=[{name:"Всі десерти",_id:"all"},...e];if(!s.length){d("Помилка завантаження");return}F(s),U(s);const t=await g({page:c,limit:u});if(!t.desserts.length){d("Помилка завантаження");return}v(t.desserts);const r=Math.ceil(t.totalItems/u);a.classList.remove("is-hidden"),c>=r?(a.disabled=!0,M("Десерти завантажено")):a.disabled=!1}catch{d("Помилка завантаження")}finally{$()}}async function D(e){if(w(),B(),l=e.target.value,!l){d("Помилка завантаження");return}c=1,h.innerHTML="";try{const s={page:c,limit:u};l!=="all"&&(s.category=l);const t=await g(s);if(!t.desserts.length){d("Помилка завантаження");return}v(t.desserts);const r=Math.ceil(t.totalItems/u);a.classList.remove("is-hidden"),c>=r?(a.disabled=!0,M("Десерти завантажено")):a.disabled=!1}catch{d("Помилка завантаження")}finally{$()}}async function x(){w(),a.disabled=!0,c+=1,B();try{const e={page:c,limit:u};l!=="all"&&(e.category=l);const s=await g(e);if(!s.desserts.length){d("Помилка завантаження");return}v(s.desserts);const r=document.querySelector(".dessert-list-item").getBoundingClientRect().height;window.scrollBy({top:r*1,behavior:"smooth"});const o=Math.ceil(s.totalItems/u);a.classList.remove("is-hidden"),c>=o?(a.disabled=!0,M("Десерти завантажено")):a.disabled=!1}catch{d("Помилка завантаження")}finally{$()}}function z(e){const s=e.target.closest(".dessert-list-btn");if(!s)return;const r=s.closest(".dessert-list-item").dataset.id;N(r)}function F(e){const s=e.map(({name:t,_id:r})=>`
    <option value="${r}">${t}</option>`).join("");E.innerHTML=s}function U(e){const s=e.map(({name:t,_id:r})=>`
   <label for="${r}" class="dessert-category-label">
        <input ${r==="all"?"checked":""}
        id="${r}" type="radio" name="category" 
        value="${r}" class="dessert-category-input" />
        <span class="dessert-category-btn">
       ${t}
        </span>
      </label>
      `).join("");q.innerHTML=s}function v(e){const s=e.map(({name:t,_id:r,image:o,price:n,category:i,description:p})=>`
  <li class="dessert-list-item" data-id="${r}">
        <div class="dessert-list-wrapper">
          <img class="dessert-list-img" src="${o}" alt="${t}">
        </div>
        <p class="dessert-list-category">${i.name}</p>
        <h3 class="dessert-list-product">${t}</h3>
        <p class="dessert-list-description">${p}</p>
        <span class="dessert-list-price">${n} грн</span>
        <button class="dessert-list-btn" type="button" aria-label="dessert list">
          <svg class="dessert-list-icon" width="24" height="24">
            <use href="./img/icons/sprite.svg#arrow_outward"></use>
          </svg>
        </button>
      </li>`).join("");h.insertAdjacentHTML("beforeend",s)}function w(){k.classList.remove("is-hidden")}function $(){k.classList.add("is-hidden")}function B(){a.classList.add("is-hidden")}b.addEventListener("mousedown",()=>{L.classList.add("is-open")});b.addEventListener("change",()=>{L.classList.remove("is-open")});b.addEventListener("blur",()=>{L.classList.remove("is-open")});function M(e){C.success({title:"OK",message:e,backgroundColor:"#ebfcfb",position:"topLeft"})}function d(e){C.error({message:e,theme:"dark",backgroundColor:"#c07979"})}new T(".mySwiper",{pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0}});const G=document.querySelector(".popular-product-list");document.addEventListener("DOMContentLoaded",J);async function J(){try{const s=await g({type:"popular"});if(!s.desserts.length)return;console.log(s.desserts),Q(s.desserts)}catch(e){console.log(e.message)}}function Q(e){const s=e.map(({name:t,_id:r,image:o,price:n,category:i,description:p})=>`
  <li class="dessert-list-item" data-id="${r}">
        <div class="dessert-list-wrapper">
          <img class="dessert-list-img" src="${o}" alt="${t}">
        </div>
        <p class="dessert-list-category">${i.name}</p>
        <h3 class="dessert-list-product">${t}</h3>
        <p class="dessert-list-description">${p}</p>
        <span class="dessert-list-price">${n} грн</span>
        <button class="dessert-list-btn" type="button" aria-label="dessert list">
          <svg class="dessert-list-icon" width="24" height="24">
            <use href="./img/icons/sprite.svg#arrow_outward"></use>
          </svg>
        </button>
      </li>`).join("");G.insertAdjacentHTML("beforeend",s)}
//# sourceMappingURL=index.js.map
