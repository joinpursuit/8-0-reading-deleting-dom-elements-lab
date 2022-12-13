const allPost = document.querySelector('header nav ul li');
allPost.remove();

const featuredPost = document.querySelector('.featured span');
featuredPost.remove();

const removeLastPost = document.querySelector('main .posts article');
removeLastPost.remove();

const removeTitles = document.querySelectorAll('main .posts h3');
removeTitles.forEach((titles) => titles.remove())
