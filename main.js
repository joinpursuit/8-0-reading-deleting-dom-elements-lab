//! Remove all posts
const allPost = document.querySelector("li");
console.log(allPost);
allPost.remove();

//!Remove the `span` element that contains the "Read Time"
const span = document.querySelector("span");
console.log(span);
span.remove();

//! Remove the last post from the page, titled "Stop Planning".
const removePlanning= document.querySelector('.posts article')
removePlanning.remove()

//!remove all title for all non featured USING forEach()
const removePost = document.querySelectorAll("main .posts h3");

removePost.forEach((title)=>{
    title.remove()
});


