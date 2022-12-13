// this removed all post link
const allPost = document.querySelector('li')
allPost.remove()

// this removed span read time
let readTime = document.querySelector('span')
readTime.remove()

// removed the last post only
let lastPost = document.querySelectorAll('article')
lastPost[lastPost.length - 1].remove()





