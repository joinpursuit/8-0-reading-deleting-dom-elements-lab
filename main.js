const allPosts = document.querySelector('li');
allPosts.remove();

const readtimeSpan = document.querySelector('span');
readtimeSpan.remove();

const articles = document.querySelectorAll('article');
articles[articles.length - 1].remove();

const titles = document.querySelectorAll('h3');
titles.forEach((title) => title.remove());

