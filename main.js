const posts = document.querySelector('li')
posts.remove()

const readTime = document.querySelector('span')
readTime.remove()

const Post = document.querySelector('main .posts article')
Post.remove()

const bruh = document.querySelectorAll('h3')
bruh.forEach((bruh) => {
    bruh.remove()
}) 
