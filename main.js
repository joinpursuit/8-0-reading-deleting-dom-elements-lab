const post = document.querySelector('header nav ul li ')
post.remove()
console.log(post)

const time = document.querySelector('span')
time.remove()
console.log(time)

const planning = document.querySelector('main .posts article')
planning.remove()

const heading = document.querySelectorAll('.posts h3')
heading.forEach(i => {
    i.remove()
});