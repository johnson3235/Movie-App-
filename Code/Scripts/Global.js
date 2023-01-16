export let movieID = location.search.split("=")[1];
export const apiKey = "&api_key=9813ce01a72ca1bd2ae25f091898b1c7";
export const url = "https://api.themoviedb.org/3";
export const imgPath = "https://image.tmdb.org/t/p/w500/";
export const path = "/discover/movie?sort_by=popularity.desc";
export const apiUrl = url + path + apiKey;
export const main = document.getElementById("main");
export const movieDetailsData = document.getElementById("main2");
export const main3 = document.getElementById("main3");
export const main4 = document.getElementById("main4");
export var home = document.getElementById("home");
export var people = document.getElementById("people");
export var tv = document.getElementById("tv");


