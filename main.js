// 1. Remove the "All Posts" link from the header.
const posts = document.querySelector('li');
posts.remove();

// 2. Remove the span element that contains the "Read Time" in the featured post. The featured post is the first post on the page.
const timeSpans = document.querySelectorAll('span')
timeSpans.forEach(timeSpan => timeSpan.remove())

// 3. Remove the last post from the page, titled "Stop Planning".
const removeLastPost = document.querySelectorAll('main .posts article')
removeLastPost[removeLastPost.length -1].remove();

// 4. Remove all titles from all non-featured posts.
const noPosts = document.querySelectorAll('main .posts h3')
noPosts.forEach(noPost => noPost.remove() );

