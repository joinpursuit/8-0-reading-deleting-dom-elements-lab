// const allPostLink = document.querySelector("li");
// allPostLink.remove();
document.querySelector("nav ul li").remove();

const readTime = document.querySelector("span");
readTime.remove();


const lastPost =document.querySelector(" .posts article:last-child");
lastPost.remove();

const nonFeatPosts = document.querySelectorAll(".posts h3");
nonFeatPosts.forEach(post => post.remove());




    
