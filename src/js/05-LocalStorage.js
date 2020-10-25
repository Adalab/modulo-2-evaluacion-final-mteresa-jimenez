"use strict";

// localStorage
function setLocalStorageFav() {
  localStorage.setItem("favorites", JSON.stringify(favorites));
}

function getLocalStorageFav() {
  const LocalStorageFav = JSON.parse(localStorage.getItem(favorites));
  favorites = LocalStorageFav;
  paintSearchEngine();
  listenFavoriteSeries();
  listenRemoveFavorite();
}
