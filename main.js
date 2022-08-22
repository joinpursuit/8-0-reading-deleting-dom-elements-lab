const allPosts = document.querySelector(`li`);
allPosts.remove();

const span = document.querySelector(`span`);
span.remove();

const lastPost = document.querySelector(`h3`);
lastPost.remove();

const allTitles = document.querySelectorAll('.posts article');
allTitles.forEach(element => {
    element.remove()
});