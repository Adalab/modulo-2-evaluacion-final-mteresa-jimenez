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
    html += `<li class="js-series-item" id="${serie.show.id}">`;
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
  favorites.push(clicked);
  console.log(favorites);
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
