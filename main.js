document.querySelector("li").remove();
document.querySelector("span").remove();
document.querySelector("main .posts article").remove();
const postTitles = document.querySelectorAll("main .posts h3");
postTitles.forEach(post => post.remove());

