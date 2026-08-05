const translations = {

ru: {

heroMain:"Стиль начинается с часов",
heroTitle:"Стильные часы для любого образа",
catalogButton:"Смотреть каталог",
newWatches:"⌚ Новинки",
search:"🔍 Поиск часов...",

home:"Главная",
catalog:"Каталог",
account:"Аккаунт",
cart:"Корзина",
favorites:"Избранное",
orders:"Мои заказы",

login:"🔑 Войти / Регистрация",
logout:"🚪 Выйти",

language:"Язык",
settings:"Настройки",

addCart:"🛒 В корзину",
addFavorite:"❤️ В избранное",
buy:"Купить",

price:"Цена",
description:"Описание",
quantity:"Количество",

checkout:"Оформление заказа",
confirmOrder:"Подтвердить заказ",

name:"Ваше имя",
phone:"Ваш телефон",
address:"Ваш адрес",

emptyCart:"Корзина пустая 🛒",

addedCart:"Добавлено в корзину 🛒",
addedFavorite:"Добавлено в избранное ❤️",

newOrder:"Новый заказ",
total:"Итого",

footer:"© 2026 brand_outlet.tm"

},



en: {

heroMain:"Style starts with watches",
heroTitle:"Stylish watches for any look",
catalogButton:"View catalog",
newWatches:"⌚ New arrivals",
search:"🔍 Search watches...",

home:"Home",
catalog:"Catalog",
account:"Account",
cart:"Cart",
favorites:"Favorites",
orders:"My orders",

login:"🔑 Login / Register",
logout:"🚪 Logout",

language:"Language",
settings:"Settings",

addCart:"🛒 Add to cart",
addFavorite:"❤️ Add to favorites",
buy:"Buy",

price:"Price",
description:"Description",
quantity:"Quantity",

checkout:"Checkout",
confirmOrder:"Confirm order",

name:"Your name",
phone:"Your phone",
address:"Your address",

emptyCart:"Cart is empty 🛒",

addedCart:"Added to cart 🛒",
addedFavorite:"Added to favorites ❤️",

newOrder:"New order",
total:"Total",

footer:"© 2026 brand_outlet.tm"

},



tk: {

heroMain:"Stil sagatdan başlanýar",
heroTitle:"Her bir keşp üçin ajaýyp sagatlar",
catalogButton:"Katalogy görmek",
newWatches:"⌚ Täze sagatlar",
search:"🔍 Sagat gözlemek...",

home:"Baş sahypa",
catalog:"Katalog",
account:"Hasap",
cart:"Sebet",
favorites:"Halanlarym",
orders:"Sargytlarym",

login:"🔑 Giriş / Hasaba durmak",
logout:"🚪 Çykmak",

language:"Dil",
settings:"Sazlamalar",

addCart:"🛒 Sebede goş",
addFavorite:"❤️ Halanlara goş",
buy:"Satyn almak",

price:"Bahasy",
description:"Düşündiriş",
quantity:"Mukdar",

checkout:"Sargydy resmileşdirmek",
confirmOrder:"Sargyt tassyklamak",

name:"Adyňyz",
phone:"Telefon belgiňiz",
address:"Salgynyňyz",

emptyCart:"Sebet boş 🛒",

addedCart:"Sebede goşuldy 🛒",
addedFavorite:"Halanlara goşuldy ❤️",

newOrder:"Täze sargyt",
total:"Jemi",

footer:"© 2026 brand_outlet.tm"

}

};




function applyLanguage(){


let lang = localStorage.getItem("siteLang") || "ru";


document.querySelectorAll("[data-lang]").forEach(element=>{


let key = element.getAttribute("data-lang");


if(translations[lang][key]){

element.innerText = translations[lang][key];

}


});



// для placeholder поиска

document.querySelectorAll("[data-lang-placeholder]").forEach(element=>{


let key = element.getAttribute("data-lang-placeholder");


if(translations[lang][key]){

element.placeholder = translations[lang][key];

}


});


}



window.applyLanguage = applyLanguage;


applyLanguage();
