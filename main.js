document.querySelector('li').remove()

document.querySelector('span').remove()

const articles = document.querySelectorAll('article')
articles[articles.length-1].remove()
    
const titles = document.querySelectorAll('h3')
titles.forEach(title=>title.remove())