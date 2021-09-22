const allPostsLink = document.querySelector('li');
allPostsLink.remove();

const allSpans = document.querySelectorAll('span');
allSpans.forEach((span) => span.remove());

const articles = document.querySelectorAll('article');
articles[articles.length - 1].remove();

const titles = document.querySelectorAll('h3');
for (const title of titles) {
    title.remove();
}