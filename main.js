const allPosts = document.querySelector("li");
allPosts.remove();

const readTime = document.querySelector("span");
readTime.remove();

const LastArticle = document.querySelectorAll("article");
LastArticle[LastArticle.length - 1].remove();

const Titles = document.querySelectorAll("h3");
Titles.forEach((title) => title.remove());
