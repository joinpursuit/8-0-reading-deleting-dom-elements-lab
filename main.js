const allPosts= document.querySelector("li");
allPosts.remove();
// * removed allposts *//

const readTime =document.querySelector("span");
readTime.remove();
//* removed readtime *//

const articles =document.querySelectorAll("article");
let test;
for (let article of articles){
    test = article;
}
test.remove();

const titles = document.querySelectorAll("h3");
for (let title of titles){
    title.remove();
}
