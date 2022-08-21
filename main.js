const posts = document.querySelector("li");
posts.remove();

const span = document.querySelector("span");
span.remove();

const lastPost = document.querySelector("main .posts article");
lastPost.remove();

const noTitle = document.querySelectorAll("h3");
noTitle.forEach((title) => {
  title.remove();
});
