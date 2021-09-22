document.querySelector('body li').remove();

document.querySelector('span').remove();

let articles = document.querySelectorAll('article');

for (let i = 0; i < articles.length; i++) {
    if (articles[i].textContent.includes('Stop Planning')) {
        articles[i].remove();
    }
}

// for (article of articles) { // other way using for of loop
//     if (article.textContent.includes('Stop Planning')) {
//         article.remove();
//     }
// }

let nonFeaturedTitles = document.querySelectorAll('h3');
nonFeaturedTitles.forEach(title => title.remove());