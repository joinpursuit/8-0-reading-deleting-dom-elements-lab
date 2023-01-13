document.querySelector("li").remove();

document.querySelector("span").remove();

const lastPost = document.querySelectorAll('article');
lastPost[3].remove();

const titles = document.querySelectorAll('h3');
titles.forEach((title) => {
    title.remove();
})