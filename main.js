const allPost = document.querySelector('li')

allPost.remove()

const span = document.querySelector('span')

span.remove()

const lastPost = document.querySelector('main .posts article')

lastPost.remove()

const lasth = document.querySelectorAll('main .posts h3')

lasth.forEach(el => {
    el.remove()
})