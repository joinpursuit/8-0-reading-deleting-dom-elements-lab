const allPosts = document.querySelector('header nav ul li').remove();

const readTime = document.querySelector('.featured span').remove();

const lastPost = document.querySelectorAll('main .posts article');
lastPost[lastPost.length - 1].remove();

const allTitles = document.querySelectorAll('main .posts h3');
allTitles.forEach(title => title.remove());