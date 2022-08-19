let allPosts = document.querySelector(`#all-posts`)
allPosts.remove()

let span = document.querySelector(`span`)
span.remove()

let lastPost = document.querySelector(`#stop-planning`)
lastPost.remove()

let titles = document.querySelectorAll(`article h3`)
titles.forEach((i) => {
    i.remove()
})