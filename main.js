const allPost = document.querySelector('li');
allPost.remove()

const readTime = document.querySelector("span");
readTime.remove()

const articles = document.querySelectorAll("article");

stopPlanning = articles[articles.length-1]

stopPlanning.remove()

const lastPost = document.querySelectorAll(".posts h3");

lastPost.forEach(post=>{
    post.remove()
})
