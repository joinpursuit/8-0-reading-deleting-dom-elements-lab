const link = document.querySelector("li");
link.remove();

const featuredPost = document.querySelector("aside span");
featuredPost.remove();

// const lastPost = document.querySelector("h3 p").textContent

const articles = document.querySelectorAll("article");

articles[articles.length-1].remove();

const posts = document.querySelectorAll("main .posts h3");

posts.forEach((post) => {
 post.remove()
})