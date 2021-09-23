// - [ ] Remove the "All Posts" link from the header.
// - [ ] Remove the `span` element that contains the "Read Time" in the featured post. The featured post is the first post on the page.
// - [ ] Remove the last post from the page, titled "Stop Planning".
// - [ ] Remove all titles from all non-featured posts.

let linkInHeader = document.querySelector("header nav ul li");
let spanElem = document.querySelector(".featured span");
let lastPost = document.querySelector("main .posts article");
let titles = document.querySelectorAll("main .posts h3")
let titlesArr = Array.from(titles)

linkInHeader.remove();
spanElem.remove();
lastPost.remove();
for(let title of titlesArr){
    title.remove()
}