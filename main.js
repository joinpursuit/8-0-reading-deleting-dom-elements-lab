let removeLink = document.querySelector("header nav ul li");
removeLink.remove();

const removeSpan = document.querySelector("span");
removeSpan.remove();

const removeLastPost = document.querySelectorAll("article");
removeLastPost[removeLastPost.length - 1].remove();

const removeNonFeatured = document.querySelectorAll("h3");
for (element of removeNonFeatured) {
  element.remove();
}
