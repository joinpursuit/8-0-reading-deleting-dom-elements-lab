const linkRemove = document.querySelector('a');
linkRemove.remove();

const listRemove = document.querySelector('li');
listRemove.remove();

const removeAside = document.querySelector('span');
removeAside.remove();

const paraRemove = document.querySelectorAll('article');
// paraRemove[2].remove();
paraRemove[paraRemove.length -1].remove();

const titleRemove = document.querySelectorAll('h3')
titleRemove.forEach((title) => {
    title.remove();
})
