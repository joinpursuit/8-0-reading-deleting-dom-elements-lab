
const li = document.querySelector("li");
li.remove();


const span = document.querySelector("span");
span.remove();


const lastPost = document.querySelectorAll("article");
lastPost[3].remove();

const removeTitles = document.querySelectorAll("h3")
removeTitles.forEach(title => title.remove())