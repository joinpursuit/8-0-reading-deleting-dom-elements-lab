
const allPosts = document.querySelector("li");
const featuredSpan = document.querySelector("span");
allPosts.remove();
featuredSpan.remove();

const lastPost = document.getElementsByClassName("posts");
for (let post of lastPost) {
  post.lastElementChild.remove();
}

const nonFeatured = document.querySelectorAll(".posts article h3");
nonFeatured.forEach((heading) => {
  heading.remove();
});

