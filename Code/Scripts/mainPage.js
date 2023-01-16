import { apiUrl,url, imgPath } from "./Global.js" ;

getMovies(apiUrl);
function getMovies(url) {
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      // console.log(data.results);
      showMovie(data.results);
    });
}

function showMovie(data) {
  main.innerHTML = "";
  data.forEach((movie) => {
    const { title, poster_path , adult ,id } = movie;
    
    const movieElement = document.createElement("div");
    movieElement.classList.add("movie");
    movieElement.innerHTML = `<img class='imgmovie' src="${poster_path!= null ? imgPath + poster_path : './img/Moive.png'}" alt="Move" />
        <div class='center'><h4 id="moveName">${title}</h4></div>
        <a  href='./Pages/movies.html?id=${id}'> <div class="overlay">
        <img class='iconplay' src="./img/play3.png" alt="Move" />
        <h2>${adult == true ? "For Adults" : "For EveryOne"}</h2>
        </div></a>`;
    main.appendChild(movieElement);
  });
}


window.Movie_search = function Movie_search(query){
  console.log(query);
  if(query !='')
  {
    let SearchUrl = `${url}/search/movie?api_key=9813ce01a72ca1bd2ae25f091898b1c7&language=en-US&query=${query}`;
    fetch(SearchUrl)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.results);
       
        showMovie(data.results);
      });
    }
    else{
      getMovies(apiUrl);
    }
  }



