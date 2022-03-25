const head = document.querySelector('li');
head.remove();

const span = document.querySelector(".featured span");
span.remove();

const articles = document.querySelectorAll("article");
articles[articles.length - 1].remove();

let titles = document.querySelectorAll(".posts article h3");
titles.forEach((title) => {
  title.remove();
});