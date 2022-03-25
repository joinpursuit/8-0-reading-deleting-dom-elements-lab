const header = document.querySelector("header nav ul li");
header.remove();

const span = document.querySelector(".featured span");
span.remove();

const post = document.querySelector("main .posts article");
post.remove();

const posts2 = document.querySelectorAll("main .posts h3");
posts2.forEach((title) => {
  title.remove();
});
