const aLinkRem = document.querySelector("li");
aLinkRem.remove();

const span = document.querySelectorAll("span");
span[0].remove();

let article = document.querySelectorAll("article");
article[article.length-1].remove();

let heading = document.querySelectorAll("h3");
heading.forEach((headerH3) => {
    headerH3.remove();
})


