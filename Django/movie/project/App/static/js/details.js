var detail = document.getElementById('detail')
// var url = new URL(url_string);
// var c = url.searchParams.get();

// console.log(window.location.href)
var url_str = window.location.href
id = url_str.split("/")
// console.log(id[id.length - 1])
const API_URL_ = `https://api.themoviedb.org/3/movie/${id[id.length - 1]}?api_key=3fd2be6f0c70a2a598f084ddfb75487c`
console.log(API_URL_)
const IMG_PATH_ = 'https://image.tmdb.org/t/p/w1280'
getMoviedetails(API_URL_)

function detailMovie(movies) {
    console.log(movies)

    // detail.innerHTML += ''

    const { title, poster_path, vote_average, overview, id } = movies

    detail.innerHTML += `<div>
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <a href="${id}">
            <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
          <h3>Overview</h3>
          ${overview}
        </div>
        </a>
        </div>
        `
    // detail.appendChild(detail)
    window.location.reload()

}

async function getMoviedetails(url) {
    const res2 = await fetch(url)
    const data2 = await res2.json()
    // console.log(data2)
    detailMovie(data2)
}







