document.querySelector("li").remove();

document.querySelector("span").remove();

document.querySelector(".posts article").remove();

const allTitles = document.querySelectorAll("main .posts h3");
allTitles.forEach(t => t.remove());





/*   Remove the "All Posts" link from the header.
- [ ] Remove the `span` element that contains the "Read Time" in the featured post. The featured post is the first post on the page.
- [ ] Remove the last post from the page, titled "Stop Planning".
- [ ] Remove all titles from all non-featured posts.   */