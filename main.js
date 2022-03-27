const allPosts = document.querySelector('li')
allPosts.remove()


const removeSpan = document.querySelector('span')
removeSpan.remove()


const headerThree = document.querySelectorAll('h3')
headerThree.forEach(node => node.remove())


const articlePosts = document.querySelectorAll('article')
articlePosts.forEach((article, index) => {
    if(index === 3){ article.remove() }
})
