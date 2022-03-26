let allPostsLink = document.querySelector('li');
allPostsLink.remove();

let spanElement = document.querySelector('span');
spanElement.remove();

let stopPlanning = document.querySelector('.posts article');
stopPlanning.remove();

let allTitles = document.querySelectorAll('h3');
allTitles.forEach((title) => {
  title.remove();
});
