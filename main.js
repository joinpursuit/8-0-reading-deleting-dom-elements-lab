const allPosts = document.querySelector("header nav ul li");
allPosts.remove()
console.log(allPosts)

const readTimeElement = document.querySelector("aside span")
readTimeElement.remove()

const lastPost = document.querySelector("main .posts article")
    lastPost.remove()


const noTitle = document.querySelectorAll("main .posts h3")
noTitle.forEach((titles) => titles.remove())
