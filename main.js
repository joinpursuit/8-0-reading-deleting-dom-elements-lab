const removeAllPosts = document.querySelector("li").remove();

const timeRemove = document.querySelector("span").remove();

// const allPosts = document.querySelectorAll("posts");

const postRemove = document.querySelector("main .posts article").remove();

const removeTitles = document.querySelectorAll("main .posts h3");
removeTitles.forEach(element => element.remove())