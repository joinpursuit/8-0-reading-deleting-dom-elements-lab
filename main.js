const allDocuments = document.querySelector("header nav ul li");
allDocuments.remove();

const readTime = document.querySelector("aside span");
readTime.remove();

const lastPost = document.querySelectorAll("article");
lastPost[lastPost.length-1].remove();

let allTitles = document.querySelectorAll(".posts article h3");
for (let eachTitle of allTitles) {
    eachTitle.remove();
}



