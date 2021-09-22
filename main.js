document.querySelector("header nav li").remove(); //removes 'all posts'
document.querySelector(".featured span").remove();//removes 'read time'
const allPosts = document.querySelectorAll("main .posts article");
allPosts[2].remove(); // removes last post
document.querySelector("main .posts h3").remove(); //removes first title
document.querySelector("main .posts h3").remove(); //removes second title

//for some reason using querySelectorAll to remove titles caused an error