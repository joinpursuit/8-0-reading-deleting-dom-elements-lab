let firstPost = document.querySelector("header nav ul li");
// console.log(firstPost);
firstPost.remove();

let readTime = document.querySelector(".featured article aside p span");
// console.log(readTime);
readTime.remove();


let lastPost = document.querySelector("main .posts article");
// console.log(lastPost);
lastPost.remove();

let allTitlesNonFeatured = document.querySelectorAll(".posts article h3");
// console.log(allTitlesNonFeatured);
for (let titlesNonFeatured of allTitlesNonFeatured) {
    // console.log(titlesNonFeatured);
    titlesNonFeatured.remove();
}