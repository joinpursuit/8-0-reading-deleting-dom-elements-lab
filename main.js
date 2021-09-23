const post = document.querySelector("li");
post.remove();

const allPosts = document.querySelector("span");
allPosts.remove();

const lastPost = document.querySelectorAll("article");
lastPost[3].remove();

const titles = document.querySelectorAll('h3')
for (const title of titles) {
    title.remove();
}