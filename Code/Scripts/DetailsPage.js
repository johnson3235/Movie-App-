import { movieID, url, imgPath, movieDetailsData } from "./Global.js";
// var rewie
var PerosnImgpath = 'https://www.gravatar.com/avatar/'
var MoiveId = 0;
function getMovie(id) {
  MoiveId=id;
  let movieUrl = `${url}/movie/${id}?api_key=9813ce01a72ca1bd2ae25f091898b1c7`;
  fetch(movieUrl)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      movieDetailsData.innerHTML = "";
      const movieElement = document.createElement("div");
      // let reviews =  fe(id).then(console.log('tmm'));
      // console.log(reviews);
      // movieElement.classList.add("movie");
      let string = `<div class='head1'><img class='imgmovie2' src="${imgPath + data.poster_path}" alt="${data.title}" />
      <div class='center1'><h2 id="moveName">${data.original_title}</h2><div class='geners'>`;
      // movieElement.innerHTML = `<div class='head1'><img class='imgmovie2' src="${imgPath + data.poster_path}" alt="${data.title}" />
      //     <div class='center1'><h2 id="moveName">${data.original_title}</h2>
      //     `;


      data.genres.forEach(e => {
       
       string = string+`<span id='age'>${e.name}</span>`
     

      })


          string = string + `</div>
          <h3><span id='age' style="background-color:${data.adult == true ? 'red':'green'};">${data.adult == true ? "Adults +16" : "Everyone"}</span></h3>
          <h4>${data.tagline}<br><br> ${data.overview}</h4> 
          <h3>First Show : <span style="color:#1d96f6;">${data.release_date}</span><br><br>popularity : <span style="color:green;">${data.popularity}</span></h3>
          </div>
          </div>`;
          movieElement.innerHTML =string;
          // fe(id).then( console.log('runed'));


         

            data.production_companies.forEach(e => {
              const movieElement2 = document.createElement("div");
              movieElement2.classList.add("company");
              movieElement2.innerHTML = `${e.logo_path == null ? `<img class='imgmovie' src="../img/company.jpg" alt="Move" />`:`<img class='imgmovie' src="${imgPath + e.logo_path}" alt="Move" />`}
              <div class='center'><h4 id="moveName">${e.name}</h4></div>`;
              main3.appendChild(movieElement2);
            })
            
            
      
      movieDetailsData.appendChild(movieElement);
    });
}
getMovie(movieID);

// for Get Reviews from API



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

var dd = getCookie(MoiveId);

if(dd)
{
var reviewss = dd.split('},');

for(let i = 0;i<reviewss.length;i++)
{
  if(i != reviewss.length-1)
  {
    reviewss[i] = reviewss[i]+'}';
  }
  
  reviewss[i] = JSON.parse(reviewss[i]);
}

reviewss.forEach((e)=>{
  const movieElement3 = document.createElement("div");
  movieElement3.innerHTML = `<div class="content">
  <div style="display: flex;
   flex-direction: row;">
   <img class='imgpro' src="../img/human.png" alt="person" />
    <h2>${e.name}</h2> 
    </div>
  <div>
 <span class="rate"> Rating <span style="color:#1d96f6;">${e.rate?e.rate :'0'}</span>/10</span><img src="../img/star.png" style="width:50px; height:50px;margin: -10px 0px;"></img></div>
  </div>
    <div class="contentN"> 
   
      <div class="ratebox">
    <p>${e.review}</p>                 
</div>
 `
 main4.appendChild(movieElement3);
 
});


}

window.post = async function post(){
    var list = [];
    if(getCookie(MoiveId)) {
      var end = getCookiess(MoiveId); 
      list.push(end);
   } 
  
    var review = document.getElementById('rev1').value;
    var rate = document.getElementById('rate1').value;
    var name = document.getElementById('nam1').value;
    if(review && name && rate)
   {
    var arr ={id:MoiveId,name: name ,review: review,rate:rate}
    var json_str = JSON.stringify(arr);
    list.push(json_str);
     document.cookie =`${MoiveId} = ${list};`
     window.location.reload();
   }
   else{
    window.alert("please Enter all fields to submit your Review")
   }
   
  }


  function getCookie(val) {
    var name = val + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if ((c.indexOf(name)) == 0) {
            return c.substr(name.length);
        }
    }
    
}

  function getCookiess(val) {
    var json_str = getCookie(val);
    return json_str;
  }

