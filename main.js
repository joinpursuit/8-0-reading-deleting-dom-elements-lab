
const removeHeaderPost = document.querySelector("li") // or one - line way === document.querySelector("li").remove()
removeHeaderPost.remove()

const removeSpan = document.querySelector("span")
removeSpan.remove()

const removeLastPost = document.querySelector(".posts article:last-child")
removeLastPost.remove()

const removeTitles = document.querySelectorAll(".posts h3")
removeTitles.forEach(item => item.remove())

console.log("hello")

window.alert("hello, what's ur name");

console.log("hello again")