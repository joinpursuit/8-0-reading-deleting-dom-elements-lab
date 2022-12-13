
const  allPost = document.querySelector('li');
allPost.remove();

const  readTime = document.querySelector('span');
readTime.remove();

const  lastPost = document.querySelector('main .posts article');
lastPost.remove();

const  noTitle = document.querySelectorAll('main .posts h3');
for (let i =0; i <noTitle.length; i++) {
    noTitle[i].remove();
}
