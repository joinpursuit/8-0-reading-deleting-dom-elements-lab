const allPosts = document.querySelector("li");
console.log(allPosts);

allPosts.remove();

const readTime = document.querySelector("span");
console.log(readTime);

readTime.remove();

const lastPost = document.querySelectorAll('article');
lastPost[2].remove();

const titles = document.querySelectorAll('h3');

titles.forEach((title) => {
  title.remove();
});