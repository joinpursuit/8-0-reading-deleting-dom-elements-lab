
// const allPost= document.querySelector("li");
// allPost.remove() //have to remove using variable 
// const readTime= document.querySelector("span");
// readTime.remove //have to remove using the variable
// const lastPost = document.querySelectorAll('article');
// lastPost[2].remove /*look into the html article, and count
// the index position*/
// const titles= document.querySelectorAll('h3')
// // this is a NODE LIST it requires iteration
// titles.forEach(title);{
//     title.remove 
// }  This code was taking the long route. 


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