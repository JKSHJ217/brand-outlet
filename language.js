const translations = {

ru: {

myOrders:"Мои заказы",
noOrders:"У вас пока нет заказов",
orderNumber:"Заказ",
status:"Статус",
date:"Дата",

loginButton:"🔑 Войти",
email:"Email",
password:"Пароль",
confirmPassword:"Повторите пароль",
register:"Зарегистрироваться",
fillFields:"Заполните все поля",
passwordError:"Пароли не совпадают",
registerSuccess:"Регистрация успешна ✅",
enterLogin:"Введите email и пароль",
loginSuccess:"Вход выполнен ✅",
wrongLogin:"Неверный email или пароль",

loggedIn:"Вы вошли в аккаунт",
shopping:"Покупки",
guestText:"Войдите, чтобы использовать аккаунт",
design:"Оформление",
security:"Безопасность",
privacy:"Конфиденциальность",
terms:"Условия использования",
information:"Информация",
about:"О приложении",
rate:"Оценить сайт",

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

myOrders:"My Orders",
noOrders:"You have no orders yet",
orderNumber:"Order",
status:"Status",
date:"Date",

loginButton:"🔑 Login",
email:"Email",
password:"Password",
confirmPassword:"Confirm password",
register:"Register",
fillFields:"Fill in all fields",
passwordError:"Passwords do not match",
registerSuccess:"Registration successful ✅",
enterLogin:"Enter email and password",
loginSuccess:"Login successful ✅",
wrongLogin:"Wrong email or password",

loggedIn:"You are logged in",
shopping:"Shopping",
guestText:"Login to use account",
design:"Appearance",
security:"Security",
privacy:"Privacy",
terms:"Terms of use",
information:"Information",
about:"About app",
rate:"Rate website",

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

myOrders:"Sargytlarym",
noOrders:"Sargydyňyz entek ýok",
orderNumber:"Sargyt",
status:"Ýagdaýy",
date:"Sene",

loginButton:"🔑 Giriş",
email:"Email",
password:"Açar söz",
confirmPassword:"Açar sözi gaýtalaň",
register:"Hasaba durmak",
fillFields:"Ähli meýdanlary dolduryň",
passwordError:"Açar sözler gabat gelenok",
registerSuccess:"Hasaba alyş üstünlikli ✅",
enterLogin:"Email we açar sözi giriziň",
loginSuccess:"Giriş üstünlikli ✅",
wrongLogin:"Email ýa-da açar söz nädogry",

loggedIn:"Hasaba girildi",
shopping:"Söwda",
guestText:"Hasaby ulanmak üçin giriň",
design:"Görnüş",
security:"Howpsuzlyk",
privacy:"Gizlinlik",
terms:"Ulanmak şertleri",
information:"Maglumat",
about:"Programma barada",
rate:"Sahypany bahalandyrmak",

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
window.translations = translations;

applyLanguage();
