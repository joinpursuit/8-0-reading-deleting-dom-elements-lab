console.log("hello");

document.querySelector('li').remove();
document.querySelector('span').remove()


const lastPosts = document.querySelectorAll('article')
lastPosts[2].remove()
console.log(lastPosts)

const titles = document.querySelectorAll('h3');
titles.forEach(element => {
    element.remove()
});