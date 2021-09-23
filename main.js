document.querySelector("li").remove();
document.querySelector("section.featured span").remove();
let artArr = document.querySelectorAll("section.posts article");
artArr[artArr.lenght-1].remove();
let newArr = document.querySelector("section.psots article h3");
newArr.forEach(el=>el.remove());