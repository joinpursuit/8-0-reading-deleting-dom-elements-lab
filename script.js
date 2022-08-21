let allPostsLink = document.querySelector("nav ul li ");
console.log(allPostsLink);
allPostsLink.remove();

let readTime = document.querySelector("article aside span");
readTime.remove();

let lastArticle = document.querySelector(
  "body > main > section.posts > article:nth-child(3)"
);
lastArticle.remove();

let allH3 = document.querySelectorAll(".posts article h3");

for (let h3 of allH3) {
  h3.remove();
}
