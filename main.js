const aposts = document.querySelector("header nav ul li")
console.log (aposts.remove())

const tSpan = document.querySelector(".featured span")
console.log(tSpan.remove())

const lPost = document.querySelector(".posts article")
console.log(lPost.remove(2))

const aTitles = document.querySelectorAll("h3")
aTitles.forEach(title => {
    title.remove()
})