const allPost = document.querySelector('li');
allPost.remove();

const readTime = document.querySelector('span');
readTime.remove();

const lastPost = document.querySelectorAll('article');
lastPost[2].remove();

const noTitle = document.querySelectorAll('main .posts h3');
for (const elem of noTitle) {
    elem.remove();
}