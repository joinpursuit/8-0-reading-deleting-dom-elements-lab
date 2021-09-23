const post = document.querySelector("header nav ul li")
post.remove()

const read = document.querySelector("aside p span")
read.remove()

const poh3 = document.querySelectorAll("article")
poh3[2].remove()

const titleOff = document.querySelectorAll("h3")
titleOff.forEach((title) => title.remove());
