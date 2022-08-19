const aside = document.querySelector('nav ul li');
// console.log(aside);
aside.remove();

const span = document.querySelector('aside p span');
// console.log(span);
span.remove();

const lastPost = document.querySelector('main .posts article');
// console.log(lastPost);
lastPost.remove();

const nonPost = document.querySelectorAll('main .posts h3');
document.querySelectorAll('main .posts h3').forEach((elem) => elem.remove());

