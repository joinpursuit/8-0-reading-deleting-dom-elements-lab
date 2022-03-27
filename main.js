const allPost = document.querySelector('header li').remove();
// allPost.remove();
const span = document.querySelector('.featured span').remove()
const lastPost = document.querySelectorAll("main .posts article");
lastPost[lastPost.length-1].remove()
// const lastPost = document.querySelector("main .posts article").remove() ------ WORKS BUT IS NOT CORRECT WAY
const removeAll = document.querySelectorAll("main .posts h3");
removeAll.forEach((remove) => {
    remove.remove()
})