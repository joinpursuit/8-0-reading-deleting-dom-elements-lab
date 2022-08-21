const allPostLink = document.querySelector("li");
allPostLink.remove();

const spanElem = document.querySelector("p span");
spanElem.remove();

const lastArticle = document.querySelector(".posts article:last-child");
lastArticle.remove();

const nonFeatTitles = document.querySelectorAll(".posts h3");
for (const article of nonFeatTitles) {
    article.remove();
}