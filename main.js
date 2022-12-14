const mainPost = document.querySelector("header nav ul li");
mainPost.remove();

const readTime = document.querySelector(".featured span");
readTime.remove(); 

const lastPostGone = document.querySelectorAll("main .posts article");
lastPostGone[lastPostGone.length-1].remove()
const allTitles = document.querySelectorAll("main .posts h3");
// allTitles.forEach(title => {
    // allTitles.remove()
    // });
    
// console.log(allTitles)
