const header = document.querySelector("li");
header.remove();

const span = document.querySelector("span");
span.remove();

const article = document.getElementsByClassName("posts");
for (let art of article) {
  art.lastElementChild.remove();
}

let postTitles = document.querySelectorAll(".posts article h3");
postTitles.forEach((title) => {
  title.remove();
});
