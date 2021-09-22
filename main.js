const removeItem = document.querySelector('li')
removeItem.remove()

const removeSpan = document.querySelector('span')
removeSpan.remove()

const removePost = document.querySelector('main .posts article')
removePost.remove()

const removeH3 = document.querySelectorAll('main .posts h3')
removeH3.forEach((title) => title.remove())