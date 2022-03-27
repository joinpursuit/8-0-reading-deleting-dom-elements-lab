

const allPosts = document.querySelector("header li");
allPosts.remove();

const readTime = document.querySelector("article span");
readTime.remove();

let posts = document.querySelectorAll("article");
const lastPost = posts[posts.length - 1];
lastPost.remove();

posts = document.querySelectorAll(".posts article h3");
posts.forEach(e => e.remove());