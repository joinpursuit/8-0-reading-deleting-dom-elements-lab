const allPosts = document.querySelector("header nav ul li");
allPosts.remove();

const readTime = document.querySelector(".featured span");
readTime.remove();

const posts = document.querySelectorAll(".posts article");
posts[2].remove();

const titles = document.querySelectorAll(".posts h3");
titles.forEach((title) => title.remove());
