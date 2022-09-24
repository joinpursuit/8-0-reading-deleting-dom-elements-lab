const liFirst = document.querySelector("nav ul li");
liFirst.remove();

const readTime = document.querySelector(".featured span");
readTime.remove();

const posts = document.querySelectorAll("main .posts article");
posts.forEach((post) => {
    if(post === posts[2]) {
    post.remove();
    }
});

const titles = document.querySelectorAll("main .posts h3");
titles.forEach((title) => {
    if(title) {
    title.remove();
    }
});