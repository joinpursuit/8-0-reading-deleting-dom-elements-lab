const header = document.querySelector("header nav ul li");
header.remove();

const span = document.querySelector(".featured span");
span.remove();

const post = document.querySelectorAll("main .posts article");
post[post.length - 1].remove();

const posts2 = document.querySelectorAll("main .posts h3");
posts2.forEach((title) => {
  title.remove();
});
