//first circle and post

const firstCircle = document.querySelector("#circle-1");
const firstPost = document.querySelector("#first-post");

firstCircle.addEventListener("mouseover", function () {
  firstPost.classList.add("highlight-1");
});

firstCircle.addEventListener("mouseout", function () {
  firstPost.classList.remove("highlight-1");
});

//second circle and post

const secondCircle = document.querySelector("#circle-2");
const secondPost = document.querySelector("#second-post");

secondCircle.addEventListener("mouseover", function () {
  secondPost.classList.add("highlight-2");
});

secondCircle.addEventListener("mouseout", function () {
  secondPost.classList.remove("highlight-2");
});

//third circle and post

const thirdCircle = document.querySelector("#circle-3");
const thirdPost = document.querySelector("#third-post");

thirdCircle.addEventListener("mouseover", function () {
  thirdPost.classList.add("highlight-3");
});

thirdCircle.addEventListener("mouseout", function () {
  thirdPost.classList.remove("highlight-3");
});

//animation for ala hamburger menu

const hamburgerMenu = document.querySelector(".hamburger-menu");
const box = document.querySelector(".box");
const sideBarMenu = document.querySelector(".side-box-menu");

hamburgerMenu.addEventListener("click", function () {
  box.classList.add("box-hover");
  sideBarMenu.classList.add("side-box-menu-hover");
});
box.addEventListener("mouseover", function () {
  box.classList.remove("box-hover");
  sideBarMenu.classList.remove("side-box-menu-hover");
});

// animation for search glass

const searchIcon = document.querySelector(".search-icon");
const searchInput = document.querySelector(".search-input");

searchIcon.addEventListener("click", function () {
  searchInput.classList.add("search-input-hover");
});

searchIcon.addEventListener("mouseover", function () {
  searchInput.classList.remove("search-input-hover");
});
