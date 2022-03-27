//Remove the "All Posts" link from the header.
const li = document.querySelector("li");
li.remove();

//Remove the `span` element that contains the "Read Time" in the featured post. The featured post is the first post on the page.
const span = document.querySelector("span");
span.remove();

//Remove the last post from the page, titled "Stop Planning".
const article = document.querySelectorAll("article");
let last = article[article.length - 1];
last.remove();

//Remove all titles from all non-featured posts.
const h3 = document.querySelectorAll("h3");
h3.forEach((element) => {
  element.remove();
});
