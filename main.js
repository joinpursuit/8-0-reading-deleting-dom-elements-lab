const newPost = document.querySelector("header nav ul li");
newPost.remove()

const getSpan = document.querySelector(".featured span");
getSpan.remove()

const getPost = document.querySelector("main .posts article");
getPost.remove()

 const getPosts = document.querySelectorAll("main .posts h3");
 getPosts.forEach((single) => single.remove())
