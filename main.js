const allPosts = document.querySelector('li');
allPosts.remove();

const readTime = document.querySelector('.featured span');
readTime.remove();

const stopPlanning = document.querySelector('.posts article');
stopPlanning.remove();

const nonFeaturedPost = document.querySelectorAll('main .posts h3');
nonFeaturedPost.forEach((n) => n.remove());