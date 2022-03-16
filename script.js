const movieContainer = document.querySelector(".movie-container")

const APIURL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';
const IMGPATH = "https://image.tmdb.org/t/p/w500/"


async function getMovies() {
    const response = await fetch(APIURL);
    const responseData = await response.json();

    const { results } = responseData

    results.forEach(result => {
        const { title, backdrop_path, vote_average: rating} = result;
        console.log(backdrop_path)

        const li = document.createElement("li");
        li.classList.add('movie');
        movieContainer.appendChild(li);

        const img = document.createElement("img");
        img.src = IMGPATH + backdrop_path;
        li.appendChild(img);

        const div = document.createElement("div");
        li.appendChild(div)

        const movieTitle = document.createElement("h4");
        movieTitle.textContent = title;
        div.appendChild(movieTitle)
    
        const ratingEl = document.createElement("span");
        ratingEl.textContent = rating;
        div.appendChild(ratingEl)

        
    })
}

getMovies();

// function displayMovies() {
//     let arr = getMovies()
//     console.log(arr)
//     const { page, results , total_pages, total_results} = arr
//     console.log(results)
// }

// displayMovies();