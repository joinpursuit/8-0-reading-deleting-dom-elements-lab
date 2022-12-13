const allPosts = document.querySelector("li");
allPosts.remove();

const spanTag = document.querySelector("span");
spanTag.remove();

// const stopPlanning = document.querySelectorAll("article");
// stopPlanning[2].remove();
// stopPlanning[stopPlanning.length-1].remove();
const stopPlanning = document.querySelector("main .posts article");
stopPlanning.remove();

const titles = document.querySelectorAll("h3");
titles.forEach(title => title.remove())