let removeAPost = document.querySelector("header nav ul li").remove();

let removeFeature = document.querySelector(".featured span").remove();

let aPost = document.querySelectorAll("main .posts article");
let arrPost = Array.from(aPost);
arrPost[2].remove();

let removePostTitles = document.querySelectorAll("main .posts h3");
for(let post of removePostTitles) {
    post.remove();
}