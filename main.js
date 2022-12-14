document.querySelector("header nav ul li").remove()

document.querySelector(".featured span").remove()

let allArticles = document.querySelectorAll("main .posts article")
allArticles[allArticles.length -1].remove()

let elementTitles = document.querySelectorAll("main .posts h3")
for(let title of elementTitles) {
    title.remove()
}