const allPostsLink = document.querySelector('header li'); //removes the 'all posts' link. No need for SelectorAll because it is the first list item
allPostsLink.remove();

const readTime = document.querySelector('.featured span'); //removes the read time section in the featured post
readTime.remove();

const allPosts = document.querySelectorAll('article'); // from all articles (posts) removes the last one regardless of how many articles are present
const lastPost = allPosts[allPosts.length - 1]
lastPost.remove();

const nonFeaturedTitles = document.querySelectorAll('h3') // removes all non-featured Titles
nonFeaturedTitles.forEach((title) => {
    title.remove();
})

