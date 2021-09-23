let allPosts = document.querySelector("header nav ul li");
allPosts.remove();

let featuredTime = document.querySelector(".featured span");
featuredTime.remove();

let lastPost = document.querySelector("main .posts article");
lastPost.remove();


let titles = document.querySelectorAll("main .posts h3");
for(let title of titles){
    title.remove();
} 