const API_KEY = "e7f69b0e40520a4cf6cfffa075f39111"
const MOVIE_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`

const main = document.getElementById('main')
const search = document.getElementById('search')
const form = document.getElementById('form')
getMovies(MOVIE_URL)

async function getMovies(url) {
    const resp = await fetch(url);
    const data = await resp.json()
    updateMovies(data.results)
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const searchTerm = search.value
    if (searchTerm && searchTerm !== '') {
        getMovies(SEARCH_URL + searchTerm)
        search.value = ''
    } else {
        window.location.reload()
    }
})


function updateMovies(movies) {
    main.innerHTML = ""
    movies.forEach(movie => {
        const { poster_path, original_title, overview, vote_average } = movie
        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')
        movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}"
            alt="${original_title}">
            <div class="movie-info">
                <div class="title">${original_title}</div>
                <div class="rating ${getRatingStyle(vote_average)}">${vote_average}</div>
            </div>
            <div class="description">
                <div>OverView</div>
                ${overview}
            </div>
        `
        main.appendChild(movieEl)
    });
}

function getRatingStyle(rating) {
    if (rating > 8) {
        return "green"
    } else if (rating > 5) {
        return "orange"
    } else {
        return "red"
    }
}
