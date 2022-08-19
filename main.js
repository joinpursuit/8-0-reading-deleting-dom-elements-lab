const allPost = document.querySelector("header nav ul li");
allPost.remove();

const span = document.querySelector(".featured span");
span.remove()

const lastPost = document.querySelector("main .posts article");
lastPost.remove()

const noTitles = document.querySelectorAll("main .posts h3");
for(let i = 0; i < noTitles.length ; i++ ){
    noTitles[i].remove()
}