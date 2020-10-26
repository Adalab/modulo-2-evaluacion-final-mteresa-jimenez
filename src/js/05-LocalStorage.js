// localStorage
function setLocalStorageFav() {
  localStorage.setItem("favorites", JSON.stringify(favorites));
}

function getLocalStorageFav() {
  const LocalStorageFav = JSON.parse(localStorage.getItem("favorites"));
  if (LocalStorageFav == null) {
    favorites = [];
  } else {
    favorites = LocalStorageFav;
  }
  paintSearchEngine();
  listenFavoriteSeries();
}
getLocalStorageFav();
