// Remove the "All Posts" link from the header.
let allPost = document.querySelector("header nav ul li");
allPost.remove();

// Remove the span element that contains the "Read Time" in the featured post. The featured post is the first post on the page.
let firstPost = document.querySelector(".featured aside p span");
firstPost.remove();

// Remove the last post from the page, titled "Stop Planning".
let articles = document.querySelectorAll(".posts article");
let lastPost = articles[articles.length - 1];
lastPost.remove();

// Remove all titles from all non-featured posts.
let titles = document.querySelectorAll(".posts article h3");
titles.forEach((title) => {
  title.remove();
});
