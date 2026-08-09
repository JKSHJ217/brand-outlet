```javascript
const translations = {

ru: {

catalogTitle:"⌚ Каталог часов",
productNotFound:"Товар не найден",
stockFinished:"На складе больше нет этого товара.",
stockAlert:"На складе осталось только",
addedCart:"Добавлено в корзину 🛒",
addedFavorite:"Добавлено в избранное ❤️",
backCart:"← Вернуться в корзину",
loadingOrders:"Загружаем заказы...",
loginToSeeOrders:"Войдите в аккаунт, чтобы увидеть заказы",
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

newOrder:"Новый заказ",
total:"Итого",
orderSent:"Заказ отправлен ✅",
returnPolicy:"Возврату после покупки не подлежит",

footer:"© 2026 brand_outlet.tm",

/* ===== УСЛОВИЯ ИСПОЛЬЗОВАНИЯ ===== */

termsTitle:"📜 Условия использования",
termsUpdated:"Последнее обновление: 9 августа 2026 года",
termsIntro:"Добро пожаловать на сайт brand_outlet.tm. Используя данный сайт и оформляя заказ, вы соглашаетесь с настоящими Условиями использования.",

termsSection1:"1. Общие положения",
terms1_1:"1.1. Сайт brand_outlet.tm предоставляет пользователям возможность ознакомиться с товарами и оформить заказ.",
terms1_2:"1.2. Пользователь обязан предоставлять достоверную информацию при оформлении заказа.",
terms1_3:"1.3. Администрация сайта может изменять ассортимент, цены, описания, фотографии и другие сведения о товарах без предварительного уведомления.",
terms1_4:"1.4. Условия могут обновляться. Актуальная версия всегда размещается на данной странице.",

termsSection2:"2. Информация о товарах",
terms2_1:"2.1. Мы стараемся указывать точные названия, характеристики, фотографии и цены товаров.",
terms2_2:"2.2. Цвет товара на фотографии может незначительно отличаться от фактического из-за настроек экрана устройства и условий съёмки.",
terms2_3:"2.3. Наличие товара отображается на сайте и может изменяться.",
terms2_4:"2.4. Если товар оказался недоступен после оформления заказа, мы сообщим об этом покупателю.",

termsSection3:"3. Цены",
terms3_1:"3.1. Все цены на сайте указываются в туркменских манатах (TMT), если не указано иное.",
terms3_2:"3.2. Цена товара может измениться до момента оформления заказа.",
terms3_3:"3.3. Стоимость доставки, если она предусмотрена, может рассчитываться отдельно.",

termsSection4:"4. Оформление заказа",
terms4_1:"4.1. Пользователь самостоятельно проверяет выбранные товары, количество и данные для доставки перед подтверждением заказа.",
terms4_2:"4.2. После оформления заказа предоставленные пользователем данные могут использоваться для связи с ним по поводу заказа.",
terms4_3:"4.3. Заказ считается принятым после подтверждения со стороны магазина.",
terms4_4:"4.4. Мы можем связаться с покупателем для уточнения данных заказа.",

termsSection5:"5. Оплата",
terms5_1:"5.1. Оплата производится только наличными при получении заказа.",
terms5_2:"5.2. Покупатель оплачивает полную стоимость заказа при его получении.",
terms5_3:"5.3. До получения заказа предварительная оплата не требуется, если иное не согласовано с покупателем отдельно.",

termsSection6:"6. Доставка и получение",
terms6_1:"6.1. Срок и способ доставки зависят от места получения и выбранного способа доставки.",
terms6_2:"6.2. Покупатель обязан указать правильный номер телефона и адрес или другую необходимую информацию для получения заказа.",
terms6_3:"6.3. Если покупатель предоставил неправильные данные или не может получить заказ, доставка может быть перенесена или отменена.",
terms6_4:"6.4. После получения товара покупателю рекомендуется проверить его состояние.",

termsSection7:"7. Возврат и обмен",
terms7_1:"7.1. Возврат и обмен товаров не предусмотрены, за исключением случаев, когда иное прямо требуется применимым законодательством.",
terms7_2:"7.2. Перед оформлением заказа покупателю рекомендуется внимательно ознакомиться с описанием, фотографиями и характеристиками товара.",
terms7_3:"7.3. Оформляя заказ, покупатель подтверждает, что ознакомился с информацией о товаре.",

termsSection8:"8. Гарантия",
terms8_1:"8.1. Дополнительная гарантия от brand_outlet.tm на товары не предоставляется, за исключением случаев, когда иное прямо требуется применимым законодательством.",
terms8_2:"8.2. Покупателю рекомендуется проверить товар при получении.",
terms8_3:"8.3. Данные условия не ограничивают обязательные права покупателя, которые могут предоставляться законом.",

termsSection9:"9. Ответственность",
terms9_1:"9.1. Пользователь несёт ответственность за достоверность предоставленной им информации.",
terms9_2:"9.2. Пользователь не должен использовать сайт для незаконных целей или действий, которые могут нарушить работу сайта.",
terms9_3:"9.3. Администрация сайта не несёт ответственности за временную недоступность сайта, вызванную техническими неполадками, обслуживанием или обстоятельствами, находящимися вне нашего контроля.",

termsSection10:"10. Учетная запись",
terms10_1:"10.1. Если на сайте доступна регистрация, пользователь обязан сохранять конфиденциальность данных своей учетной записи.",
terms10_2:"10.2. Пользователь не должен предоставлять доступ к своей учетной записи другим лицам.",
terms10_3:"10.3. При обнаружении подозрительной активности пользователь должен прекратить использование учетной записи и обратиться к администрации сайта.",

termsSection11:"11. Интеллектуальная собственность",
terms11_1:"11.1. Дизайн сайта, логотип, тексты и другие материалы сайта могут принадлежать brand_outlet.tm или использоваться на законных основаниях.",
terms11_2:"11.2. Копирование, изменение или распространение материалов сайта без разрешения владельца сайта не допускается, если иное не предусмотрено законом.",

termsSection12:"12. Конфиденциальность",
terms12_1:"12.1. Персональные данные пользователей используются для работы сайта, обработки заказов, связи с покупателями и других необходимых целей.",
terms12_2:"12.2. Пользователь должен ознакомиться с отдельной Политикой конфиденциальности, размещённой на сайте.",

termsSection13:"13. Изменение условий",
terms13_1:"13.1. Администрация сайта оставляет за собой право изменять настоящие Условия использования.",
terms13_2:"13.2. Новая версия вступает в силу после публикации на сайте, если в ней не указано иное.",

termsSection14:"14. Контакты",
terms14Text:"По вопросам, связанным с заказами, товарами или использованием сайта, пользователь может обратиться через указанные на сайте контактные данные.",

termsFinal:"Используя сайт brand_outlet.tm и оформляя заказ, пользователь подтверждает, что ознакомился с настоящими Условиями использования.",
termsClose:"Закрыть"

},


en: {

catalogTitle:"⌚ Watch Catalog",
productNotFound:"Product not found",
stockFinished:"This product is out of stock.",
stockAlert:"Only left in stock",
addedCart:"Added to cart 🛒",
addedFavorite:"Added to favorites ❤️",
backCart:"← Back to cart",
loadingOrders:"Loading orders...",
loginToSeeOrders:"Login to see your orders",
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

newOrder:"New order",
total:"Total",
orderSent:"Order sent ✅",
returnPolicy:"Items cannot be returned after purchase",

footer:"© 2026 brand_outlet.tm",

/* ===== TERMS OF USE ===== */

termsTitle:"📜 Terms of Use",
termsUpdated:"Last updated: August 9, 2026",
termsIntro:"Welcome to brand_outlet.tm. By using this website and placing an order, you agree to these Terms of Use.",

termsSection1:"1. General Provisions",
terms1_1:"1.1. The brand_outlet.tm website allows users to view products and place orders.",
terms1_2:"1.2. The user must provide accurate information when placing an order.",
terms1_3:"1.3. The website administration may change products, prices, descriptions, photos and other information without prior notice.",
terms1_4:"1.4. These terms may be updated. The current version is always published on this page.",

termsSection2:"2. Product Information",
terms2_1:"2.1. We try to provide accurate product names, specifications, photos and prices.",
terms2_2:"2.2. Product colors in photos may differ slightly from the actual product due to device screen settings and photography conditions.",
terms2_3:"2.3. Product availability is displayed on the website and may change.",
terms2_4:"2.4. If a product becomes unavailable after an order is placed, we will inform the customer.",

termsSection3:"3. Prices",
terms3_1:"3.1. All prices on the website are shown in Turkmenistani manat (TMT), unless otherwise stated.",
terms3_2:"3.2. The product price may change before the order is completed.",
terms3_3:"3.3. Delivery costs, if applicable, may be calculated separately.",

termsSection4:"4. Placing an Order",
terms4_1:"4.1. The user is responsible for checking the selected products, quantity and delivery information before confirming the order.",
terms4_2:"4.2. Information provided by the user after placing an order may be used to contact them regarding the order.",
terms4_3:"4.3. An order is considered accepted after confirmation by the store.",
terms4_4:"4.4. We may contact the customer to clarify order details.",

termsSection5:"5. Payment",
terms5_1:"5.1. Payment is made only in cash upon delivery of the order.",
terms5_2:"5.2. The customer pays the full order amount upon receiving the order.",
terms5_3:"5.3. No advance payment is required before receiving the order unless separately agreed with the customer.",

termsSection6:"6. Delivery and Receiving",
terms6_1:"6.1. Delivery time and method depend on the delivery location and selected delivery method.",
terms6_2:"6.2. The customer must provide a correct phone number and address or other information required for delivery.",
terms6_3:"6.3. If the customer provides incorrect information or cannot receive the order, delivery may be postponed or cancelled.",
terms6_4:"6.4. Customers are advised to check the condition of the product upon receipt.",

termsSection7:"7. Returns and Exchanges",
terms7_1:"7.1. Returns and exchanges are not provided, except where otherwise required by applicable law.",
terms7_2:"7.2. Before placing an order, customers are advised to carefully review the product description, photos and specifications.",
terms7_3:"7.3. By placing an order, the customer confirms that they have reviewed the product information.",

termsSection8:"8. Warranty",
terms8_1:"8.1. No additional warranty from brand_outlet.tm is provided, except where otherwise required by applicable law.",
terms8_2:"8.2. Customers are advised to check the product upon receipt.",
terms8_3:"8.3. These terms do not limit any mandatory rights provided to customers by law.",

termsSection9:"9. Liability",
terms9_1:"9.1. The user is responsible for the accuracy of the information they provide.",
terms9_2:"9.2. The user must not use the website for illegal purposes or actions that may disrupt the website.",
terms9_3:"9.3. The website administration is not responsible for temporary website unavailability caused by technical problems, maintenance or circumstances beyond our control.",

termsSection10:"10. User Account",
terms10_1:"10.1. If registration is available on the website, the user must keep their account information confidential.",
terms10_2:"10.2. The user must not provide access to their account to other people.",
terms10_3:"10.3. If suspicious activity is detected, the user should stop using the account and contact the website administration.",

termsSection11:"11. Intellectual Property",
terms11_1:"11.1. The website design, logo, texts and other materials may belong to brand_outlet.tm or be used lawfully.",
terms11_2:"11.2. Copying, modifying or distributing website materials without permission is not allowed unless otherwise permitted by law.",

termsSection12:"12. Privacy",
terms12_1:"12.1. User data is used to operate the website, process orders, contact customers and for other necessary purposes.",
terms12_2:"12.2. Users should review the separate Privacy Policy published on the website.",

termsSection13:"13. Changes to the Terms",
terms13_1:"13.1. The website administration reserves the right to change these Terms of Use.",
terms13_2:"13.2. The new version becomes effective after publication on the website unless otherwise stated.",

termsSection14:"14. Contact",
terms14Text:"For questions related to orders, products or use of the website, users may contact us through the contact details provided on the website.",

termsFinal:"By using brand_outlet.tm and placing an order, the user confirms that they have read these Terms of Use.",
termsClose:"Close"

},


tk: {

catalogTitle:"⌚ Sagatlaryň katalogy",
productNotFound:"Haryt tapylmady",
stockFinished:"Bu haryt ammarda galmady.",
stockAlert:"Ammarda diňe galdy",
addedCart:"Sebede goşuldy 🛒",
addedFavorite:"Halanlara goşuldy ❤️",
backCart:"← Sebede dolanmak",
loadingOrders:"Sargytlar ýüklenýär...",
loginToSeeOrders:"Sargytlary görmek üçin giriň",
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

newOrder:"Täze sargyt",
total:"Jemi",
orderSent:"Sargyt ugradyldy ✅",
returnPolicy:"Satyn alnandan soň yzyna kabul edilmeýär",

footer:"© 2026 brand_outlet.tm",

/* ===== ULANYŞ ŞERTLERI ===== */

termsTitle:"📜 Ulanmak şertleri",
termsUpdated:"Soňky täzelenme: 9 awgust 2026",
termsIntro:"brand_outlet.tm saýtyna hoş geldiňiz. Bu saýty ulanmak we sargyt ýerleşdirmek bilen siz şu Ulanmak şertlerini kabul edýärsiňiz.",

termsSection1:"1. Umumy düzgünler",
terms1_1:"1.1. brand_outlet.tm saýty ulanyjylara harytlary görmäge we sargyt ýerleşdirmäge mümkinçilik berýär.",
terms1_2:"1.2. Ulanyjy sargyt ýerleşdirende dogry maglumatlary bermelidir.",
terms1_3:"1.3. Saýtyň administrasiýasy öňünden habar bermezden harytlary, bahalary, düşündirişleri, suratlary we beýleki maglumatlary üýtgedip biler.",
terms1_4:"1.4. Bu şertler täzelenip bilner. Iň täze görnüşi hemişe şu sahypada ýerleşdirilýär.",

termsSection2:"2. Harytlar barada maglumat",
terms2_1:"2.1. Biz harytlaryň atlaryny, aýratynlyklaryny, suratlaryny we bahalaryny dogry görkezmäge çalyşýarys.",
terms2_2:"2.2. Suratdaky harydyň reňki enjamyň ekran sazlamalary we surata düşüriliş şertleri sebäpli hakyky reňkden biraz tapawutlanyp biler.",
terms2_3:"2.3. Harydyň elýeterliligi saýtda görkezilýär we üýtgäp biler.",
terms2_4:"2.4. Sargyt ýerleşdirilenden soň haryt elýeterli bolmasa, müşderä habar bereris.",

termsSection3:"3. Bahalar",
terms3_1:"3.1. Başgaça görkezilmedik bolsa, saýtdaky ähli bahalar türkmen manadynda (TMT) görkezilýär.",
terms3_2:"3.2. Sargyt tamamlanmazdan öň harydyň bahasy üýtgäp biler.",
terms3_3:"3.3. Gerek bolsa, eltip bermek üçin töleg aýratyn hasaplanyp bilner.",

termsSection4:"4. Sargyt ýerleşdirmek",
terms4_1:"4.1. Ulanyjy sargydy tassyklamazdan öň saýlanan harytlary, sanyny we eltip bermek maglumatlaryny barlamalydyr.",
terms4_2:"4.2. Sargyt ýerleşdirilenden soň ulanyjy tarapyndan berlen maglumatlar sargyt barada habarlaşmak üçin ulanylyp bilner.",
terms4_3:"4.3. Sargyt dükan tarapyndan tassyklanandan soň kabul edilen hasaplanýar.",
terms4_4:"4.4. Sargydyň maglumatlaryny anyklamak üçin müşderi bilen habarlaşyp bileris.",

termsSection5:"5. Töleg",
terms5_1:"5.1. Töleg diňe sargyt gowşurylanda nagt görnüşinde amala aşyrylýar.",
terms5_2:"5.2. Müşderi sargydyň doly bahasyny sargydy alanda töleýär.",
terms5_3:"5.3. Müşderi bilen aýratyn ylalaşylmadyk bolsa, sargydy almazdan öňünden töleg talap edilmeýär.",

termsSection6:"6. Eltip bermek we almak",
terms6_1:"6.1. Eltip bermegiň wagty we usuly eltip beriljek ýere we saýlanan eltip beriş usulyna baglydyr.",
terms6_2:"6.2. Müşderi dogry telefon belgisini we salgysyny ýa-da sargydy almak üçin zerur beýleki maglumatlary bermelidir.",
terms6_3:"6.3. Müşderi nädogry maglumat beren ýa-da sargydy alyp bilmedik ýagdaýynda eltip bermek başga wagta geçirilip ýa-da ýatyrylyp bilner.",
terms6_4:"6.4. Müşderilere harydy alanda onuň ýagdaýyny barlamak maslahat berilýär.",

termsSection7:"7. Gaýtaryş we çalyşmak",
terms7_1:"7.1. Harytlary yzyna gaýtarmak we çalyşmak göz öňünde tutulmaýar, degişli kanunlarda başgaça talap edilýän ýagdaýlardan başga.",
terms7_2:"7.2. Sargyt ýerleşdirmezden öň müşderilere harydyň düşündirişini, suratlaryny we aýratynlyklaryny üns bilen gözden geçirmek maslahat berilýär.",
terms7_3:"7.3. Sargyt ýerleşdirmek bilen müşderi haryt baradaky maglumatlary gözden geçirendigini tassyklaýar.",

termsSection8:"8. Kepillik",
terms8_1:"8.1. Degişli kanunlarda başgaça talap edilýän ýagdaýlardan başga, brand_outlet.tm tarapyndan harytlara goşmaça kepillik berilmeýär.",
terms8_2:"8.2. Müşderilere harydy alanda ony barlamak maslahat berilýär.",
terms8_3:"8.3. Bu şertler kanun tarapyndan müşderilere berilýän hökmany hukuklary çäklendirmeýär.",

termsSection9:"9. Jogapkärçilik",
terms9_1:"9.1. Ulanyjy beren maglumatlarynyň dogrulygyna jogapkärdir.",
terms9_2:"9.2. Ulanyjy saýty bikanun maksatlar ýa-da saýtyň işine päsgel berip biljek hereketler üçin ulanmaly däldir.",
terms9_3:"9.3. Saýtyň administrasiýasy tehniki näsazlyklar, hyzmat işleri ýa-da biziň gözegçiligimizden daşarda bolan ýagdaýlar sebäpli saýtyň wagtlaýyn elýeterli bolmazlygy üçin jogapkärçilik çekmeýär.",

termsSection10:"10. Ulanyjy hasaby",
terms10_1:"10.1. Saýtda hasaba alyş elýeterli bolsa, ulanyjy hasap maglumatlarynyň gizlinligini üpjün etmelidir.",
terms10_2:"10.2. Ulanyjy öz hasabyna beýleki adamlaryň girmegine rugsat bermeli däldir.",
terms10_3:"10.3. Şübheli işjeňlik ýüze çykarylsa, ulanyjy hasaby ulanmagy bes etmeli we saýtyň administrasiýasy bilen habarlaşmalydyr.",

termsSection11:"11. Intellektual eýeçilik",
terms11_1:"11.1. Saýtyň dizaýny, logotipi, tekstleri we beýleki materiallary brand_outlet.tm-e degişli bolup biler ýa-da kanuny esasda ulanylyp bilner.",
terms11_2:"11.2. Kanunda başgaça rugsat berilmedik bolsa, saýtyň materiallaryny rugsatsyz göçürmek, üýtgetmek ýa-da ýaýratmak gadagan.",

termsSection12:"12. Gizlinlik",
terms12_1:"12.1. Ulanyjylaryň maglumatlary saýtyň işlemegi, sargytlaryň işlenmegi, müşderiler bilen habarlaşmak we beýleki zerur maksatlar üçin ulanylýar.",
terms12_2:"12.2. Ulanyjy saýtda ýerleşdirilen aýratyn Gizlinlik syýasaty bilen tanyşmalydyr.",

termsSection13:"13. Şertleriň üýtgedilmegi",
terms13_1:"13.1. Saýtyň administrasiýasy şu Ulanmak şertlerini üýtgetmek hukugyny özünde saklaýar.",
terms13_2:"13.2. Täze görnüş saýtda ýerleşdirilenden soň güýje girýär, eger başgaça görkezilmedik bolsa.",

termsSection14:"14. Habarlaşmak",
terms14Text:"Sargytlar, harytlar ýa-da saýty ulanmak bilen baglanyşykly soraglar boýunça ulanyjy saýtda görkezilen aragatnaşyk maglumatlary arkaly bize ýüz tutup biler.",

termsFinal:"brand_outlet.tm saýtyny ulanmak we sargyt ýerleşdirmek bilen ulanyjy şu Ulanmak şertlerini okandygyny tassyklaýar.",
termsClose:"Ýapmak"

}

};


function applyLanguage(){

let lang = localStorage.getItem("siteLang") || "ru";

if(!translations[lang]){
    lang = "ru";
}

document.querySelectorAll("[data-lang]").forEach(element=>{

    let key = element.getAttribute("data-lang");

    if(translations[lang][key]){
        element.innerText = translations[lang][key];
    }

});


document.querySelectorAll("[data-lang-placeholder]").forEach(element=>{

    let key = element.getAttribute("data-lang-placeholder");

    if(translations[lang][key]){
        element.placeholder = translations[lang][key];
    }

});

}


window.applyLanguage = applyLanguage;
window.translations = translations;

window.addEventListener("DOMContentLoaded",()=>{

applyLanguage();

});
```
