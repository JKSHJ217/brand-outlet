function addToCart(name, price) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        name: name,
        price: price
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    alert(name + " добавлены в корзину!");
}


function updateCartCount(){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let counter = document.getElementById("cart-count");

    if(counter){
        counter.innerHTML = "🛒 Корзина (" + cart.length + ")";
    }

}


updateCartCount();
