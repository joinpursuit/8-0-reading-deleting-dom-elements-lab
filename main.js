const allPost = document.querySelector("li");
console.log(allPost);
allPost.remove();

const span = document.querySelector("span");
console.log(span);
span.remove();

const rPlanning = document.querySelector('.posts article')
rPlanning.remove();

const allTitles = document.querySelectorAll('h3')
allTitles.forEach(title => {
    title.remove()
})