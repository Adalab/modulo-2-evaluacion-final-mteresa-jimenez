"use strict";

// pintar HTML

function paintSearchEngine() {
  let html = "";
  html += '<section class="section1">';
  html += '<h2 class="favorites-title"> &#9733; Mi lista de favoritos</h2>';
  html += "<ul>";
  for (const favorite of favorites) {
    html += "<li >";
    html += '<div class="favorites-list-container">';
    html += `<img class="js-img-favorites img-favorites" src="https://via.placeholder.com/210x295/ffffff/666666/?
    text=TV"/>`;
    html +=
      '<h2 class="js-name-favorites name-favorites" maxlength="20">Nombre de la serie</h2>';
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
    html += `<h2 class="series-name">${serie.show.name}</h2>`;
    html += "</div>";
    html += "</li>";
  }
  html += "</ul>";
  html += "</section>";
  const showsContainer = document.querySelector(".js-container");
  showsContainer.innerHTML = html;
}
