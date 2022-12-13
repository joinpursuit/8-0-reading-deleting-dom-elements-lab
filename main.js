document.querySelector("li").remove();
document.querySelector("span").remove();
// document.querySelector("main .posts article").remove(); => notify Raydelys of solution
// document.querySelector([document.querySelector("article").length])
// document.querySelectorAll("article").

//let holderVar = document.querySelectorAll("article");
// const lastPost = document.querySelectorAll("article")
// lastPost[2].remove();

// stopPlanning[stopPlanning.length-1.remove();]
// lastChild


// const jeez = document.querySelector("section.posts")
// jeez.remove();

let holderVar = document.querySelectorAll("article");
holderVar[holderVar.length-1].remove();

const titles = document.querySelectorAll("h3");
titles.forEach((title) => {
    title.remove()
});