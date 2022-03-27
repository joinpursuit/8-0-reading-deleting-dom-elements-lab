const allPosts = document.querySelector("header nav ul li");
allPosts.remove();

const readTime = document.querySelector(".featured span");
readTime.remove();

const lastPost = document.querySelector('main .posts article');
lastPost.remove();

const nonFeatPosts = document.querySelectorAll("main .posts h3");
nonFeatPosts.forEach((post) => {
  post.remove();
});
console.log(nonFeatPosts);

