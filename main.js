//remove the first list item
document.querySelector("li").remove();

//remove the first span element
document.querySelector("span").remove();

//get all the posts
const posts = document.querySelectorAll("article");
//remove the last post
posts[posts.length - 1].remove();
