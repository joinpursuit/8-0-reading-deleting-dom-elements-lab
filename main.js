// Removes the "All Posts" link from header
const heading = document.querySelector('li')
heading.remove()

// Removes "Read Time" within span element
const span = document.querySelector('aside')
span.remove()

// Removes "Stop Planning", the last post on page
const last = document.querySelector('main .posts article')
last.remove()

// Removes all titles
const titles = document.querySelectorAll('main .posts h3')
titles.forEach((title) => title.remove())