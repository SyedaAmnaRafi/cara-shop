(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const a of e.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function c(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(t){if(t.ep)return;t.ep=!0;const e=c(t);fetch(t.href,e)}})();const y=[{id:1,name:"Laptop",category:"Computers",brand:"ExampleBrand",price:999.99,stock:50,description:"Powerful laptop with a quad-core i5 processor, 8GB RAM, 256GB SSD, and a 14-inch FHD display.",image:"./images/lapi.png"},{id:2,name:"Smartphone",category:"Mobiles",brand:"TechGadget",price:499.99,stock:100,image:"./images/iphone.png",description:"Feature-rich smartphone with a 6.2-inch screen, 12MP dual camera, 128GB storage, and a 4000mAh battery."},{id:3,name:"Wireless Headphones",category:"Audio",brand:"SoundBeats",price:149.99,stock:30,image:"./images/headphone.png",description:"High-quality wireless headphones with over-ear design, 20 hours of battery life, and a sleek black color."},{id:4,name:"Watches",category:"Wearables",brand:"FitTech",price:199.99,stock:20,image:"./images/watch.png",description:"Smartwatch with a 1.3-inch AMOLED display, water-resistant design, fitness tracking features, and a stylish silver color."},{id:5,name:"Speakers",category:"Audio",brand:"SoundBeats",price:149.99,stock:30,image:"./images/speakers.png",description:"High-quality wireless headphones with over-ear design, 20 hours of battery life, and a sleek black color."},{id:6,name:"Television",category:"Video",brand:"Samsung",price:199.99,stock:20,image:"./images/tv.png",description:"Smartwatch with a 1.3-inch AMOLED display, water-resistant design, fitness tracking features, and a stylish silver color."}],f=document.querySelector("#cartValue"),m=o=>f.innerHTML=`<i class="fa-solid fa-cart-shopping"> ${o.length}</i>`,g=()=>{let o=localStorage.getItem("cartProductLS");return o?(o=JSON.parse(o),m(o),o):[]};function p(o,r){const c=document.createElement("div");c.classList.add("toast"),c.textContent=` Product with ID ${r} hs been added`,document.body.appendChild(c),setTimeout(()=>{c.remove()},2e3)}g();const h=(o,r,c)=>{let i=g();const t=document.querySelector(`#card${r}`);let e=t.querySelector(".productQuantity").innerText,a=t.querySelector(".productPrice").innerText;a=a.replace("$","");let d=i.find(s=>s.id===r);if(d&&e>1){e=Number(d.quantity)+Number(e),a=a*e;let s={id:r,quantity:e,price:a};s=i.map(u=>u.id===r?s:u),console.log(s),localStorage.setItem("cartProductLS",JSON.stringify(s)),p("add",r)}if(d)return!1;a=Number(a*e),e=Number(e),i.push({id:r,price:a,quantity:e}),localStorage.setItem("cartProductLS",JSON.stringify(i)),m(i),p("add",r)},S=(o,r,c)=>{const t=document.querySelector(`#card${r}`).querySelector(".productQuantity");let e=parseInt(t.getAttribute("data-quantity"))||1;return o.target.className==="cartIncrement"&&(e<c?e+=1:e===c&&(e=c)),o.target.className==="cartDecrement"&&e>1&&(e-=1),t.innerText=e,t.setAttribute("data-quantity",e),e},q=document.querySelector("#productContainer"),b=document.querySelector("#productTemplate"),C=o=>{if(!o)return!1;o.forEach(r=>{const{brand:c,category:i,description:t,id:e,image:a,name:d,price:s,stock:u}=r,n=document.importNode(b.content,!0);n.querySelector("#cardValue").setAttribute("id",`card${e}`),n.querySelector(".category").textContent=i,n.querySelector(".productName").textContent=d,n.querySelector(".productImage").src=a,n.querySelector(".productImage").alt=d,n.querySelector(".productStock").textContent=u,n.querySelector(".productDescription").textContent=t,n.querySelector(".productPrice").textContent=`$${s}`,n.querySelector(".productActualPrice").textContent=`$${s*4}`,n.querySelector(".stockElement").addEventListener("click",l=>{S(l,e,u)}),n.querySelector(".add-to-cart-button").addEventListener("click",l=>{h(l,e)}),q.append(n)})};C(y);
