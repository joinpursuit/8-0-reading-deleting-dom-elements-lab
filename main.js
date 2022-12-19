// this removed all post link
const allPost = document.querySelector('li')
allPost.remove()

// this removed span read time
let readTime = document.querySelector('span')
readTime.remove()

// removed the last post only
// since is a few we need to use a
let lastPost = document.querySelectorAll('article')
lastPost[lastPost.length - 1].remove()

// this removed all the titles
// since is a group of titles, we need to use a method to remove
let noTitles = document.querySelectorAll('h3')
noTitles.forEach((title) => {
    title.remove()
})






