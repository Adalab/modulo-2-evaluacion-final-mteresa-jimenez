"use strict";

let series = [];
let favorites = [];

function getData(ev) {
  ev.preventDefault();

  const inputElement = document.querySelector(".js-input-search");
  fetch(`//api.tvmaze.com/search/shows?q=${inputElement.value}`)
    .then(function (response) {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      series = data;
      paintSearchEngine();
      listenFavoriteSeries();
      setLocalStorageFav();
    });
}

// pintar HTML

function paintSearchEngine() {
  let html = "";
  html += '<section class="section1">';
  html += '<h2 class="favorites-title"> &#9733; Mi lista de favoritos</h2>';
  html += "<ul>";
  for (const favorite of favorites) {
    html += "<li >";
    html += '<div class="favorites-list-container">';
    // for (const show.name in)
    html += '<button class="remove-favorite js-remove-favorite">x</button>';
    html += "</div>";
    html += "</li>";
  }
  html += "</ul>";
  html += "</section>";
  html += '<section class="section2">';
  html += '<ul class="section2-list">';
  for (const serie of series) {
    let classFavorite;
    const favoriteIndex = favorites.indexOf(serie.show.id);
    if (favoriteIndex === -1) {
      classFavorite = "";
    } else {
      classFavorite = "favorite";
    }
    html += `<li class="js-series-item series-item ${classFavorite}"  id="${serie.show.id}">`;
    html += '<div class="series-box">';
    if (serie.show.image === null) {
      html += `<img src="https://via.placeholder.com/210x295/ffffff/666666/?
      text=TV"/>`;
    } else {
      html += `<img src="${serie.show.image.medium}"/>`;
    }
    html += `<h2>${serie.show.name}</h2>`;
    html += "</div>";
    html += "</li>";
  }
  html += "</ul>";
  html += "</section>";
  const showsContainer = document.querySelector(".js-container");
  showsContainer.innerHTML = html;
}

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
function listenRemoveFavorite() {
  const btnRemoveFavs = document.querySelectorAll(".js-remove-favorite");
  for (const btnRemoveFav of btnRemoveFavs) {
    btnRemoveFav.addEventListener("click", removeFavorite);
  }
  console.log("click en eliminar favoritos");
}

// listen search btn

const btnElement = document.querySelector(".js-btn");
btnElement.addEventListener("click", getData);

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
