// Remove the "All Posts" link from the header.

document.querySelector("nav ul li").remove();

// Remove the span element that contains the "Read Time" in the featured post. The featured post is the first post on the page.

document.querySelector("article aside p").remove();

// Remove the last post from the page, titled "Stop Planning".

let articles = document.querySelectorAll("article");
articles[articles.length - 1].remove();

// Remove all titles from all non-featured posts.

let articleTitles = document.querySelectorAll("article h3");
for (let i = 0; i < articleTitles.length; i++) {
  articleTitles[i].remove();
}
