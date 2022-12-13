const header = document.querySelector("li")
header.remove()

const span = document.querySelector("span")
span.remove()

const lastArticle = document.querySelectorAll("article")
lastArticle[2].remove()

const title = document.querySelectorAll(".posts h3")
title.forEach((title) => {
    title.remove()
})