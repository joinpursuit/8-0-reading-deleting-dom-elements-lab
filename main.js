let var1 = document.querySelector("header nav ul li");
var1.remove();
let var2 = document.querySelector(".featured article aside p span");
var2.remove();

let var3 = document.querySelectorAll("article");
var3[var3.length-1].remove();

const titles = document.querySelectorAll("h3");
titles.forEach((title) => {
    title.remove()
});