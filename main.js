//removing all post link in header
const headerLink = document.querySelector('li');
headerLink.remove()

//removing read time span element
const readTimes = document.querySelectorAll('span');
readTimes.forEach((readTime) => readTime.remove())

//removing last post
const articles = document.querySelectorAll('article');
articles[articles.length -1].remove()

//remove titles for all posts
const titles = document.querySelectorAll('h3');
titles.forEach((title) => title.remove())