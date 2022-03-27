const removeAllPost = document.querySelector('li');
removeAllPost.remove();

const removeSpan = document.querySelector('span');
removeSpan.remove();

const removeLastPost = document.querySelector('.posts article');
removeLastPost.remove();

const allTitles = document.querySelectorAll('h3');
allTitles.forEach(title => title.remove());