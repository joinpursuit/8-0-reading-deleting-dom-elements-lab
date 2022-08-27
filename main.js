document.querySelector("li").remove()

document.querySelector("span").remove()

document.querySelector(".posts article").remove()

const allTitles = document.querySelectorAll("main .posts h3");
allTitles.forEach(t => t.remove());