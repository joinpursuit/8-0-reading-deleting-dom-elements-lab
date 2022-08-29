document.querySelector("li").remove();
document.querySelector("span").remove();
lastPost = document.querySelectorAll("main .posts article");
lastPost[lastPost.length - 1].remove()
const titles = document.querySelectorAll("main .posts h3");
titles.forEach(t => t.remove())