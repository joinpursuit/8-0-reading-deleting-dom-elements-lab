const allPosts = document.querySelector("li");
allPosts.remove()

const readTime = document.querySelector('span')
readTime.remove()

const stopPlanning = document.querySelectorAll('article')
stopPlanning[stopPlanning.length-1 ].remove()

const nonFeaturedPost = document.querySelectorAll("main .posts h3")
nonFeaturedPost.forEach((post) => {
    post.remove();
});
