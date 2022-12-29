const readTimeRemoval = document.querySelector('.featured span');
readTimeRemoval.remove();

const postsRemoval = document.querySelector('header nav ul li');
postsRemoval.remove();

const titleRemoval = document.querySelectorAll('main .posts h3');
titleRemoval.forEach(title => title.remove());

const removeLast = document.querySelector('main .posts article');
removeLast.remove();