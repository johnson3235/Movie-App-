import { movieID, url, imgPath, movieDetailsData  ,main3,main4} from "./Global.js";
// var rewie
var PerosnImgpath = 'https://www.gravatar.com/avatar/'
function getMovie(id) {
  let movieUrl = `${url}/tv/${id}?api_key=9813ce01a72ca1bd2ae25f091898b1c7`;
  fetch(movieUrl)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      movieDetailsData.innerHTML = "";
      const movieElement = document.createElement("div");
      // let reviews =  fe(id).then(console.log('tmm'));
      // console.log(reviews);
      // movieElement.classList.add("movie");
      var string = `<div class='head1'><a href='${data.homepage}'><img class='imgmovie2' src="${imgPath + data.poster_path}" alt="${data.title}" /></a>
      <div class='center1'><h2 id="moveName">${data.name}</h2><div class='geners'>`

      data.genres.forEach(e => {
       
       string = string+`<span id='age'>${e.name}</span>`
      })

          string = string + ` </div>
          <h3><span id='age' style="background-color:${data.adult == true ? 'red':'green'};">${data.adult == true ? "Adults +16" : "Everyone"}</span></h3>
          <h4>${data.tagline}<br><br> ${data.overview}</h4> 
          <h3>First Show : <span style="color:#1d96f6;">${data.last_air_date}</span><br><br>popularity : <span style="color:green;">${data.popularity}</span></h3>
          </div>
          </div>`;
    
          movieElement.innerHTML =string;
            data.seasons.forEach(e => {
              const movieElement2 = document.createElement("div");
              movieElement2.classList.add("season");
              movieElement2.innerHTML = `<img class='imgmovie' src="${e.poster_path!= null ? imgPath + e.poster_path : './img/Moive.png'}" alt="Move" />
            <div class='center'><h4 id="moveName">${e.name}</h4> <h6 id="moveName">${e.episode_count} episode</h6></div>`;
              main3.appendChild(movieElement2);
      
            });
            
      
      movieDetailsData.appendChild(movieElement);
    });
}
getMovie(movieID);

