const allPosts = document.querySelector("header li");

allPosts.remove();

const span = document.querySelector("aside span");
span.remove();

const stopPlanning = document.querySelector(".posts article");

stopPlanning.remove();

const titles = document.querySelectorAll(".posts h3");

titles.forEach((title) => {
  title.remove();
});
