// const allPostLink = document.getElementsByTagName["li"][0].remove();
// allPostLink.parentNode.removeChild(allPostLink);

const altPostLink = document.getElementsByTagName("li")[0].remove();

const altPostLinks = document.getElementsByTagName("span")[0].remove();

const selector = document.querySelector(".posts").lastElementChild.remove();

const deleteTitle = document.querySelectorAll("h3");
for (let title of deleteTitle) {
    title.remove();
}

// const allPostLink = document.querySelector("li").remove();

// const firstSpan = document.querySelector('span').remove();

// const lastArticle = document.querySelector('main .posts').lastElementChild.remove();

// const allTitlesExceptFeature = document.querySelectorAll('h3');
// allTitlesExceptFeature.forEach((eachTitle) => eachTitle.remove());