const removeAllPosts = document.querySelector('header nav ul li');
removeAllPosts.remove();

const removeReadTime = document.querySelector('.featured span');
removeReadTime.remove();

const removeLastPost = document.querySelector('main .posts article');
removeLastPost.remove();

const removeAllTitles = document.querySelectorAll('main .posts h3');
removeAllTitles.forEach(ele => ele.remove());
