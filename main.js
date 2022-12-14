const allPosts = document.querySelector('li')
allPosts.remove()

const spanElmt = document.querySelector('span')
spanElmt.remove()

const stopPlan = document.querySelector('main .posts article')
stopPlan.remove()

const notFt = document.querySelectorAll('main .posts h3')
notFt.forEach((featured) => featured.remove())