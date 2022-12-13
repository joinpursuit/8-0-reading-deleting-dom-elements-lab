//remove 'All Posts' link from the header
const allPosts = document.querySelector('li');
allPosts.remove();

//Remove the span element that contains the "Read Time" in the featured post. The featured post is the first post on the page.
const spanTime = document.querySelector("span");
spanTime.remove();

// Remove the last post from the page, titled "Stop Planning".
const stopPlanning = document.querySelector("main .posts article"); 
stopPlanning.remove();


//Remove all titles from all non-featured posts.
const nonFeatured = document.querySelectorAll('h3');
nonFeatured.forEach((title) => {
    title.remove();
});
