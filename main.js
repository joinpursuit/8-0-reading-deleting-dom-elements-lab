const delheader = document.querySelector('header nav ul li')
delheader.remove()

const delSpan = document.querySelector('.featured span')
delSpan.remove()

const delPost = document.querySelector('main .posts article')
delPost.remove()

const delPosts = document.querySelectorAll('main .posts article h3')
delPosts.forEach((title) => {
  title.remove()
})
