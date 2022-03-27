const posts = document.querySelector('header nav ul li');
posts.remove();

const spantastic = document.querySelector('.featured span');
spantastic.remove();

const lastPost = document.querySelector('main .posts article');
lastPost.remove();

const nonFeatPosts = document.querySelectorAll("main .posts h3");
nonFeatPosts.forEach((post) => {
  post.remove();
});

