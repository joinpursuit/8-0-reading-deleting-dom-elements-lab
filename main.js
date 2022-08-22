
const allPostsLink = document.querySelector("li");

allPostsLink.remove();

const readTime = document.querySelector("span");

readTime.remove();

const allPosts = document.querySelector("main .posts article");
allPosts.remove();

const allTitles = document.querySelectorAll("h3");

allTitles.forEach((el) => el.remove());

const titles = document.querySelectorAll("main .posts h3");
titles.forEach((title) => {
  title.remove();
});