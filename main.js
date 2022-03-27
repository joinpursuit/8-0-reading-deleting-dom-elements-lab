console.log("hello");
//To remove All Post in header
let removal = document.querySelector("li");
removal.remove();

//remove span
let removeSpan = document.querySelector("span");
removeSpan.remove();

//remove each h3
let heading = document.querySelectorAll("h3");
heading[2].remove();

//remove last post
let article = document.querySelectorAll("article");
article[article.length - 1].remove();

//remove title
let headingThree = document.querySelectorAll("h3");
headingThree.forEach((headerH3) => {
  headerH3.remove();
});
