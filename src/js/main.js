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
    });
}

// pintar HTML

function paintSearchEngine() {
  let html = "";

  html += "<ul>";
  for (const serie of series) {
    // console.log(serie);
    let classFavorite;
    const favoriteIndex = favorites.indexOf(serie.show.id);
    if (favoriteIndex === -1) {
      classFavorite = "";
    } else {
      classFavorite = "favorite";
    }

    html += `<li class="js-series-item ${classFavorite}" id="${serie.show.id}">`;
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
  const showsContainer = document.querySelector(".js-container");
  showsContainer.innerHTML = html;
}

// handle favorite function

function markFavoriteSeries(ev) {
  const clicked = parseInt(ev.currentTarget.id);
  // console.log("elemento clicado", clicked);
  const indexOfFavorite = favorites.indexOf(clicked);
  // console.log("index", indexOfFavorite);
  // const findFavorite= favorite.find(click=>{return click});

  if (indexOfFavorite === -1) {
    console.log("lo añado");
    favorites.push(clicked);
    // Creía que la opción más sencilla era esta, pero solamente selecciona el primer elemento de la lista listElement.classList.add("favorite").show.id;
  } else {
    console.log("lo quito");
    favorites.splice(indexOfFavorite, 1);
    // SPLICE: .splice(índice del elemento a partir del que quieres borrar, nº elementos que quieres borrar)
    // listElement.classList.remove("favorite").show.id;
  }
  paintSearchEngine();
  listenFavoriteSeries();
  // Cada vez que marcamos un favorito, es como si la página se volviese a cargar, por eso debemos pintar y escuchar otra vez
  console.log("array de favoritos", favorites);
}

// listen favorite function

function listenFavoriteSeries() {
  const seriesItems = document.querySelectorAll(".js-series-item");
  for (const seriesItem of seriesItems) {
    seriesItem.addEventListener("click", markFavoriteSeries);
  }
}

// listen search btn

const btnElement = document.querySelector(".js-btn");
btnElement.addEventListener("click", getData);
