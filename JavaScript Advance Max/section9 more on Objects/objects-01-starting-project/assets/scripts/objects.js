const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");
const movies = [];

const renderMovies = (filter = '') => {
  const movieList = document.getElementById("movie-list");
  if (movies.length === 0) {
    movieList.classList.remove("visible");
    return;
  } else {
    movieList.classList.add("visible");
  }
  movieList.innerHTML = "";

  const filteredMovies = !filter ? movies : movies.filter((movie) => {movie.info.title.includes(filter)
  })

  movies.forEach((movie) => {
    const movieEl = document.createElement("li");
    // Error  // movieEl.textContent = movie.info.title + '-' + movie.info[extraName];
    let text = '\n'+movie.info.title + ' - ';
    for (const key in movie.info) {
      if (key !== 'title')
      text = text + `${key}: ${movie.info[key]} \n`;
    }
    movieList.append(text);
    movieList.style.color = "#f0f"
    movieList.style.fontWeight = "bold"
  
  });
};
const addMovieHandler = () => {
  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value; //
  const extraValue = document.getElementById("extra-value").value;

  if (
    title.trim() === "" ||
    extraName.trim() === "" ||
    extraValue.trim() === ""
  ) {
    return;
  }
  const newMovie = {
    info: { title, [extraName]: extraValue },
    id: Math.random(),
  };
  movies.push(newMovie);
  renderMovies();
};
addMovieBtn.addEventListener("click", addMovieHandler);
