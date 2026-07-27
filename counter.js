function updateCount(){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];


let cartCount = 0;


cart.forEach(item=>{

if(typeof item === "object"){

cartCount += item.quantity;

}else{

cartCount++;

}

});



let cartElement = document.getElementById("cartCount");
let favElement = document.getElementById("favCount");


if(cartElement){

cartElement.innerText = cartCount;

}


if(favElement){

favElement.innerText = favorites.length;

}


}


updateCount();
