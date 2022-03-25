const allPostsLink = document.querySelector("li");

allPostsLink.remove();

const readTimeEle = document.querySelector("span");

readTimeEle.remove();

const allPosts = document.querySelectorAll("article");
lastPost = allPosts[allPosts.length - 1];
lastPost.remove();

const allTitles = document.querySelectorAll("h3");

allTitles.forEach((t) => t.remove());
