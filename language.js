const translations = {

ru:{

heroTitle:"Стильные часы для любого образа",

cart:"Корзина",

favorites:"Избранное",

account:"Аккаунт",

catalog:"Каталог"

},


en:{

heroTitle:"Stylish watches for any look",

cart:"Cart",

favorites:"Favorites",

account:"Account",

catalog:"Catalog"

},


tk:{

heroTitle:"Her bir keşp üçin ajaýyp sagatlar",

cart:"Sebet",

favorites:"Halanlarym",

account:"Hasap",

catalog:"Katalog"

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
