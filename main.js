let allPost = document.querySelector("li")
allPost.remove()


const readTime = document.querySelector("span")
readTime.remove()

const articles =  document.querySelectorAll("article")
articles[articles.length - 1].remove()

const titles = document.querySelectorAll("h3");

titles.forEach((title) => title.remove());