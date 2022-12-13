//remove 'All Posts' link from the header
const allPosts = document.querySelector('li');
allPosts.remove();

//Remove the span element that contains the "Read Time" in the featured post. The featured post is the first post on the page.
const spanTime = document.querySelector(".featured span");
spanTime.remove();

// Remove the last post from the page, titled "Stop Planning".
const stopPlanning = document.querySelectorAll(".posts article"); 
stopPlanning[stopPlanning.length-1].remove();

//Remove all titles from all non-featured posts.
const nonFeatured = document.querySelectorAll('.posts h3');
for (let title of nonFeatured){
    title.remove();
}
