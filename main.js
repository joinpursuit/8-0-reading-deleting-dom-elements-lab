// Method #1 
// const allPostLink = document.querySelector("header nav ul li:first-child"); // this is very verbose but gets the job done.
// allPostLink.remove();

// Method #2
// const firstLiElement = document.querySelector("li"); // this will act like the .find() method.
// firstLiElement.remove();

// Method #3
const liTypeElement = document.querySelector("li:first-of-type");
liTypeElement.remove();

// Method #1
// const featSpan = document.querySelector(".featured article aside p span");
// featSpan.remove();

// Method #2
// const firstSpanElement = document.querySelector("span");
// firstSpanElement.remove();

// Method #3
const firstOfSpanType = document.querySelector("span:first-of-type");
firstOfSpanType.remove();

// Method #1
// const lastPost = document.querySelector(".posts article:last-child");
// lastPost.remove();

// Method #2
// const lastOfTypeElement = document.querySelector(".posts article:last-of-type");
// lastOfTypeElement.remove();

// Method #3
const lastIndexOfElement = document.querySelectorAll(".posts article");
lastIndexOfElement[lastIndexOfElement.length - 1].remove();

// Method #1
const nonFeatPostTitles = document.querySelectorAll(".posts h3");
// nonFeatPostTitles.forEach( post => post.remove() );

for( let i = 0; i < nonFeatPostTitles.length; i++ ){
    nonFeatPostTitles[i].remove();
}