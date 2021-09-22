const li = document.querySelector("li");
li.remove();

const span = document.querySelector("span");
span.remove();

const article = document.querySelectorAll("article")
[3].remove();

const headers = document.querySelectorAll("h3");
headers.forEach((header) => header.remove());
