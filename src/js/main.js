"use strict";

let series = [];

function getData(ev) {
  ev.preventDefault();
  const inputElement = document.querySelector(".js-input-search");
  fetch(`http://api.tvmaze.com/search/shows?q=${inputElement.value}`)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      series = data;
      paintSearchEngine();
    });
}

// pintar HTML

function paintSearchEngine() {
  let html = "";

  html += "<ul>";
  for (const serie of series) {
    console.log(serie.show.name);
    html += "<li>";
    html += "<div>";
    html += `<img src=url(${serie.show.image.medium})/>`;
    html += `<h2>${serie.show.name}</h2>`;
    html += "</div>";
    html += "</li>";
  }
  html += "</ul>";
  const showsContainer = document.querySelector(".js-container");
  showsContainer.innerHTML = html;
}

// listen search btn

const btnElement = document.querySelector(".js-btn");
btnElement.addEventListener("click", getData);
