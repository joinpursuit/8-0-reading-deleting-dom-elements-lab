const header = document.querySelector('li');
header.remove();

const featured = document.querySelector('.featured span');
featured.remove();

const title = document.querySelector(' .posts article');
title.remove();

const post = document.querySelectorAll(' main .posts h3');
post.forEach((el) => el.remove());
