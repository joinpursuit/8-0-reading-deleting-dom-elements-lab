const list = document.querySelector("header nav ul li");
list.remove();

const span = document.querySelector(".featured span");
span.remove();

const article = document.querySelector("main .posts article");
article.remove();

const h3 = document.querySelectorAll("main .posts h3");
h3.forEach((item)=>{
    return item.remove()
});