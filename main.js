const allPost = document.querySelector("li");
allPost.remove()

const readTime = document.querySelector('.featured span');
readTime.remove()

const lastPost = document.querySelectorAll("main .posts article");
lastPost[lastPost.length -1].remove()

const allTitles = document.querySelectorAll('main .posts h3').forEach((el)=> el.remove())
