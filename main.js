const removeAllPostsLink = document.querySelector("li");
removeAllPostsLink.remove();

const removeReadTimeSpan = document.querySelectorAll("span");
removeReadTimeSpan.forEach((span) => {
  span.remove();
});

const removeLastPost = document.getElementsByClassName("posts");
for (const last of removeLastPost) {
  last.lastElementChild.remove();
}

const removeTitles = document.querySelectorAll("h3");
removeTitles.forEach((title) => {
  title.remove();
});
