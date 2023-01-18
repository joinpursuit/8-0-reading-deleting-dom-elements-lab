// [ ] Remove the "All Posts" link from the header.
// from reading example const aside = document.querySelector("aside");
// aside.remove();
const allPost = document.querySelector('header li')
allPost.remove();


// - [ ] Remove the `span` element that contains the "Read Time" in the featured post. The featured post is the first post on the page.
const deleteSpan = document.querySelector("span")
deleteSpan.remove();

// - [ ] Remove the last post from the page, titled "Stop Planning".
const stop = document.querySelector('.posts article')
stop.remove();

// - [ ] Remove all titles from all non-featured posts.
