let linkInHeader = document.querySelector("header nav ul li");
let spanEle = document.querySelector(".featured span");
let lastPost = document.querySelector("main .posts article");
let titles = document.querySelectorAll("main .posts h3");
let titlesArr = Array.from(titles);

linkInHeader.remove();
spanEle.remove();
lastPost.remove();
for(let title of titlesArr) {
    title.remove();
}