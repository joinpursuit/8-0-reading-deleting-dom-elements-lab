const allPostLink = document.querySelector("header nav ul li");
allPostLink.remove();

const featuredSpanElement = document.querySelector(".featured span");
featuredSpanElement.remove();

const lastPost = document.querySelector("main .posts article");
lastPost.remove();

const postTitles = document.querySelectorAll("main .posts h3");
postTitles.forEach((title) => title.remove());
