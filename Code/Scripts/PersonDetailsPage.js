import { movieID, url, imgPath, movieDetailsData } from "./Global.js";
// var rewie
var PerosnImgpath = 'https://www.gravatar.com/avatar/'
function getMovie(id) {
  let movieUrl = `${url}/person/${id}?api_key=9813ce01a72ca1bd2ae25f091898b1c7`;
  fetch(movieUrl)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      movieDetailsData.innerHTML = "";
      const movieElement = document.createElement("div");
      // let reviews =  fe(id).then(console.log('tmm'));
      // console.log(reviews);
      // movieElement.classList.add("movie");
      movieElement.innerHTML = `<div class='head1'><img class='imgmovie2' src="${imgPath + data.profile_path}" alt="${data.name}" />
          <div class='center1'><h2 id="moveName">${data.name}</h2>
          <h3><span id='age' style="background-color:green;">${data.gender == 1 ? "Female" : "Male"}</span></h3>
          <div class='geners'> <span id='age'>${data.known_for_department}</span></div><br><br> <h4>${data.place_of_birth ?data.place_of_birth:' Not Known Where born' }</h4> 
          <h3><br>popularity : <span style="color:green;">${data.popularity}</span></h3>
          </div>
          <div class="overviewP"><P>${data.biography}</P></div>
          
          </div>`;

            // fe(id).then( console.log('runed'));
            // data.production_companies.forEach(e => {
            //   const movieElement2 = document.createElement("div");
            //   movieElement2.classList.add("company");
            //   movieElement2.innerHTML = `${e.logo_path == null ? `<img class='imgmovie' src="../img/company.jpg" alt="Move" />`:`<img class='imgmovie' src="${imgPath + e.logo_path}" alt="Move" />`}
            //   <div class='center'><h4 id="moveName">${e.name}</h4></div>`;
            //   main3.appendChild(movieElement2);
            // })
            
            
      
      movieDetailsData.appendChild(movieElement);
    });
}
getMovie(movieID);









































// var img='';
// window.fe = async function fe(id){
//     let ReviewUrl = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=9813ce01a72ca1bd2ae25f091898b1c7`;
//     fetch(ReviewUrl)
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {
//          console.log(data.results);
//         return data.results;
//       }).then((data)=>{
//         data.forEach(e => {
//             const movieElement3 = document.createElement("div");
//             if(e.author_details.avatar_path !=null)
//             {
//               if(e.author_details.avatar_path.includes("http"))
//               {
//                 img=e.author_details.avatar_path.split("/");
//                 img=img[img.length-1];
//                 console.log(img);
//               }
//             }
         
//             movieElement3.innerHTML = `<div class="content">
//             <div style="display: flex;
//             flex-direction: row;">
//             ${e.author_details.avatar_path == null ? `<img class='imgpro' src="../img/human.png" alt="person" />`:`<img class='imgpro' src="${e.author_details.avatar_path.includes("http")? PerosnImgpath+img :imgPath + e.author_details.avatar_path}" alt="Person" />`}
//             <h2>${e.author_details.name}</h2> 
//             </div>
//           <div>
//           <span class="rate"> Rating <span style="color:#1d96f6;">${e.author_details.rating?e.author_details.rating :'0'}</span>/10</span><img src="../img/star.png" style="width:50px; height:50px;margin: -10px 0px;"></img></div>
//           </div>
          
//             <div class="contentN"> 
            
//               <div class="ratebox">
//             <p>${e.content}</p>                 
//       </div>
//          `

//             main4.appendChild(movieElement3);
//           })


//       });
//   }
// {/* <p>${e.content}</p> */}