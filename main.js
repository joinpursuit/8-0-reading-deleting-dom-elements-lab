let allPost = document.querySelector("header nav ul li")
allPost.remove()

let span = document.querySelector(".featured span")
span.remove()

let lastArt = document.querySelectorAll("main .posts article")
lastArt[lastArt.length-1].remove()

let allTitles = document.querySelectorAll("main .posts h3")
for (let title of allTitles){
    title.remove()
}
