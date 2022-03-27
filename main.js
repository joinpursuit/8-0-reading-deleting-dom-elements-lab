const posts = document.querySelector('header nav ul li');
posts.remove();

const read = document.querySelector('.featured span');
read.remove();

const lastPost = document.querySelector('main .posts article').remove()

const postsTitles = document.querySelectorAll('main .posts h3');
postsTitles.forEach((postsTitle) => {
    postsTitle.remove();
})