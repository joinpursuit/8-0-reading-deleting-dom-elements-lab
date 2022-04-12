const allPost = document.querySelector('header li')
allPost.remove()

const readTime = document.querySelector('article span')
readTime.remove()

const stopPlanning = document.querySelectorAll('.posts article')
stopPlanning[2].remove()

const allNonFeaturedPosts= document.querySelectorAll('h3')
allNonFeaturedPosts.forEach((post) => {
    post.remove()
})