const allPosts = document.querySelector('li')
allPosts.remove()
console.log(allPosts)

const span = document.querySelector('span')
console.log(span)
span.remove()

const allTitles = document.querySelectorAll('h3')
allTitles.forEach(title => {
    title.remove();
})

const allArticles = document.querySelectorAll('article')
console.log(allArticles)
allArticles[allArticles.length-1].remove()