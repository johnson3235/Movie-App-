import { apiUrl,url,  imgPath } from "./Global.js" ;
getPeoples(apiUrl);
function getPeoples() {
  let PeopleUrl = `${url}/person/popular?api_key=9813ce01a72ca1bd2ae25f091898b1c7`;
  fetch(PeopleUrl)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data.results);
      showPeople(data.results);
    });
}

function showPeople(data) {
   main.innerHTML = "";
  data.forEach((people) => {
    const { known_for_department, name ,popularity ,profile_path , adult , gender ,id} = people;
    const peopleElement = document.createElement("div");
    peopleElement.classList.add("movie");
    peopleElement.innerHTML = `<a href="./DetailPerson.html?id=${id}"><img class='imgpeople' src="${profile_path!= null ? imgPath + profile_path : gender==1?'../img/girl.png':'../img/man.png'}" alt="Move" />
        <div class='center' style="color: white;"><h4 id="moveName" style="bottom: 25px;">${name}</h4>
        <h4>His popularity&nbsp;&nbsp;  <span style="color:#0e76c9;">${popularity}</span></h4>
        <h3>${known_for_department}</h3></div></a>
      `;
    main.appendChild(peopleElement);
  });
}


window.People_search = function People_search(query){
  console.log(query);
    let SearchUrl = `${url}/search/person?api_key=9813ce01a72ca1bd2ae25f091898b1c7&language=en-US&query=${query}`;
    fetch(SearchUrl)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.results);
        showPeople(data.results);
      });
  }