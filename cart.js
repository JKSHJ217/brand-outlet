function addToCart(name, price, image){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Проверяем, есть ли уже такой товар
    let item = cart.find(function(product){
        return product.name === name;
    });

    if(item){

        item.quantity++;

    }else{

        cart.push({
            name: name,
            price: price,
            image: image,
            quantity: 1
        });

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " добавлен в корзину!");

    updateCartCount();

}

function updateCartCount(){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let totalItems = 0;

    cart.forEach(function(item){
        totalItems += item.quantity;
    });

    let counter = document.getElementById("cart-count");

    if(counter){
        counter.innerHTML = "🛒 Корзина (" + totalItems + ")";
    }

}

updateCartCount();
