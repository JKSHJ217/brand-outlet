const translations = {

ru:{

heroTitle:"Стильные часы для любого образа",

cart:"Корзина",

favorites:"Избранное",

account:"Аккаунт",

catalog:"Каталог",

home:"Главная",

orders:"Мои заказы",

language:"Язык",

settings:"Настройки",

login:"Войти / Регистрация",

logout:"Выйти",

checkout:"Оформление заказа",

buy:"Купить",

addCart:"В корзину",

description:"Описание",

price:"Цена"

},



en:{

heroTitle:"Stylish watches for any look",

cart:"Cart",

favorites:"Favorites",

account:"Account",

catalog:"Catalog",

home:"Home",

orders:"My orders",

language:"Language",

settings:"Settings",

login:"Login / Register",

logout:"Logout",

checkout:"Checkout",

buy:"Buy",

addCart:"Add to cart",

description:"Description",

price:"Price"

},



tk:{

heroTitle:"Her bir keşp üçin ajaýyp sagatlar",

cart:"Sebet",

favorites:"Halanlarym",

account:"Hasap",

catalog:"Katalog",

home:"Baş sahypa",

orders:"Sargytlarym",

language:"Dil",

settings:"Sazlamalar",

login:"Giriş / Hasaba durmak",

logout:"Çykmak",

checkout:"Sargyt resmileşdirmek",

buy:"Satyn almak",

addCart:"Sebede goş",

description:"Düşündiriş",

price:"Bahasy"

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


}



// запуск

applyLanguage();
