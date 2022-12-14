const allPost = document.querySelector("header nav ul li")
allPost.remove()

const readTime = document.querySelector("aside span")
readTime.remove()

const lastPost = document.querySelector("main .posts article")
lastPost.remove()

const noTitle = document.querySelectorAll("main .posts h3")
noTitle.forEach(titles => titles.remove())