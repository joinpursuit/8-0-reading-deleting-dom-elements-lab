const allPost = document.querySelector('header li').remove();
// allPost.remove();
const span = document.querySelector('.featured span').remove()
const lastPost = document.querySelector("main .posts article").remove()
const removeAll = document.querySelectorAll("main .posts h3");
removeAll.forEach((remove) => {
    remove.remove()
})