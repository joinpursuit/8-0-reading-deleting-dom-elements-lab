const allPost = document.querySelector("li");
allPost.remove();

const readTime = document.querySelector("span");
readTime.remove();

const lastPost = document.querySelectorAll("article");
lastPost[lastPost.length-1].remove();

document.querySelectorAll(".posts h3").forEach(post => post.remove())