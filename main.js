/* remove all "posts" elements from headings */

document.querySelector("header nav li").remove();

/* remove spans w "read time" */

document.querySelector(".featured span").remove();

/* first let's grab the posts main -----> posts (class) -----> "stop planning": is an article */

const grabPost = document.querySelectorAll("main .posts article");

grabPost[grabPost.length - 1].remove()