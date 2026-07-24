function addToFavorites(name, price, image){

    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    // Проверяем, есть ли уже такой товар
    let exists = favorites.some(function(item){
        return item.name === name;
    });

    if(exists){
        alert("❤️ Этот товар уже находится в избранном!");
        return;
    }

    favorites.push({
        name: name,
        price: price,
        image: image
    });

    localStorage.setItem("favorites", JSON.stringify(favorites));

    alert(name + " добавлен в избранное ❤️");

    updateFavoritesCount();

}

function updateFavoritesCount(){

    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    let counter = document.getElementById("favorites-count");

    if(counter){
        counter.innerHTML = "❤️ Избранное (" + favorites.length + ")";
    }

}

updateFavoritesCount();
