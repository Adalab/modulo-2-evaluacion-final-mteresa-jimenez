"use strict";

// handle favorite function

function markFavoriteSeries(ev) {
  const clicked = parseInt(ev.currentTarget.id);
  const indexOfFavorite = favorites.indexOf(clicked);

  if (indexOfFavorite === -1) {
    favorites.push(clicked);
  } else {
    favorites.splice(indexOfFavorite, 1);
  }
  paintSearchEngine();
  listenFavoriteSeries();
  setLocalStorageFav();
  console.log(favorites);
}

//handle remove favorite function

// function removeFavorite() {
//   console.log("quita favorito");
// }

// listen favorite function

function listenFavoriteSeries() {
  const seriesItems = document.querySelectorAll(".js-series-item");
  for (const seriesItem of seriesItems) {
    seriesItem.addEventListener("click", markFavoriteSeries);
  }
}

// listen remove favorite btn
// function listenRemoveFavorite() {
//   const btnRemoveFavs = document.querySelectorAll(".js-remove-favorite");
//   for (const btnRemoveFav of btnRemoveFavs) {
//     btnRemoveFav.addEventListener("click", removeFavorite);
//   }
// }
