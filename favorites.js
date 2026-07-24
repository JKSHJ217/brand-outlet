function addToFavorites(name, price, image){

    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    favorites.push({
        name: name,
        price: price,
        image: image
    });

    localStorage.setItem("favorites", JSON.stringify(favorites));

    alert(name + " добавлены в избранное!");

    location.reload();
}

function updateFavoritesCount(){

    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    let counter = document.getElementById("favorites-count");

    if(counter){
        counter.innerHTML = "❤️ Избранное (" + favorites.length + ")";
    }

}

updateFavoritesCount();
