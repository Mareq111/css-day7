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
