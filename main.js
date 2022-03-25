let firstLink = document.querySelector('li');
firstLink.remove();

let firstSpan = document.querySelector('span');
firstSpan.remove();

let articles = document.querySelectorAll('article');
let lastArticle = articles[articles.length - 1];
lastArticle.remove();

let nonFeaturedTitles = document.querySelectorAll('h3');
nonFeaturedTitles.forEach((a) => {
  a.remove();
});
