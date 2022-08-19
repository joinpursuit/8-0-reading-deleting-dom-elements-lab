const post = document.querySelector("header nav ul li");
post.remove();

const span = document.querySelector("span");
span.remove();

const stopPlanning = document.querySelector("main .posts article");
stopPlanning.remove();

const noTitle = document.querySelectorAll(".posts h3");
console.log(noTitle);
noTitle.forEach((h3) => {
  h3.remove();
});
