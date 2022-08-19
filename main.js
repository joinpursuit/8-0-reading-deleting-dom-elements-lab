

const allPosts = document.querySelector('li')
 allPosts.remove();

const spans = document.querySelector('aside span')
spans.remove();

const lastPost = document.querySelector('main .posts article')
lastPost.remove()

const headThree = document.querySelectorAll('main .posts h3')
headThree.forEach((title)=> {title.remove()})
