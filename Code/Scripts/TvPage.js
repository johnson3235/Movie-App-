import { apiUrl, url , imgPath } from "./Global.js" ;

getTvShows();
function getTvShows() {
  let TvUrl = `${url}/tv/top_rated?api_key=9813ce01a72ca1bd2ae25f091898b1c7`;
  fetch(TvUrl)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      // console.log(data.results);
      showTvShow(data.results);
    });
}

function showTvShow(data) {
   main.innerHTML = "";
  data.forEach((tvShow) => {
    const { original_language, name ,original_name ,poster_path , first_air_date ,popularity ,origin_country,id} = tvShow;
    const tvShowElement = document.createElement("div");
    tvShowElement.classList.add("movie");
    tvShowElement.innerHTML = `<a href="./DetailTv.html?id=${id}"><img class='imgtvShow' src="${poster_path!= null ? imgPath + poster_path : '../img/Moive.png'}" alt="Move" />
        <div class='center' style="color: white;"><h4 id="moveName" style="bottom: 25px;">${name}</h4>
        <h4>First Show &nbsp;<span style="color:#0e76c9;">${first_air_date}</span></h4>
        </div><div class="overlay" style="text-align:center;">
        <h3>${origin_country[0]}-${original_language}</h3>
        <h3>${original_name}</h3>
        <h3>${popularity}</h3>
        <h2></h2>
        </div></a>`
      ;
    main.appendChild(tvShowElement);
  });
}


window.TvShow_search = function TvShow_search(query){
  console.log(query);

    let SearchUrl = `${url}/search/tv?api_key=9813ce01a72ca1bd2ae25f091898b1c7&language=en-US&query=${query}`;
    fetch(SearchUrl)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.results);
        showTvShow(data.results);
      });
 
  }