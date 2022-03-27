const allPost = document.querySelector("header nav ul li");
allPost.remove();

const readTime = document.querySelector(".featured span");
readTime.remove();


const hThreePosts = document.querySelector("main .posts article");
hThreePosts.remove();

const noTitle = document.querySelectorAll("main .posts h3");
noTitle.forEach(i => {i.remove()})
