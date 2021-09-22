document.querySelector("li").remove();
document.querySelector("section.featured span").remove();
let articleArr = document.querySelectorAll("section.posts article");
articleArr[articleArr.length-1].remove();
let h3Arr = document.querySelectorAll("section.posts article h3");
h3Arr.forEach(el=>el.remove());