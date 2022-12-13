// const allPosts = document.querySelector('header nav ul li');
// console.log(allPosts);
// allPosts.remove();

const allPosts = document.querySelector('li');
console.log(allPosts);
allPosts.remove();

const removedSpan = document.querySelector('span');
console.log(removedSpan);
removedSpan.remove();

const removedLastPost = document.querySelector('main .posts article');
console.log(removedLastPost);
removedLastPost.remove();

const removedLastPostTitle = document.querySelectorAll('h3');
removedLastPostTitle.forEach((title) => {
    title.remove()
})