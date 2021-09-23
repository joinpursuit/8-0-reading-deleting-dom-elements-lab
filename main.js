document.querySelector("header nav ul li").remove();
//document.querySelectorAll("span");

document.querySelectorAll("span").forEach((span) => span.remove());

const post = document.querySelectorAll("article");

post[2].remove();

const titles = document.querySelectorAll("h3");

titles.forEach((title) => title.remove());
