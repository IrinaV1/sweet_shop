import{a as P,i as S}from"./assets/vendor-BqlW5MxZ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();const E=document.querySelector(".header-burger-btn");E.addEventListener("click",()=>{E.classList.toggle("is-open")});const f=P.create({baseURL:"https://deserts-store.b.goit.study/api/",headers:{"Content-Type":"application/json"}}),g=async(e={})=>(await f.get("/desserts",{params:e})).data,T=async e=>(await f.get(`/desserts/${e}`)).data,I=async()=>(await f.get("/categories")).data,p=document.querySelector(".dessert-modal-overlay"),H=document.querySelector(".dessert-modal-close"),j=document.querySelector(".dessert-modal-container");H.addEventListener("click",y);p.addEventListener("click",function(e){e.target===p&&y()});window.addEventListener("keydown",function(e){e.key==="Escape"&&y()});async function N(e){try{const t=await T(e);if(console.log(t),!t)return;p.classList.add("is-open"),document.body.classList.add("modal-open"),A(t)}catch(t){console.log(t.message)}}function A({name:e,_id:t,image:r,price:s,category:o,description:n,composition:d,rate:m}){const O=`
   <div class="dessert-modal-wrapper" data-id="${t}">
        <img class="dessert-modal-img" src="${r}" alt="${e}">
      </div>
      <h2 class="dessert-modal-product">${e}</h2>
      <p class="dessert-modal-price">${s} грн</p>
      <div class="dessert-modal-rate">${m}</div>
      <p class="dessert-modal-description">${n}</p>

      <p class="dessert-modal-compound"><span>Склад </span>: ${d}</p>
      <button class="dessert-modal-btn" type="button">
        Перейти до замовлення
      </button>`;j.innerHTML=O}function y(){p.classList.remove("is-open"),document.body.classList.remove("modal-open")}const C=document.querySelector(".dessert-list-select"),q=document.querySelector(".dessert-categories-list"),k=document.querySelector(".loader"),h=document.querySelector(".dessert-list"),a=document.querySelector(".dessert-load-btn");let i=1;const u=8;let l="all";const L=document.querySelector(".dessert-list-select"),b=document.querySelector(".dessert-select-wrapper");document.addEventListener("DOMContentLoaded",K);C.addEventListener("change",B);q.addEventListener("change",B);a.addEventListener("click",R);h.addEventListener("click",x);async function K(){w();try{const e=await I(),t=[{name:"Всі десерти",_id:"all"},...e];if(!t.length){c("Помилка завантаження");return}z(t),F(t);const r=await g({page:i,limit:u});if(!r.desserts.length){c("Помилка завантаження");return}v(r.desserts);const s=Math.ceil(r.totalItems/u);a.classList.remove("is-hidden"),i>=s?(a.disabled=!0,M("Десерти завантажено")):a.disabled=!1}catch{c("Помилка завантаження")}finally{$()}}async function B(e){if(w(),D(),l=e.target.value,!l){c("Помилка завантаження");return}i=1,h.innerHTML="";try{const t={page:i,limit:u};l!=="all"&&(t.category=l);const r=await g(t);if(!r.desserts.length){c("Помилка завантаження");return}v(r.desserts);const s=Math.ceil(r.totalItems/u);a.classList.remove("is-hidden"),i>=s?(a.disabled=!0,M("Десерти завантажено")):a.disabled=!1}catch{c("Помилка завантаження")}finally{$()}}async function R(){w(),a.disabled=!0,i+=1,D();try{const e={page:i,limit:u};l!=="all"&&(e.category=l);const t=await g(e);if(!t.desserts.length){c("Помилка завантаження");return}v(t.desserts);const s=document.querySelector(".dessert-list-item").getBoundingClientRect().height;window.scrollBy({top:s*1,behavior:"smooth"});const o=Math.ceil(t.totalItems/u);a.classList.remove("is-hidden"),i>=o?(a.disabled=!0,M("Десерти завантажено")):a.disabled=!1}catch{c("Помилка завантаження")}finally{$()}}function x(e){const t=e.target.closest(".dessert-list-btn");if(!t)return;const s=t.closest(".dessert-list-item").dataset.id;N(s)}function z(e){const t=e.map(({name:r,_id:s})=>`
    <option value="${s}">${r}</option>`).join("");C.innerHTML=t}function F(e){const t=e.map(({name:r,_id:s})=>`
   <label for="${s}" class="dessert-category-label">
        <input ${s==="all"?"checked":""}
        id="${s}" type="radio" name="category" 
        value="${s}" class="dessert-category-input" />
        <span class="dessert-category-btn">
       ${r}
        </span>
      </label>
      `).join("");q.innerHTML=t}function v(e){const t=e.map(({name:r,_id:s,image:o,price:n,category:d,description:m})=>`
  <li class="dessert-list-item" data-id="${s}">
        <div class="dessert-list-wrapper">
          <img class="dessert-list-img" src="${o}" alt="${r}">
        </div>
        <p class="dessert-list-category">${d.name}</p>
        <h3 class="dessert-list-product">${r}</h3>
        <p class="dessert-list-description">${m}</p>
        <span class="dessert-list-price">${n} грн</span>
        <button class="dessert-list-btn" type="button" aria-label="dessert list">
          <svg class="dessert-list-icon" width="24" height="24">
            <use href="./img/icons/sprite.svg#arrow_outward"></use>
          </svg>
        </button>
      </li>`).join("");h.insertAdjacentHTML("beforeend",t)}function w(){k.classList.remove("is-hidden")}function $(){k.classList.add("is-hidden")}function D(){a.classList.add("is-hidden")}L.addEventListener("mousedown",()=>{b.classList.add("is-open")});L.addEventListener("change",()=>{b.classList.remove("is-open")});L.addEventListener("blur",()=>{b.classList.remove("is-open")});function M(e){S.success({title:"OK",message:e,backgroundColor:"#ebfcfb",position:"topLeft"})}function c(e){S.error({message:e,theme:"dark",backgroundColor:"#c07979"})}
//# sourceMappingURL=index.js.map
