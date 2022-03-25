let removeAllPostsLink = document.querySelector("li");
removeAllPostsLink.remove();

let removeReadTimeSpan = document.querySelectorAll("span");
removeReadTimeSpan.forEach((span) => {
    span.remove();
});

let removeLastPost = document.getElementsByClassName("posts");
for (let last of removeLastPost) {
    last.lastElementChild.remove();
}

let removeTitles = document.querySelectorAll("h3");
removeTitles.forEach((title) => {
    title.remove();
});