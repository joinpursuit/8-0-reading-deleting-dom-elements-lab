let var1 = document.querySelector("li");
var1.remove();
let var2 = document.querySelector("span");
var2.remove();
// document.querySelector("main .posts article").remove(); => notify Raydelys of solution
// document.querySelector([document.querySelector("article").length])
// document.querySelectorAll("article").

//let var3 = document.querySelectorAll("article");
// const lastPost = document.querySelectorAll("article")
// lastPost[2].remove();

// stopPlanning[stopPlanning.length-1.remove();]
// lastChild


// const jeez = document.querySelector("section.posts")
// jeez.remove();

let var3 = document.querySelectorAll("article");
var3[var3.length-1].remove();

const titles = document.querySelectorAll("h3");
titles.forEach((title) => {
    title.remove()
});