const li = document.querySelector("li");

li.remove();

const spanEle = document.querySelector("span");

spanEle.remove();

const articles = document.querySelectorAll("article");
articles[articles.length - 1].remove();
