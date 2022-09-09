const API_KEY = 'api_key=0fa3b99c755bf245fc7c8034a0a35aaa';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?primary_release_year=2022&&'
+API_KEY;

const IMG_URL = 'https://image.tmdb.org/t/p/w500'

getMovies(API_URL);



function getMovies(url) {
    
    fetch(url).then(res => res.json()).then(data => {
        showMovies(data.results);

    })

}

function showMovies(data) {
    main.innerHTML = " ";
    data.forEach((movie) => {
      const { title, poster_path, overview } = movie;
      const movieEl = document.createElement("article");
      movieEl.classList.add("card");
      movieEl.innerHTML = `
      <div class="card" style="width: 18rem">
          <img src="${
            IMG_URL + poster_path
          }" class="card-img-top" alt="${title}" />
          <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">
              "${overview}"
            </p>
          </div> 
          </div>
          `;
  
      main.appendChild(movieEl);
    });
  }
const genres = [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 10770,
      "name": "TV Movie"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "War"
    },
    {
      "id": 37,
      "name": "Western"
    }
]

function showGenres(data) {
    optionEl.innerHTML = '';
    genres.forEach(genre => {
        const t = document.createElement('div');
        t.classList.add('option');
        t.id = genre.id;
        t.innerText = genre.name;
        t.addEventListener('click', () => {
            if(selectedGenre.length == 0){
                selectedGenre.push(genre.id);
            }else {
                if(selectedGenre.includes(genre.id)){
                    selectedGenre.forEach((id, idx) => {
                        if(id == genre.id){
                            selectedGenre.splice(idx,1);
                        }
                    })
                }else{
                    selectedGenre.push(genre.id);
                }
            }
            console.log(selectedGenre)
            getMovies(API_URL + '&with_genres=' + encodeURI(selectedGenre.join(',')))
        })
        optionEl.appendChild(t);
    })
    
}