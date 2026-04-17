window.onload = function () {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    const ulElement = document.querySelector("ul");
    if (xhr.status == 200) {
      console.log(xhr.responseText);
      const movies = Object.entries(JSON.parse(xhr.responseText));
      console.log(movies);
      movies.forEach(([id, movie]) => {
        console.log(movie);
        /* Task 1.3. Add your code from exercise 1 here 
           and include a non-functional 'Edit' button
           to pass this test */
        ulElement.insertAdjacentHTML('beforeend', `
    <li class="movie">
        <div class="movie-container">
            <div class="movie-image">
                <img src="${movie.poster}" alt="${movie.title} poster">
            </div>
            <div class="movie-text">
                <h2>${movie.title}</h2>
                <p>Released: ${movie.released}</p>
                <p>Runtime: ${movie.runtime} min</p>
                <p>Genre: ${movie.genres}</p>
                <p>Directors: ${movie.directors}</p>
                <p>Writers: ${movie.writers}</p>
                <p>Actors: ${movie.actors}</p>
                <p>${movie.plot}</p>
                <p>Metascore: ${movie.metascore}</p>
                <p>IMDb Rating: ${movie.imdbRating}</p>
            </div>
            <div class="movie-edit-btn">
              <button class="edit-btn">
              <a href="edit.html"" type="button" data-id="${movie.imdbID}" class="edit-btn">
              Edit
              </a>
              </button>
            </div>
        </div>
    </li>
`);
      })

    } else {
      bodyElement.append(
        "Daten konnten nicht geladen werden, Status " +
        xhr.status +
        " - " +
        xhr.statusText
      );
    }
  };
  xhr.open("GET", "/movies");
  xhr.send();
};
