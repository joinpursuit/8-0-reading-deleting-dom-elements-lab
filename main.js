document.querySelector(`li`).remove()
document.querySelector(`span`).remove()
const lastPost = document.querySelectorAll(`article`)
// console.log(lastPost)
lastPost[3].remove()

// const titles = document.querySelectorAll(`title:not(.featured)`)
const headings = document.querySelectorAll(`h1, h2, h3`)
// console.log(headings)
headings.forEach(header => header.remove())

