// a[0].remove();

const allPosts = document.querySelectorAll("header nav ul li");
allPosts[0].remove();

const readTime = document.querySelector(".featured aside span");
readTime.remove();

const lastPost = document.querySelectorAll(".posts article");
lastPost[lastPost.length - 1].remove();

const allTitles = document.querySelectorAll(".posts article h3");
allTitles.forEach((title) => title.remove());
