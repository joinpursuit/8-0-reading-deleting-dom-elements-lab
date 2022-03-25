/** @format */

const removeAllPosts = document.querySelector('header nav ul li');
removeAllPosts.remove();

const readTimeSpan = document.querySelector('.featured span');
readTimeSpan.remove();

const lastPost = document.querySelector('.posts article');
lastPost.remove();

const allTitles = document.querySelectorAll('.posts article h3');
allTitles.forEach((title) => {
	title.remove();
});
``;
