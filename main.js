const ulElem = document.querySelector('header nav ul li');

ulElem.remove();

const span = document.querySelector('.featured aside span');

span.remove();

const blogPosts = document.querySelector('.posts');

blogPosts.removeChild(blogPosts.lastElementChild);

const posts = document.querySelectorAll('.posts h3 ');

posts.forEach((post) => post.remove());
