const allPosts = document.querySelector('li');
allPosts.remove();

const spanEle = document.querySelector('span');
spanEle.remove();

const youBetterStop = document.querySelector('.posts article');
youBetterStop.remove();

const noNonFeatured = document.querySelectorAll('h3');
noNonFeatured.forEach((title) => {
    title.remove();
});