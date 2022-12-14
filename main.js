
const allPosts = document.querySelector("header nav ul li");
allPosts.remove()


const readTime = document.querySelector("article aside p span");
readTime.remove()


const lastPost = document.querySelector("main .posts article");
lastPost.remove()


const allTitles= document.querySelectorAll('main .posts h3');
for (const h3t of allTitles) {
    h3t.remove();
}







