const allPosts = document.querySelector('header li')
allPosts.remove()

const readTime = document.querySelector('.featured span')
readTime.remove()

const posts = document.querySelectorAll('.posts article')
posts[posts.length - 1].remove()

const postTitles = document.querySelectorAll('.posts h3')
postTitles.forEach(title => title.remove())