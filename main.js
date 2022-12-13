const allPost = document.querySelector('li');
allPost.remove()

const readTime = document.querySelector('span');
readTime.remove()

const lastPost = document.querySelectorAll('article');
lastPost[2].remove()

const titles = document.querySelectorAll('h3');
titles.forEach((title) => {
    title.remove()
})