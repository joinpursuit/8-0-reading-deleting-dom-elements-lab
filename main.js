const navLink = document.querySelector("li");
navLink.remove();

const sideSpan = document.querySelector("span");
sideSpan.remove();

const planning = document.querySelectorAll("article");
let lastArticle = planning[planning.length-1];
lastArticle.remove();

const nonFeatured = document.querySelectorAll(".posts h3");
nonFeatured.forEach(post => {
    post.remove();
})
