function addToCart(name, price, image) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        name: name,
        price: price,
        image: image
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " добавлены в корзину!");

    location.reload();
}


function updateCartCount(){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let counter = document.getElementById("cart-count");

    if(counter){
        counter.innerHTML = "🛒 Корзина (" + cart.length + ")";
    }

}


updateCartCount();
