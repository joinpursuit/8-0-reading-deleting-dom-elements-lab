const allPosts = document.querySelector('li');
allPosts.remove();

const spanElement = document.querySelector('span')
spanElement.remove();

const stopPlanning = document.querySelector('.posts article')
stopPlanning.remove();

const nonFeatured = document.querySelectorAll('h3')
nonFeatured.forEach((title) => {
    title.remove();
});