const li = document.querySelector("li");
li.remove();

const span = document.querySelector("span");
span.remove();

const article = document.querySelectorAll("article");
let last = article[article.length -1];
last.remove();

const headerRemove = document.querySelectorAll("h3");
for (let i = 0; i < headerRemove.length; i++){
    headerRemove[i].remove();
}