const links = document.querySelectorAll("header nav ul li");
links[0].remove();

const span = document.querySelector(".featured aside span");

const removeSpan = span.remove();

const post = document.querySelectorAll(".posts article");

post[post.length - 1].remove();

const titles = document.querySelectorAll("main .posts h3");

titles.forEach((title) => title.remove());
