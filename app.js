
const THEMES=["dark","light","red","blue","green","yellow","purple","pink"];
function setTheme(t){if(!THEMES.includes(t))t="light";document.body.classList.remove(...THEMES.map(x=>"theme-"+x));document.body.classList.add("theme-"+t);localStorage.setItem("siteTheme",t)}
function loadTheme(){setTheme(localStorage.getItem("siteTheme")||"light")}
function getCart(){try{return JSON.parse(localStorage.getItem("cart")||"[]")}catch{return[]}}
function saveCart(c){localStorage.setItem("cart",JSON.stringify(c));updateCounters()}
function getFav(){try{return JSON.parse(localStorage.getItem("favorites")||"[]")}catch{return[]}}
function saveFav(c){localStorage.setItem("favorites",JSON.stringify(c));updateCounters()}
function addToCart(item){const c=getCart();const i=c.findIndex(x=>String(x.id)===String(item.id));if(i>=0)c[i].qty=(c[i].qty||1)+1;else c.push({...item,qty:1});saveCart(c);alert("Товар добавлен в корзину")}
function toggleFav(item){let f=getFav();const i=f.findIndex(x=>String(x.id)===String(item.id));if(i>=0)f.splice(i,1);else f.push(item);saveFav(f)}
function updateCounters(){const c=getCart().reduce((s,x)=>s+(x.qty||1),0),f=getFav().length;document.querySelectorAll("[data-cart-count]").forEach(e=>e.textContent=c);document.querySelectorAll("[data-fav-count]").forEach(e=>e.textContent=f)}
function money(v){return Number(v||0).toLocaleString("ru-RU")+" TMT"}
function escapeHtml(s){return String(s??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}
document.addEventListener("DOMContentLoaded",()=>{loadTheme();updateCounters()})
