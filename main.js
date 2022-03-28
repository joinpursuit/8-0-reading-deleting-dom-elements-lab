const header = document.querySelector('header nav ul li');
header.remove()

const span = document.querySelector('.featured span')
span.remove()

const last = document.querySelectorAll('main .posts article')
last[last.length-1].remove()

const titles = document.querySelectorAll('main .posts h3')
titles.forEach(title => 
    title.remove()
)