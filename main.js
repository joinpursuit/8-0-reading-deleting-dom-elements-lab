document.querySelector("li").remove();
document.querySelector("span").remove();
document.querySelector("main .posts article").remove();
const titles = document.querySelectorAll("main .posts h3");
titles.forEach(t => t.remove())