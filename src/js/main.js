"use strict";

let series = [];
const seriesContainer = document.querySelector(".js-container");

fetch(`http://api.tvmaze.com/search/shows?q=${name})`)
  .then(function (response) {
    console.log(response);
    return response.json();
  })
  .then((response) => response.json())
  .then((data) => {
    series = data.series;
  });

paintSearchEngine();

// pintar HTML

function paintSearchEngine() {
  let html = "";
  html += "<form>";
  html += '<label for="search">';
  html +=
    '<input type="text" id="search" placeholder="Nombre de la serie" class="js-input-search"/>';
  html += '<button class="js-btn">Search</button>';
  html += "</form>";
  html += "<ul>";
  for (const serie of series) {
    html += "<li>";
    html += "<div>";
    html += `<img src=${series.image.medium}/>`;
    html += `<h2>${serie.name}</h2>`;
    html += "</div>";
    html += "</li>";
  }
  html += "</ul>";
  seriesContainer.innerHTML = html;
}
