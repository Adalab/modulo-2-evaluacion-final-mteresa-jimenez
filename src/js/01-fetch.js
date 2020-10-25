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
