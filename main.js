const allPosts = document.querySelector('li')
//console.log(allPosts)
allPosts.remove()

const span = document.querySelector('span')
//console.log(span)
span.remove()

const planning = document.querySelector('main .posts article')
//console.log(planning)
planning.remove()

const allTitles = document.querySelectorAll('main .posts h3') 

//console.log(allTitles)
allTitles.forEach((title) => {title.remove()})




