const allPost = document.querySelector("header nav ul li");
allPost.remove();

const featPost = document.querySelector("main section article aside p");
featPost.remove();

const lastPost = document.querySelectorAll("main .posts article");
lastPost[lastPost.length - 1].remove();

const postTitles = document.querySelectorAll("main .posts article h3");
postTitles.forEach(header => header.remove());